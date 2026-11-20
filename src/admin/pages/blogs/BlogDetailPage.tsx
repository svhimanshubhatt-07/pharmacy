"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { isItemActive } from "@/admin/types";
import { ConfirmDialog } from "@/admin/components/ConfirmDialog";
import {
  ArrowLeftIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  TrashIcon,
  ExternalLinkIcon
} from "@/admin/components/Icons";

interface BlogDetailPageProps {
  id: number;
}

export function BlogDetailPage({ id }: BlogDetailPageProps) {
  const router = useRouter();
  const {
    getBlogById,
    toggleBlogStatus,
    deleteBlog
  } = useAdmin();

  const [isDeleting, setIsDeleting] = useState(false);
  const item = getBlogById(id);

  if (!item) {
    return (
      <div className="flex flex-col gap-4 max-w-[600px]">
        <Link href="/admin/blogs" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Blogs</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Blog Article Not Found</h2>
          <p className="admin-desc">
            The requested blog post {id} could not be found or has been removed.
          </p>
          <Link href="/admin/blogs" className="admin-btn admin-btn-primary mt-3 inline-flex">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(item.status);

  const handleToggleStatus = () => {
    toggleBlogStatus(item.id);
  };

  const handleConfirmDelete = () => {
    deleteBlog(item.id);
    setIsDeleting(false);
    router.push("/admin/blogs");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Top Navigation & Action Controls */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/admin/blogs"
          className="admin-back-btn"
          aria-label="Back to Blogs"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to Blogs</span>
        </Link>

        {/* Action Controls: Edit, Hide/Show, Delete */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/blogs/${item.id}/edit`}
            className="admin-btn admin-btn-secondary"
            title="Edit article details"
          >
            <EditIcon size={14} />
            <span>Edit</span>
          </Link>

          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={handleToggleStatus}
            title={isVisible ? "Hide from website" : "Make visible to public"}
          >
            {isVisible ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
            <span>{isVisible ? "Hide" : "Show"}</span>
          </button>

          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => setIsDeleting(true)}
            title="Delete blog article"
          >
            <TrashIcon size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Page Title */}
      <div>
        <h1 className="admin-heading">
          {item.heading}
        </h1>
        <p className="admin-subheading">
          Record ID: {item.id} • Category: {item.category} • Date: {item.date}
        </p>
      </div>

      {/* Image & Specifications Stacked (Ek ke niche ek) */}
      <div className="flex flex-col gap-6 w-full">
        {/* 1. Featured Article Images: Desktop & Mobile */}
        <div className="admin-card p-5 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-[13px] font-bold uppercase text-[var(--admin-text-subtle)] tracking-wider">
              Article Images (Desktop &amp; Mobile)
            </span>
            <span
              className={`admin-badge ${
                isVisible ? "admin-badge-active" : "admin-badge-inactive"
              }`}
            >
              {isVisible ? "Active" : "Inactive"}
            </span>
          </div>

          <div className="flex flex-wrap gap-6 items-start">
            {/* Desktop Image Box */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[var(--admin-text-subtle)] uppercase">
                Desktop Image Preview
              </span>
              <div className="admin-blog-preview-desktop w-[320px] max-w-full h-[180px] bg-slate-100 border border-[var(--admin-border)] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`Desktop - ${item.heading}`}
                  className="w-full h-full object-cover block"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect width='320' height='180' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='12'%3EDesktop Image Not Available%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="admin-link inline-flex items-center gap-1 text-xs font-semibold"
              >
                <span>View Full Desktop Image</span>
                <ExternalLinkIcon size={12} />
              </a>
            </div>

            {/* Mobile Image Box */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[var(--admin-text-subtle)] uppercase">
                Mobile Image Preview
              </span>
              <div className="admin-blog-preview-mobile w-[140px] max-w-full h-[180px] bg-slate-100 border border-[var(--admin-border)] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.mobileImage || item.image}
                  alt={`Mobile - ${item.heading}`}
                  className="w-full h-full object-cover block"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='180' viewBox='0 0 140 180'%3E%3Crect width='140' height='180' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='11'%3EMobile Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <a
                href={item.mobileImage || item.image}
                target="_blank"
                rel="noreferrer"
                className="admin-link inline-flex items-center gap-1 text-xs font-semibold"
              >
                <span>View Full Mobile Image</span>
                <ExternalLinkIcon size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Specifications Table Card (Bottom) */}
        <div className="admin-detail-table-card">
          <div className="mb-4">
            <h2 className="admin-section-heading m-0">
              Article Specifications
            </h2>
          </div>

          <table className="admin-detail-table" aria-label="Blog Details Table">
            <tbody>
              <tr>
                <th>Record ID</th>
                <td>
                  <span className="font-mono font-bold text-sm">
                    {item.id}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Blog Heading</th>
                <td>
                  <div className="text-[15px] font-semibold text-[var(--admin-text)]">
                    {item.heading}
                  </div>
                </td>
              </tr>
              <tr>
                <th>Category</th>
                <td>
                  <span className="py-1 px-2.5 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] font-semibold text-[13px] rounded whitespace-nowrap inline-block">
                    {item.category}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Published Date</th>
                <td>
                  <span className="font-mono font-semibold">{item.date}</span>
                </td>
              </tr>
              <tr>
                <th>Description / Article Body</th>
                <td>
                  {/<[a-z][\s\S]*>/i.test(item.description) ? (
                    <div
                      className="admin-rich-content text-sm text-[var(--admin-text)] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  ) : (
                    <div className="text-sm text-[var(--admin-text)] leading-relaxed whitespace-pre-line">
                      {item.description}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <span
                    className={`admin-badge ${
                      isVisible ? "admin-badge-active" : "admin-badge-inactive"
                    }`}
                  >
                    {isVisible ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={isDeleting}
        title="Delete Blog Article"
        message="Are you sure you want to permanently delete this blog article from the website?"
        itemName={item.heading}
        confirmLabel="Yes, Delete Article"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleting(false)}
      />
    </div>
  );
}
