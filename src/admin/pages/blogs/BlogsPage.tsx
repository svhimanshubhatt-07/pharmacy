"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { SearchInput } from "@/admin/components/SearchInput";
import { ActionButtons } from "@/admin/components/ActionButtons";
import { isItemActive } from "@/admin/types";
import { StatusColumnFilter, StatusFilterOption, filterByStatus } from "@/admin/components/StatusColumnFilter";
import { Pagination } from "@/admin/components/Pagination";
import { PlusIcon } from "@/admin/components/Icons";

const ITEMS_PER_PAGE = 10;

export function BlogsPage() {
  const router = useRouter();
  const { blogList } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const filteredBlogs = useMemo(() => {
    let result = blogList;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (blog) =>
          blog.heading.toLowerCase().includes(q) ||
          blog.category.toLowerCase().includes(q) ||
          blog.description.toLowerCase().includes(q)
      );
    }
    return filterByStatus(result, statusFilter);
  }, [blogList, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE) || 1;
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Blogs &amp; Articles</h1>
          <p className="admin-subheading">
            Manage pharmaceutical research articles, clinical insights, and academic publications.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search blogs & articles..."
            ariaLabel="Search blogs"
          />

          <Link
            href="/admin/blogs/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add New Blog</span>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Blogs & Articles Table">
          <thead>
            <tr>
              <th className="w-[50px] text-center">ID</th>
              <th className="w-[90px] text-center">Desktop Image</th>
              <th className="w-20 text-center">Mobile Image</th>
              <th>Blog Heading</th>
              <th className="w-[220px] whitespace-nowrap">Category</th>
              <th className="w-[120px] text-center whitespace-nowrap">Date</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[100px] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBlogs.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No blog articles found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No articles matching "${searchQuery}".`
                      : "Add a pharmaceutical blog post or article."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedBlogs.map((item) => {
                const isVisible = isItemActive(item.status);
                const mobileImg = item.mobileImage || item.image;
                return (
                  <tr key={item.id}>
                    {/* ID */}
                    <td className="text-center font-mono font-semibold text-[var(--admin-text-subtle)] text-[13px]">
                      {item.id}
                    </td>

                    {/* Desktop Image Thumbnail */}
                    <td className="text-center">
                      <div
                        onClick={() => router.push(`/admin/blogs/${item.id}`)}
                        className="w-[58px] h-10 bg-slate-100 border border-[var(--admin-border)] overflow-hidden mx-auto cursor-pointer"
                        title="Desktop Image - Click to view"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={`Desktop - ${item.heading}`}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='58' height='40' viewBox='0 0 58 40'%3E%3Crect width='58' height='40' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='9'%3EDesktop%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </td>

                    {/* Mobile Image Thumbnail */}
                    <td className="text-center">
                      <div
                        onClick={() => router.push(`/admin/blogs/${item.id}`)}
                        className="w-10 h-10 bg-slate-100 border border-[var(--admin-border)] overflow-hidden mx-auto cursor-pointer"
                        title="Mobile Image - Click to view"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={mobileImg}
                          alt={`Mobile - ${item.heading}`}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='8'%3EMobile%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </td>

                    {/* Heading / Title */}
                    <td>
                      <div
                        className="admin-table-title cursor-pointer"
                        onClick={() => router.push(`/admin/blogs/${item.id}`)}
                        title="Click to view details"
                      >
                        {item.heading}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="whitespace-nowrap">
                      <span className="text-xs py-1 px-2.5 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] font-semibold rounded whitespace-nowrap inline-block">
                        {item.category}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="text-center">
                      <span className="font-mono text-xs text-[var(--admin-text-muted)]">
                        {item.date}
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
                        onView={() => router.push(`/admin/blogs/${item.id}`)}
                        onEdit={() => router.push(`/admin/blogs/${item.id}/edit`)}
                        viewTitle={`View details of ${item.heading}`}
                        editTitle={`Edit ${item.heading}`}
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
          totalItems={filteredBlogs.length}
          pageSize={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
