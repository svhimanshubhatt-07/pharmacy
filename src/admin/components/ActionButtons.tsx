"use client";

import React from "react";
import Link from "next/link";
import { EyeIcon, EditIcon } from "./Icons";

export interface ActionButtonsProps {
  onView?: () => void;
  viewHref?: string;
  viewTitle?: string;
  onEdit?: () => void;
  editHref?: string;
  editTitle?: string;
  /** Legacy alias for viewTitle */
  title?: string;
}

export function ActionButtons({
  onView,
  viewHref,
  viewTitle = "View Details",
  onEdit,
  editHref,
  editTitle = "Edit",
  title
}: ActionButtonsProps) {
  const actualViewTitle = title || viewTitle;

  return (
    <div className="inline-flex items-center justify-center gap-1.5">
      {/* 1. View Eye Icon */}
      {viewHref ? (
        <Link
          href={viewHref}
          className="admin-action-btn admin-eye-btn py-1 px-1.5 text-[var(--admin-text)] rounded inline-flex items-center justify-center"
          title={actualViewTitle}
          aria-label={actualViewTitle}
        >
          <EyeIcon size={15} />
        </Link>
      ) : onView ? (
        <button
          type="button"
          className="admin-action-btn admin-eye-btn py-1 px-1.5 text-[var(--admin-text)] rounded inline-flex items-center justify-center"
          onClick={onView}
          title={actualViewTitle}
          aria-label={actualViewTitle}
        >
          <EyeIcon size={15} />
        </button>
      ) : null}

      {/* 2. Edit Pencil Icon */}
      {editHref ? (
        <Link
          href={editHref}
          className="admin-action-btn admin-edit-btn py-1 px-1.5 text-[var(--admin-text)] rounded inline-flex items-center justify-center"
          title={editTitle}
          aria-label={editTitle}
        >
          <EditIcon size={15} />
        </Link>
      ) : onEdit ? (
        <button
          type="button"
          className="admin-action-btn admin-edit-btn py-1 px-1.5 text-[var(--admin-text)] rounded inline-flex items-center justify-center"
          onClick={onEdit}
          title={editTitle}
          aria-label={editTitle}
        >
          <EditIcon size={15} />
        </button>
      ) : null}
    </div>
  );
}
