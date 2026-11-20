"use client";

import React, { useRef, useState } from "react";
import { GalleryIcon, TrashIcon, CheckIcon } from "./Icons";

interface ImageUploadInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  id?: string;
  helperText?: string;
  previewHeight?: number;
}

export function ImageUploadInput({
  label = "Upload Image",
  value,
  onChange,
  error,
  required = false,
  id = "image-upload",
  helperText = "Select a photo from your device (PNG, JPG, WEBP).",
  previewHeight = 180
}: ImageUploadInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (PNG, JPG, WEBP).");
      return;
    }

    setFileName(file.name);
    const sizeInKb = (file.size / 1024).toFixed(1);
    setFileSize(`${sizeInKb} KB`);

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onChange(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleTriggerPicker = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileName("");
    setFileSize("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    onChange("");
  };

  const displayName = fileName || (value ? value.split("/").pop() || "Uploaded Photo" : "");

  return (
    <div className="admin-form-group w-full">
      {label && (
        <label htmlFor={id} className="admin-label">
          {label} {required && <span className="text-[var(--admin-red)]">*</span>}
        </label>
      )}

      {/* Hidden system file picker input */}
      <input
        ref={fileInputRef}
        id={id}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/jpg,image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {!value ? (
        /* Empty State: Click to upload from system */
        <div
          onClick={handleTriggerPicker}
          className={`admin-upload-zone ${
            error ? "border-2 border-dashed border-[var(--admin-red)]" : "border-2 border-dashed border-[var(--admin-border)]"
          } rounded-lg py-6 px-5 text-center bg-[var(--admin-bg-secondary)] cursor-pointer transition-all flex flex-col items-center gap-2.5`}
        >
          <div className="w-12 h-12 rounded-full bg-[rgba(207,20,39,0.08)] text-[var(--admin-red)] flex items-center justify-center">
            <GalleryIcon size={22} />
          </div>

          <div>
            <div className="text-sm font-bold text-[var(--admin-text)]">
              Upload Image from Device
            </div>
            <div className="text-xs text-[var(--admin-text-subtle)] mt-0.5">
              {helperText}
            </div>
          </div>

          <button
            type="button"
            className="admin-btn admin-btn-primary text-xs py-1.5 px-4 mt-1 pointer-events-none"
          >
            <span>Choose Image File</span>
          </button>
        </div>
      ) : (
        /* Selected State: Displays Image Preview + Change/Remove controls */
        <div className="border border-[var(--admin-border)] rounded-lg p-4 bg-[var(--admin-bg-secondary)] flex flex-col gap-3">
          {/* Live Image Preview Thumbnail */}
          <div
            className="w-full rounded-md overflow-hidden border border-[var(--admin-border)] bg-white flex items-center justify-center"
            style={{ maxHeight: previewHeight }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={value}
              alt="Uploaded Preview"
              className="max-w-full object-contain block"
              style={{ maxHeight: previewHeight }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='160' viewBox='0 0 300 160'%3E%3Crect width='300' height='160' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-size='13'%3EPhoto Loaded%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Details & Actions Bar */}
          <div className="flex items-center justify-between flex-wrap gap-2.5">
            <div className="overflow-hidden flex-1 min-w-[180px]">
              <div
                className="text-[13px] font-bold text-[var(--admin-text)] whitespace-nowrap text-ellipsis overflow-hidden"
                title={displayName}
              >
                {displayName}
              </div>
              <div className="text-[11px] text-[var(--admin-text-subtle)] mt-0.5 flex gap-2 items-center">
                <span className="text-[#10b981] font-bold inline-flex items-center gap-0.5">
                  <CheckIcon size={12} /> Image attached
                </span>
                {fileSize && <span>• {fileSize}</span>}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleTriggerPicker}
                className="admin-btn admin-btn-secondary text-xs py-1 px-3"
                title="Select another image from device"
              >
                <span>Change Image</span>
              </button>

              <button
                type="button"
                onClick={handleRemove}
                className="admin-btn admin-btn-danger text-xs py-1 px-2.5"
                title="Remove image"
              >
                <TrashIcon size={13} />
              </button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <span className="text-xs text-[var(--admin-red)] mt-1 block font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
