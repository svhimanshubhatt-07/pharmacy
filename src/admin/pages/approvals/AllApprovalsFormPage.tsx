"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { PdfUploadInput } from "@/admin/components/PdfUploadInput";
import { ItemStatus } from "@/admin/types";

interface AllApprovalsFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function AllApprovalsFormPage({
  mode,
  id
}: AllApprovalsFormPageProps) {
  const router = useRouter();
  const {
    getApprovalDocById,
    addApprovalDoc,
    updateApprovalDoc
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getApprovalDocById(id) : undefined;

  const [session, setSession] = useState("2025-26");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("PCI");
  const [pdfUrl, setPdfUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setSession(existingItem.session || "");
      setTitle(existingItem.title || "");
      setBody(existingItem.body || "");
      setPdfUrl(existingItem.pdfUrl || "");
      setStatus(existingItem.status === "Inactive" || existingItem.status === "Hidden" ? "Inactive" : "Active");
    } else {
      setSession("");
      setTitle("");
      setBody("");
      setPdfUrl("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!session.trim()) newErrors.session = "Academic session year is required.";
    if (!title.trim()) newErrors.title = "Document title is required.";
    if (!body.trim()) newErrors.body = "Regulatory body / university is required.";
    if (!pdfUrl.trim()) newErrors.pdfUrl = "PDF document URL / path is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      session: session.trim(),
      title: title.trim(),
      body: body.trim(),
      pdfUrl: pdfUrl.trim(),
      status
    };

    if (isEditing && id) {
      updateApprovalDoc(id, payload);
      router.push(`/admin/approvals/${id}`);
    } else {
      addApprovalDoc(payload);
      router.push("/admin/approvals");
    }
  };

  const backUrl = isEditing && id
    ? `/admin/approvals/${id}`
    : "/admin/approvals";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Document Details" : "Approvals"}</span>
        </Link>
      </div>

      {/* Page Title: Exactly 30px */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Approval Document" : "Add Mandatory Approval Document"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update details for Record ${existingItem?.id} - "${existingItem?.title}". All changes update immediately.`
            : "Enter academic session, regulatory body, document title, and PDF link."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-form-card">
        {/* Session & Body */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mb-4.5">
          <div>
            <label htmlFor="form-session" className="admin-label">
              Academic Session <span className="required">*</span>
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

          <div>
            <label htmlFor="form-body" className="admin-label">
              Regulatory Body / Authority <span className="required">*</span>
            </label>
            <input
              id="form-body"
              type="text"
              className="admin-input"
              placeholder="e.g. Pharmacy Council of India (PCI)"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                if (errors.body) setErrors((prev) => ({ ...prev, body: "" }));
              }}
            />
            {errors.body && (
              <span className="text-xs text-[var(--admin-danger-text)] mt-1">
                {errors.body}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="admin-input-group">
          <label htmlFor="form-title" className="admin-label">
            Document Title / Order Subject <span className="required">*</span>
          </label>
          <input
            id="form-title"
            type="text"
            className="admin-input"
            placeholder="e.g. PCI Approval Extension Letter (Session 2025-26)"
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

        {/* PDF Upload */}
        <div className="mb-4.5">
          <PdfUploadInput
            id="form-pdf"
            label="Upload Approval PDF Document"
            required
            value={pdfUrl}
            onChange={(val) => {
              setPdfUrl(val);
              if (errors.pdfUrl) setErrors((prev) => ({ ...prev, pdfUrl: "" }));
            }}
            error={errors.pdfUrl}
            helperText="Upload official PCI/AICTE/AKTU approval letter PDF from your device storage."
          />
        </div>

        {/* Status (Always Last Line) */}
        <div className="admin-input-group max-w-[300px] mb-6">
          <label htmlFor="form-status" className="admin-label">
            Status <span className="required">*</span>
          </label>
          <select
            id="form-status"
            className="admin-select"
            value={status}
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
