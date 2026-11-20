"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { DataTable } from "@/admin/components/DataTable";
import { SearchInput } from "@/admin/components/SearchInput";
import { PlusIcon } from "@/admin/components/Icons";

export function PressReleasesPage() {
  const router = useRouter();
  const { pressReleases } = useAdmin();
  const [searchQuery, setSearchQuery] = useState("");

  // Live filter press releases by title as user types
  const filteredPressReleases = useMemo(() => {
    if (!searchQuery.trim()) return pressReleases;
    const query = searchQuery.toLowerCase();
    return pressReleases.filter((press) =>
      press.title.toLowerCase().includes(query)
    );
  }, [pressReleases, searchQuery]);

  return (
    <div className="flex flex-col gap-5">
      {/* Top Section: Title & Parallel Action Controls */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-heading">
            Press Releases
          </h1>
          <p className="admin-subheading">
            Publish national media coverage, research milestones, and institutional achievements.
          </p>
        </div>

        {/* Strictly Parallel Row: Search Input + Add Press Release Button */}
        <div className="admin-header-actions">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search press releases by title..."
            ariaLabel="Search press releases by title"
          />

          <Link
            href="/admin/press-releases/add"
            className="admin-btn admin-btn-primary"
          >
            <PlusIcon size={16} />
            <span>Add Press Release</span>
          </Link>
        </div>
      </div>

      {/* Shared DataTable for Press Releases */}
      <DataTable
        items={filteredPressReleases}
        titleColumnLabel="Title"
        dateColumnLabel="Publish Date"
        searchQuery={searchQuery}
        onView={(item) => router.push(`/admin/press-releases/${item.id}`)}
        onEdit={(item) => router.push(`/admin/press-releases/${item.id}/edit`)}
      />
    </div>
  );
}
