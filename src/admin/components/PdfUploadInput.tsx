"use client";

import React, { useRef, useState } from "react";
import { DownloadIcon, TrashIcon, CheckIcon, ExternalLinkIcon } from "./Icons";

interface PdfUploadInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  id?: string;
  helperText?: string;
}

export function PdfUploadInput({
  label = "Upload PDF Document",
  value,
  onChange,
  error,
  required = false,
  id = "pdf-upload",
  helperText = "Select a PDF file from your device storage."
}: PdfUploadInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      alert("Please upload a valid PDF document (.pdf).");
      return;
    }

    setFileName(file.name);
    // Format size
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
    setFileSize(`${sizeInMb} MB`);

    // Read as Data URL so it is fully stored and immediately viewable/downloadable
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

  const displayName = fileName || (value ? value.split("/").pop() || "Uploaded Document.pdf" : "");

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
        accept="application/pdf,.pdf"
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
            <DownloadIcon size={22} />
          </div>

          <div>
            <div className="text-sm font-bold text-[var(--admin-text)]">
              Upload PDF from Device
            </div>
            <div className="text-xs text-[var(--admin-text-subtle)] mt-0.5">
              {helperText}
            </div>
          </div>

          <button
            type="button"
            className="admin-btn admin-btn-primary text-xs py-1.5 px-4 mt-1 pointer-events-none"
          >
            <span>Choose PDF File</span>
          </button>
        </div>
      ) : (
        /* Selected State: Displays file badge with change/remove/preview */
        <div className="border border-[var(--admin-border)] rounded-lg py-3.5 px-4.5 bg-[var(--admin-bg-secondary)] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3.5 min-w-[200px] flex-1">
            <div className="w-[42px] h-[42px] rounded-md bg-[rgba(207,20,39,0.12)] text-[var(--admin-red)] flex items-center justify-center shrink-0">
              <DownloadIcon size={20} />
            </div>

            <div className="overflow-hidden">
              <div
                className="text-[13px] font-bold text-[var(--admin-text)] whitespace-nowrap text-ellipsis overflow-hidden max-w-[320px]"
                title={displayName}
              >
                {displayName}
              </div>
              <div className="text-[11px] text-[var(--admin-text-subtle)] mt-0.5 flex gap-2 items-center">
                <span className="text-[#10b981] font-bold inline-flex items-center gap-0.5">
                  <CheckIcon size={12} /> Ready to save
                </span>
                {fileSize && <span>• {fileSize}</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="admin-btn admin-btn-secondary text-xs py-1 px-3"
              title="Preview uploaded PDF in a new tab"
            >
              <span>View</span>
              <ExternalLinkIcon size={12} />
            </a>

            <button
              type="button"
              onClick={handleTriggerPicker}
              className="admin-btn admin-btn-secondary text-xs py-1 px-3"
              title="Select another PDF file from device"
            >
              <span>Change</span>
            </button>

            <button
              type="button"
              onClick={handleRemove}
              className="admin-btn admin-btn-danger text-xs py-1 px-2.5"
              title="Remove PDF"
            >
              <TrashIcon size={13} />
            </button>
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
