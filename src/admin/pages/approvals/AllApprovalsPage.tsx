"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { Pagination } from "@/admin/components/Pagination";
import { PlusIcon, ExternalLinkIcon, DownloadIcon } from "@/admin/components/Icons";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";

const ITEMS_PER_PAGE = 10;

export function AllApprovalsPage() {
  const router = useRouter();
  const { approvalDocs } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [sessionFilter, setSessionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const sessions = useMemo(() => {
    const set = new Set<string>();
    approvalDocs.forEach((d) => set.add(d.session));
    return Array.from(set).sort().reverse();
  }, [approvalDocs]);

  const filteredDocs = useMemo(() => {
    const base = approvalDocs.filter((doc) => {
      const matchSession = sessionFilter === "all" || doc.session === sessionFilter;
      if (!matchSession) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        doc.title.toLowerCase().includes(q) ||
        doc.body.toLowerCase().includes(q) ||
        doc.session.toLowerCase().includes(q)
      );
    });
    return filterByStatus(base, statusFilter);
  }, [approvalDocs, sessionFilter, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sessionFilter, statusFilter]);

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
          <h1 className="admin-heading">Mandatory Approvals & Affiliations</h1>
          <p className="admin-subheading">
            Manage session-wise statutory approval orders, affiliation certificates, and mandatory compliance filings.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search approvals documents..."
            ariaLabel="Search approval documents"
          />

          <Link
            href="/admin/approvals/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Approval Document</span>
          </Link>
        </div>
      </div>

      {/* Session Filter Bar */}
      <div className="flex gap-2 flex-wrap items-center">
        <button
          type="button"
          className={`admin-btn text-[13px] py-1.5 px-3.5 ${sessionFilter === "all" ? "admin-btn-primary" : "admin-btn-secondary"}`}
          onClick={() => setSessionFilter("all")}
        >
          All Sessions ({approvalDocs.length})
        </button>
        {sessions.map((sess) => (
          <button
            key={sess}
            type="button"
            className={`admin-btn text-[13px] py-1.5 px-3.5 ${sessionFilter === sess ? "admin-btn-primary" : "admin-btn-secondary"}`}
            onClick={() => setSessionFilter(sess)}
          >
            Session {sess}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Approval Documents Table">
          <thead>
            <tr>
              <th className="w-[60px] text-center">ID</th>
              <th className="w-[110px] text-center">Session</th>
              <th>Document Title</th>
              <th className="w-[220px]">Regulatory Body</th>
              <th className="w-[160px] text-center">PDF File</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[110px] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No approval documents found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No documents matching "${searchQuery}".`
                      : "Add an official statutory approval document to the repository."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedDocs.map((item) => {
                const isActive = item.status === "Active" || item.status === "Visible";
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
                        onClick={() => router.push(`/admin/approvals/${item.id}`)}
                        title="Click to view details"
                      >
                        {item.title}
                      </div>
                    </td>

                    {/* Body */}
                    <td className="text-[13px] text-[var(--admin-text)]">
                      {item.body}
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
                          isActive ? "admin-badge-active" : "admin-badge-inactive"
                        }`}
                      >
                        {isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Actions: View (Eye) & Edit (Pencil) */}
                    <td className="text-center whitespace-nowrap">
                      <ActionButtons
                        onView={() => router.push(`/admin/approvals/${item.id}`)}
                        onEdit={() => router.push(`/admin/approvals/${item.id}/edit`)}
                        viewTitle={`View details of Document #${item.id}`}
                        editTitle={`Edit Document #${item.id}`}
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
