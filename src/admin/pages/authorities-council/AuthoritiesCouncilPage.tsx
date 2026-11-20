"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { Pagination } from "@/admin/components/Pagination";
import { PlusIcon, ExternalLinkIcon, DownloadIcon } from "@/admin/components/Icons";
import { CouncilType, isItemActive } from "@/admin/types";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";

const ITEMS_PER_PAGE = 10;

export function AuthoritiesCouncilPage() {
  const router = useRouter();
  const { authoritiesCouncil } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCouncil, setSelectedCouncil] = useState<CouncilType>(
    "Members of Advisory Board"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const tabs: CouncilType[] = [
    "Members of Advisory Board",
    "Governing Body"
  ];

  const filteredDocs = useMemo(() => {
    const base = authoritiesCouncil.filter((m) => {
      if (m.councilType !== selectedCouncil) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        m.title.toLowerCase().includes(q) ||
        m.councilType.toLowerCase().includes(q) ||
        m.session.toLowerCase().includes(q)
      );
    });
    return filterByStatus(base, statusFilter);
  }, [authoritiesCouncil, selectedCouncil, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCouncil, statusFilter]);

  const totalPages = Math.ceil(filteredDocs.length / ITEMS_PER_PAGE) || 1;
  const paginatedDocs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDocs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDocs, currentPage]);

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Authorities & Council</h1>
          <p className="admin-subheading">
            Manage institutional Advisory Board and Governing Body official statutory PDF documents.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search council PDF documents..."
            ariaLabel="Search council documents"
          />

          <Link
            href="/admin/about/authorities-council/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Council Document</span>
          </Link>
        </div>
      </div>

      {/* 2 Tabs matching user screenshot */}
      <div className="flex gap-2.5 flex-wrap border-b border-[var(--admin-border)] pb-3">
        {tabs.map((tab) => {
          const isActive = selectedCouncil === tab;
          return (
            <button
              key={tab}
              type="button"
              className={`admin-btn py-2 px-4.5 text-sm font-semibold rounded cursor-pointer ${isActive ? "admin-btn-primary" : "admin-btn-secondary"}`}
              onClick={() => setSelectedCouncil(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Authorities Council Documents Table">
          <thead>
            <tr>
              <th className="w-[60px] text-center">ID</th>
              <th className="w-[110px] text-center">Session</th>
              <th>Document Title</th>
              <th className="w-[220px]">Council Category</th>
              <th className="w-[160px] text-center">PDF File</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[100px] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No documents found in {selectedCouncil}
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No documents matching "${searchQuery}".`
                      : "Add an official notification PDF document for this council."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedDocs.map((item) => {
                const isVisible = isItemActive(item.status);
                return (
                  <tr key={item.id}>
                    {/* ID */}
                    <td className="text-center font-mono font-semibold text-[var(--admin-text-subtle)] text-[13px]">
                      {item.id}
                    </td>

                    {/* Session */}
                    <td className="text-center">
                      <span className="font-mono text-xs font-bold py-0.5 px-2 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] text-[var(--admin-primary)]">
                        {item.session}
                      </span>
                    </td>

                    {/* Title */}
                    <td>
                      <div
                        className="admin-table-title cursor-pointer"
                        onClick={() => router.push(`/admin/about/authorities-council/${item.id}`)}
                        title="Click to view details"
                      >
                        {item.title}
                      </div>
                    </td>

                    {/* Council Category */}
                    <td>
                      <span className="text-xs py-1 px-2 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] font-semibold">
                        {item.councilType}
                      </span>
                    </td>

                    {/* PDF Download Button */}
                    <td className="text-center">
                      {item.pdfUrl ? (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="admin-download-btn"
                          title={`Open ${item.title} PDF`}
                        >
                          <span>Download PDF</span>
                          <DownloadIcon size={12} />
                        </a>
                      ) : (
                        <span className="text-[var(--admin-text-subtle)] text-xs">—</span>
                      )}
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
                        onView={() => router.push(`/admin/about/authorities-council/${item.id}`)}
                        onEdit={() => router.push(`/admin/about/authorities-council/${item.id}/edit`)}
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

        {/* Global Pagination Component (10 lines per section) */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredDocs.length}
          pageSize={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
