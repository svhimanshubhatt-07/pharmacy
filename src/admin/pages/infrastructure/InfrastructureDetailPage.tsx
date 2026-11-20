"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  EditIcon
} from "@/admin/components/Icons";
import { isItemActive, InfrastructureHubItem } from "@/admin/types";

const DEFAULT_HUB_ITEMS: InfrastructureHubItem[] = [
  {
    id: "sif",
    title: "Sophisticated Instrumentation Facility (SIF)",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg"
  },
  {
    id: "cpcsea",
    title: "CPCSEA-Approved Animal Research Centre",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435150/animalhouse1.jpg"
  },
  {
    id: "machine",
    title: "Pharmaceutics Pilot Plant & Machine Room",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Machine_room_1.jpg"
  },
  {
    id: "toxicology",
    title: "Advanced Preclinical Toxicology Centre",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg"
  },
  {
    id: "library",
    title: "Central Knowledge Repository & E-Library",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg"
  }
];

interface InfrastructureDetailPageProps {
  slug: string;
}

export function InfrastructureDetailPage({ slug }: InfrastructureDetailPageProps) {
  const router = useRouter();
  const {
    infrastructureList,
    getInfrastructureBySlug,
    toggleInfrastructureStatus
  } = useAdmin();

  const currentModule = getInfrastructureBySlug(slug);

  if (!currentModule) {
    return (
      <div className="flex flex-col gap-4 max-w-[640px]">
        <Link href="/admin/infrastructure" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to All Infrastructure Modules</span>
        </Link>
        <div className="admin-card">
          <h2 className="admin-section-heading">Infrastructure Module Not Found</h2>
          <p className="admin-desc">
            The infrastructure facility &ldquo;{slug}&rdquo; could not be located in institutional records.
          </p>
          <Link
            href="/admin/infrastructure"
            className="admin-btn admin-btn-primary mt-3 inline-flex"
          >
            Return to Infrastructure Overview
          </Link>
        </div>
      </div>
    );
  }

  const isVisible = isItemActive(currentModule.status);
  const galleryImages =
    currentModule.images && currentModule.images.length > 0
      ? currentModule.images.slice(0, 4)
      : [currentModule.imageUrl];
  const hubs =
    currentModule.hubItems && currentModule.hubItems.length > 0
      ? currentModule.hubItems.slice(0, 5)
      : DEFAULT_HUB_ITEMS;
  const sectionHeading = currentModule.sectionHeading || "Centres of Excellence & Research Hubs";
  const sectionSubheading =
    currentModule.sectionSubheading || "— Shaping learners into achievers through cutting-edge facilities.";

  return (
    <div className="flex flex-col gap-5 w-full max-w-full">
      {/* Top Header & Breadcrumb */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Link href="/admin/infrastructure" className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Infrastructure List</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <Link
            href={`/admin/infrastructure/${slug}/edit`}
            className="admin-btn admin-btn-primary inline-flex items-center gap-1.5"
          >
            <EditIcon size={14} />
            <span>Edit Component</span>
          </Link>

          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={() => toggleInfrastructureStatus(slug)}
          >
            {isVisible ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
            <span>{isVisible ? "Hide from Site" : "Show on Site"}</span>
          </button>

          <a
            href={`/infrastructure/${slug}`}
            target="_blank"
            rel="noreferrer"
            className="admin-btn admin-btn-secondary"
            title="Preview live public page"
          >
            <span>View Public Page</span>
            <ExternalLinkIcon size={13} />
          </a>
        </div>
      </div>

      {/* Title */}
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="admin-heading m-0">{currentModule.title}</h1>
          <span className={`admin-badge ${isVisible ? "admin-badge-active" : "admin-badge-inactive"}`}>
            {isVisible ? "Active" : "Inactive"}
          </span>
        </div>
        <p className="admin-subheading mt-1">
          Read-only facility specifications, imagery, and research hubs overview. Click &ldquo;Edit Component&rdquo; to modify.
        </p>
      </div>

      {/* Quick 13-Module Selector Strip */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 border-b border-[var(--admin-border)]">
        {infrastructureList.map((mod) => {
          const isSelected = mod.slug === slug;
          return (
            <button
              key={mod.slug}
              type="button"
              onClick={() => router.push(`/admin/infrastructure/${mod.slug}`)}
              className={`admin-btn text-xs py-1.5 px-3 whitespace-nowrap ${isSelected ? "admin-btn-primary" : "admin-btn-secondary"}`}
            >
              {mod.title.split(" ")[0]}
            </button>
          );
        })}
      </div>

      {/* Detail View Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-start w-full">
        {/* Left Column: Facility Information & Centres of Excellence */}
        <div className="flex flex-col gap-5">
          {/* 1. Facility Information Card */}
          <div className="admin-card">
            <h2 className="admin-section-heading">Facility Information &amp; Copy</h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="admin-label text-xs text-[var(--admin-text-subtle)] mb-0.5">
                  Module Title / Heading
                </label>
                <div className="text-[15px] font-bold text-[var(--admin-text)]">
                  {currentModule.title}
                </div>
              </div>

              <div>
                <label className="admin-label text-xs text-[var(--admin-text-subtle)] mb-0.5">
                  Subtitle / Banner Tagline
                </label>
                <div className="text-[13px] text-[var(--admin-text)] italic">
                  {currentModule.subtitle}
                </div>
              </div>

              <div>
                <label className="admin-label text-xs text-[var(--admin-text-subtle)] mb-1">
                  Institutional Overview &amp; Description
                </label>
                <div
                  className="text-[13px] leading-relaxed text-[var(--admin-text)] bg-[var(--admin-bg-secondary)] py-3.5 px-4 border border-[var(--admin-border)] whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: currentModule.description }}
                />
              </div>
            </div>
          </div>

          {/* 2. Centres of Excellence & Research Hubs */}
          <div className="admin-card">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="admin-section-heading m-0">
                  {sectionHeading}
                </h2>
                <p className="m-0 mt-0.5 text-xs text-[var(--admin-primary)] font-semibold">
                  {sectionSubheading}
                </p>
              </div>
              <span className="text-xs font-bold py-0.5 px-2 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)]">
                {hubs.length} Hubs
              </span>
            </div>

            <div className="flex flex-col gap-2.5 mt-3.5">
              {hubs.map((hub, idx) => (
                <div
                  key={hub.id || idx}
                  className="flex items-center gap-3 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] py-2 px-3"
                >
                  <div className="w-[60px] h-11 shrink-0 bg-slate-100 border border-[var(--admin-border)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={hub.image}
                      alt={hub.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-[13px] font-semibold text-[var(--admin-text)]">
                    {hub.title}
                  </div>
                  <span className="text-[11px] font-mono text-[var(--admin-text-subtle)]">
                    #{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Imagery & Controls */}
        <div className="flex flex-col gap-5">
          {/* Facility Imagery */}
          <div className="admin-card">
            <h2 className="admin-section-heading">Facility Imagery</h2>

            {/* Main Showcase Banner */}
            <div>
              <label className="admin-label text-xs text-[var(--admin-text-subtle)] mb-1.5">
                Main Facility Banner Photo
              </label>
              <div className="w-full h-[220px] border border-[var(--admin-border)] bg-slate-100 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentModule.imageUrl}
                  alt={currentModule.title}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* 4 Gallery Photos directly below main banner */}
            <div className="mt-5 pt-4 border-t border-[var(--admin-border)]">
              <div className="flex justify-between items-center mb-1.5">
                <label className="admin-label m-0 font-bold">
                  Gallery Photos ({galleryImages.length} Photos)
                </label>
                <span className="text-[11px] text-[var(--admin-text-subtle)]">
                  4 images below main banner
                </span>
              </div>
              <p className="text-xs text-[var(--admin-text-subtle)] m-0 mb-3 leading-tight">
                Photographs displayed in the 4-column gallery grid directly below the main showcase banner on the public page.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-[95px] border border-[var(--admin-border)] bg-slate-100 overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`Gallery photo ${idx + 1}`}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="admin-card">
            <h2 className="admin-section-heading">Quick Actions</h2>
            <div className="flex flex-col gap-2.5">
              <Link
                href={`/admin/infrastructure/${slug}/edit`}
                className="admin-btn admin-btn-primary w-full justify-center py-2.5 px-4"
              >
                <EditIcon size={15} />
                <span>Edit This Facility</span>
              </Link>

              <a
                href={`/infrastructure/${slug}`}
                target="_blank"
                rel="noreferrer"
                className="admin-btn admin-btn-secondary w-full justify-center py-2.5 px-4"
              >
                <ExternalLinkIcon size={14} />
                <span>Open Public Page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
