"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { StatCard } from "@/admin/components/StatCard";
import {
  EventsIcon,
  PressIcon,
  GalleryIcon,
  BlogIcon
} from "@/admin/components/Icons";

export function DashboardPage() {
  const router = useRouter();
  const {
    stats,
    activities,
    galleryList,
    blogList
  } = useAdmin();

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Welcome banner */}
      <div className="admin-card border-l-4 border-l-[var(--admin-primary)] flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="admin-heading">
            Welcome to NIET Pharmacy Administration
          </h1>
          <p className="admin-subheading">
            Institutional control panel for events, press releases, home slides, faculty, approvals, and 13 infrastructure modules.
          </p>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          <Link href="/admin/events" className="admin-btn admin-btn-secondary">
            Manage Events
          </Link>
          <Link href="/admin/press-releases" className="admin-btn admin-btn-primary">
            Manage Press Releases
          </Link>
        </div>
      </div>

      {/* The 4 Required Statistics Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {/* 1. Total Events */}
        <StatCard
          label="Total Events"
          value={stats.totalEvents}
          icon={<EventsIcon size={18} />}
          accent="red"
          onClick={() => router.push("/admin/events")}
        />

        {/* 2. Total Press Releases */}
        <StatCard
          label="Total Press Releases"
          value={stats.totalPressReleases}
          icon={<PressIcon size={18} />}
          accent="dark"
          onClick={() => router.push("/admin/press-releases")}
        />

        {/* 3. Total Gallery */}
        <StatCard
          label="Total Gallery"
          value={galleryList.length}
          icon={<GalleryIcon size={18} />}
          accent="amber"
          onClick={() => router.push("/admin/gallery")}
        />

        {/* 4. Total Blogs */}
        <StatCard
          label="Total Blogs"
          value={blogList.length}
          icon={<BlogIcon size={18} />}
          accent="blue"
          onClick={() => router.push("/admin/blogs")}
        />
      </div>

      {/* Recent Activity Section */}
      <div className="admin-card !p-0">
        <div className="py-4 px-5 border-b border-[var(--admin-border)] flex justify-between items-center">
          <div>
            <h2 className="admin-section-heading m-0">
              Recent Activity
            </h2>
            <p className="text-xs mt-0.5 mb-0 mx-0 text-[var(--admin-text-subtle)]">
              Latest updates and status changes across events and press releases
            </p>
          </div>
          <span className="text-xs text-[var(--admin-text-subtle)]">
            {activities.length} recorded
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th className="w-[110px]">Section</th>
                <th className="w-[110px]">Action</th>
                <th>Item Title & Summary</th>
                <th className="w-[160px] text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {activities.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center p-8 text-[var(--admin-text-subtle)]">
                    No recent activity recorded yet.
                  </td>
                </tr>
              ) : (
                activities.slice(0, 8).map((log) => {
                  const isEvent = log.type === "event";

                  return (
                    <tr key={log.id}>
                      {/* Section badge */}
                      <td>
                        <span
                          className={`admin-badge ${
                            isEvent
                              ? "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]"
                              : "bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]"
                          }`}
                        >
                          {isEvent ? "Events" : "Press"}
                        </span>
                      </td>

                      {/* Action */}
                      <td>
                        <span
                          className={`font-semibold text-xs capitalize ${
                            log.action === "created"
                              ? "text-[var(--admin-success-text)]"
                              : log.action === "deleted"
                              ? "text-[var(--admin-danger-text)]"
                              : "text-[var(--admin-primary)]"
                          }`}
                        >
                          {log.action.replace("_", " ")}
                        </span>
                      </td>

                      {/* Title & Details */}
                      <td>
                        <div className="font-semibold text-[var(--admin-text)]">
                          {log.title}
                        </div>
                        {log.details && (
                          <div className="text-xs text-[var(--admin-text-subtle)] mt-0.5">
                            {log.details}
                          </div>
                        )}
                      </td>

                      {/* Timestamp */}
                      <td className="text-right text-xs text-[var(--admin-text-muted)] whitespace-nowrap">
                        {log.timestamp}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
