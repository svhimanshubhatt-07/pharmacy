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

interface HeroBannerDetailPageProps {
  id: number;
}

export function HeroBannerDetailPage({ id }: HeroBannerDetailPageProps) {
  const router = useRouter();
  const {
    getHeroBannerById,
    toggleHeroBannerStatus,
    deleteHeroBanner
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getHeroBannerById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/home/hero-banner" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Hero Banners</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Hero Banner Not Found</h2>
          <p className="admin-desc">
            The requested hero banner slide #{id} could not be found or has been deleted.
          </p>
          <Link href="/admin/home/hero-banner" className="admin-btn admin-btn-primary mt-3 inline-flex">
            Return to Hero Banners
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleHeroBannerStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteHeroBanner(item.id);
    setIsDeleting(false);
    router.push("/admin/home/hero-banner");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/home/hero-banner"
          className="admin-back-btn"
          aria-label="Back to Hero Banners"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Hero Banners</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/home/hero-banner/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit banner image"
          >
            <EditIcon size={14} />
            <span>Edit</span>
          </Link>

          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={handleToggleStatus}
            title={isVisible ? "Hide from homepage slider" : "Make visible to public"}
          >
            {isVisible ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
            <span>{isVisible ? "Hide" : "Show"}</span>
          </button>

          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => setIsDeleting(true)}
            title="Delete banner"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <h1 className="admin-heading">
          Hero Banner #{item.id}
        </h1>
        <p className="admin-subheading">
          Record ID: {item.id} • Homepage Slider Image
        </p>
      </div>

      {/* Detail Table Card in Clean Tabular Format */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            Banner Image Specifications
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        <table className="admin-detail-table" aria-label="Hero Banner Specifications">
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
              <th>Desktop Image</th>
              <td>
                <div className="relative w-full max-w-[720px] h-[280px] bg-slate-900 border border-[var(--admin-border)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={`Desktop Banner ${item.id}`}
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='720' height='280' viewBox='0 0 720 280'%3E%3Crect width='720' height='280' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='16'%3EDesktop Image Not Available%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="mt-2">
                  <a
                    href={item.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="admin-link inline-flex items-center gap-1 text-xs"
                  >
                    <span>Open full desktop image in new tab</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <th>Mobile Image</th>
              <td>
                <div className="relative w-[220px] h-[280px] bg-slate-900 border border-[var(--admin-border)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.mobileImageUrl || item.imageUrl}
                    alt={`Mobile Banner ${item.id}`}
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='280' viewBox='0 0 220 280'%3E%3Crect width='220' height='280' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='13'%3EMobile Image Not Available%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="mt-2">
                  <a
                    href={item.mobileImageUrl || item.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="admin-link inline-flex items-center gap-1 text-xs"
                  >
                    <span>Open full mobile image in new tab</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <th>Public Website</th>
              <td>
                <Link
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="admin-link inline-flex items-center gap-1"
                >
                  <span>Preview on Homepage Slider</span>
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
        title="Delete Hero Banner Slide"
        message="Are you sure you want to delete this hero banner? This will remove the banner image from the homepage rotation."
        itemName={`Hero Banner #${item.id}`}
        confirmLabel="Yes, Delete Banner"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
