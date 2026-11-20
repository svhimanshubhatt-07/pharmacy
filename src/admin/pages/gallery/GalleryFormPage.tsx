"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";
import { ItemStatus, isItemActive } from "@/admin/types";

interface GalleryFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function GalleryFormPage({ mode, id }: GalleryFormPageProps) {
  const router = useRouter();
  const {
    getGalleryItemById,
    addGalleryItem,
    updateGalleryItem
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getGalleryItemById(id) : undefined;

  const [image, setImage] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setImage(existingItem.image || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      setImage("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!image.trim()) newErrors.image = "Image URL or path is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      image: image.trim(),
      status
    };

    if (isEditing && id) {
      updateGalleryItem(id, payload);
      router.push(`/admin/gallery/${id}`);
    } else {
      addGalleryItem(payload);
      router.push("/admin/gallery");
    }
  };

  const backUrl = isEditing && id ? `/admin/gallery/${id}` : "/admin/gallery";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Image Details" : "Gallery"}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Gallery Image" : "Add Gallery Image"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update image URL for Image #${existingItem?.id}. Changes take effect immediately.`
            : "Enter image URL or path to add a photo to the gallery."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-form-card">
        {/* Image Upload Input */}
        <ImageUploadInput
          id="form-image"
          label="Upload Gallery Photo"
          required
          value={image}
          onChange={(val) => {
            setImage(val);
            if (errors.image) setErrors((prev) => ({ ...prev, image: "" }));
          }}
          error={errors.image}
          helperText="Upload institute campus photo from your device storage."
          previewHeight={240}
        />

        {/* Status (Always in the last line) */}
        <div className="admin-input-group mb-0">
          <label htmlFor="form-status" className="admin-label">
            Status <span className="required">*</span>
          </label>
          <select
            id="form-status"
            className="admin-select"
            value={isItemActive(status) ? "Active" : "Inactive"}
            onChange={(e) => setStatus(e.target.value as ItemStatus)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Form Actions */}
        <div className="admin-form-actions">
          <Link href={backUrl} className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckIcon size={16} />
            <span>{isEditing ? "Update Image" : "Save Image"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
