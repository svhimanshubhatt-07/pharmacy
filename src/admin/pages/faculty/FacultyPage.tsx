"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { Pagination } from "@/admin/components/Pagination";
import { PlusIcon } from "@/admin/components/Icons";
import { isItemActive } from "@/admin/types";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";

const ITEMS_PER_PAGE = 10;

export function FacultyPage() {
  const router = useRouter();
  const { facultyList } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const filteredFaculty = useMemo(() => {
    let result = facultyList;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.designation.toLowerCase().includes(q) ||
          f.qualification.toLowerCase().includes(q) ||
          (f.specialization && f.specialization.toLowerCase().includes(q))
      );
    }
    return filterByStatus(result, statusFilter);
  }, [facultyList, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredFaculty.length / ITEMS_PER_PAGE) || 1;
  const paginatedFaculty = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFaculty.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredFaculty, currentPage]);

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Faculty Directory & Facilities</h1>
          <p className="admin-subheading">
            Manage academic leadership and faculty profiles.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search faculty by name, designation..."
            ariaLabel="Search faculty"
          />

          <Link
            href="/admin/about/faculty/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Member</span>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Faculty Table">
          <thead>
            <tr>
              <th className="w-[60px] text-center">ID</th>
              <th className="w-[70px] text-center">Photo</th>
              <th>Name</th>
              <th className="w-[200px]">Designation</th>
              <th className="w-[180px]">Qualification</th>
              <th className="w-[170px]">Specialization</th>
              <th className="w-[140px]">Experience</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[90px] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFaculty.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No faculty records found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No faculty matching "${searchQuery}".`
                      : "Add a faculty member."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedFaculty.map((item) => {
                const isVisible = isItemActive(item.status);
                return (
                  <tr key={item.id}>
                    {/* ID */}
                    <td className="text-center font-mono font-semibold text-[var(--admin-text-subtle)] text-[13px]">
                      {item.id}
                    </td>

                    {/* Photo Thumbnail */}
                    <td className="text-center">
                      <div
                        onClick={() => router.push(`/admin/about/faculty/${item.id}`)}
                        className="w-11 h-11 rounded-full overflow-hidden mx-auto bg-slate-100 border border-[var(--admin-border)] cursor-pointer flex items-center justify-center"
                        title={`View ${item.name}`}
                      >
                        {item.imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover block"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Crect width='44' height='44' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2364748b' font-size='14' font-weight='700'%3E" +
                                encodeURIComponent(item.name.charAt(0) || "F") +
                                "%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        ) : (
                          <span className="text-sm font-bold text-[var(--admin-text-subtle)]">
                            {item.name.charAt(0) || "F"}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Name */}
                    <td>
                      <div
                        className="admin-table-title cursor-pointer"
                        onClick={() => router.push(`/admin/about/faculty/${item.id}`)}
                        title="Click to view details"
                      >
                        {item.name}
                      </div>
                    </td>

                    {/* Designation */}
                    <td className="text-[13px] text-[var(--admin-text)]">
                      {item.designation}
                    </td>

                    {/* Qualification */}
                    <td className="text-[13px] text-[var(--admin-text)]">
                      {item.qualification}
                    </td>

                    {/* Specialization */}
                    <td className="text-[13px] text-[var(--admin-text-muted)]">
                      {item.specialization || "—"}
                    </td>

                    {/* Experience */}
                    <td className="text-[13px] text-[var(--admin-text-muted)]">
                      {item.academicExperience || item.experience || "—"}
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
                        onView={() => router.push(`/admin/about/faculty/${item.id}`)}
                        onEdit={() => router.push(`/admin/about/faculty/${item.id}/edit`)}
                        viewTitle={`View profile of ${item.name}`}
                        editTitle={`Edit profile of ${item.name}`}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Global Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredFaculty.length}
          pageSize={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
