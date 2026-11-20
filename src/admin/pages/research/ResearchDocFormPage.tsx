"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon, FlaskIcon } from "@/admin/components/Icons";
import { PdfUploadInput } from "@/admin/components/PdfUploadInput";
import { ItemStatus, ResearchSubcomponentKey, isItemActive } from "@/admin/types";
import { RESEARCH_SUBCOMPONENTS } from "@/admin/data/research";

interface ResearchDocFormPageProps {
  subcomponent: ResearchSubcomponentKey;
  mode: "add" | "edit";
  id?: number;
}

export function ResearchDocFormPage({
  subcomponent,
  mode,
  id
}: ResearchDocFormPageProps) {
  const router = useRouter();
  const {
    getResearchDocById,
    addResearchDoc,
    updateResearchDoc
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getResearchDocById(id) : undefined;

  const meta = RESEARCH_SUBCOMPONENTS[subcomponent] || {
    key: subcomponent,
    slug: subcomponent,
    title: "R&D Documents",
    shortTitle: "Documents",
    description: "Manage research documents",
    categoryPlaceholder: "e.g. Journal Publication",
    sessionLabel: "Year / Session",
    sessionPlaceholder: "e.g. 2025",
    defaultCategory: "General"
  };

  const isPublication = subcomponent === "publications";
  const [title, setTitle] = useState("");
  const [yearOrSession, setYearOrSession] = useState("");
  const [category, setCategory] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setYearOrSession(existingItem.yearOrSession || "");
      setCategory(existingItem.category || "");
      setPdfUrl(existingItem.pdfUrl || "");
      setDescription(existingItem.description || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      // In Add mode, all fields start completely blank with placeholder guidance
      setTitle("");
      setYearOrSession("");
      setCategory("");
      setPdfUrl("");
      setDescription("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (isPublication) {
      if (!yearOrSession.trim()) newErrors.yearOrSession = "Publication Year is required.";
      if (!pdfUrl.trim()) newErrors.pdfUrl = "PDF document path or URL is required.";
    } else {
      if (!title.trim()) newErrors.title = "Document title is required.";
      if (!pdfUrl.trim()) newErrors.pdfUrl = "PDF document path or URL is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      subcomponent,
      title: isPublication ? `Publications ${yearOrSession.trim()}` : title.trim(),
      yearOrSession: isPublication ? yearOrSession.trim() : (yearOrSession.trim() || new Date().getFullYear().toString()),
      category: isPublication ? "Journal Papers" : (category.trim() || meta.defaultCategory),
      pdfUrl: pdfUrl.trim(),
      description: undefined,
      status
    };

    if (isEditing && id) {
      updateResearchDoc(id, payload);
      router.push(`/admin/research/${subcomponent}/${id}`);
    } else {
      addResearchDoc(payload);
      router.push(`/admin/research/${subcomponent}`);
    }
  };

  const backUrl = isEditing && id
    ? `/admin/research/${subcomponent}/${id}`
    : `/admin/research/${subcomponent}`;

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Document Details" : meta.title}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase px-2 py-0.5 rounded-[3px] bg-[rgba(227,24,55,0.1)] text-[var(--admin-red)]">
            <FlaskIcon size={12} />
            <span>{meta.title}</span>
          </span>
        </div>
        <h1 className="admin-heading">
          {isEditing
            ? `Edit ${isPublication ? "Publication" : meta.shortTitle} PDF`
            : `Add New ${isPublication ? "Publication" : meta.shortTitle} PDF`}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update ${isPublication ? "publication year and PDF file URL" : `document attributes and PDF file reference for "${existingItem?.title || "Document"}"`}.`
            : `Add a new PDF record into the institutional ${meta.title} collection.`}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-card flex flex-col gap-5">
        {isPublication ? (
          <>
            {/* Publication Year */}
            <div className="admin-form-group">
              <label className="admin-label">
                Publication Year <span className="text-[var(--admin-red)]">*</span>
              </label>
              <input
                type="text"
                className={`admin-input ${errors.yearOrSession ? "admin-input-error" : ""}`}
                value={yearOrSession}
                onChange={(e) => {
                  setYearOrSession(e.target.value);
                  if (errors.yearOrSession) setErrors((prev) => ({ ...prev, yearOrSession: "" }));
                }}
                placeholder="e.g. 2026, 2025"
              />
              {errors.yearOrSession && (
                <span className="admin-field-error">{errors.yearOrSession}</span>
              )}
            </div>

            {/* PDF Upload */}
            <PdfUploadInput
              label="Upload Publication PDF Document"
              required
              value={pdfUrl}
              onChange={(val) => {
                setPdfUrl(val);
                if (errors.pdfUrl) setErrors((prev) => ({ ...prev, pdfUrl: "" }));
              }}
              error={errors.pdfUrl}
              helperText="Upload annual Scopus / Web of Science publication dossier PDF from your device storage."
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
          </>
        ) : (
          <>
            {/* Document Title */}
            <div className="admin-form-group">
              <label className="admin-label">
                Document Title <span className="text-[var(--admin-red)]">*</span>
              </label>
              <input
                type="text"
                className={`admin-input ${errors.title ? "admin-input-error" : ""}`}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
                }}
                placeholder={`e.g. ${meta.title}`}
              />
              {errors.title && <span className="admin-field-error">{errors.title}</span>}
            </div>

            {/* PDF Upload */}
            <PdfUploadInput
              label={`Upload ${meta.title} PDF Document`}
              required
              value={pdfUrl}
              onChange={(val) => {
                setPdfUrl(val);
                if (errors.pdfUrl) setErrors((prev) => ({ ...prev, pdfUrl: "" }));
              }}
              error={errors.pdfUrl}
              helperText={`Upload official ${meta.shortTitle.toLowerCase()} PDF document from your device storage.`}
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
          </>
        )}

        {/* Form Actions */}
        <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[var(--admin-border)]">
          <Link href={backUrl} className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckIcon size={16} />
            <span>{isEditing ? "Save Changes" : "Save Document"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
