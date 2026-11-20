"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon, PlusIcon, TrashIcon, GalleryIcon } from "@/admin/components/Icons";
import { ItemStatus, isItemActive } from "@/admin/types";

interface FundedSeminarFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function FundedSeminarFormPage({ mode, id }: FundedSeminarFormPageProps) {
  const router = useRouter();
  const {
    getFundedSeminarById,
    addFundedSeminar,
    updateFundedSeminar
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getFundedSeminarById(id) : undefined;

  const [title, setTitle] = useState("");
  const [dayOrSession, setDayOrSession] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [singlePhotoUrl, setSinglePhotoUrl] = useState("");
  const [bulkPhotoText, setBulkPhotoText] = useState("");
  const [showBulkAdd, setShowBulkAdd] = useState(false);
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setDayOrSession(existingItem.dayOrSession || "");
      setDescription(existingItem.description || "");
      setPhotos(existingItem.photos ? [...existingItem.photos] : []);
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      setTitle("");
      setDayOrSession("");
      setDescription("");
      setPhotos([]);
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDeviceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    let loadedCount = 0;
    const newPhotos: string[] = [];

    fileList.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        loadedCount++;
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          newPhotos.push(dataUrl);
        }
        loadedCount++;
        if (loadedCount === fileList.length) {
          setPhotos((prev) => [...prev, ...newPhotos]);
          if (fileInputRef.current) fileInputRef.current.value = "";
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddSinglePhoto = () => {
    const trimmed = singlePhotoUrl.trim();
    if (!trimmed) return;
    setPhotos((prev) => [...prev, trimmed]);
    setSinglePhotoUrl("");
  };

  const handleAddBulkPhotos = () => {
    if (!bulkPhotoText.trim()) return;
    const lines = bulkPhotoText
      .split(/[\r\n,]+/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    if (lines.length > 0) {
      setPhotos((prev) => [...prev, ...lines]);
      setBulkPhotoText("");
      setShowBulkAdd(false);
    }
  };

  const handleRemovePhoto = (indexToRemove: number) => {
    setPhotos((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "Seminar title is required.";
    if (!dayOrSession.trim()) newErrors.dayOrSession = "Day or session label is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      title: title.trim(),
      dayOrSession: dayOrSession.trim(),
      description: description.trim() || undefined,
      photos,
      status
    };

    if (isEditing && id) {
      updateFundedSeminar(id, payload);
      router.push(`/admin/research/funded-seminars/${id}`);
    } else {
      addFundedSeminar(payload);
      router.push("/admin/research/funded-seminars");
    }
  };

  const backUrl = isEditing && id
    ? `/admin/research/funded-seminars/${id}`
    : "/admin/research/funded-seminars";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Seminar Details" : "Funded Seminars"}</span>
        </Link>
      </div>

      {/* Page Heading */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Seminar Session & Photos" : "Create Seminar Session"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update session details and manage photographic archive for Record #${existingItem?.id}.`
            : "Enter seminar session title, event day, and attach photographic gallery records."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-card flex flex-col gap-5">
        {/* Title */}
        <div className="admin-form-group">
          <label className="admin-label">
            Seminar Session Title <span className="text-[var(--admin-red)]">*</span>
          </label>
          <input
            type="text"
            className="admin-input"
            placeholder="e.g. Seminar Day 1 (Inaugural & Technical Sessions)"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
            }}
          />
          {errors.title && <span className="admin-field-error">{errors.title}</span>}
        </div>

        {/* Day / Session */}
        <div className="admin-form-group">
          <label className="admin-label">
            Day / Session Identifier <span className="text-[var(--admin-red)]">*</span>
          </label>
          <input
            type="text"
            className="admin-input"
            placeholder="e.g. Seminar Day 1, Day 2, June 2022"
            value={dayOrSession}
            onChange={(e) => {
              setDayOrSession(e.target.value);
              if (errors.dayOrSession) setErrors((prev) => ({ ...prev, dayOrSession: "" }));
            }}
          />
          {errors.dayOrSession && <span className="admin-field-error">{errors.dayOrSession}</span>}
        </div>

        {/* Description / Summary */}
        <div className="admin-form-group">
          <label className="admin-label">Description / Session Highlights</label>
          <textarea
            className="admin-input"
            rows={3}
            placeholder="Brief overview of keynote lectures, participants, and technical sessions..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Photo Gallery Manager */}
        <div className="border-t border-[var(--admin-border)] pt-5 flex flex-col gap-3.5">
          <div className="flex justify-between items-center flex-wrap gap-2.5">
            <div>
              <label className="admin-label m-0 flex items-center gap-1.5">
                <GalleryIcon size={16} />
                <span>Photographic Gallery ({photos.length} Photos Attached)</span>
              </label>
              <span className="text-xs text-[var(--admin-text-subtle)] mt-0.5">
                Upload photos directly from your device storage (select multiple photos at once).
              </span>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="admin-btn admin-btn-primary text-xs py-1.5 px-3.5"
              >
                <PlusIcon size={13} />
                <span>Upload Photos from Device</span>
              </button>

              <button
                type="button"
                onClick={() => setShowBulkAdd((prev) => !prev)}
                className="admin-btn admin-btn-secondary text-xs py-1.5 px-3"
              >
                {showBulkAdd ? "Hide URL Input" : "Add by URL"}
              </button>
            </div>
          </div>

          {/* Hidden file input for system storage upload */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/jpg,image/*"
            multiple
            className="hidden"
            onChange={handleDeviceUpload}
          />

          {/* Device Upload Zone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="admin-upload-zone border-2 border-dashed border-[var(--admin-border)] rounded-lg p-5 text-center bg-[var(--admin-bg-secondary)] cursor-pointer flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-[rgba(207,20,39,0.08)] text-[var(--admin-red)] flex items-center justify-center">
              <GalleryIcon size={20} />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[var(--admin-text)]">
                Click to browse &amp; upload seminar photos from your device
              </div>
              <div className="text-[11px] text-[var(--admin-text-subtle)] mt-0.5">
                You can select multiple photos at once (PNG, JPG, WEBP).
              </div>
            </div>
          </div>

          {/* Bulk Photos Input */}
          {showBulkAdd && (
            <div className="bg-[var(--admin-bg-secondary)] p-4 rounded-md border border-[var(--admin-border)] flex flex-col gap-2.5">
              <label className="admin-label m-0 text-xs">
                Paste photo paths or URLs (one per line or comma-separated):
              </label>
              <textarea
                className="admin-input"
                rows={4}
                placeholder={`/images/seminar/seminar-first/1.jpg\n/images/seminar/seminar-first/2.jpg\n/images/seminar/seminar-first/3.jpg`}
                value={bulkPhotoText}
                onChange={(e) => setBulkPhotoText(e.target.value)}
              />
              <div className="flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowBulkAdd(false)}
                  className="admin-btn admin-btn-secondary text-xs py-1 px-3"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddBulkPhotos}
                  className="admin-btn admin-btn-primary text-xs py-1 px-3.5"
                >
                  <span>Append All Photos</span>
                </button>
              </div>
            </div>
          )}

          {/* Photos Grid Preview */}
          {photos.length > 0 && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-2.5 mt-1.5 max-h-[380px] overflow-y-auto p-2.5 bg-[var(--admin-bg-secondary)] rounded-md border border-[var(--admin-border)]">
              {photos.map((src, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded overflow-hidden border border-[var(--admin-border)] bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='80' viewBox='0 0 110 80'%3E%3Crect width='110' height='80' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2364748b' font-size='10'%3EPhoto%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <span className="absolute bottom-0.5 left-0.5 bg-black/65 text-white text-[9px] font-bold py-px px-1 rounded-[2px]">
                    #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(idx)}
                    className="absolute top-[3px] right-[3px] w-5 h-5 rounded-full bg-red-600/90 text-white border-none flex items-center justify-center cursor-pointer"
                    title="Remove Photo"
                  >
                    <TrashIcon size={11} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status (Always in the last line) */}
        <div className="admin-form-group max-w-[280px]">
          <label className="admin-label">Status</label>
          <select
            className="admin-input"
            value={isItemActive(status) ? "Active" : "Inactive"}
            onChange={(e) => setStatus(e.target.value as ItemStatus)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[var(--admin-border)]">
          <Link href={backUrl} className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckIcon size={16} />
            <span>{isEditing ? "Save Changes" : "Create Seminar"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
