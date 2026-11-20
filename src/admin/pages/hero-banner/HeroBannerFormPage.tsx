"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";
import { ItemStatus, isItemActive } from "@/admin/types";

interface HeroBannerFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function HeroBannerFormPage({ mode, id }: HeroBannerFormPageProps) {
  const router = useRouter();
  const {
    getHeroBannerById,
    addHeroBanner,
    updateHeroBanner
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getHeroBannerById(id) : undefined;

  const [imageUrl, setImageUrl] = useState("");
  const [mobileImageUrl, setMobileImageUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setImageUrl(existingItem.imageUrl || "");
      setMobileImageUrl(existingItem.mobileImageUrl || existingItem.imageUrl || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      // In add mode, starts completely blank with placeholder guidance
      setImageUrl("");
      setMobileImageUrl("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!imageUrl.trim()) {
      newErrors.imageUrl = "Desktop banner image is required.";
    }
    if (!mobileImageUrl.trim()) {
      newErrors.mobileImageUrl = "Mobile banner image is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      imageUrl: imageUrl.trim(),
      mobileImageUrl: mobileImageUrl.trim(),
      status
    };

    if (isEditing && id) {
      updateHeroBanner(id, payload);
      router.push(`/admin/home/hero-banner/${id}`);
    } else {
      addHeroBanner(payload);
      router.push("/admin/home/hero-banner");
    }
  };

  const backUrl = isEditing && id
    ? `/admin/home/hero-banner/${id}`
    : "/admin/home/hero-banner";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Banner Details" : "Hero Banners"}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Hero Banner" : "Add Hero Banner"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update banner image path for Record #${existingItem?.id}.`
            : "Upload or specify the image URL for the homepage slider banner."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-card flex flex-col gap-5">
        {/* Desktop Image Upload Input */}
        <ImageUploadInput
          id="hero-desktop-image"
          label="Select Desktop Image"
          required
          value={imageUrl}
          onChange={(val) => {
            setImageUrl(val);
            if (errors.imageUrl) setErrors((prev) => ({ ...prev, imageUrl: "" }));
          }}
          error={errors.imageUrl}
          helperText="Select or upload wide aspect ratio banner for desktop screens (e.g. 1920x600)."
          previewHeight={200}
        />

        {/* Mobile Image Upload Input */}
        <ImageUploadInput
          id="hero-mobile-image"
          label="Select Mobile Image"
          required
          value={mobileImageUrl}
          onChange={(val) => {
            setMobileImageUrl(val);
            if (errors.mobileImageUrl) setErrors((prev) => ({ ...prev, mobileImageUrl: "" }));
          }}
          error={errors.mobileImageUrl}
          helperText="Select or upload portrait/mobile aspect ratio banner for mobile screens."
          previewHeight={200}
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
            <span>{isEditing ? "Save Changes" : "Save Banner"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
