"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon, BookOpenIcon } from "@/admin/components/Icons";
import { PdfUploadInput } from "@/admin/components/PdfUploadInput";
import { ItemStatus, SyllabusCourseKey, isItemActive } from "@/admin/types";
import { SYLLABUS_COURSES } from "@/admin/data/syllabus";

interface SyllabusDocFormPageProps {
  course: SyllabusCourseKey;
  mode: "add" | "edit";
  id?: number;
}

export function SyllabusDocFormPage({
  course,
  mode,
  id
}: SyllabusDocFormPageProps) {
  const router = useRouter();
  const {
    getSyllabusDocById,
    addSyllabusDoc,
    updateSyllabusDoc
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getSyllabusDocById(id) : undefined;

  const meta = SYLLABUS_COURSES[course] || {
    key: course,
    slug: course,
    name: `${course.toUpperCase()} Programme`,
    shortTitle: course.toUpperCase(),
    duration: "Academic Curriculum",
    subtitle: "Course Syllabus Regulations",
    description: "Manage curriculum syllabus PDFs",
    councilLabel: "Regulatory Council / Body",
    schemePlaceholder: "e.g. AKTU & PCI Approved 4-Year Scheme"
  };

  const [title, setTitle] = useState("");
  const [regulation, setRegulation] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setRegulation(existingItem.regulation || "");
      setPdfUrl(existingItem.pdfUrl || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      // In Add mode, all fields start completely blank with placeholder guidance
      setTitle("");
      setRegulation("");
      setPdfUrl("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "Syllabus title is required.";
    if (!regulation.trim()) newErrors.regulation = `${meta.councilLabel} is required.`;
    if (!pdfUrl.trim()) newErrors.pdfUrl = "PDF document path or URL is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      course,
      title: title.trim(),
      regulation: regulation.trim(),
      pdfUrl: pdfUrl.trim(),
      status
    };

    if (isEditing && id) {
      updateSyllabusDoc(id, payload);
      router.push(`/admin/syllabus/${course}/${id}`);
    } else {
      addSyllabusDoc(payload);
      router.push(`/admin/syllabus/${course}`);
    }
  };

  const backUrl = isEditing && id
    ? `/admin/syllabus/${course}/${id}`
    : `/admin/syllabus/${course}`;

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Syllabus Details" : `${meta.shortTitle} Syllabus`}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase px-2 py-0.5 rounded-[3px] bg-[rgba(227,24,55,0.1)] text-[var(--admin-red)]">
            <BookOpenIcon size={12} />
            <span>{meta.shortTitle} Programme</span>
          </span>
        </div>
        <h1 className="admin-heading">
          {isEditing ? `Edit ${meta.shortTitle} Syllabus` : `Add New ${meta.shortTitle} Syllabus`}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update syllabus document specifications and PDF URL for ${meta.name}.`
            : `Upload and configure new curriculum syllabus document for ${meta.name}.`}
        </p>
      </div>

      {/* Form Card */}
      <div className="admin-card">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* 1. Syllabus Title */}
          <div className="admin-form-group">
            <label className="admin-label">
              Curriculum / Syllabus Title <span className="text-[var(--admin-red)]">*</span>
            </label>
            <input
              type="text"
              className={`admin-input ${errors.title ? "admin-input-error" : ""}`}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
              }}
              placeholder={`e.g. ${meta.shortTitle} Full Syllabus or M.Pharm (Pharmaceutics) Syllabus`}
            />
            {errors.title && <span className="admin-error-text">{errors.title}</span>}
          </div>

          {/* 2. Regulatory Council / Body */}
          <div className="admin-form-group">
            <label className="admin-label">
              {meta.councilLabel} <span className="text-[var(--admin-red)]">*</span>
            </label>
            <input
              type="text"
              className={`admin-input ${errors.regulation ? "admin-input-error" : ""}`}
              value={regulation}
              onChange={(e) => {
                setRegulation(e.target.value);
                if (errors.regulation) setErrors((prev) => ({ ...prev, regulation: "" }));
              }}
              placeholder={meta.schemePlaceholder}
            />
            {errors.regulation && (
              <span className="admin-error-text">{errors.regulation}</span>
            )}
          </div>

          {/* 3. PDF Upload Input */}
          <PdfUploadInput
            label="Upload Syllabus PDF Document"
            required
            value={pdfUrl}
            onChange={(val) => {
              setPdfUrl(val);
              if (errors.pdfUrl) setErrors((prev) => ({ ...prev, pdfUrl: "" }));
            }}
            error={errors.pdfUrl}
            helperText="Upload official course syllabus & scheme PDF document from your device storage."
          />

          {/* 4. Status Field (Always in the last line) */}
          <div className="admin-form-group max-w-[260px]">
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
          <div className="flex justify-end items-center gap-3 pt-4 border-t border-[var(--admin-border)]">
            <Link href={backUrl} className="admin-btn admin-btn-secondary">
              Cancel
            </Link>

            <button type="submit" className="admin-btn admin-btn-primary">
              <CheckIcon size={16} />
              <span>{isEditing ? "Save Changes" : "Create Syllabus Document"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
