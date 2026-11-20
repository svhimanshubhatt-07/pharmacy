"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { Pagination } from "@/admin/components/Pagination";
import { ConfirmDialog } from "@/admin/components/ConfirmDialog";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";
import {
  PlusIcon,
  GalleryIcon,
  EyeIcon,
  TrashIcon,
  CloseIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from "@/admin/components/Icons";
import { isItemActive } from "@/admin/types";

const ITEMS_PER_PAGE = 10; // Exactly 10 images per page

export function GalleryPage() {
  const {
    galleryList,
    toggleGalleryItemStatus,
    deleteGalleryItem
  } = useAdmin();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  // Interactive Lightbox State
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    const statusFiltered = filterByStatus(galleryList, statusFilter);
    if (!searchQuery.trim()) return statusFiltered;
    const q = searchQuery.toLowerCase();
    return statusFiltered.filter((photo) => {
      return photo.id.toString().includes(q);
    });
  }, [galleryList, searchQuery, statusFilter]);

  // Reset to first page when search or status filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredPhotos.length / ITEMS_PER_PAGE) || 1;
  const paginatedPhotos = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPhotos.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPhotos, currentPage]);

  const handleDeleteConfirm = () => {
    if (deleteTargetId !== null) {
      deleteGalleryItem(deleteTargetId);
      setDeleteTargetId(null);
      if (activePhotoIndex !== null) {
        setActivePhotoIndex(null);
      }
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0));
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Header: Title on Left, Search + Add on Right */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Gallery</h1>
          <p className="admin-subheading">
            Manage institutional gallery photos and campus imagery.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by ID..."
            ariaLabel="Search gallery"
          />

          <Link
            href="/admin/gallery/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add New Image</span>
          </Link>
        </div>
      </div>

      {/* Table Format: 10 images per page (No URL/Path display) */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Gallery Photos Table">
          <thead>
            <tr>
              <th className="w-20 text-center">SR NO</th>
              <th className="text-left pl-9">IMAGE</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[110px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPhotos.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No gallery images found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No photos matching ID "${searchQuery}". Try clearing the search.`
                      : "No photos have been added to the gallery yet."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedPhotos.map((item, index) => {
                const isVisible = isItemActive(item.status);
                const serialNumber = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;
                const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;

                return (
                  <tr key={item.id}>
                    {/* SR NO */}
                    <td className="text-center font-semibold text-[var(--admin-text-subtle)] text-[13px]">
                      {serialNumber}
                    </td>

                    {/* Image Preview Thumbnail (Clickable to open interactive lightbox) */}
                    <td className="text-left pl-9">
                      <div
                        onClick={() => setActivePhotoIndex(globalIndex)}
                        title="Click to view full image in lightbox"
                        className="w-[100px] h-[65px] rounded overflow-hidden border border-[var(--admin-border)] bg-[var(--admin-bg-secondary)] cursor-pointer inline-flex items-center justify-center transition-all duration-150 hover:scale-[1.04] hover:shadow-md"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={`Gallery photo ${item.id}`}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='65' viewBox='0 0 100 65'%3E%3Crect width='100' height='65' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='11'%3EPhoto%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </td>

                    {/* Status Toggle Badge */}
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => toggleGalleryItemStatus(item.id)}
                        className={`admin-badge cursor-pointer border-0 ${
                          isVisible ? "admin-badge-active" : "admin-badge-inactive"
                        }`}
                        title="Click to toggle status"
                      >
                        {isVisible ? "Active" : "Inactive"}
                      </button>
                    </td>

                    {/* Actions: ONLY Eye (View) and Delete (Trash) */}
                    <td className="text-center whitespace-nowrap">
                      <div className="inline-flex items-center justify-center gap-1.5">
                        {/* Eye Button -> Opens Detail Page */}
                        <Link
                          href={`/admin/gallery/${item.id}`}
                          className="admin-action-btn admin-eye-btn p-[5px_7px] text-[var(--admin-text)] rounded inline-flex items-center justify-center"
                          title={`View details of photo #${item.id}`}
                          aria-label={`View details of photo #${item.id}`}
                        >
                          <EyeIcon size={15} />
                        </Link>

                        {/* Delete Button -> Opens ConfirmDialog */}
                        <button
                          type="button"
                          onClick={() => setDeleteTargetId(item.id)}
                          className="admin-action-btn admin-action-delete p-[5px_7px] text-[var(--admin-danger-text,#ef4444)] rounded inline-flex items-center justify-center border-0 bg-transparent cursor-pointer"
                          title={`Delete photo #${item.id}`}
                          aria-label={`Delete photo #${item.id}`}
                        >
                          <TrashIcon size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Global Pagination Component (10 images per page) */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredPhotos.length}
          pageSize={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        isOpen={deleteTargetId !== null}
        title="Delete Gallery Photo"
        message="Are you sure you want to permanently delete this photo from the campus gallery?"
        confirmLabel="Yes, Delete Photo"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

      {/* Interactive Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-5"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Lightbox Top Bar */}
          <div
            className="absolute top-5 left-6 right-6 flex justify-between items-center text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="text-lg font-bold font-mono">
                Photo #{filteredPhotos[activePhotoIndex].id}
              </div>
              <div className="text-[13px] text-slate-300">
                {activePhotoIndex + 1} of {filteredPhotos.length}
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="bg-white/15 hover:bg-white/25 border-0 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                title="Close (Esc)"
              >
                <CloseIcon size={20} />
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) =>
                prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
              );
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 border-0 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10 transition-colors"
            title="Previous Photo (Left Arrow)"
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
              src={filteredPhotos[activePhotoIndex].image}
              alt={`Gallery photo ${activePhotoIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain block"
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) =>
                prev !== null ? (prev + 1) % filteredPhotos.length : 0
              );
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 border-0 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10 transition-colors"
            title="Next Photo (Right Arrow)"
          >
            <ArrowRightIcon size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
