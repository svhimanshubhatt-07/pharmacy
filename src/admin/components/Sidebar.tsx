"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  EventsIcon,
  PressIcon,
  GalleryIcon,
  BlogIcon,
  HomeIcon,
  BuildingIcon,
  FlaskIcon,
  BookOpenIcon,
  FeeReceiptIcon,
  FileCheckIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  CloseIcon,
  FacultyIcon,
  CouncilIcon
} from "./Icons";

interface SidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

type DropdownGroup = "home" | "syllabus" | "fee" | "research" | null;

export function Sidebar({
  isOpenMobile = false,
  onCloseMobile
}: SidebarProps) {
  const pathname = usePathname();

  const isHomeActive = pathname.startsWith("/admin/home");
  const isSyllabusActive = pathname.startsWith("/admin/syllabus");
  const isFeeActive = pathname.startsWith("/admin/fee-structure");
  const isResearchActive = pathname.startsWith("/admin/research");

  // By default all dropdowns are off (closed). Only one dropdown can be open at a time.
  const [openGroup, setOpenGroup] = useState<DropdownGroup>(null);

  const toggleGroup = (group: DropdownGroup) => {
    setOpenGroup((prev) => (prev === group ? null : group));
  };

  const researchLinks = [
    { label: "Publications", href: "/admin/research/publications" },
    { label: "Patents", href: "/admin/research/patents" },
    { label: "SIF Facilities", href: "/admin/research/sif-facilities" },
    { label: "Consultancy & Grants", href: "/admin/research/consultancy" },
    { label: "Funded Projects", href: "/admin/research/funded-projects" },
    { label: "Funded Seminars", href: "/admin/research/funded-seminars" },
    { label: "Online MOOCs", href: "/admin/research/moocs" },
    { label: "Institute Magazines", href: "/admin/research/magazines" },
    { label: "Institute Newsletters", href: "/admin/research/newsletters" }
  ];

  return (
    <>
      {isOpenMobile && (
        <div
          className="admin-sidebar-backdrop"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={`admin-sidebar ${isOpenMobile ? "open" : ""} overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]`}
      >
        {/* Brand / Header */}
        <div className="admin-sidebar-header sticky top-0 z-10">
          <div className="admin-brand-icon">N</div>
          <div className="flex-1">
            <div className="admin-brand-title">NIET Pharmacy</div>
            <div className="admin-brand-subtitle">Admin Panel</div>
          </div>
          {isOpenMobile && (
            <button
              type="button"
              className="admin-action-btn p-1"
              onClick={onCloseMobile}
              aria-label="Close sidebar"
            >
              <CloseIcon size={16} />
            </button>
          )}
        </div>

        {/* Navigation items with sub-menus */}
        <nav className="admin-nav py-3" aria-label="Admin Navigation">
          {/* 1. Dashboard */}
          <Link
            href="/admin"
            className={`admin-nav-item ${pathname === "/admin" ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <DashboardIcon size={18} />
            <span>Dashboard</span>
          </Link>

          {/* 2. Events */}
          <Link
            href="/admin/events"
            className={`admin-nav-item ${pathname.startsWith("/admin/event") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <EventsIcon size={18} />
            <span>Events</span>
          </Link>

          {/* 3. Press Releases */}
          <Link
            href="/admin/press-releases"
            className={`admin-nav-item ${pathname.startsWith("/admin/press-release") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <PressIcon size={18} />
            <span>Press Releases</span>
          </Link>

          {/* 4. Gallery (Directly below Press Releases) */}
          <Link
            href="/admin/gallery"
            className={`admin-nav-item ${pathname.startsWith("/admin/gallery") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <GalleryIcon size={18} />
            <span>Gallery</span>
          </Link>

          {/* 5. Blogs (Directly below Gallery) */}
          <Link
            href="/admin/blogs"
            className={`admin-nav-item ${pathname.startsWith("/admin/blog") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <BlogIcon size={18} />
            <span>Blogs</span>
          </Link>

          {/* 6. Approvals Documents (Directly below Blogs) */}
          <Link
            href="/admin/approvals"
            className={`admin-nav-item ${pathname.startsWith("/admin/approvals") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <FileCheckIcon size={18} />
            <span>Approvals Documents</span>
          </Link>

          {/* 7. Home (Group with Hero Banner & Rankings) */}
          <div>
            <button
              type="button"
              className={`admin-nav-item justify-between ${isHomeActive ? "active" : ""}`}
              onClick={() => toggleGroup("home")}
              aria-expanded={openGroup === "home"}
            >
              <div className="flex items-center gap-3">
                <HomeIcon size={18} />
                <span>Home Page</span>
              </div>
              <span
                className={`inline-flex items-center justify-center transition-transform duration-[280ms] ${
                  openGroup === "home" ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDownIcon size={12} />
              </span>
            </button>

            <div className={`admin-accordion-wrapper ${openGroup === "home" ? "is-open" : ""}`}>
              <div className="admin-accordion-inner">
                <div className="bg-[var(--admin-bg-secondary)] py-1">
                  <Link
                    href="/admin/home/hero-banner"
                    className={`admin-nav-subitem ${pathname === "/admin/home/hero-banner" ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>Hero Banner</span>
                  </Link>
                  <Link
                    href="/admin/home/rankings"
                    className={`admin-nav-subitem ${pathname === "/admin/home/rankings" ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>Rankings</span>
                  </Link>
                  <Link
                    href="/admin/home/recognitions"
                    className={`admin-nav-subitem ${pathname.startsWith("/admin/home/recognitions") ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>Government Recognitions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Faculty (Standalone Main Nav Item) */}
          <Link
            href="/admin/about/faculty"
            className={`admin-nav-item ${pathname.startsWith("/admin/about/faculty") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <FacultyIcon size={18} />
            <span>Faculty</span>
          </Link>

          {/* 9. Authorities & Council (Standalone Main Nav Item) */}
          <Link
            href="/admin/about/authorities-council"
            className={`admin-nav-item ${pathname.startsWith("/admin/about/authorities-council") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <CouncilIcon size={18} />
            <span>Authorities & Council</span>
          </Link>

          {/* Syllabus (3 Subcomponents: B.Pharm, D.Pharm, M.Pharm) */}
          <div>
            <button
              type="button"
              className={`admin-nav-item justify-between ${isSyllabusActive ? "active" : ""}`}
              onClick={() => toggleGroup("syllabus")}
              aria-expanded={openGroup === "syllabus"}
            >
              <div className="flex items-center gap-3">
                <BookOpenIcon size={18} />
                <span>Syllabus</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold py-px px-1.5 bg-[var(--admin-border)] text-[var(--admin-text)]">
                  3
                </span>
                <span
                  className={`inline-flex items-center justify-center transition-transform duration-[280ms] ${
                    openGroup === "syllabus" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDownIcon size={12} />
                </span>
              </div>
            </button>

            <div className={`admin-accordion-wrapper ${openGroup === "syllabus" ? "is-open" : ""}`}>
              <div className="admin-accordion-inner">
                <div className="bg-[var(--admin-bg-secondary)] py-1">
                  <Link
                    href="/admin/syllabus/b-pharm"
                    className={`admin-nav-subitem ${pathname.startsWith("/admin/syllabus/b-pharm") ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>B.Pharm</span>
                  </Link>
                  <Link
                    href="/admin/syllabus/d-pharm"
                    className={`admin-nav-subitem ${pathname.startsWith("/admin/syllabus/d-pharm") ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>D.Pharm</span>
                  </Link>
                  <Link
                    href="/admin/syllabus/m-pharm"
                    className={`admin-nav-subitem ${pathname.startsWith("/admin/syllabus/m-pharm") ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>M.Pharm</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Structure (3 Subcomponents: B.Pharm, D.Pharm, M.Pharm) */}
          <div>
            <button
              type="button"
              className={`admin-nav-item justify-between ${isFeeActive ? "active" : ""}`}
              onClick={() => toggleGroup("fee")}
              aria-expanded={openGroup === "fee"}
            >
              <div className="flex items-center gap-3">
                <FeeReceiptIcon size={18} />
                <span>Fee Structure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold py-px px-1.5 bg-[var(--admin-border)] text-[var(--admin-text)]">
                  3
                </span>
                <span
                  className={`inline-flex items-center justify-center transition-transform duration-[280ms] ${
                    openGroup === "fee" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDownIcon size={12} />
                </span>
              </div>
            </button>

            <div className={`admin-accordion-wrapper ${openGroup === "fee" ? "is-open" : ""}`}>
              <div className="admin-accordion-inner">
                <div className="bg-[var(--admin-bg-secondary)] py-1">
                  <Link
                    href="/admin/fee-structure/b-pharm"
                    className={`admin-nav-subitem ${pathname.startsWith("/admin/fee-structure/b-pharm") ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>B.Pharm</span>
                  </Link>
                  <Link
                    href="/admin/fee-structure/d-pharm"
                    className={`admin-nav-subitem ${pathname.startsWith("/admin/fee-structure/d-pharm") ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>D.Pharm</span>
                  </Link>
                  <Link
                    href="/admin/fee-structure/m-pharm"
                    className={`admin-nav-subitem ${pathname.startsWith("/admin/fee-structure/m-pharm") ? "active" : ""}`}
                    onClick={onCloseMobile}
                  >
                    <span>M.Pharm</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure (Single Direct Main Nav Link, No Dropdown) */}
          <Link
            href="/admin/infrastructure"
            className={`admin-nav-item ${pathname.startsWith("/admin/infrastructure") ? "active" : ""}`}
            onClick={onCloseMobile}
          >
            <BuildingIcon size={18} />
            <span>Infrastructure</span>
          </Link>

          {/* 7. Research & Development (9 Subcomponents) */}
          <div>
            <button
              type="button"
              className={`admin-nav-item justify-between ${isResearchActive ? "active" : ""}`}
              onClick={() => toggleGroup("research")}
              aria-expanded={openGroup === "research"}
            >
              <div className="flex items-center gap-3">
                <FlaskIcon size={18} />
                <span>R & D</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold py-px px-1.5 bg-[var(--admin-border)] text-[var(--admin-text)]">
                  9
                </span>
                <span
                  className={`inline-flex items-center justify-center transition-transform duration-[280ms] ${
                    openGroup === "research" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDownIcon size={12} />
                </span>
              </div>
            </button>

            <div className={`admin-accordion-wrapper ${openGroup === "research" ? "is-open" : ""}`}>
              <div className="admin-accordion-inner">
                <div className="bg-[var(--admin-bg-secondary)] py-1">
                  {researchLinks.map((mod) => (
                    <Link
                      key={mod.href}
                      href={mod.href}
                      className={`admin-nav-subitem ${pathname.startsWith(mod.href) ? "active" : ""}`}
                      onClick={onCloseMobile}
                    >
                      <span>{mod.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="admin-sidebar-footer mt-auto">
          <Link
            href="/"
            className="admin-site-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Open main public website in new tab"
          >
            <ExternalLinkIcon size={14} />
            <span>View Public Website</span>
          </Link>
          <div className="text-[11px] text-[var(--admin-text-subtle)] text-center pt-1">
            NIET Greater Noida • v1.0
          </div>
        </div>
      </aside>
    </>
  );
}
