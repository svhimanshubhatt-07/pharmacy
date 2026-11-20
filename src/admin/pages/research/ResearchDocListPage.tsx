"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { Pagination } from "@/admin/components/Pagination";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { PlusIcon, EyeIcon, ExternalLinkIcon, FlaskIcon, DownloadIcon } from "@/admin/components/Icons";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";
import { ResearchSubcomponentKey, isItemActive } from "@/admin/types";
import { RESEARCH_SUBCOMPONENTS } from "@/admin/data/research";

const ITEMS_PER_PAGE = 10;

interface ResearchDocListPageProps {
  subcomponent: ResearchSubcomponentKey;
}

export function ResearchDocListPage({ subcomponent }: ResearchDocListPageProps) {
  const router = useRouter();
  const { getResearchDocsBySubcomponent } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const meta = RESEARCH_SUBCOMPONENTS[subcomponent] || {
    key: subcomponent,
    slug: subcomponent,
    title: "R&D Documents",
    shortTitle: "Documents",
    description: "Manage research and development PDF documents.",
    categoryPlaceholder: "e.g. Research",
    sessionLabel: "Year / Session",
    sessionPlaceholder: "e.g. 2025",
    defaultCategory: "General"
  };

  const isPublication = subcomponent === "publications";
  const docs = getResearchDocsBySubcomponent(subcomponent);

  const filteredDocs = useMemo(() => {
    let result = docs;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (doc) =>
          doc.title.toLowerCase().includes(q) ||
          doc.yearOrSession.toLowerCase().includes(q) ||
          doc.category.toLowerCase().includes(q) ||
          (doc.description && doc.description.toLowerCase().includes(q))
      );
    }
    return filterByStatus(result, statusFilter);
  }, [docs, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, subcomponent]);

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
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[var(--admin-red)] text-white">
              <FlaskIcon size={16} />
            </span>
            <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-[var(--admin-red)]">
              R&D Management
            </span>
          </div>
          <h1 className="admin-heading">{meta.title}</h1>
          <p className="admin-subheading">{meta.description}</p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Search ${meta.shortTitle.toLowerCase()}...`}
            ariaLabel={`Search ${meta.title}`}
          />

          <Link
            href={`/admin/research/${subcomponent}/add`}
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add {meta.shortTitle} PDF</span>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label={`${meta.title} Documents Table`}>
          <thead>
            <tr>
              <th className="w-20 text-center">SR NO</th>
              {isPublication ? (
                <th className="text-center w-[220px]">PUBLICATION YEAR</th>
              ) : (
                <th>DOCUMENT TITLE</th>
              )}
              <th className="w-[180px] text-center">PDF FILE</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter
                  value={statusFilter}
                  onChange={setStatusFilter}
                  label="STATUS"
                />
              </th>
              <th className="w-[100px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDocs.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 px-4">
                  <div className="text-[var(--admin-text-subtle)] text-sm">
                    {searchQuery
                      ? `No documents found matching "${searchQuery}".`
                      : `No PDF documents available in ${meta.title} yet.`}
                  </div>
                  <Link
                    href={`/admin/research/${subcomponent}/add`}
                    className="admin-btn admin-btn-primary mt-3 inline-flex"
                  >
                    <PlusIcon size={14} />
                    <span>Upload First PDF</span>
                  </Link>
                </td>
              </tr>
            ) : (
              paginatedDocs.map((doc, index) => {
                const isVisible = isItemActive(doc.status);
                const serialNumber = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

                return (
                  <tr key={doc.id}>
                    {/* 1. Sr No */}
                    <td className="text-center font-semibold text-[var(--admin-text-muted)]">
                      {serialNumber}
                    </td>

                    {/* 2. Publication Year OR Document Title */}
                    {isPublication ? (
                      <td className="text-center">
                        <span className="inline-block py-[3px] px-3 text-[13px] font-bold rounded-[3px] bg-[var(--admin-bg-secondary)] text-[var(--admin-primary)] border border-[var(--admin-border)] font-mono">
                          {doc.yearOrSession}
                        </span>
                      </td>
                    ) : (
                      <td>
                        <div className="font-semibold text-[var(--admin-text)] text-sm">
                          {doc.title}
                        </div>
                      </td>
                    )}

                    {/* 3. PDF File Download Button */}
                    <td className="text-center">
                      {doc.pdfUrl ? (
                        <a
                          href={doc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-download-btn"
                          title={`Open ${doc.title} PDF`}
                        >
                          <span>Download PDF</span>
                          <DownloadIcon size={12} />
                        </a>
                      ) : (
                        <span className="text-[var(--admin-text-subtle)] text-xs">—</span>
                      )}
                    </td>

                    {/* 4. Status Badge */}
                    <td className="text-center">
                      <span className={`admin-badge ${isVisible ? "admin-badge-active" : "admin-badge-inactive"}`}>
                        {isVisible ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* 5. Actions: View (Eye) & Edit (Pencil) */}
                    <td className="text-center whitespace-nowrap">
                      <ActionButtons
                        viewHref={`/admin/research/${subcomponent}/${doc.id}`}
                        editHref={`/admin/research/${subcomponent}/${doc.id}/edit`}
                        viewTitle={`View details of ${doc.title}`}
                        editTitle={`Edit ${doc.title}`}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Global Pagination */}
      {filteredDocs.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={filteredDocs.length}
          pageSize={ITEMS_PER_PAGE}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
