"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { Pagination } from "@/admin/components/Pagination";
import { ConfirmDialog } from "@/admin/components/ConfirmDialog";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { PlusIcon, GalleryIcon, EyeIcon, EditIcon, TrashIcon } from "@/admin/components/Icons";
import { isItemActive } from "@/admin/types";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";

const ITEMS_PER_PAGE = 10;

export function RecognitionsPage() {
  const router = useRouter();
  const { recognitions, deleteRecognition, toggleRecognitionStatus } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const filteredRecognitions = useMemo(() => {
    let result = recognitions;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((r) => r.title.toLowerCase().includes(q));
    }
    return filterByStatus(result, statusFilter);
  }, [recognitions, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredRecognitions.length / ITEMS_PER_PAGE) || 1;
  const paginatedRecognitions = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRecognitions.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRecognitions, currentPage]);

  const handleDeleteConfirm = () => {
    if (deleteTargetId !== null) {
      deleteRecognition(deleteTargetId);
      setDeleteTargetId(null);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Government Recognitions</h1>
          <p className="admin-subheading">
            Manage homepage statutory government recognition logos, accreditation affiliations, and approval titles.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search recognitions..."
            ariaLabel="Search recognitions"
          />

          <Link
            href="/admin/home/recognitions/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Recognition</span>
          </Link>
        </div>
      </div>

      {/* Table: SR NO, IMAGE, TITLE, STATUS, ACTIONS */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Government Recognitions Table">
          <thead>
            <tr>
              <th className="w-[70px] text-center">SR NO</th>
              <th className="w-[100px] text-center">IMAGE</th>
              <th>TITLE / HEADING</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[110px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecognitions.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No government recognitions found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No recognition matching "${searchQuery}".`
                      : "Click '+ Add Recognition' to add statutory accreditation."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedRecognitions.map((item, idx) => {
                const isVisible = isItemActive(item.status);
                const serialNumber = (currentPage - 1) * ITEMS_PER_PAGE + idx + 1;

                return (
                  <tr key={item.id}>
                    {/* SR NO */}
                    <td className="text-center font-mono font-bold text-[var(--admin-text-subtle)] text-[13px]">
                      {serialNumber}
                    </td>

                    {/* Image Preview */}
                    <td className="text-center py-2 px-3">
                      <div
                        onClick={() => router.push(`/admin/home/recognitions/${item.id}`)}
                        className="admin-recognition-thumb w-[52px] h-[52px] max-w-[52px] max-h-[52px] mx-auto bg-slate-50 border border-[var(--admin-border)] overflow-hidden flex items-center justify-center p-1 cursor-pointer hover:opacity-85 transition-opacity"
                        title="Click to view details"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="max-w-full max-h-full w-auto h-auto object-contain block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Crect width='52' height='52' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-size='9'%3ELogo%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </td>

                    {/* Title / Heading */}
                    <td>
                      <div
                        className="admin-table-title cursor-pointer text-sm font-bold"
                        onClick={() => router.push(`/admin/home/recognitions/${item.id}`)}
                        title="Click to view details"
                      >
                        {item.title}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => toggleRecognitionStatus(item.id)}
                        className={`admin-badge cursor-pointer border-none ${
                          isVisible ? "admin-badge-active" : "admin-badge-inactive"
                        }`}
                        title="Click to toggle status"
                      >
                        {isVisible ? "Active" : "Inactive"}
                      </button>
                    </td>

                    {/* Actions: View (Eye) & Edit (Pencil) */}
                    <td className="text-center whitespace-nowrap">
                      <ActionButtons
                        onView={() => router.push(`/admin/home/recognitions/${item.id}`)}
                        onEdit={() => router.push(`/admin/home/recognitions/${item.id}/edit`)}
                        viewTitle={`View details of ${item.title}`}
                        editTitle={`Edit ${item.title}`}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Global Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredRecognitions.length}
          pageSize={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        isOpen={deleteTargetId !== null}
        title="Delete Recognition"
        message="Are you sure you want to remove this statutory government recognition from the homepage?"
        confirmLabel="Yes, Delete"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />
    </div>
  );
}
