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

interface FacultyDetailPageProps {
  id: number;
}

export function FacultyDetailPage({ id }: FacultyDetailPageProps) {
  const router = useRouter();
  const {
    getFacultyById,
    toggleFacultyStatus,
    deleteFaculty
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getFacultyById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/about/faculty" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Faculty Directory</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Faculty Record Not Found</h2>
          <p className="admin-desc">
            The requested faculty or facility record #{id} could not be found or has been deleted.
          </p>
          <Link href="/admin/about/faculty" className="admin-btn admin-btn-primary mt-3 inline-flex">
            Return to Faculty Directory
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleFacultyStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteFaculty(item.id);
    setIsDeleting(false);
    router.push("/admin/about/faculty");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/about/faculty"
          className="admin-back-btn"
          aria-label="Back to Faculty Directory"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Faculty Directory</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/about/faculty/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit member details"
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
            title="Delete member"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <h1 className="admin-heading">
          {item.name}
        </h1>
        <p className="admin-subheading">
          Record ID: #{item.id} • {item.designation}
        </p>
      </div>

      {/* Detail Table Card */}
      <div className="admin-detail-table-card">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="admin-section-heading m-0">
            Faculty Profile &amp; Qualifications
          </h2>

          <span
            className={`admin-badge ${
              isVisible ? "admin-badge-active" : "admin-badge-inactive"
            }`}
          >
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Tabular Format: Showing strictly requested fields */}
        <table className="admin-detail-table" aria-label="Faculty Details Table">
          <tbody>
            <tr>
              <th>Record ID</th>
              <td>
                <span className="font-mono font-bold text-sm">
                  #{item.id}
                </span>
              </td>
            </tr>

            {/* Profile Photo */}
            <tr>
              <th>Profile Photo</th>
              <td>
                {item.imageUrl ? (
                  <div className="flex items-center gap-4">
                    <div className="w-[76px] h-[76px] rounded-full overflow-hidden border-2 border-[var(--admin-border)] bg-slate-50 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='76' height='76' viewBox='0 0 76 76'%3E%3Crect width='76' height='76' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2364748b' font-size='22' font-weight='700'%3E" +
                            encodeURIComponent(item.name.charAt(0) || "F") +
                            "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <div>
                      <a
                        href={item.imageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="admin-link text-[13px] font-semibold inline-flex items-center gap-1"
                      >
                        <span>View Full Photo</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <span className="text-[var(--admin-text-subtle)] italic">
                    No photo uploaded
                  </span>
                )}
              </td>
            </tr>

            {/* 1. Name */}
            <tr>
              <th>Name</th>
              <td>
                <div className="text-base font-bold text-[var(--admin-text)]">
                  {item.name}
                </div>
              </td>
            </tr>

            {/* 2. Designation */}
            <tr>
              <th>Designation</th>
              <td>
                <span className="font-semibold text-[var(--admin-primary)]">
                  {item.designation}
                </span>
              </td>
            </tr>

            {/* 3. Qualification */}
            <tr>
              <th>Qualification</th>
              <td>
                <span className="font-semibold text-[var(--admin-text)]">
                  {item.qualification}
                </span>
              </td>
            </tr>

            {/* 4. Specialization */}
            <tr>
              <th>Specialization</th>
              <td>
                <span className="text-[var(--admin-text)] font-medium">
                  {item.specialization || "—"}
                </span>
              </td>
            </tr>

            {/* 5. Academic Experience (Years) */}
            <tr>
              <th>Academic Experience (Years)</th>
              <td>
                <span>{item.academicExperience || "—"}</span>
              </td>
            </tr>

            {/* 6. Experience */}
            <tr>
              <th>Experience</th>
              <td>
                <span>{item.experience || "—"}</span>
              </td>
            </tr>

            {/* 7. Research Experience (Years) */}
            <tr>
              <th>Research Experience (Years)</th>
              <td>
                <span>{item.researchExperience || "—"}</span>
              </td>
            </tr>

            {/* 8. Area of Interest */}
            <tr>
              <th>Area of Interest</th>
              <td>
                <span className="text-[var(--admin-text)] font-medium">
                  {item.researchInterest || "—"}
                </span>
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

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Faculty Record"
        message="Are you sure you want to remove this faculty member record from the website?"
        itemName={item.name}
        confirmLabel="Yes, Delete Record"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
