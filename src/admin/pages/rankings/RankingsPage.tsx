"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { Pagination } from "@/admin/components/Pagination";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { PlusIcon, EyeIcon } from "@/admin/components/Icons";
import { isItemActive } from "@/admin/types";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";

const ITEMS_PER_PAGE = 10;

export function RankingsPage() {
  const router = useRouter();
  const { rankings } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const filteredRankings = useMemo(() => {
    let result = rankings;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.id.toString().includes(q) ||
          r.title.toLowerCase().includes(q) ||
          r.certificateImage.toLowerCase().includes(q)
      );
    }
    return filterByStatus(result, statusFilter);
  }, [rankings, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredRankings.length / ITEMS_PER_PAGE) || 1;
  const paginatedRankings = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRankings.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRankings, currentPage]);

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Rankings &amp; Accreditations</h1>
          <p className="admin-subheading">
            Manage institutional NIRF, NBA, QS I-GAUGE, and accreditation certificates.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search rankings by title or ID..."
            ariaLabel="Search rankings"
          />

          <Link
            href="/admin/home/rankings/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Ranking Award</span>
          </Link>
        </div>
      </div>

      {/* Table: SR NO, TITLE, IMAGE, STATUS, ACTIONS */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Rankings Table">
          <thead>
            <tr>
              <th className="w-20 text-center">SR NO</th>
              <th>TITLE</th>
              <th className="w-[120px] text-center">IMAGE</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[110px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRankings.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No rankings found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No matching records for "${searchQuery}".`
                      : "Add a ranking or accreditation certificate to showcase."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedRankings.map((item, index) => {
                const isVisible = isItemActive(item.status);
                const srNo = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

                return (
                  <tr key={item.id}>
                    {/* SR NO */}
                    <td className="text-center font-mono font-semibold text-[var(--admin-text-subtle)] text-sm">
                      {srNo}
                    </td>

                    {/* Title */}
                    <td>
                      <div
                        className="admin-table-title cursor-pointer font-semibold text-sm text-[var(--admin-text)]"
                        onClick={() => router.push(`/admin/home/rankings/${item.id}`)}
                        title="Click to view details"
                      >
                        {item.title}
                      </div>
                    </td>

                    {/* Image Preview Centered */}
                    <td className="text-center py-2 px-3">
                      <div
                        onClick={() => router.push(`/admin/home/rankings/${item.id}`)}
                        className="admin-ranking-thumb w-[80px] h-[50px] max-w-[80px] max-h-[50px] mx-auto border border-[var(--admin-border)] bg-[var(--admin-bg-secondary)] overflow-hidden cursor-pointer hover:opacity-85 transition-opacity duration-150 flex items-center justify-center p-0.5"
                        title="Click to view certificate"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.certificateImage}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='50' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='10'%3ECertificate%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </td>

                    {/* Status */}
                    <td className="text-center">
                      <span
                        className={`admin-badge ${
                          isVisible ? "admin-badge-active" : "admin-badge-inactive"
                        }`}
                      >
                        {isVisible ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Actions: View (Eye) & Edit (Pencil) */}
                    <td className="text-center whitespace-nowrap">
                      <ActionButtons
                        onView={() => router.push(`/admin/home/rankings/${item.id}`)}
                        onEdit={() => router.push(`/admin/home/rankings/${item.id}/edit`)}
                        viewTitle={`View ranking details of ${item.title}`}
                        editTitle={`Edit ranking ${item.title}`}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredRankings.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={filteredRankings.length}
          pageSize={ITEMS_PER_PAGE}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
