"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { Pagination } from "@/admin/components/Pagination";
import { ActionButtons } from "@/admin/components/ActionButtons";
import {
  BuildingIcon,
  PlusIcon,
  EditIcon,
  EyeIcon
} from "@/admin/components/Icons";
import { isItemActive } from "@/admin/types";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";

const ITEMS_PER_PAGE = 10;

export function InfrastructureListPage() {
  const router = useRouter();
  const {
    infrastructureList,
    toggleInfrastructureStatus,
    deleteInfrastructureModule
  } = useAdmin();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const filteredModules = useMemo(() => {
    let result = infrastructureList;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          (m.name && m.name.toLowerCase().includes(q)) ||
          m.title.toLowerCase().includes(q) ||
          m.subtitle.toLowerCase().includes(q) ||
          m.slug.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      );
    }
    return filterByStatus(result, statusFilter);
  }, [infrastructureList, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredModules.length / ITEMS_PER_PAGE) || 1;
  const paginatedModules = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredModules.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredModules, currentPage]);

  const activeCount = infrastructureList.filter((m) => isItemActive(m.status)).length;
  const inactiveCount = infrastructureList.length - activeCount;

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Campus Infrastructure ({infrastructureList.length} Components)</h1>
          <p className="admin-subheading">
            Manage, customize, and create all campus infrastructure divisions and dynamic pages.
          </p>
        </div>

        <div className="admin-header-actions flex items-center gap-3">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search infrastructure..."
            ariaLabel="Search infrastructure"
          />

          <Link
            href="/admin/infrastructure/add"
            className="admin-btn admin-btn-primary inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <PlusIcon size={16} />
            <span>Create Component</span>
          </Link>
        </div>
      </div>

      {/* Overview Stat Badges */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        <div className="admin-card py-3.5 px-4.5 border-t-[3px] border-t-[var(--admin-primary)]">
          <div className="text-[11px] font-bold text-[var(--admin-text-subtle)] tracking-wider">
            TOTAL COMPONENTS
          </div>
          <div className="text-2xl font-bold mt-1 text-[var(--admin-text)]">
            {infrastructureList.length}
          </div>
        </div>

        <div className="admin-card py-3.5 px-4.5 border-t-[3px] border-t-[#166534]">
          <div className="text-[11px] font-bold text-[var(--admin-text-subtle)] tracking-wider">
            ACTIVE ON PUBLIC SITE
          </div>
          <div className="text-2xl font-bold mt-1 text-[#166534]">
            {activeCount}
          </div>
        </div>

        <div className="admin-card py-3.5 px-4.5 border-t-[3px] border-t-[#991b1b]">
          <div className="text-[11px] font-bold text-[var(--admin-text-subtle)] tracking-wider">
            INACTIVE / HIDDEN
          </div>
          <div className="text-2xl font-bold mt-1 text-[#991b1b]">
            {inactiveCount}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Infrastructure Components Table">
          <thead>
            <tr>
              <th className="w-[60px] text-center">SR NO</th>
              <th className="w-[100px] text-center">BANNER</th>
              <th className="w-[200px]">COMPONENT NAME</th>
              <th>HEADING</th>
              <th className="w-[120px] text-center">PHOTOS</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[130px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedModules.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No infrastructure components found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No components matching "${searchQuery}".`
                      : "Click '+ Create Component' to add a new campus facility."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedModules.map((item, idx) => {
                const isVisible = isItemActive(item.status);
                const serialNum = (currentPage - 1) * ITEMS_PER_PAGE + idx + 1;
                const photoCount = (item.images?.length || 0) + (item.imageUrl ? 1 : 0);
                const componentName = item.name || item.title.split(" ")[0] || item.slug;

                return (
                  <tr key={item.slug}>
                    {/* Index */}
                    <td className="text-center font-mono font-semibold text-[var(--admin-text-subtle)] text-[13px]">
                      {serialNum}
                    </td>

                    {/* Thumbnail Banner (Static preview, not clickable) */}
                    <td className="text-center">
                      <div className="w-20 h-[50px] relative border border-[var(--admin-border)] bg-slate-100 overflow-hidden mx-auto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='50' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='10'%3EInfra%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </td>

                    {/* Component Name (Static plain text, no URL, not clickable) */}
                    <td>
                      <span className="text-[13px] font-bold text-[var(--admin-text)]">
                        {componentName}
                      </span>
                    </td>

                    {/* Heading Only (No Subheading/Desc) */}
                    <td>
                      <div className="text-[13px] font-semibold text-[var(--admin-text)]">
                        {item.title}
                      </div>
                    </td>

                    {/* Photo count */}
                    <td className="text-center">
                      <span className="text-xs font-semibold py-1 px-2 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] rounded-sm">
                        {photoCount} Photos
                      </span>
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
                        viewHref={`/admin/infrastructure/${item.slug}`}
                        editHref={`/admin/infrastructure/${item.slug}/edit`}
                        viewTitle="View Detail Page"
                        editTitle="Edit Component"
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
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredModules.length}
          pageSize={ITEMS_PER_PAGE}
        />
      )}
    </div>
  );
}
