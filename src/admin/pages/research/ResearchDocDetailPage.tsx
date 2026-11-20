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
  FlaskIcon,
  DownloadIcon
} from "@/admin/components/Icons";
import { ResearchSubcomponentKey, isItemActive } from "@/admin/types";
import { RESEARCH_SUBCOMPONENTS } from "@/admin/data/research";

interface ResearchDocDetailPageProps {
  subcomponent: ResearchSubcomponentKey;
  id: number;
}

export function ResearchDocDetailPage({ subcomponent, id }: ResearchDocDetailPageProps) {
  const router = useRouter();
  const {
    getResearchDocById,
    toggleResearchDocStatus,
    deleteResearchDoc
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getResearchDocById(id);
  const isPublication = subcomponent === "publications";
  const meta = RESEARCH_SUBCOMPONENTS[subcomponent] || {
    key: subcomponent,
    slug: subcomponent,
    title: "R&D Documents",
    shortTitle: "Documents",
    description: "Manage research documents",
    sessionLabel: "Year / Session"
  };

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href={`/admin/research/${subcomponent}`} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {meta.title}</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Document Not Found</h2>
          <p className="admin-desc">
            The requested research document #{id} could not be found or has been deleted.
          </p>
          <Link
            href={`/admin/research/${subcomponent}`}
            className="admin-btn admin-btn-primary mt-3 inline-flex"
          >
            Return to {meta.title}
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleResearchDocStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteResearchDoc(item.id);
    setIsDeleting(false);
    router.push(`/admin/research/${subcomponent}`);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href={`/admin/research/${subcomponent}`}
          className="admin-back-btn"
          aria-label={`Back to ${meta.title}`}
        >
          <ArrowLeftIcon size={14} />
          <span>Back to {meta.title}</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/research/${subcomponent}/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit document details"
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
            title="Permanently delete document"
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
            <FlaskIcon size={12} />
            <span>{meta.title}</span>
          </span>
        </div>
        <h1 className="admin-heading">
          {isPublication ? `Publication Year ${item.yearOrSession}` : item.title}
        </h1>
        <p className="admin-subheading">
          Record ID: #{item.id} • {isPublication ? `Publication Year: ${item.yearOrSession}` : `${meta.sessionLabel}: ${item.yearOrSession} • ${meta.title}`}
        </p>
      </div>

      {/* Detail Table Card in Tabular Format like Faculty page */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            {isPublication ? "Publication Document Details" : `${meta.shortTitle} Document Details`}
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Tabular Format: th (label) on left, td (value) on right */}
        <table className="admin-detail-table" aria-label={`${meta.title} Details Table`}>
          <tbody>
            {isPublication ? (
              <>
                <tr>
                  <th className="w-[220px]">Record ID</th>
                  <td>
                    <span className="font-mono font-bold text-sm">
                      #{item.id}
                    </span>
                  </td>
                </tr>

                <tr>
                  <th>Publication Year</th>
                  <td>
                    <span className="inline-block py-[3px] px-3 text-[13px] font-bold rounded-[3px] bg-[var(--admin-bg-secondary)] text-[var(--admin-primary)] border border-[var(--admin-border)] font-mono">
                      {item.yearOrSession}
                    </span>
                  </td>
                </tr>

                <tr>
                  <th>Attached PDF Document</th>
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
                  <th>Status</th>
                  <td>
                    <span
                      className={`admin-badge ${
                        isVisible ? "admin-badge-active" : "admin-badge-inactive"
                      }`}
                    >
                      {isVisible ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <th className="w-[220px]">Record ID</th>
                  <td>
                    <span className="font-mono font-bold text-sm">
                      #{item.id}
                    </span>
                  </td>
                </tr>

                <tr>
                  <th>Document Title</th>
                  <td>
                    <div className="text-base font-semibold text-[var(--admin-text)]">
                      {item.title}
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>Attached PDF Document</th>
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
                  <th>Status</th>
                  <td>
                    <span
                      className={`admin-badge ${
                        isVisible ? "admin-badge-active" : "admin-badge-inactive"
                      }`}
                    >
                      {isVisible ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete R&D Document"
        message={`Are you sure you want to permanently delete "${item.title}"? This will remove the PDF reference from ${meta.title}.`}
        itemName={item.title}
        confirmLabel="Yes, Delete Document"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
