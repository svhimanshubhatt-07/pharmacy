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
  DownloadIcon
} from "@/admin/components/Icons";

interface AllApprovalsDetailPageProps {
  id: number;
}

export function AllApprovalsDetailPage({ id }: AllApprovalsDetailPageProps) {
  const router = useRouter();
  const {
    getApprovalDocById,
    toggleApprovalDocStatus,
    deleteApprovalDoc
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getApprovalDocById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/approvals" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Approvals</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Document Not Found</h2>
          <p className="admin-desc">
            The requested approval document {id} could not be found or has been deleted.
          </p>
          <Link href="/admin/approvals" className="admin-btn admin-btn-primary mt-3 inline-flex">
            Return to Approvals
          </Link>
        </div>
      </div>
    );
  }

  const isActive = item.status === "Active" || item.status === "Visible";

  const handleToggleStatus = () => {
    toggleApprovalDocStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteApprovalDoc(item.id);
    setIsDeleting(false);
    router.push("/admin/approvals");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/approvals"
          className="admin-back-btn"
          aria-label="Back to Approvals"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Approvals</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/approvals/${item.id}/edit`}
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
            title={isActive ? "Set Inactive" : "Set Active"}
          >
            {isActive ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
            <span>{isActive ? "Set Inactive" : "Set Active"}</span>
          </button>

          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => setIsDeleting(true)}
            title="Delete approval document"
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
          Record ID: {item.id} • Session: {item.session} • {item.body}
        </p>
      </div>

      {/* Detail Table Card */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            Approval Document Specifications
          </h2>

          <span
            className={`admin-badge ${
              isActive ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Table format: ek ke niche ek */}
        <table className="admin-detail-table" aria-label="Approval Document Details Table">
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
              <th>Academic Session</th>
              <td>
                <span className="font-mono font-bold py-0.5 px-2 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] text-[var(--admin-primary)] text-[13px]">
                  {item.session}
                </span>
              </td>
            </tr>
            <tr>
              <th>Document Title / Subject</th>
              <td>
                <div className="text-base font-semibold text-[var(--admin-text)]">
                  {item.title}
                </div>
              </td>
            </tr>
            <tr>
              <th>Regulatory Authority / University</th>
              <td>
                <span className="font-semibold text-[var(--admin-text)]">{item.body}</span>
              </td>
            </tr>
            <tr>
              <th>Official PDF Document</th>
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
              <th>Public Archive</th>
              <td>
                <Link
                  href="/approvals"
                  target="_blank"
                  rel="noreferrer"
                  className="admin-link inline-flex items-center gap-1"
                >
                  <span>View Public Approvals Archive</span>
                  <ExternalLinkIcon size={12} />
                </Link>
              </td>
            </tr>
            <tr>
              <th>Status</th>
              <td>
                <span
                  className={`admin-badge ${
                    isActive ? "admin-badge-active" : "admin-badge-inactive"
                  }`}
                >
                  {isActive ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Approval Document"
        message="Are you sure you want to remove this official approval document from the website archive?"
        itemName={item.title}
        confirmLabel="Yes, Delete Document"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
