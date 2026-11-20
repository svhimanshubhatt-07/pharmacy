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
  ExternalLinkIcon
} from "@/admin/components/Icons";

interface RankingsDetailPageProps {
  id: number;
}

export function RankingsDetailPage({ id }: RankingsDetailPageProps) {
  const router = useRouter();
  const {
    getRankingById,
    toggleRankingStatus,
    deleteRanking
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getRankingById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/home/rankings" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Rankings</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Ranking Record Not Found</h2>
          <p className="admin-desc">
            The requested ranking milestone #{id} could not be found or has been deleted.
          </p>
          <Link href="/admin/home/rankings" className="admin-btn admin-btn-primary mt-3 inline-flex">
            Return to Rankings
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleRankingStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteRanking(item.id);
    setIsDeleting(false);
    router.push("/admin/home/rankings");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/home/rankings"
          className="admin-back-btn"
          aria-label="Back to Rankings"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Rankings</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/home/rankings/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit ranking details"
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
            title="Delete ranking record"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <h1 className="admin-heading">
          {item.title}
        </h1>
        <p className="admin-subheading">
          Record ID: #{item.id} • Institutional Accreditation Milestone
        </p>
      </div>

      {/* Detail Table Card in Tabular Format */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            Accreditation Specifications &amp; Information
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Table format: only Title, Image, Status */}
        <table className="admin-detail-table" aria-label="Ranking Details Table">
          <tbody>
            <tr>
              <th>Record ID</th>
              <td>
                <span className="font-mono font-bold text-sm">
                  #{item.id}
                </span>
              </td>
            </tr>

            <tr>
              <th>Ranking / Award Title</th>
              <td>
                <div className="text-base font-semibold text-[var(--admin-text)]">
                  {item.title}
                </div>
              </td>
            </tr>

            <tr>
              <th>Official Certificate Image</th>
              <td>
                <div className="relative w-full max-w-[520px] h-[300px] bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.certificateImage}
                    alt={item.title}
                    className="w-full h-full object-contain block p-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='300' viewBox='0 0 520 300'%3E%3Crect width='520' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='14'%3ECertificate Not Available%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="mt-2">
                  <a
                    href={item.certificateImage}
                    target="_blank"
                    rel="noreferrer"
                    className="admin-link inline-flex items-center gap-1 text-xs"
                  >
                    <span>Open certificate image in new tab</span>
                    <ExternalLinkIcon size={12} />
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
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Ranking Record"
        message="Are you sure you want to remove this ranking or accreditation milestone from the website?"
        itemName={item.title}
        confirmLabel="Yes, Delete Record"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
