"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";
import { SimpleTextEditor } from "@/admin/components/SimpleTextEditor";
import { ItemStatus, isItemActive } from "@/admin/types";

interface BlogFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function BlogFormPage({ mode, id }: BlogFormPageProps) {
  const router = useRouter();
  const {
    getBlogById,
    addBlog,
    updateBlog
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getBlogById(id) : undefined;

  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [mobileImage, setMobileImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setHeading(existingItem.heading || "");
      setCategory(existingItem.category || "");
      setImage(existingItem.image || "");
      setMobileImage(existingItem.mobileImage || existingItem.image || "");
      setDescription(existingItem.description || "");
      setDate(existingItem.date || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      setHeading("");
      setCategory("");
      setImage("");
      setMobileImage("");
      setDescription("");
      setDate(new Date().toISOString().split("T")[0]);
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!heading.trim()) newErrors.heading = "Blog heading / title is required.";
    if (!category.trim()) newErrors.category = "Category is required.";
    if (!image.trim()) newErrors.image = "Desktop article image is required.";
    if (!mobileImage.trim()) newErrors.mobileImage = "Mobile article image is required.";
    const cleanDesc = description.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").trim();
    if (!cleanDesc) newErrors.description = "Blog description / body is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      heading: heading.trim(),
      category: category.trim(),
      image: image.trim(),
      mobileImage: mobileImage.trim(),
      description: description.trim(),
      date: date.trim() || new Date().toISOString().split("T")[0],
      status
    };

    if (isEditing && id) {
      updateBlog(id, payload);
      router.push(`/admin/blogs/${id}`);
    } else {
      addBlog(payload);
      router.push("/admin/blogs");
    }
  };

  const backUrl = isEditing && id ? `/admin/blogs/${id}` : "/admin/blogs";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Blog Details" : "Blogs"}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Blog Article" : "Add New Blog Article"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update details for Article ${existingItem?.id} - "${existingItem?.heading}". All changes update immediately.`
            : "Enter blog heading, category, featured image URL, and description content."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-form-card">
        {/* Heading */}
        <div className="admin-input-group">
          <label htmlFor="form-heading" className="admin-label">
            Blog Heading / Title <span className="required">*</span>
          </label>
          <input
            id="form-heading"
            type="text"
            className="admin-input"
            placeholder="e.g. Breakthroughs in Targeted Drug Delivery Systems: 2026 Perspective"
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value);
              if (errors.heading) setErrors((prev) => ({ ...prev, heading: "" }));
            }}
          />
          {errors.heading && (
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.heading}
            </span>
          )}
        </div>

        {/* Category & Published Date */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mb-4.5">
          <div>
            <label htmlFor="form-category" className="admin-label">
              Category <span className="required">*</span>
            </label>
            <input
              id="form-category"
              type="text"
              className="admin-input"
              placeholder="e.g. Pharmaceutical Research, Clinical Pharmacy, Herbal"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
              }}
            />
            {errors.category && (
              <span className="text-xs text-[var(--admin-danger-text)] mt-1">
                {errors.category}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="form-date" className="admin-label">
              Published Date
            </label>
            <input
              id="form-date"
              type="date"
              className="admin-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Desktop & Mobile Images */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mb-4.5">
          <ImageUploadInput
            id="form-desktop-image"
            label="Select Desktop Image"
            required
            value={image}
            onChange={(val) => {
              setImage(val);
              if (errors.image) setErrors((prev) => ({ ...prev, image: "" }));
            }}
            error={errors.image}
            helperText="Select or upload article photo for desktop screens."
            previewHeight={180}
          />

          <ImageUploadInput
            id="form-mobile-image"
            label="Select Mobile Image"
            required
            value={mobileImage}
            onChange={(val) => {
              setMobileImage(val);
              if (errors.mobileImage) setErrors((prev) => ({ ...prev, mobileImage: "" }));
            }}
            error={errors.mobileImage}
            helperText="Select or upload article photo optimized for mobile screens."
            previewHeight={180}
          />
        </div>

        {/* Description / Content (Simple Rich Text Editor) */}
        <div className="admin-input-group">
          <label htmlFor="form-description" className="admin-label">
            Description / Article Body <span className="required">*</span>
          </label>
          <SimpleTextEditor
            id="form-description"
            value={description}
            onChange={(val) => {
              setDescription(val);
              if (errors.description) setErrors((prev) => ({ ...prev, description: "" }));
            }}
            placeholder="Write comprehensive blog content, study findings, methodology, and key takeaways for readers..."
            minHeight={220}
            error={errors.description}
          />
          {errors.description && (
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.description}
            </span>
          )}
        </div>

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
            <span>{isEditing ? "Update Article" : "Save Article"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
