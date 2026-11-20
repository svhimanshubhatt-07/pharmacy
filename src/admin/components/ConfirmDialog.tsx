"use client";

import React, { useEffect } from "react";
import { AlertTriangleIcon, CloseIcon } from "./Icons";

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  itemName?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  isOpen,
  title,
  message,
  itemName,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel
}: ConfirmDialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onCancel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      className="admin-modal-backdrop"
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-dialog-title"
    >
      <div
        className="admin-modal-box max-w-[440px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="admin-modal-header">
          <div className="flex items-center gap-2.5">
            <span className="text-[var(--admin-primary)] flex">
              <AlertTriangleIcon size={20} />
            </span>
            <span id="confirm-dialog-title" className="admin-modal-title">
              {title}
            </span>
          </div>
          <button
            type="button"
            className="admin-action-btn p-1"
            onClick={onCancel}
            aria-label="Close dialog"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        <div className="admin-modal-body">
          <p className="m-0 mb-2.5 text-sm text-[var(--admin-text)]">
            {message}
          </p>
          {itemName && (
            <div className="py-2.5 px-3 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] text-[13px] font-semibold text-[var(--admin-text)] break-words">
              &ldquo;{itemName}&rdquo;
            </div>
          )}
          <p className="mt-3 mb-0 mx-0 text-xs text-[var(--admin-danger-text)]">
            Warning: This action will immediately remove the record from this session.
          </p>
        </div>

        <div className="admin-modal-footer">
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className="admin-btn admin-btn-primary bg-[var(--admin-primary)]"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
