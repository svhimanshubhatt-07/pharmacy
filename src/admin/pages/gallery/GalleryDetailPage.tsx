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

interface GalleryDetailPageProps {
  id: number;
}

export function GalleryDetailPage({ id }: GalleryDetailPageProps) {
  const router = useRouter();
  const {
    getGalleryItemById,
    toggleGalleryItemStatus,
    deleteGalleryItem
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getGalleryItemById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/gallery" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Gallery</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Image Not Found</h2>
          <p className="admin-desc">
            The requested gallery image #{id} could not be found or has been deleted.
          </p>
          <Link href="/admin/gallery" className="admin-btn admin-btn-primary mt-3 inline-flex">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleGalleryItemStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteGalleryItem(item.id);
    setIsDeleting(false);
    router.push("/admin/gallery");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/gallery"
          className="admin-back-btn"
          aria-label="Back to Gallery"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Gallery</span>
        </Link>

        {/* Action Controls: Hide/Show, Delete, Edit */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={handleToggleStatus}
            title={isVisible ? "Hide from website" : "Make visible to public"}
          >
            {isVisible ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
            <span>{isVisible ? "Hide Image" : "Show Image"}</span>
          </button>

          <Link
            href={`/admin/gallery/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit image URL"
          >
            <EditIcon size={14} />
            <span>Edit</span>
          </Link>

          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => setIsDeleting(true)}
            title="Delete photo"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <h1 className="admin-heading">
          Gallery Image #{item.id}
        </h1>
        <p className="admin-subheading">
          Status: {isVisible ? "Active" : "Inactive"}
        </p>
      </div>

      {/* Photo Preview & Detail Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-5">
        {/* Large Image Box */}
        <div className="admin-card p-4 flex flex-col gap-3">
          <div className="text-[13px] font-bold uppercase text-[var(--admin-text-subtle)] tracking-[0.05em]">
            High-Resolution Image
          </div>
          <div className="w-full h-[380px] bg-[#0b0f19] border border-[var(--admin-border)] overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={`Gallery Image #${item.id}`}
              className="w-full h-full object-contain block"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='16'%3EImage Not Available%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <a
              href={item.image}
              target="_blank"
              rel="noreferrer"
              className="admin-link inline-flex items-center gap-1 text-xs"
            >
              <span>Open in New Tab</span>
              <ExternalLinkIcon size={12} />
            </a>
            <span
              className={`admin-badge ${
                isVisible ? "admin-badge-active" : "admin-badge-inactive"
              }`}
            >
              {isVisible ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {/* Specifications Table Card */}
        <div className="admin-detail-table-card">
          <div className="mb-4">
            <h2 className="admin-section-heading m-0">
              Image Specifications
            </h2>
          </div>

          <table className="admin-detail-table" aria-label="Photo Details Table">
            <tbody>
              <tr>
                <th>Image ID</th>
                <td>
                  <span className="font-mono font-bold text-sm">
                    {item.id}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Public Website</th>
                <td>
                  <Link
                    href="/gallery"
                    target="_blank"
                    rel="noreferrer"
                    className="admin-link inline-flex items-center gap-1"
                  >
                    <span>View Public Gallery</span>
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
      </div>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Image"
        message="Are you sure you want to remove this photograph from the gallery?"
        itemName={`Image #${item.id}`}
        confirmLabel="Yes, Delete Image"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
