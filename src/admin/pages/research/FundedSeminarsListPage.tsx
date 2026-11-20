"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { ConfirmDialog } from "@/admin/components/ConfirmDialog";
import { ActionButtons } from "@/admin/components/ActionButtons";
import {
  FlaskIcon,
  PlusIcon,
  EyeIcon,
  EditIcon,
  TrashIcon,
  GalleryIcon,
  CloseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon
} from "@/admin/components/Icons";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";
import { isItemActive } from "@/admin/types";

export function FundedSeminarsListPage() {
  const router = useRouter();
  const {
    fundedSeminars,
    deleteFundedSeminar,
    toggleFundedSeminarStatus
  } = useAdmin();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");
  const [openGalleryId, setOpenGalleryId] = useState<number | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  // Lightbox Modal state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    seminarTitle: string;
    photos: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    seminarTitle: "",
    photos: [],
    currentIndex: 0
  });

  const filteredSeminars = useMemo(() => {
    let result = fundedSeminars;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.dayOrSession.toLowerCase().includes(q) ||
          (s.description && s.description.toLowerCase().includes(q))
      );
    }
    return filterByStatus(result, statusFilter);
  }, [fundedSeminars, searchQuery, statusFilter]);

  const totalPhotosCount = useMemo(() => {
    return fundedSeminars.reduce((sum, s) => sum + (s.photos ? s.photos.length : 0), 0);
  }, [fundedSeminars]);

  const toggleGallery = (id: number) => {
    setOpenGalleryId((prev) => (prev === id ? null : id));
  };

  const handleOpenLightbox = (seminarTitle: string, photos: string[], index: number) => {
    setLightbox({
      isOpen: true,
      seminarTitle,
      photos,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrevPhoto = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.photos.length) % prev.photos.length
    }));
  };

  const handleNextPhoto = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.photos.length
    }));
  };

  const handleDeleteConfirm = () => {
    if (deleteTargetId !== null) {
      deleteFundedSeminar(deleteTargetId);
      setDeleteTargetId(null);
      if (openGalleryId === deleteTargetId) {
        setOpenGalleryId(null);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[var(--admin-red)] text-white">
              <FlaskIcon size={16} />
            </span>
            <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-[var(--admin-red)]">
              R&amp;D Management
            </span>
          </div>
          <h1 className="admin-heading">Govt. Funded Seminars</h1>
          <p className="admin-subheading">
            Manage national seminar sessions, photographic gallery archives, and conference proceedings.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search seminars..."
            ariaLabel="Search seminars"
          />

          <Link
            href="/admin/research/funded-seminars/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Create Seminar</span>
          </Link>
        </div>
      </div>

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        <div className="admin-card flex items-center gap-4 py-4 px-5">
          <div className="w-11 h-11 rounded-lg bg-[rgba(207,20,39,0.1)] text-[var(--admin-red)] flex items-center justify-center">
            <FlaskIcon size={22} />
          </div>
          <div>
            <div className="text-[22px] font-extrabold text-[var(--admin-text)]">
              {fundedSeminars.length}
            </div>
            <div className="text-[13px] text-[var(--admin-text-subtle)] font-medium">
              Seminar Sessions
            </div>
          </div>
        </div>

        <div className="admin-card flex items-center gap-4 py-4 px-5">
          <div className="w-11 h-11 rounded-lg bg-[rgba(37,99,235,0.1)] text-[#2563eb] flex items-center justify-center">
            <GalleryIcon size={22} />
          </div>
          <div>
            <div className="text-[22px] font-extrabold text-[var(--admin-text)]">
              {totalPhotosCount}
            </div>
            <div className="text-[13px] text-[var(--admin-text-subtle)] font-medium">
              Archived Photos
            </div>
          </div>
        </div>

        <div className="admin-card flex items-center gap-4 py-4 px-5">
          <div className="w-11 h-11 rounded-lg bg-[rgba(16,185,129,0.1)] text-[#10b981] flex items-center justify-center">
            <EyeIcon size={22} />
          </div>
          <div>
            <div className="text-[22px] font-extrabold text-[var(--admin-text)]">
              {fundedSeminars.filter((s) => isItemActive(s.status)).length}
            </div>
            <div className="text-[13px] text-[var(--admin-text-subtle)] font-medium">
              Published to Website
            </div>
          </div>
        </div>
      </div>

      {/* Main Table: Seminars (Seminar 1, 2, 3...) */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Funded Seminars Table">
          <thead>
            <tr>
              <th className="w-[70px] text-center">SR NO</th>
              <th>SEMINAR SESSION &amp; TITLE</th>
              <th className="w-[140px] text-center">PHOTOS</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter
                  value={statusFilter}
                  onChange={setStatusFilter}
                  label="STATUS"
                />
              </th>
              <th className="w-[150px] text-center">GALLERY</th>
              <th className="w-[110px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredSeminars.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No seminars found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No seminars matching "${searchQuery}".`
                      : "Click '+ Create Seminar' to add your first session."}
                  </div>
                </td>
              </tr>
            ) : (
              filteredSeminars.map((item, idx) => {
                const isVisible = isItemActive(item.status);
                const isGalleryOpen = openGalleryId === item.id;
                const photoCount = item.photos?.length || 0;

                return (
                  <React.Fragment key={item.id}>
                    <tr>
                      {/* Serial Number */}
                      <td className="text-center font-mono font-bold text-[var(--admin-text-subtle)] text-[13px]">
                        {idx + 1}
                      </td>

                      {/* Seminar Title & Description */}
                      <td>
                        <div
                          className="admin-table-title cursor-pointer inline-block"
                          onClick={() => router.push(`/admin/research/funded-seminars/${item.id}`)}
                          title="Click to view details and full gallery"
                        >
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-xs text-[var(--admin-text-subtle)] mt-0.5 leading-[1.4] max-w-[550px]">
                            {item.description}
                          </div>
                        )}
                      </td>

                      {/* Photo Count Badge */}
                      <td className="text-center">
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-[14px] bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] text-xs font-bold text-[var(--admin-text)]">
                          <GalleryIcon size={13} />
                          <span>{photoCount} Photos</span>
                        </span>
                      </td>

                      {/* Status */}
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => toggleFundedSeminarStatus(item.id)}
                          className={`admin-badge cursor-pointer border-none ${
                            isVisible ? "admin-badge-active" : "admin-badge-inactive"
                          }`}
                          title="Click to toggle status"
                        >
                          {isVisible ? "Active" : "Inactive"}
                        </button>
                      </td>

                      {/* Gallery Toggle Button matching screenshot */}
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => toggleGallery(item.id)}
                          className={`inline-flex items-center justify-center gap-1.5 ${isGalleryOpen ? "bg-[#1e293b]" : "bg-[var(--admin-red)]"} text-white py-1.5 px-4 rounded border-none font-bold text-xs tracking-[0.02em] cursor-pointer transition-colors min-w-[100px]`}
                          title={isGalleryOpen ? "Collapse photo gallery" : "Expand to view all photos"}
                        >
                          <span>{isGalleryOpen ? "Close ↑" : "View ↓"}</span>
                        </button>
                      </td>

                      {/* Action Buttons: View (Eye) & Edit (Pencil) */}
                      <td className="text-center whitespace-nowrap">
                        <ActionButtons
                          onView={() => router.push(`/admin/research/funded-seminars/${item.id}`)}
                          onEdit={() => router.push(`/admin/research/funded-seminars/${item.id}/edit`)}
                          viewTitle="View Seminar Details"
                          editTitle="Edit Seminar & Photos"
                        />
                      </td>
                    </tr>

                    {/* Expanded Gallery Row */}
                    {isGalleryOpen && (
                      <tr>
                        <td className="py-4 px-5 pb-6 bg-[#f8fafc] border-b-2 border-b-[var(--admin-red)]" colSpan={6}>
                          <div className="flex flex-col gap-3.5">
                            {/* Gallery Bar */}
                            <div className="flex justify-between items-center flex-wrap gap-3 pb-2.5 border-b border-[#e2e8f0]">
                              <div>
                                <h3 className="text-[15px] font-bold text-[var(--admin-text)] m-0">
                                  {item.title} — Photographic Gallery ({photoCount} Photos)
                                </h3>
                                <div className="text-xs text-[var(--admin-text-subtle)] mt-0.5">
                                  Click any image thumbnail to view in full resolution lightbox.
                                </div>
                              </div>

                              <div className="flex items-center gap-2.5">
                                <Link
                                  href={`/admin/research/funded-seminars/${item.id}/edit`}
                                  className="admin-btn admin-btn-secondary text-xs py-1 px-3"
                                >
                                  <EditIcon size={12} />
                                  <span>Manage Photos</span>
                                </Link>
                                <Link
                                  href={`/admin/research/funded-seminars/${item.id}`}
                                  className="admin-btn admin-btn-primary text-xs py-1 px-3"
                                >
                                  <ExternalLinkIcon size={12} />
                                  <span>Open Full Page</span>
                                </Link>
                              </div>
                            </div>

                            {/* Image Grid */}
                            {photoCount === 0 ? (
                              <div className="p-8 text-center bg-white border border-dashed border-[var(--admin-border)] rounded-md">
                                <p className="text-[13px] text-[var(--admin-text-subtle)] m-0">
                                  No photos uploaded yet for this seminar session.
                                </p>
                                <Link
                                  href={`/admin/research/funded-seminars/${item.id}/edit`}
                                  className="admin-btn admin-btn-primary mt-2.5 inline-flex text-xs"
                                >
                                  <PlusIcon size={12} />
                                  <span>Add Photos</span>
                                </Link>
                              </div>
                            ) : (
                              <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2.5">
                                {item.photos.map((photoSrc, pIdx) => (
                                  <div
                                    key={pIdx}
                                    onClick={() => handleOpenLightbox(item.title, item.photos, pIdx)}
                                    className="admin-gallery-thumb relative aspect-[4/3] rounded-md overflow-hidden border border-[#e2e8f0] bg-white cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all"
                                    title={`Click to view Photo #${pIdx + 1}`}
                                  >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      src={photoSrc}
                                      alt={`${item.title} photo ${pIdx + 1}`}
                                      loading="lazy"
                                      className="w-full h-full object-cover block"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='100' viewBox='0 0 130 100'%3E%3Crect width='130' height='100' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-size='11'%3ESeminar Photo%3C/text%3E%3C/svg%3E";
                                      }}
                                    />
                                    <span className="absolute bottom-1 right-1 bg-black/65 text-white text-[10px] font-bold py-px px-1.5 rounded-[3px] font-mono">
                                      #{pIdx + 1}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deleteTargetId !== null}
        title="Delete Seminar Session"
        message="Are you sure you want to delete this seminar session and its photo gallery archive?"
        confirmLabel="Yes, Delete Seminar"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

      {/* Lightbox Modal for Photo Preview */}
      {lightbox.isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-5"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar in Lightbox */}
          <div
            className="absolute top-5 left-6 right-6 flex justify-between items-center text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="text-base font-bold">{lightbox.seminarTitle}</div>
              <div className="text-[13px] text-[#cbd5e1]">
                Photo {lightbox.currentIndex + 1} of {lightbox.photos.length}
              </div>
            </div>

            <button
              type="button"
              onClick={handleCloseLightbox}
              className="bg-white/15 border-none text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              title="Close (Esc)"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/15 border-none text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10"
            title="Previous Photo"
          >
            <ArrowLeftIcon size={20} />
          </button>

          {/* Active Image */}
          <div
            className="max-w-[85vw] max-h-[80vh] flex items-center justify-center rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.photos[lightbox.currentIndex]}
              alt={`Seminar photo ${lightbox.currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain block"
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
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
