"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon, FeeReceiptIcon } from "@/admin/components/Icons";
import { PdfUploadInput } from "@/admin/components/PdfUploadInput";
import { ItemStatus, FeeStructureCourseKey } from "@/admin/types";
import { FEE_STRUCTURE_COURSES } from "@/admin/data/feeStructure";

interface FeeStructureDocFormPageProps {
  course: FeeStructureCourseKey;
  mode: "add" | "edit";
  id?: number;
}

export function FeeStructureDocFormPage({
  course,
  mode,
  id
}: FeeStructureDocFormPageProps) {
  const router = useRouter();
  const {
    getFeeStructureDocById,
    addFeeStructureDoc,
    updateFeeStructureDoc
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getFeeStructureDocById(id) : undefined;

  const meta = FEE_STRUCTURE_COURSES[course] || {
    key: course,
    slug: course,
    name: `${course.toUpperCase()} Programme`,
    shortTitle: course.toUpperCase(),
    subtitle: "Official AFRC Approved Annual Fee Matrix",
    description: "Manage tuition fee matrix PDFs and regulatory notifications.",
    disclaimer: "Tuition Fee is subject to revision by State Fee Regulatory Committee (AFRC), Government of Uttar Pradesh.",
    categoryPlaceholder: "Official AFRC Approved Document"
  };

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setCategory(existingItem.category || "");
      setPdfUrl(existingItem.pdfUrl || "");
      setStatus(existingItem.status === "Inactive" || existingItem.status === "Hidden" ? "Inactive" : "Active");
    } else {
      // In Add mode, all fields start completely blank with placeholder guidance
      setTitle("");
      setCategory("");
      setPdfUrl("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "Document title is required.";
    if (!category.trim()) newErrors.category = "Category is required.";
    if (!pdfUrl.trim()) newErrors.pdfUrl = "PDF document path or URL is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      course,
      title: title.trim(),
      category: category.trim(),
      pdfUrl: pdfUrl.trim(),
      status
    };

    if (isEditing && id) {
      updateFeeStructureDoc(id, payload);
      router.push(`/admin/fee-structure/${course}/${id}`);
    } else {
      addFeeStructureDoc(payload);
      router.push(`/admin/fee-structure/${course}`);
    }
  };

  const backUrl = isEditing && id
    ? `/admin/fee-structure/${course}/${id}`
    : `/admin/fee-structure/${course}`;

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Fee Details" : `${meta.shortTitle} Fee Structure`}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase px-2 py-0.5 rounded-[3px] bg-[rgba(227,24,55,0.1)] text-[var(--admin-red)]">
            <FeeReceiptIcon size={12} />
            <span>{meta.shortTitle} Fee Matrix</span>
          </span>
        </div>
        <h1 className="admin-heading">
          {isEditing ? `Edit ${meta.shortTitle} Fee Structure` : `Add New ${meta.shortTitle} Fee Structure`}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update official fee document specifications and PDF URL for ${meta.name}.`
            : `Upload and configure official fee document for ${meta.name}.`}
        </p>
      </div>

      {/* Form Card */}
      <div className="admin-card">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Document Title */}
          <div className="admin-form-group">
            <label className="admin-label">
              Fee Document Title <span className="text-[var(--admin-red)]">*</span>
            </label>
            <input
              type="text"
              className={`admin-input ${errors.title ? "admin-input-error" : ""}`}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
              }}
              placeholder={`e.g. ${meta.shortTitle} Fee Structure 2025-26`}
            />
            {errors.title && <span className="admin-error-text">{errors.title}</span>}
          </div>

          {/* Document Category */}
          <div className="admin-form-group">
            <label className="admin-label">
              Document Category <span className="text-[var(--admin-red)]">*</span>
            </label>
            <input
              type="text"
              className={`admin-input ${errors.category ? "admin-input-error" : ""}`}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
              }}
              placeholder="e.g. Official AFRC Approved Document"
            />
            {errors.category && <span className="admin-error-text">{errors.category}</span>}
          </div>

          {/* PDF Upload Input */}
          <PdfUploadInput
            label="Upload Fee Matrix PDF Document"
            required
            value={pdfUrl}
            onChange={(val) => {
              setPdfUrl(val);
              if (errors.pdfUrl) setErrors((prev) => ({ ...prev, pdfUrl: "" }));
            }}
            error={errors.pdfUrl}
            helperText="Upload official annual fee structure PDF document from your device storage."
          />

          {/* Status Field (Always last line) */}
          <div className="admin-form-group max-w-[260px]">
            <label className="admin-label">Status</label>
            <select
              className="admin-input"
              value={status}
              onChange={(e) => setStatus(e.target.value as ItemStatus)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end items-center gap-3 pt-4 border-t border-[var(--admin-border)]">
            <Link href={backUrl} className="admin-btn admin-btn-secondary">
              Cancel
            </Link>

            <button type="submit" className="admin-btn admin-btn-primary">
              <CheckIcon size={16} />
              <span>{isEditing ? "Save Changes" : "Create Fee Document"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
