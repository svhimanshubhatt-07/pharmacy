"use client";

import React, { useState, useEffect } from "react";
import { AdminItem, ItemStatus, isItemActive } from "../types";
import { CloseIcon } from "./Icons";

interface DataFormProps {
  isOpen: boolean;
  itemToEdit: AdminItem | null;
  entityType: "event" | "press";
  onClose: () => void;
  onSubmit: (data: Omit<AdminItem, "id" | "createdAt">) => void;
}

export function DataForm({
  isOpen,
  itemToEdit,
  entityType,
  onClose,
  onSubmit
}: DataFormProps) {
  const isEditing = Boolean(itemToEdit);
  const isEvent = entityType === "event";

  const entityName = isEvent ? "Event" : "Press Release";
  const titleLabel = isEvent ? "Event Title" : "Title";
  const dateLabel = isEvent ? "Event Date" : "Publish Date";

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [publication, setPublication] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title || "");
      setDate(itemToEdit.date || "");
      setDescription(itemToEdit.description || "");
      setImageUrl(itemToEdit.imageUrl || "");
      setStatus(isItemActive(itemToEdit.status) ? "Active" : "Inactive");
      setPublication(itemToEdit.publication || "");
    } else {
      // Default new form values
      const today = new Date().toISOString().split("T")[0];
      setTitle("");
      setDate(today);
      setDescription("");
      setImageUrl("");
      setStatus("Active");
      setPublication(isEvent ? "" : "National Media Bureau");
    }
    setErrors({});
  }, [itemToEdit, isOpen, isEvent]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) {
      newErrors.title = `${titleLabel} is required.`;
    }
    if (!date.trim()) {
      newErrors.date = `${dateLabel} is required.`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({
      title: title.trim(),
      date: date.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim() || (isEvent
        ? "https://res.cloudinary.com/boss8zib/image/upload/v1793701143/WhatsApp_Image_2026-04-04_at_10.23.01_AM_1.jpg"
        : "https://res.cloudinary.com/boss8zib/image/upload/v1793435326/AmarUjala.jpg"),
      status,
      publication: !isEvent ? (publication.trim() || undefined) : undefined
    });

    onClose();
  };

  return (
    <div
      className="admin-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="data-form-modal-title"
    >
      <div className="admin-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="admin-modal-header">
          <div id="data-form-modal-title" className="admin-modal-title">
            {isEditing ? `Edit ${entityName}` : `Add New ${entityName}`}
          </div>
          <button
            type="button"
            className="admin-action-btn p-1"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} id="admin-data-form">
          <div className="admin-modal-body">
            {/* Title field */}
            <div className="admin-input-group">
              <label htmlFor="form-title" className="admin-label">
                {titleLabel} <span className="required">*</span>
              </label>
              <input
                id="form-title"
                type="text"
                className="admin-input"
                placeholder={`Enter ${titleLabel.toLowerCase()}...`}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errors.title) {
                    setErrors((prev) => ({ ...prev, title: "" }));
                  }
                }}
              />
              {errors.title && (
                <span className="text-xs text-[var(--admin-danger-text)]">
                  {errors.title}
                </span>
              )}
            </div>

            {/* Date and Status row */}
            {/* Date */}
            <div className="admin-input-group">
              <label htmlFor="form-date" className="admin-label">
                {dateLabel} <span className="required">*</span>
              </label>
              <input
                id="form-date"
                type="date"
                className="admin-input"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  if (errors.date) {
                    setErrors((prev) => ({ ...prev, date: "" }));
                  }
                }}
              />
              {errors.date && (
                <span className="text-xs text-[var(--admin-danger-text)]">
                  {errors.date}
                </span>
              )}
            </div>

            {/* Optional Publication Source for Press Releases */}
            {!isEvent && (
              <div className="admin-input-group">
                <label htmlFor="form-publication" className="admin-label">
                  Publication / Media Outlet
                </label>
                <input
                  id="form-publication"
                  type="text"
                  className="admin-input"
                  placeholder="e.g. Amar Ujala, Dainik Jagran, National Bureau"
                  value={publication}
                  onChange={(e) => setPublication(e.target.value)}
                />
              </div>
            )}

            {/* Image URL */}
            <div className="admin-input-group">
              <label htmlFor="form-image" className="admin-label">
                Image URL
              </label>
              <input
                id="form-image"
                type="url"
                className="admin-input"
                placeholder="https://... or Cloudinary link"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <span className="text-[11px] text-[var(--admin-text-subtle)]">
                Leave empty to use the default high-resolution image.
              </span>
            </div>

            {/* Description */}
            <div className="admin-input-group">
              <label htmlFor="form-desc" className="admin-label">
                Description / Summary
              </label>
              <textarea
                id="form-desc"
                className="admin-textarea"
                rows={3}
                placeholder={`Provide a concise summary of this ${entityName.toLowerCase()}...`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Status (Always in the last line) */}
            <div className="admin-input-group mb-0">
              <label htmlFor="form-status" className="admin-label">
                Status <span className="required">*</span>
              </label>
              <select
                id="form-status"
                className="admin-select"
                value={isItemActive(status) ? "Active" : "Inactive"}
                onChange={(e) => setStatus(e.target.value as ItemStatus)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="admin-modal-footer">
            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="admin-btn admin-btn-primary"
            >
              {isEditing ? "Save Changes" : `Create ${entityName}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
