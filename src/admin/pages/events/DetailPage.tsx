"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import {
  ArrowLeftIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  TrashIcon,
  ExternalLinkIcon
} from "@/admin/components/Icons";
import { ConfirmDialog } from "@/admin/components/ConfirmDialog";

interface DetailPageProps {
  id: number;
  entityType: "event" | "press";
}

export function DetailPage({ id, entityType }: DetailPageProps) {
  const router = useRouter();
  const {
    getEventById,
    getPressReleaseById,
    toggleEventStatus,
    togglePressReleaseStatus,
    deleteEvent,
    deletePressRelease
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);

  const isEvent = entityType === "event";
  const entityLabel = isEvent ? "Event" : "Press Release";
  const sectionLabel = isEvent ? "Events" : "Press Releases";
  const sectionUrl = isEvent ? "/admin/events" : "/admin/press-releases";

  const item = isEvent ? getEventById(id) : getPressReleaseById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href={sectionUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {sectionLabel}</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Record Not Found</h2>
          <p className="admin-desc">
            The requested {entityLabel.toLowerCase()} record {id} could not be found or has been deleted.
          </p>
          <Link href={sectionUrl} className="admin-btn admin-btn-primary mt-3">
            Return to {sectionLabel}
          </Link>
        </div>
      </div>
    );
  }

  const isActive = item.status === "Active" || item.status === "Visible";

  const handleToggleStatus = () => {
    if (isEvent) {
      toggleEventStatus(item.id);
    } else {
      togglePressReleaseStatus(item.id);
    }
  };

  const handleConfirmDelete = () => {
    if (isEvent) {
      deleteEvent(item.id);
    } else {
      deletePressRelease(item.id);
    }
    setIsDeleting(false);
    router.push(sectionUrl);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Back Button */}
        <Link
          href={sectionUrl}
          className="admin-back-btn"
          aria-label={`Back to ${sectionLabel}`}
        >
          <ArrowLeftIcon size={14} />
          <span>Back to {sectionLabel}</span>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Edit navigates to dedicated Edit Route */}
          <Link
            href={`${sectionUrl}/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title={`Edit ${entityLabel} details`}
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
            title={`Delete ${entityLabel}`}
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title: Exactly 30px font heading */}
      <div>
        <h1 className="admin-heading">
          {item.title}
        </h1>
        <p className="admin-subheading">
          Record ID: {item.id} • {entityLabel} Detail Overview
        </p>
      </div>

      {/* Detail View in Table Form (Ek ke niche ek) */}
      <div className="admin-detail-table-card">
        {/* Subheading / Div heading: Exactly 22px */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            {entityLabel} Specifications & Information
          </h2>

          <span
            className={`admin-badge ${
              isActive ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Structured Table: All details displayed one below the other */}
        <table className="admin-detail-table" aria-label="Detailed Information Table">
          <tbody>
            {/* 1. Record ID */}
            <tr>
              <th>Record ID</th>
              <td>
                <span className="font-mono font-bold text-sm text-[var(--admin-text)]">
                  {item.id}
                </span>
              </td>
            </tr>

            {/* 2. Title */}
            <tr>
              <th>{entityLabel} Title</th>
              <td>
                <div className="text-base font-semibold text-[var(--admin-text)] leading-[1.4]">
                  {item.title}
                </div>
              </td>
            </tr>

            {/* 3. Record Type */}
            <tr>
              <th>Record Type</th>
              <td>
                <span className="font-medium text-[var(--admin-text)]">
                  {entityLabel}
                </span>
              </td>
            </tr>

            {/* 4. Date */}
            <tr>
              <th>{isEvent ? "Event Date" : "Publish Date"}</th>
              <td>
                <span className="font-semibold text-[var(--admin-text)]">
                  {item.date}
                </span>
              </td>
            </tr>

            {/* 5. Media / Publication Source (for Press Releases) */}
            {!isEvent && item.publication && (
              <tr>
                <th>Media Publication</th>
                <td>
                  <span className="font-semibold text-[var(--admin-primary)]">
                    {item.publication}
                  </span>
                </td>
              </tr>
            )}

            {/* 6. Description */}
            <tr>
              <th>Description</th>
              <td>
                <div className="admin-desc whitespace-pre-line max-w-[720px]">
                  {item.description ? item.description : "No description provided for this record."}
                </div>
              </td>
            </tr>

            {/* 7. Featured Image */}
            {item.imageUrl && (
              <tr>
                <th>Featured Image</th>
                <td>
                  <div className="flex flex-col gap-2.5 max-w-[500px]">
                    <div className="admin-detail-image-box">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="admin-detail-image"
                      />
                    </div>
                    <a
                      href={item.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="admin-site-link w-fit text-xs py-1 px-3"
                    >
                      <ExternalLinkIcon size={12} />
                      <span>Open Full Resolution Image</span>
                    </a>
                  </div>
                </td>
              </tr>
            )}

            {/* 8. Created Timestamp */}
            {item.createdAt && (
              <tr>
                <th>Created In Session</th>
                <td className="text-[13px] text-[var(--admin-text-muted)]">
                  {item.createdAt}
                </td>
              </tr>
            )}

            {/* 9. Status (Always Last Row) */}
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

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isDeleting}
        title={`Delete ${entityLabel}`}
        message={`Are you sure you want to delete this ${entityLabel.toLowerCase()}?`}
        itemName={item.title}
        confirmLabel={`Delete ${entityLabel}`}
        cancelLabel="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
