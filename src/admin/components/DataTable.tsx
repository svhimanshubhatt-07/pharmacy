"use client";

import React, { useState, useMemo, useEffect } from "react";
import { AdminItem } from "../types";
import { ActionButtons } from "./ActionButtons";
import { Pagination } from "./Pagination";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "./StatusColumnFilter";

const ITEMS_PER_PAGE = 10;

interface DataTableProps {
  items: AdminItem[];
  dateColumnLabel?: string;
  titleColumnLabel?: string;
  onView: (item: AdminItem) => void;
  onEdit?: (item: AdminItem) => void;
  searchQuery?: string;
}

export function DataTable({
  items,
  dateColumnLabel = "Date",
  titleColumnLabel = "Title",
  onView,
  onEdit,
  searchQuery = ""
}: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const filteredItems = useMemo(() => {
    return filterByStatus(items, statusFilter);
  }, [items, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, items.length]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  return (
    <div className="admin-table-container">
      <table className="admin-table" aria-label="Records Table">
        <thead>
          <tr>
            <th className="w-[60px] text-center">ID</th>
            <th>{titleColumnLabel}</th>
            <th className="w-[140px]">{dateColumnLabel}</th>
            <th className="w-[140px] text-center">
              <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
            </th>
            <th className="w-[110px] text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-12 px-6 text-[var(--admin-text-subtle)]">
                <div className="text-[15px] font-medium text-[var(--admin-text)]">
                  No records found
                </div>
                <div className="text-[13px] mt-1">
                  {searchQuery
                    ? `No matching records found for "${searchQuery}". Try clearing the search.`
                    : "No items have been added to this section yet."}
                </div>
              </td>
            </tr>
          ) : (
            paginatedItems.map((item) => {
              const isActive = item.status === "Active" || item.status === "Visible";
              return (
                <tr key={item.id}>
                  {/* ID */}
                  <td className="text-center font-mono font-semibold text-[var(--admin-text-subtle)] text-[13px]">
                    {item.id}
                  </td>

                  {/* Title Only */}
                  <td>
                    <div
                      className="admin-table-title cursor-pointer"
                      onClick={() => onView(item)}
                      title="Click to view full details"
                    >
                      {item.title}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="whitespace-nowrap text-[var(--admin-text-muted)]">
                    {item.date}
                  </td>

                  {/* Status Badge */}
                  <td className="text-center">
                    <span
                      className={`admin-badge ${
                        isActive ? "admin-badge-active" : "admin-badge-inactive"
                      }`}
                    >
                      {isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  {/* Actions: View (Eye) & Edit (Pencil) Icons */}
                  <td className="text-center whitespace-nowrap">
                    <ActionButtons
                      onView={() => onView(item)}
                      onEdit={onEdit ? () => onEdit(item) : undefined}
                      viewTitle={`View details of "${item.title}"`}
                      editTitle={`Edit "${item.title}"`}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* Pagination Component (10 lines per section) */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredItems.length}
        pageSize={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
