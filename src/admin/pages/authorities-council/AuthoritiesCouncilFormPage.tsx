"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { PdfUploadInput } from "@/admin/components/PdfUploadInput";
import { ItemStatus, CouncilType, isItemActive } from "@/admin/types";

interface AuthoritiesCouncilFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function AuthoritiesCouncilFormPage({
  mode,
  id
}: AuthoritiesCouncilFormPageProps) {
  const router = useRouter();
  const {
    getAuthorityCouncilById,
    addAuthorityCouncil,
    updateAuthorityCouncil
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getAuthorityCouncilById(id) : undefined;

  const [title, setTitle] = useState("");
  const [councilType, setCouncilType] = useState<CouncilType>(
    "Members of Advisory Board"
  );
  const [session, setSession] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setCouncilType(existingItem.councilType || "Members of Advisory Board");
      setSession(existingItem.session || "");
      setPdfUrl(existingItem.pdfUrl || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      setTitle("");
      setCouncilType("Members of Advisory Board");
      setSession("");
      setPdfUrl("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "Document title is required.";
    if (!session.trim()) newErrors.session = "Academic session year is required.";
    if (!pdfUrl.trim()) newErrors.pdfUrl = "PDF document path / URL is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      title: title.trim(),
      councilType,
      session: session.trim(),
      pdfUrl: pdfUrl.trim(),
      status
    };

    if (isEditing && id) {
      updateAuthorityCouncil(id, payload);
      router.push(`/admin/about/authorities-council/${id}`);
    } else {
      addAuthorityCouncil(payload);
      router.push("/admin/about/authorities-council");
    }
  };

  const backUrl = isEditing && id
    ? `/admin/about/authorities-council/${id}`
    : "/admin/about/authorities-council";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Document Details" : "Authorities & Councils"}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Council Document" : "Add Council Governance PDF"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update details for Record ${existingItem?.id} - "${existingItem?.title}". All changes update immediately.`
            : "Enter council document title, governance category, academic session, and official PDF link."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-form-card">
        {/* Title */}
        <div className="admin-input-group">
          <label htmlFor="form-title" className="admin-label">
            Document Title / Council Notification <span className="required">*</span>
          </label>
          <input
            id="form-title"
            type="text"
            className="admin-input"
            placeholder="e.g. Members of Advisory Board"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
            }}
          />
          {errors.title && (
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.title}
            </span>
          )}
        </div>

        {/* Council Category & Session */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mb-4.5">
          <div>
            <label htmlFor="form-council-type" className="admin-label">
              Council Body Category <span className="required">*</span>
            </label>
            <select
              id="form-council-type"
              className="admin-select"
              value={councilType}
              onChange={(e) => setCouncilType(e.target.value as CouncilType)}
            >
              <option value="Members of Advisory Board">Members of Advisory Board</option>
              <option value="Governing Body">Governing Body</option>
            </select>
          </div>

          <div>
            <label htmlFor="form-session" className="admin-label">
              Academic Session Year <span className="required">*</span>
            </label>
            <input
              id="form-session"
              type="text"
              className="admin-input"
              placeholder="e.g. 2025-26"
              value={session}
              onChange={(e) => {
                setSession(e.target.value);
                if (errors.session) setErrors((prev) => ({ ...prev, session: "" }));
              }}
            />
            {errors.session && (
              <span className="text-xs text-[var(--admin-danger-text)] mt-1">
                {errors.session}
              </span>
            )}
          </div>
        </div>

        {/* PDF Document Upload */}
        <div className="mb-4.5">
          <PdfUploadInput
            id="form-pdf-url"
            label="Upload Council & Authorities PDF Document"
            required
            value={pdfUrl}
            onChange={(val) => {
              setPdfUrl(val);
              if (errors.pdfUrl) setErrors((prev) => ({ ...prev, pdfUrl: "" }));
            }}
            error={errors.pdfUrl}
            helperText="Upload advisory board / governing body PDF document from your device storage."
          />
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
            <span>{isEditing ? "Update Document" : "Save Document"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
