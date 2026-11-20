"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { isItemActive } from "@/admin/types";
import { ConfirmDialog } from "@/admin/components/ConfirmDialog";
import {
  ArrowLeftIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  TrashIcon,
  ExternalLinkIcon,
  DownloadIcon
} from "@/admin/components/Icons";

interface AuthoritiesCouncilDetailPageProps {
  id: number;
}

export function AuthoritiesCouncilDetailPage({ id }: AuthoritiesCouncilDetailPageProps) {
  const router = useRouter();
  const {
    getAuthorityCouncilById,
    toggleAuthorityCouncilStatus,
    deleteAuthorityCouncil
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getAuthorityCouncilById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/about/authorities-council" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Authorities & Councils</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Council Document Not Found</h2>
          <p className="admin-desc">
            The requested council document {id} could not be found or has been deleted.
          </p>
          <Link href="/admin/about/authorities-council" className="admin-btn admin-btn-primary mt-3 inline-flex">
            Return to Authorities
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleAuthorityCouncilStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteAuthorityCouncil(item.id);
    setIsDeleting(false);
    router.push("/admin/about/authorities-council");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/about/authorities-council"
          className="admin-back-btn"
          aria-label="Back to Authorities & Councils"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Authorities & Councils</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/about/authorities-council/${item.id}/edit`}
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
            title="Delete council document"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title: Exactly 30px */}
      <div>
        <h1 className="admin-heading">
          {item.title}
        </h1>
        <p className="admin-subheading">
          Record ID: {item.id} • Category: {item.councilType} • Session: {item.session}
        </p>
      </div>

      {/* Detail Table Card */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            Council PDF Document Specifications
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Table format: ek ke niche ek */}
        <table className="admin-detail-table" aria-label="Council Document Details Table">
          <tbody>
            <tr>
              <th>Record ID</th>
              <td>
                <span className="font-mono font-bold text-sm">
                  {item.id}
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
              <th>Council Classification</th>
              <td>
                <span className="py-0.5 px-2 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] font-semibold text-[13px]">
                  {item.councilType}
                </span>
              </td>
            </tr>
            <tr>
              <th>Academic Session</th>
              <td>
                <span className="font-semibold font-mono">{item.session}</span>
              </td>
            </tr>
            <tr>
              <th>PDF Document Link</th>
              <td>
                {item.pdfUrl ? (
                  <div className="flex items-center gap-3.5 flex-wrap">
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="admin-download-btn py-2 px-4 text-[13px]"
                    >
                      <DownloadIcon size={14} />
                      <span>Download PDF Document</span>
                    </a>
                  </div>
                ) : (
                  <span className="text-[var(--admin-text-subtle)]">No PDF linked</span>
                )}
              </td>
            </tr>
            <tr>
              <th>Public Website</th>
              <td>
                <Link
                  href="/authorities"
                  target="_blank"
                  rel="noreferrer"
                  className="admin-link inline-flex items-center gap-1"
                >
                  <span>View Public Authorities &amp; Governance Page</span>
                  <ExternalLinkIcon size={12} />
                </Link>
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
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Council Document"
        message="Are you sure you want to remove this official council governance PDF document from the website?"
        itemName={item.title}
        confirmLabel="Yes, Delete Document"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
