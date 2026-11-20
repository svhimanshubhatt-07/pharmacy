"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { DataTable } from "@/admin/components/DataTable";
import { SearchInput } from "@/admin/components/SearchInput";
import { PlusIcon } from "@/admin/components/Icons";

export function EventsPage() {
  const router = useRouter();
  const { events } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");

  // Live filter events by title as user types
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return events;
    const query = searchQuery.toLowerCase();
    return events.filter((event) =>
      event.title.toLowerCase().includes(query)
    );
  }, [events, searchQuery]);

  return (
    <div className="flex flex-col gap-5">
      {/* Top Section: Title & Parallel Action Controls */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">
            Events
          </h1>
          <p className="admin-subheading">
            Create and maintain academic conferences, workshops, and campus activities.
          </p>
        </div>

        {/* Strictly Parallel Row: Search Input + Add Event Button */}
        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search events by title..."
            ariaLabel="Search events by title"
          />

          <Link
            href="/admin/events/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Event</span>
          </Link>
        </div>
      </div>

      {/* Shared DataTable for Events */}
      <DataTable
        items={filteredEvents}
        titleColumnLabel="Event Title"
        dateColumnLabel="Date"
        searchQuery={searchQuery}
        onView={(item) => router.push(`/admin/events/${item.id}`)}
        onEdit={(item) => router.push(`/admin/events/${item.id}/edit`)}
      />
    </div>
  );
}
