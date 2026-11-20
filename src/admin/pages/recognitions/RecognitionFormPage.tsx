"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";
import { ItemStatus, isItemActive } from "@/admin/types";

interface RecognitionFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function RecognitionFormPage({ mode, id }: RecognitionFormPageProps) {
  const router = useRouter();
  const { getRecognitionById, addRecognition, updateRecognition } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getRecognitionById(id) : undefined;

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setImageUrl(existingItem.imageUrl || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      setTitle("");
      setImageUrl("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "Recognition title / heading is required.";
    if (!imageUrl.trim()) newErrors.imageUrl = "Recognition logo / image is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      title: title.trim(),
      imageUrl: imageUrl.trim(),
      status
    };

    if (isEditing && id) {
      updateRecognition(id, payload);
      router.push(`/admin/home/recognitions/${id}`);
    } else {
      addRecognition(payload);
      router.push("/admin/home/recognitions");
    }
  };

  const backUrl = isEditing && id
    ? `/admin/home/recognitions/${id}`
    : "/admin/home/recognitions";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Recognition Details" : "Government Recognitions"}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Government Recognition" : "Add Government Recognition"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update statutory recognition heading and logo for Record #${existingItem?.id}.`
            : "Upload statutory logo image and enter recognition heading for the homepage marquee."}
        </p>
      </div>

      {/* Form Card: ONLY Image and Heading (+ Status) */}
      <form onSubmit={handleSubmit} className="admin-card flex flex-col gap-5">
        {/* 1. Title / Heading */}
        <div className="admin-form-group">
          <label className="admin-label">
            Recognition Heading / Title <span className="text-[var(--admin-primary)]">*</span>
          </label>
          <input
            type="text"
            className="admin-input"
            placeholder="e.g. Approved by Pharmacy Council of India, NBA Accredited..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
            }}
          />
          {errors.title && <span className="admin-field-error">{errors.title}</span>}
        </div>

        {/* 2. Direct Image Upload */}
        <ImageUploadInput
          label="Recognition Logo / Image"
          required
          value={imageUrl}
          onChange={(val) => {
            setImageUrl(val);
            if (errors.imageUrl) setErrors((prev) => ({ ...prev, imageUrl: "" }));
          }}
          error={errors.imageUrl}
          helperText="Upload recognition or accreditation logo from your device storage."
          previewHeight={180}
        />

        {/* 3. Status (Always in the last line) */}
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

        {/* Form Actions */}
        <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[var(--admin-border)]">
          <Link href={backUrl} className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckIcon size={16} />
            <span>{isEditing ? "Save Changes" : "Create Recognition"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
