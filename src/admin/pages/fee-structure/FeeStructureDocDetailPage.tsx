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
  FeeReceiptIcon,
  DownloadIcon
} from "@/admin/components/Icons";
import { FeeStructureCourseKey } from "@/admin/types";
import { FEE_STRUCTURE_COURSES } from "@/admin/data/feeStructure";

interface FeeStructureDocDetailPageProps {
  course: FeeStructureCourseKey;
  id: number;
}

export function FeeStructureDocDetailPage({ course, id }: FeeStructureDocDetailPageProps) {
  const router = useRouter();
  const {
    getFeeStructureDocById,
    toggleFeeStructureDocStatus,
    deleteFeeStructureDoc
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getFeeStructureDocById(id);
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

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href={`/admin/fee-structure/${course}`} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {meta.shortTitle} Fee Structure</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Fee Document Not Found</h2>
          <p className="admin-desc">
            The requested fee structure document #{id} could not be found or has been deleted.
          </p>
          <Link
            href={`/admin/fee-structure/${course}`}
            className="admin-btn admin-btn-primary mt-3 inline-flex"
          >
            Return to {meta.shortTitle} Fee Structure
          </Link>
        </div>
      </div>
    );
  }

  const isActive = item.status === "Active" || item.status === "Visible";

  const handleToggleStatus = () => {
    toggleFeeStructureDocStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteFeeStructureDoc(item.id);
    setIsDeleting(false);
    router.push(`/admin/fee-structure/${course}`);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href={`/admin/fee-structure/${course}`}
          className="admin-back-btn"
          aria-label={`Back to ${meta.shortTitle} Fee Structure`}
        >
          <ArrowLeftIcon size={14} />
          <span>Back to {meta.shortTitle} Fee Structure</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/fee-structure/${course}/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit fee structure details"
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
            title="Permanently delete fee document"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase py-0.5 px-2 rounded-sm bg-red-600/10 text-[var(--admin-primary)]">
            <FeeReceiptIcon size={12} />
            <span>{meta.shortTitle} Fee Matrix</span>
          </span>
        </div>
        <h1 className="admin-heading">{item.title}</h1>
        <p className="admin-subheading">
          Record ID: #{item.id} • Category: {item.category} • Programme: {meta.name}
        </p>
      </div>

      {/* Tabular Format: .admin-detail-table-card & .admin-detail-table */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            {meta.shortTitle} Fee Structure Specifications
          </h2>

          <span
            className={`admin-badge ${
              isActive ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>

        <table className="admin-detail-table" aria-label={`${meta.shortTitle} Fee Details Table`}>
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
                  {meta.subtitle}
                </div>
              </td>
            </tr>

            <tr>
              <th>DOCUMENT TITLE</th>
              <td>
                <div className="text-base font-semibold text-[var(--admin-text)]">
                  {item.title}
                </div>
              </td>
            </tr>

            <tr>
              <th>CATEGORY / REGULATORY BODY</th>
              <td>
                <span className="inline-block py-1 px-2.5 text-xs font-semibold rounded-sm bg-slate-900/5 text-[var(--admin-primary)]">
                  {item.category}
                </span>
              </td>
            </tr>

            <tr>
              <th>ANNUAL FEE MATRIX PDF</th>
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

      {/* Confirm Delete Dialog */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Fee Structure Document"
        message={`Are you sure you want to delete "${item.title}"? This will remove the official fee PDF entry permanently.`}
        confirmLabel="Delete Document"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
