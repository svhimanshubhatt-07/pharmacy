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
  TrashIcon
} from "@/admin/components/Icons";

interface RecognitionDetailPageProps {
  id: number;
}

export function RecognitionDetailPage({ id }: RecognitionDetailPageProps) {
  const router = useRouter();
  const { getRecognitionById, toggleRecognitionStatus, deleteRecognition } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getRecognitionById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/home/recognitions" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Government Recognitions</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Recognition Record Not Found</h2>
          <p className="admin-desc">
            The requested recognition record #{id} could not be found or has been deleted.
          </p>
          <Link
            href="/admin/home/recognitions"
            className="admin-btn admin-btn-primary mt-3 inline-flex"
          >
            Return to Recognitions
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleRecognitionStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteRecognition(item.id);
    setIsDeleting(false);
    router.push("/admin/home/recognitions");
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/home/recognitions"
          className="admin-back-btn"
          aria-label="Back to Government Recognitions"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Government Recognitions</span>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/home/recognitions/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit recognition"
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
            title="Delete recognition"
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
          Record ID: #{item.id} • Homepage Statutory Recognition
        </p>
      </div>

      {/* Detail Table Card: ONLY Image and Heading (+ Status & Record ID) */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            Recognition Specifications
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        <table className="admin-detail-table" aria-label="Recognition Details Table">
          <tbody>
            <tr>
              <th>Record ID</th>
              <td>
                <span className="font-mono font-bold text-sm">
                  #{item.id}
                </span>
              </td>
            </tr>

            {/* Heading / Title */}
            <tr>
              <th>Heading / Title</th>
              <td>
                <div className="text-base font-bold text-[var(--admin-text)]">
                  {item.title}
                </div>
              </td>
            </tr>

            {/* Image / Logo */}
            <tr>
              <th>Recognition Logo / Image</th>
              <td>
                <div className="max-w-[240px] h-[140px] border border-[var(--admin-border)] bg-slate-50 rounded p-3 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'%3E%3Crect width='200' height='120' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-size='12'%3ELogo Not Found%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </td>
            </tr>

            {/* Status */}
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

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Government Recognition"
        message="Are you sure you want to remove this statutory recognition from the homepage?"
        itemName={item.title}
        confirmLabel="Yes, Delete"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
