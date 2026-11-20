"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { EventImage } from "@/components/HomePageInteractions";
import { eventAlbums, EventAlbum } from "@/data/events";

/**
 * Helper to determine if an event is upcoming or past.
 */
function isUpcomingEvent(album: EventAlbum): boolean {
  if (album.title.includes("2026")) return true;
  if (album.coverImage.includes("2026")) return true;
  return false;
}

/**
 * Helper to extract or format a readable event date.
 * Inspects explicit album.date, date patterns in the title, or timestamps in image URLs.
 */
function getEventDate(album: EventAlbum): string {
  if (album.date) return album.date;

  // 1. Check for full date in title: e.g. "18th December 2021" -> format as "Dec 18, 2021"
  const fullDateMatch = album.title.match(
    /(\d{1,2})(?:st|nd|rd|th)?\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i
  );
  if (fullDateMatch) {
    const [, day, month, year] = fullDateMatch;
    const shortMonth = month.slice(0, 3);
    return `${shortMonth} ${parseInt(day, 10)}, ${year}`;
  }

  // 2. Check for date format in Cloudinary image URL: e.g. "2026-04-04" or "2026_04_04"
  const urlDateMatch = album.coverImage.match(
    /(202[0-9])[-_](0[1-9]|1[0-2])[-_](0[1-9]|[12][0-9]|3[01])/
  );
  if (urlDateMatch) {
    const [, year, month, day] = urlDateMatch;
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const monthName = months[parseInt(month, 10) - 1] || month;
    return `${monthName} ${parseInt(day, 10)}, ${year}`;
  }

  // 3. Check for academic session or range: e.g. "2025-26", "2024-2028"
  const sessionMatch = album.title.match(/(20\d\d\s*[-–]\s*(?:20)?\d\d)/);
  if (sessionMatch) return sessionMatch[1];

  // 4. Check for standalone 4-digit year: e.g. "2025", "2022"
  const yearMatch = album.title.match(/\b(20\d{2})\b/);
  if (yearMatch) return yearMatch[1];

  return "Apr 4, 2026";
}

const academicYears = [
  { id: "all", label: "All Academic Years" },
  { id: "2025-26", label: "2025 - 2026" },
  { id: "2024-25", label: "2024 - 2025" },
  { id: "2023-24", label: "2023 - 2024" },
  { id: "2022-23", label: "2022 - 2023" },
  { id: "2021-22", label: "2021 - 2022" },
];

function LayersIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="appr-pill-ico"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="appr-pill-ico"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function EventDirectoryPage() {
  const [activeTab, setActiveTab] = useState<"all" | "upcoming">("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsYearDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAppliedSearch(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setAppliedSearch("");
  };

  // Filter events based on active tab, academic year, and applied search query (only triggered on Search button click or Enter)
  const filteredAlbums = useMemo(() => {
    return eventAlbums.filter((album) => {
      // 1. Tab filter
      if (activeTab === "upcoming" && !isUpcomingEvent(album)) {
        return false;
      }

      // 2. Academic year filter
      if (selectedYear !== "all") {
        const text = `${album.title} ${album.coverImage} ${album.date || ""}`.toLowerCase();
        if (selectedYear === "2025-26" && !/2025|2026/i.test(text)) return false;
        if (selectedYear === "2024-25" && !/2024|2025/i.test(text)) return false;
        if (selectedYear === "2023-24" && !/2023|2024/i.test(text)) return false;
        if (selectedYear === "2022-23" && !/2022|2023/i.test(text)) return false;
        if (selectedYear === "2021-22" && !/2021|2022/i.test(text)) return false;
      }

      // 3. Search query filter (only applied on Search button click or Enter)
      if (appliedSearch) {
        const q = appliedSearch.toLowerCase();
        const title = album.title.toLowerCase();
        const date = getEventDate(album).toLowerCase();
        return title.includes(q) || date.includes(q);
      }

      return true;
    });
  }, [activeTab, selectedYear, appliedSearch]);

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white animate-eventPageFadeIn">
      {/* Main Content Area aligned with standard navbar width */}
      <main className="container mx-auto px-4 max-w-[1360px] py-8 md:py-12 box-border">
        {/* Page Header Section */}
        <div className="mb-8 border-b border-gray-100 pb-5">
          <h1
            className="!text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight m-0"
            style={{ fontSize: "30px" }}
          >
            Events & Activities
          </h1>
          <p
            className="font-accent not-italic text-[#cf1427] !text-[18px] font-semibold mt-2 m-0 before:content-none"
            style={{ fontSize: "18px" }}
          >
            — Conclaves, Seminars, Health Awareness Drives & Workshops
          </p>
          <p
            className="text-gray-600 !text-[16px] leading-relaxed max-w-4xl mt-2.5 m-0"
            style={{ fontSize: "16px", lineHeight: "1.6" }}
          >
            Explore academic conclaves, technical workshops, healthcare symposiums, and dynamic student life events hosted at NIET Pharmacy Institute.
          </p>
        </div>

        {/* Filter Pills & Search Controls Row matching Approvals & Stakeholders */}
        <div className="appr-filter-container relative z-30 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full">
            {/* Left: Filter Pills Row */}
            <div className="appr-pills-row relative z-30" role="tablist" aria-label="Event filters">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "all" && selectedYear === "all"}
                onClick={() => {
                  setActiveTab("all");
                  setSelectedYear("all");
                }}
                className={`appr-pill ${activeTab === "all" && selectedYear === "all" ? "is-active" : ""}`}
              >
                <LayersIcon />
                <span>All Events</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "upcoming"}
                onClick={() => {
                  setActiveTab("upcoming");
                  setSelectedYear("all");
                }}
                className={`appr-pill ${activeTab === "upcoming" ? "is-active" : ""}`}
              >
                <CalendarIcon />
                <span>Upcoming Events</span>
              </button>

              {/* Academic Year Dropdown Pill */}
              <div className="relative z-50" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsYearDropdownOpen((prev) => !prev)}
                  className={`appr-pill ${selectedYear !== "all" ? "is-active" : ""}`}
                >
                  <CalendarIcon />
                  <span>
                    {selectedYear === "all"
                      ? "Academic Year"
                      : academicYears.find((y) => y.id === selectedYear)?.label || selectedYear}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ml-1 ${isYearDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isYearDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-[#e5e7eb] rounded-[4px] shadow-2xl py-1.5 z-[100] divide-y divide-gray-50">
                    {academicYears.map((year) => (
                      <button
                        key={year.id}
                        type="button"
                        onClick={() => {
                          setSelectedYear(year.id);
                          setActiveTab("all");
                          setIsYearDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13.5px] font-medium transition-colors flex items-center justify-between cursor-pointer ${selectedYear === year.id
                          ? "bg-[#fff8f8] text-[#cf1427] font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#cf1427]"
                          }`}
                      >
                        <span>{year.label}</span>
                        {selectedYear === year.id && (
                          <svg className="w-4 h-4 text-[#cf1427]" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Search Box & Search Button */}
            <form onSubmit={handleSearch} className="flex items-center gap-2 w-full lg:w-auto shrink-0">
              <div className="relative flex items-center bg-white border border-[#e5e7eb] rounded-[4px] shadow-sm hover:border-[#cf1427] focus-within:border-[#cf1427] focus-within:ring-1 focus-within:ring-[#cf1427] transition-all w-full sm:w-72">
                <svg
                  className="w-4 h-4 text-gray-400 ml-3.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSearch();
                    }
                  }}
                  placeholder="Search events, workshops..."
                  className="w-full h-10 px-3 text-[13.5px] text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none"
                  style={{ border: "none", outline: "none", boxShadow: "none" }}
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="mr-2.5 text-gray-400 hover:text-gray-600 p-0.5 text-xs cursor-pointer"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="appr-pill is-active flex items-center gap-2 font-bold cursor-pointer !h-10 !px-5 shrink-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-white shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>

        {/* Event Cards Grid */}
        {filteredAlbums.length === 0 ? (
          <div className="text-center py-16 px-4 w-full">
            <p className="text-[16px] sm:text-[18px] text-gray-500 font-medium m-0">
              Event not found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full box-border relative z-0">
            {filteredAlbums.map((album) => {
              const eventLink = `/inner-events-fs?event=${encodeURIComponent(album.slug)}`;
              const eventDate = getEventDate(album);

              return (
                <Link
                  key={album.slug}
                  href={eventLink}
                  className="group flex flex-col bg-white border border-gray-200 overflow-hidden shadow-none hover:shadow-none transition-all duration-300 no-underline hover:no-underline rounded-none"
                  style={{ textDecoration: "none", borderRadius: 0, boxShadow: "none" }}
                >
                  {/* Card Image Container with signature bottom-right curve */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-br-[32px] sm:rounded-br-[36px]"
                    style={{ borderBottomRightRadius: "36px" }}
                  >
                    <EventImage
                      src={album.coverImage}
                      alt={album.title}
                      fallbackText={`${album.title} photo unavailable`}
                      className="w-full h-full"
                      imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Under Image: Title, Date, View Gallery */}
                  <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                    <h3
                      className="!text-[22px] font-bold text-gray-900 group-hover:text-[#cf1427] line-clamp-2 transition-colors leading-snug mb-3 m-0"
                      style={{ fontSize: "22px", lineHeight: "1.3" }}
                      title={album.title}
                    >
                      {album.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-gray-500 gap-2 mt-auto pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-[#cf1427] shrink-0"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="truncate">{eventDate}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c4121a] group-hover:bg-[#a50e15] !text-white text-[13.5px] sm:text-sm font-semibold shadow-xs transition-colors whitespace-nowrap shrink-0">
                        <span>View Event</span>
                        <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
