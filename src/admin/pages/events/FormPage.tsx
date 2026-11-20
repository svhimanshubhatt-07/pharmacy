"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { AdminItem, ItemStatus, isItemActive } from "@/admin/types";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";

interface FormPageProps {
  mode: "add" | "edit";
  entityType: "event" | "press";
  id?: number;
}

export function FormPage({
  mode,
  entityType,
  id
}: FormPageProps) {
  const router = useRouter();
  const {
    getEventById,
    getPressReleaseById,
    addEvent,
    updateEvent,
    addPressRelease,
    updatePressRelease
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const isEvent = entityType === "event";

  const entityName = isEvent ? "Event" : "Press Release";
  const sectionName = isEvent ? "Events" : "Press Releases";
  const sectionUrl = isEvent ? "/admin/events" : "/admin/press-releases";

  const existingItem = isEditing && id
    ? (isEvent ? getEventById(id) : getPressReleaseById(id))
    : undefined;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [publication, setPublication] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setTitle(existingItem.title || "");
      setDate(existingItem.date || "");
      setDescription(existingItem.description || "");
      setImageUrl(existingItem.imageUrl || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
      setPublication(existingItem.publication || "");
    } else {
      const today = new Date().toISOString().split("T")[0];
      setTitle("");
      setDate(today);
      setDescription("");
      setImageUrl("");
      setStatus("Active");
      setPublication("");
    }
    setErrors({});
  }, [isEditing, existingItem, isEvent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) {
      newErrors.title = `${isEvent ? "Event Title" : "Title"} is required.`;
    }
    if (!date.trim()) {
      newErrors.date = `${isEvent ? "Event Date" : "Publish Date"} is required.`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload: Omit<AdminItem, "id" | "createdAt"> = {
      title: title.trim(),
      date: date.trim(),
      description: description.trim(),
      imageUrl:
        imageUrl.trim() ||
        (isEvent
          ? "https://res.cloudinary.com/boss8zib/image/upload/v1793701143/WhatsApp_Image_2026-04-04_at_10.23.01_AM_1.jpg"
          : "https://res.cloudinary.com/boss8zib/image/upload/v1793435326/AmarUjala.jpg"),
      status,
      publication: !isEvent ? publication.trim() || undefined : undefined
    };

    if (isEditing && id) {
      if (isEvent) {
        updateEvent(id, payload);
      } else {
        updatePressRelease(id, payload);
      }
      router.push(`${sectionUrl}/${id}`);
    } else {
      if (isEvent) {
        addEvent(payload);
      } else {
        addPressRelease(payload);
      }
      router.push(sectionUrl);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Top Navigation Bar */}
      <div>
        <Link
          href={isEditing && id ? `${sectionUrl}/${id}` : sectionUrl}
          className="admin-back-btn"
          aria-label={`Back to ${sectionName}`}
        >
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing && id ? `${entityName} Details` : sectionName}</span>
        </Link>
      </div>

      {/* Page Title & Subheading (30px heading) */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? `Edit ${entityName}` : `Add New ${entityName}`}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update details for Record ${existingItem?.id} - "${existingItem?.title}". All changes update immediately.`
            : `Fill in the required information to publish a new ${entityName.toLowerCase()} or save as draft.`}
        </p>
      </div>

      {/* Main Individual Screen Form Card */}
      <form onSubmit={handleSubmit} className="admin-form-card">
        {/* Title Field */}
        <div className="admin-input-group">
          <label htmlFor="form-title" className="admin-label">
            {isEvent ? "Event Title" : "Title"} <span className="required">*</span>
          </label>
          <input
            id="form-title"
            type="text"
            className="admin-input"
            placeholder={`Enter ${isEvent ? "event title" : "title"}...`}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) {
                setErrors((prev) => ({ ...prev, title: "" }));
              }
            }}
          />
          {errors.title && (
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.title}
            </span>
          )}
        </div>

        {/* Date Field */}
        <div className="admin-input-group">
          <label htmlFor="form-date" className="admin-label">
            {isEvent ? "Event Date" : "Publish Date"} <span className="required">*</span>
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
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.date}
            </span>
          )}
        </div>

        {/* Optional Publication Source for Press Releases */}
        {!isEvent && (
          <div className="admin-input-group">
            <label htmlFor="form-publication" className="admin-label">
              Publication / Media Outlet Source
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

        {/* Image Upload Input */}
        <ImageUploadInput
          id="form-image"
          label={`Upload ${entityName} Image`}
          value={imageUrl}
          onChange={(val) => setImageUrl(val)}
          helperText={`Upload photo for this ${entityName.toLowerCase()} from your device storage.`}
        />

        {/* Description Field */}
        <div className="admin-input-group">
          <label htmlFor="form-desc" className="admin-label">
            Description & Summary
          </label>
          <textarea
            id="form-desc"
            className="admin-textarea"
            rows={5}
            placeholder={`Provide complete details, schedule, or highlights for this ${entityName.toLowerCase()}...`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Status Field (Always in the last line) */}
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

        {/* Bottom Actions Footer */}
        <div className="admin-form-footer">
          <Link
            href={isEditing && id ? `${sectionUrl}/${id}` : sectionUrl}
            className="admin-btn admin-btn-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
          >
            <CheckIcon size={16} />
            <span>{isEditing ? "Save Changes" : `Create ${entityName}`}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
