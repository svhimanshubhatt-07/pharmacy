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
  GalleryIcon,
  CloseIcon,
  ArrowRightIcon
} from "@/admin/components/Icons";

interface FundedSeminarDetailPageProps {
  id: number;
}

export function FundedSeminarDetailPage({ id }: FundedSeminarDetailPageProps) {
  const router = useRouter();
  const {
    getFundedSeminarById,
    toggleFundedSeminarStatus,
    deleteFundedSeminar
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const item = getFundedSeminarById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/research/funded-seminars" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Funded Seminars</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Seminar Record Not Found</h2>
          <p className="admin-desc">
            The requested funded seminar record #{id} could not be found or has been deleted.
          </p>
          <Link
            href="/admin/research/funded-seminars"
            className="admin-btn admin-btn-primary mt-3 inline-flex"
          >
            Return to Funded Seminars
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);
  const photos = item.photos || [];

  const handleToggleStatus = () => {
    toggleFundedSeminarStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteFundedSeminar(item.id);
    setIsDeleting(false);
    router.push("/admin/research/funded-seminars");
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/research/funded-seminars"
          className="admin-back-btn"
          aria-label="Back to Funded Seminars"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Funded Seminars</span>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/research/funded-seminars/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit seminar details & photos"
          >
            <EditIcon size={14} />
            <span>Edit</span>
          </Link>

          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={handleToggleStatus}
            title={isVisible ? "Hide from public website" : "Make visible to public"}
          >
            {isVisible ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
            <span>{isVisible ? "Hide" : "Show"}</span>
          </button>

          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => setIsDeleting(true)}
            title="Delete seminar"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <h1 className="admin-heading">{item.title}</h1>
        <p className="admin-subheading">
          Record ID: #{item.id} • {item.dayOrSession} • {photos.length} Archived Photos
        </p>
      </div>

      {/* Detail Table Card */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            Seminar Session Overview
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        <table className="admin-detail-table" aria-label="Seminar Details Table">
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
              <th>Seminar Title</th>
              <td>
                <div className="text-base font-bold text-[var(--admin-text)]">
                  {item.title}
                </div>
              </td>
            </tr>

            <tr>
              <th>Day / Session</th>
              <td>
                <span className="font-semibold text-[var(--admin-red)]">
                  {item.dayOrSession}
                </span>
              </td>
            </tr>

            {item.description && (
              <tr>
                <th>Description / Highlights</th>
                <td>
                  <span className="text-[var(--admin-text)] leading-[1.6]">
                    {item.description}
                  </span>
                </td>
              </tr>
            )}

            <tr>
              <th>Total Archived Photos</th>
              <td>
                <span className="inline-flex items-center gap-1.5 font-bold text-[var(--admin-text)]">
                  <GalleryIcon size={15} />
                  <span>{photos.length} Photos in Gallery</span>
                </span>
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

      {/* Complete Photographic Gallery Grid */}
      <div className="admin-card py-5 px-6">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3 pb-3 border-b border-[var(--admin-border)]">
          <div>
            <h2 className="admin-section-heading m-0">
              Seminar Photographic Gallery ({photos.length} Photos)
            </h2>
            <p className="admin-subheading mt-1 mb-0 mx-0">
              Click any photo to enlarge in full-screen lightbox.
            </p>
          </div>

          <Link
            href={`/admin/research/funded-seminars/${item.id}/edit`}
            className="admin-btn admin-btn-primary text-[13px]"
          >
            <EditIcon size={14} />
            <span>Manage &amp; Upload Photos</span>
          </Link>
        </div>

        {photos.length === 0 ? (
          <div className="py-12 px-6 text-center bg-[var(--admin-bg-secondary)] rounded-md">
            <div className="text-[15px] font-semibold text-[var(--admin-text)]">
              No photos currently attached to this seminar session
            </div>
            <div className="text-[13px] text-[var(--admin-text-subtle)] mt-1">
              Click &quot;Manage &amp; Upload Photos&quot; above to add images.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3.5">
            {photos.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                className="admin-gallery-thumb relative aspect-[4/3] rounded-md overflow-hidden border border-[var(--admin-border)] bg-white cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all"
                title={`Click to preview Photo #${idx + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${item.title} photo ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120' viewBox='0 0 160 120'%3E%3Crect width='160' height='120' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-size='12'%3ESeminar Photo%3C/text%3E%3C/svg%3E";
                  }}
                />
                <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[11px] font-bold py-0.5 px-1.5 rounded-[3px] font-mono">
                  #{idx + 1}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Seminar Session"
        message="Are you sure you want to permanently delete this seminar and all associated gallery photos?"
        itemName={item.title}
        confirmLabel="Yes, Delete Seminar"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-5"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="absolute top-5 left-6 right-6 flex justify-between items-center text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="text-base font-bold">{item.title}</div>
              <div className="text-[13px] text-[#cbd5e1]">
                Photo {activePhotoIndex + 1} of {photos.length}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActivePhotoIndex(null)}
              className="bg-white/15 border-none text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              title="Close"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : 0));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/15 border-none text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10"
            title="Previous Photo"
          >
            <ArrowLeftIcon size={20} />
          </button>

          {/* Active Photo */}
          <div
            className="max-w-[85vw] max-h-[80vh] flex items-center justify-center rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[activePhotoIndex]}
              alt={`Seminar photo ${activePhotoIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain block"
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : 0));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/15 border-none text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10"
            title="Next Photo"
          >
            <ArrowRightIcon size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
