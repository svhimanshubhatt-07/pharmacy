"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ConfirmDialog } from "@/admin/components/ConfirmDialog";
import {
  ArrowLeftIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  TrashIcon,
  ExternalLinkIcon,
  BookOpenIcon,
  DownloadIcon
} from "@/admin/components/Icons";
import { SyllabusCourseKey, isItemActive } from "@/admin/types";
import { SYLLABUS_COURSES } from "@/admin/data/syllabus";

interface SyllabusDocDetailPageProps {
  course: SyllabusCourseKey;
  id: number;
}

export function SyllabusDocDetailPage({ course, id }: SyllabusDocDetailPageProps) {
  const router = useRouter();
  const {
    getSyllabusDocById,
    toggleSyllabusDocStatus,
    deleteSyllabusDoc
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getSyllabusDocById(id);
  const meta = SYLLABUS_COURSES[course] || {
    key: course,
    slug: course,
    name: `${course.toUpperCase()} Programme`,
    shortTitle: course.toUpperCase(),
    duration: "Academic Curriculum",
    subtitle: "Course Syllabus Regulations",
    description: "Manage curriculum syllabus PDFs",
    councilLabel: "Regulatory Council / Body",
    schemePlaceholder: "e.g. PCI Regulations"
  };

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href={`/admin/syllabus/${course}`} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {meta.shortTitle} Syllabus</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Syllabus Document Not Found</h2>
          <p className="admin-desc">
            The requested syllabus document #{id} could not be found or has been deleted.
          </p>
          <Link
            href={`/admin/syllabus/${course}`}
            className="admin-btn admin-btn-primary mt-3 inline-flex"
          >
            Return to {meta.shortTitle} Syllabus
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleSyllabusDocStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteSyllabusDoc(item.id);
    setIsDeleting(false);
    router.push(`/admin/syllabus/${course}`);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href={`/admin/syllabus/${course}`}
          className="admin-back-btn"
          aria-label={`Back to ${meta.shortTitle} Syllabus`}
        >
          <ArrowLeftIcon size={14} />
          <span>Back to {meta.shortTitle} Syllabus</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/syllabus/${course}/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit syllabus details"
          >
            <EditIcon size={14} />
            <span>Edit</span>
          </Link>

          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={handleToggleStatus}
            title={isVisible ? "Hide from website" : "Make visible to public"}
          >
            {isVisible ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
            <span>{isVisible ? "Hide" : "Show"}</span>
          </button>

          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => setIsDeleting(true)}
            title="Permanently delete syllabus document"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase px-2 py-0.5 rounded-[3px] bg-[rgba(227,24,55,0.1)] text-[var(--admin-red)]">
            <BookOpenIcon size={12} />
            <span>{meta.shortTitle} Syllabus</span>
          </span>
        </div>
        <h1 className="admin-heading">{item.title}</h1>
        <p className="admin-subheading">
          Record ID: #{item.id} • Programme: {meta.name} • {meta.councilLabel}: {item.regulation}
        </p>
      </div>

      {/* Tabular Format: .admin-detail-table-card & .admin-detail-table */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            {meta.shortTitle} Syllabus Specifications
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        <table className="admin-detail-table" aria-label={`${meta.shortTitle} Syllabus Details Table`}>
          <tbody>
            <tr>
              <th>RECORD ID</th>
              <td>
                <span className="font-mono font-bold text-sm">
                  #{item.id}
                </span>
              </td>
            </tr>

            <tr>
              <th>ACADEMIC PROGRAMME</th>
              <td>
                <div className="text-[15px] font-semibold text-[var(--admin-text)]">
                  {meta.name}
                </div>
                <div className="text-xs text-[var(--admin-text-subtle)] mt-0.5">
                  Standard Course Duration: {meta.duration}
                </div>
              </td>
            </tr>

            <tr>
              <th>CURRICULUM / SYLLABUS TITLE</th>
              <td>
                <div className="text-base font-semibold text-[var(--admin-text)]">
                  {item.title}
                </div>
              </td>
            </tr>

            <tr>
              <th>{meta.councilLabel.toUpperCase()}</th>
              <td>
                <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-[3px] bg-[rgba(10,37,64,0.06)] text-[var(--admin-primary)]">
                  {item.regulation}
                </span>
              </td>
            </tr>

            <tr>
              <th>ATTACHED PDF DOCUMENT</th>
              <td>
                <div className="flex items-center gap-3.5 flex-wrap">
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-download-btn py-2 px-4 text-[13px]"
                  >
                    <DownloadIcon size={14} />
                    <span>Download PDF Document</span>
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <th>STATUS</th>
              <td>
                <div className="flex items-center gap-2">
                  <span
                    className={`admin-badge ${
                      isVisible ? "admin-badge-active" : "admin-badge-inactive"
                    }`}
                  >
                    {isVisible ? "Active" : "Inactive"}
                  </span>
                  <span className="text-xs text-[var(--admin-text-subtle)]">
                    {isVisible
                      ? "Publicly accessible to students and faculty on website"
                      : "Hidden from public view (Inactive mode)"}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Confirm Delete Dialog */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Syllabus Document"
        message={`Are you sure you want to delete "${item.title}"? This will remove the syllabus PDF entry permanently.`}
        confirmLabel="Delete Document"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
