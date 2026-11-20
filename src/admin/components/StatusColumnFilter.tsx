"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, CheckIcon, FilterIcon } from "./Icons";
import { isItemActive } from "../types";

export type StatusFilterOption = "all" | "active" | "inactive";

export function filterByStatus<T extends { status?: any }>(
  items: T[],
  filter: StatusFilterOption
): T[] {
  if (filter === "all") return items;
  return items.filter((item) => {
    const active = isItemActive(item.status);
    return filter === "active" ? active : !active;
  });
}

interface StatusColumnFilterProps {
  value: StatusFilterOption;
  onChange: (value: StatusFilterOption) => void;
  label?: string;
  align?: "center" | "left" | "right";
}

export function StatusColumnFilter({
  value,
  onChange,
  label = "STATUS",
  align = "center"
}: StatusColumnFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentDisplay =
    value === "all" ? "All" : value === "active" ? "Active" : "Inactive";

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center align-middle ${
        align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1 bg-transparent border-none shadow-none rounded py-0.5 px-1 cursor-pointer text-[11px] font-bold tracking-[0.04em] uppercase transition-all outline-none whitespace-nowrap ${
          value !== "all" ? "text-[var(--admin-red)]" : "text-inherit"
        }`}
        title={`Status Filter (Currently: ${currentDisplay}) - Click to filter`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <FilterIcon size={11} className={value !== "all" ? "opacity-100" : "opacity-65"} />
        <span>
          {label} ({currentDisplay})
        </span>
        <ChevronDownIcon
          size={11}
          className={`transition-transform duration-150 ${isOpen ? "rotate-180" : ""} ${
            value !== "all" ? "opacity-100" : "opacity-65"
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className={`absolute top-[calc(100%+4px)] ${
            align === "right" || align === "center" ? "right-0" : "left-0"
          } bg-white border border-[var(--admin-border)] rounded-md shadow-xl p-1 min-w-[140px] z-[1000] text-left`}
        >
          <div className="py-1 px-2 pb-1.5 text-[10px] font-bold text-[var(--admin-text-subtle)] uppercase tracking-[0.05em] border-b border-[#f1f5f9] mb-[3px]">
            Filter by Status
          </div>

          {/* Option: All */}
          <button
            type="button"
            role="option"
            aria-selected={value === "all"}
            onClick={() => {
              onChange("all");
              setIsOpen(false);
            }}
            className={`flex items-center justify-between w-full py-1.5 px-2 rounded border-none cursor-pointer text-xs transition-colors ${
              value === "all"
                ? "bg-[#f1f5f9] font-bold text-[var(--admin-primary)]"
                : "bg-transparent font-medium text-[var(--admin-text)]"
            }`}
          >
            <span>All Status</span>
            {value === "all" && <CheckIcon size={13} className="text-[var(--admin-primary)]" />}
          </button>

          {/* Option: Active */}
          <button
            type="button"
            role="option"
            aria-selected={value === "active"}
            onClick={() => {
              onChange("active");
              setIsOpen(false);
            }}
            className={`flex items-center justify-between w-full py-1.5 px-2 rounded border-none cursor-pointer text-xs transition-colors ${
              value === "active"
                ? "bg-[rgba(16,185,129,0.1)] font-bold text-[#047857]"
                : "bg-transparent font-medium text-[var(--admin-text)]"
            }`}
          >
            <span>Active</span>
            {value === "active" && <CheckIcon size={13} className="text-[#047857]" />}
          </button>

          {/* Option: Inactive */}
          <button
            type="button"
            role="option"
            aria-selected={value === "inactive"}
            onClick={() => {
              onChange("inactive");
              setIsOpen(false);
            }}
            className={`flex items-center justify-between w-full py-1.5 px-2 rounded border-none cursor-pointer text-xs transition-colors ${
              value === "inactive"
                ? "bg-[rgba(227,24,55,0.08)] font-bold text-[var(--admin-red)]"
                : "bg-transparent font-medium text-[var(--admin-text)]"
            }`}
          >
            <span>Inactive</span>
            {value === "inactive" && <CheckIcon size={13} className="text-[var(--admin-red)]" />}
          </button>
        </div>
      )}
    </div>
  );
}
