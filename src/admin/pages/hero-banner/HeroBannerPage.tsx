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

export function HeroBannerPage() {
  const router = useRouter();
  const { heroBanners } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilterOption>("all");

  const filteredBanners = useMemo(() => {
    let result = heroBanners;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((banner) => {
        return (
          banner.id.toString().includes(q) ||
          banner.imageUrl.toLowerCase().includes(q)
        );
      });
    }
    return filterByStatus(result, statusFilter);
  }, [heroBanners, searchQuery, statusFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredBanners.length / ITEMS_PER_PAGE) || 1;
  const paginatedBanners = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBanners.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredBanners, currentPage]);

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">Hero Banner Management</h1>
          <p className="admin-subheading">
            Manage homepage slider banners. Click View to inspect, hide, or delete banner.
          </p>
        </div>

        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search hero banners by ID..."
            ariaLabel="Search hero banners"
          />

          <Link
            href="/admin/home/hero-banner/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Banner</span>
          </Link>
        </div>
      </div>

      {/* Table: Only Image Preview, Status, Actions */}
      <div className="admin-table-container">
        <table className="admin-table" aria-label="Hero Banners Table">
          <thead>
            <tr>
              <th className="w-[70px] text-center">ID</th>
              <th className="w-[150px] text-left pl-5">DESKTOP IMAGE</th>
              <th className="w-[100px] text-left pl-5">MOBILE IMAGE</th>
              <th className="w-[140px] text-center">
                <StatusColumnFilter value={statusFilter} onChange={setStatusFilter} label="STATUS" />
              </th>
              <th className="w-[120px] text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBanners.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 px-6">
                  <div className="text-[15px] font-medium text-[var(--admin-text)]">
                    No hero banners found
                  </div>
                  <div className="text-[13px] mt-1 text-[var(--admin-text-subtle)]">
                    {searchQuery
                      ? `No matching banners for "${searchQuery}".`
                      : "Click 'Add Banner' to upload the first homepage banner."}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedBanners.map((item) => {
                const isVisible = isItemActive(item.status);
                const mobileImg = item.mobileImageUrl || item.imageUrl;
                return (
                  <tr key={item.id}>
                    {/* ID */}
                    <td className="text-center font-mono font-semibold text-[var(--admin-text-subtle)] text-sm">
                      {item.id}
                    </td>

                    {/* Desktop Image */}
                    <td className="text-left py-2 px-5">
                      <div
                        onClick={() => router.push(`/admin/home/hero-banner/${item.id}`)}
                        className="admin-hero-thumb-desktop w-[110px] h-[48px] max-w-[110px] max-h-[48px] bg-slate-100 border border-[var(--admin-border)] overflow-hidden m-0 cursor-pointer hover:opacity-85 transition-opacity duration-150 flex items-center justify-center"
                        title="Click to view banner details"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.imageUrl}
                          alt={`Desktop Banner ${item.id}`}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='48' viewBox='0 0 110 48'%3E%3Crect width='110' height='48' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='10'%3EDesktop%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </td>

                    {/* Mobile Image */}
                    <td className="text-left py-2 px-5">
                      <div
                        onClick={() => router.push(`/admin/home/hero-banner/${item.id}`)}
                        className="admin-hero-thumb-mobile w-[48px] h-[48px] max-w-[48px] max-h-[48px] bg-slate-100 border border-[var(--admin-border)] overflow-hidden m-0 cursor-pointer hover:opacity-85 transition-opacity duration-150 flex items-center justify-center"
                        title="Click to view banner details"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={mobileImg}
                          alt={`Mobile Banner ${item.id}`}
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='9'%3EMobile%3C/text%3E%3C/svg%3E";
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
                        onView={() => router.push(`/admin/home/hero-banner/${item.id}`)}
                        onEdit={() => router.push(`/admin/home/hero-banner/${item.id}/edit`)}
                        viewTitle={`View banner #${item.id}`}
                        editTitle={`Edit banner #${item.id}`}
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
      {filteredBanners.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={filteredBanners.length}
          pageSize={ITEMS_PER_PAGE}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
