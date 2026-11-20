"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";
import { ItemStatus, isItemActive } from "@/admin/types";

interface RankingsFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function RankingsFormPage({ mode, id }: RankingsFormPageProps) {
  const router = useRouter();
  const {
    getRankingById,
    addRanking,
    updateRanking
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getRankingById(id) : undefined;

  const [title, setTitle] = useState("");
  const [certificateImage, setCertificateImage] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setCertificateImage(existingItem.certificateImage || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      // In add mode, starts completely blank with placeholder guidance
      setTitle("");
      setCertificateImage("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) {
      newErrors.title = "Ranking / accreditation title is required.";
    }
    if (!certificateImage.trim()) {
      newErrors.certificateImage = "Certificate image path / URL is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      title: title.trim(),
      certificateImage: certificateImage.trim(),
      status
    };

    if (isEditing && id) {
      updateRanking(id, payload);
      router.push(`/admin/home/rankings/${id}`);
    } else {
      addRanking(payload);
      router.push("/admin/home/rankings");
    }
  };

  const backUrl = isEditing && id
    ? `/admin/home/rankings/${id}`
    : "/admin/home/rankings";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Record Details" : "Rankings"}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Ranking Record" : "Add New Ranking Award"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update title and certificate image for Record #${existingItem?.id}.`
            : "Enter ranking title and certificate image URL for institutional showcase."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-card flex flex-col gap-5">
        {/* Title */}
        <div className="admin-form-group">
          <label className="admin-label">
            Ranking Title / Award Name <span className="text-[var(--admin-primary)]">*</span>
          </label>
          <input
            type="text"
            className="admin-input"
            placeholder="e.g. NIRF 2024 Rank #37 (Pharmacy)"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
            }}
          />
          {errors.title && (
            <span className="admin-field-error">
              {errors.title}
            </span>
          )}
        </div>

        {/* Certificate Image Upload Input */}
        <ImageUploadInput
          label="Upload Ranking Certificate Image"
          required
          value={certificateImage}
          onChange={(val) => {
            setCertificateImage(val);
            if (errors.certificateImage) setErrors((prev) => ({ ...prev, certificateImage: "" }));
          }}
          error={errors.certificateImage}
          helperText="Upload official ranking / accreditation certificate photo from your device storage."
          previewHeight={220}
        />

        {/* Status (Always in the last line) */}
        <div className="admin-form-group">
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

        {/* Form Actions */}
        <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[var(--admin-border)]">
          <Link href={backUrl} className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckIcon size={16} />
            <span>{isEditing ? "Save Changes" : "Save Ranking"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
