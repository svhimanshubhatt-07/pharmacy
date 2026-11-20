"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { Pagination } from "@/admin/components/Pagination";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { PlusIcon, EyeIcon, ExternalLinkIcon, BookOpenIcon, DownloadIcon } from "@/admin/components/Icons";
import { SyllabusCourseKey, isItemActive } from "@/admin/types";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";
import { SYLLABUS_COURSES } from "@/admin/data/syllabus";

const ITEMS_PER_PAGE = 10;

interface SyllabusDocListPageProps {
  course: SyllabusCourseKey;
}

export function SyllabusDocListPage({ course }: SyllabusDocListPageProps) {
  const { getSyllabusDocsByCourse } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const meta = SYLLABUS_COURSES[course] || {
    key: course,
    slug: course,
    name: `${course.toUpperCase()} Programme`,
    shortTitle: course.toUpperCase(),
    duration: "Academic Curriculum",
    subtitle: "Course Syllabus Regulations",
    description: "Manage curriculum syllabus PDFs and regulations.",
    councilLabel: "Regulatory Council / Body",
    schemePlaceholder: "e.g. PCI Regulations"
  };

  const docs = getSyllabusDocsByCourse(course);

  const filteredDocs = useMemo(() => {
    let result = docs;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (doc) =>
          doc.title.toLowerCase().includes(q) ||
          doc.regulation.toLowerCase().includes(q)
      );
    }
    return filterByStatus(result, statusFilter);
  }, [docs, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, course, statusFilter]);

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
              <BookOpenIcon size={16} />
            </span>
            <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-[var(--admin-red)]">
              Course Syllabus • {meta.subtitle}
            </span>
          </div>
          <h1 className="admin-heading">{meta.shortTitle} Syllabus</h1>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Search ${meta.shortTitle} syllabus...`}
            ariaLabel={`Search ${meta.shortTitle} syllabus`}
          />

          <Link
            href={`/admin/syllabus/${course}/add`}
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add {meta.shortTitle} Syllabus</span>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label={`${meta.shortTitle} Syllabus Documents Table`}>
          <thead>
            <tr>
              <th className="w-[60px] text-center">SR NO</th>
              <th>CURRICULUM / SYLLABUS TITLE</th>
              <th className="w-[260px]">{meta.councilLabel.toUpperCase()}</th>
              <th className="w-[160px] text-center">PDF FILE</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[90px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDocs.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 px-4">
                  <div className="text-[var(--admin-text-subtle)] text-sm">
                    {searchQuery
                      ? `No syllabus documents found matching "${searchQuery}".`
                      : `No syllabus PDFs uploaded for ${meta.shortTitle} yet.`}
                  </div>
                  <Link
                    href={`/admin/syllabus/${course}/add`}
                    className="admin-btn admin-btn-primary mt-3 inline-flex"
                  >
                    <PlusIcon size={14} />
                    <span>Upload First Syllabus PDF</span>
                  </Link>
                </td>
              </tr>
            ) : (
              paginatedDocs.map((doc, index) => {
                const isVisible = isItemActive(doc.status);
                const serialNumber = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;
                return (
                  <tr key={doc.id}>
                    <td className="text-center font-semibold text-[var(--admin-text-muted)]">
                      {serialNumber}
                    </td>

                    <td>
                      <div className="font-semibold text-[var(--admin-text)] text-sm">
                        {doc.title}
                      </div>
                    </td>

                    <td>
                      <span className="text-[13px] text-[var(--admin-text)] font-medium">
                        {doc.regulation}
                      </span>
                    </td>

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

                    <td className="text-center">
                      <span className={`admin-badge ${isVisible ? "admin-badge-active" : "admin-badge-inactive"}`}>
                        {isVisible ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Actions: View (Eye) & Edit (Pencil) */}
                    <td className="text-center whitespace-nowrap">
                      <ActionButtons
                        viewHref={`/admin/syllabus/${course}/${doc.id}`}
                        editHref={`/admin/syllabus/${course}/${doc.id}/edit`}
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

      {/* Global Pagination - 10 lines per page */}
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
