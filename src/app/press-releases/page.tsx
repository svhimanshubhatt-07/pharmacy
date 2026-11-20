"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { EventImage } from "@/components/HomePageInteractions";
import {
  pressReleases2026,
  pressReleasesArchive,
  allPressReleases,
} from "@/data/pressReleases";

const publicationOptions = [
  { id: "all", label: "All Publications" },
  { id: "amar ujala", label: "Amar Ujala" },
  { id: "dainik jagran", label: "Dainik Jagran" },
  { id: "deshbandhu", label: "Deshbandhu" },
  { id: "daily news", label: "Daily News Bureau" },
  { id: "niet press", label: "NIET Press Bureau" },
  { id: "archive", label: "Press Archive" },
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

export default function PressReleasesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "2026" | "archive">("all");
  const [selectedPublication, setSelectedPublication] = useState<string>("all");
  const [isPublicationDropdownOpen, setIsPublicationDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set browser page title
  useEffect(() => {
    document.title = "Press Releases & Media Clippings | NIET Pharmacy | Greater Noida";
  }, []);

  // Initialize Fancybox (matching the exact effect on https://nietpharmacy.co.in/press-releases)
  useEffect(() => {
    // 1. Ensure Fancybox CSS is loaded
    if (!document.getElementById("fancybox-css")) {
      const link = document.createElement("link");
      link.id = "fancybox-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css";
      document.head.appendChild(link);
    }

    // 2. Load jQuery and Fancybox JS sequentially
    const loadScript = (src: string, id: string): Promise<void> => {
      return new Promise((resolve) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.id = id;
        s.src = src;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });
    };

    let isMounted = true;
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js", "jquery-script")
      .then(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js", "fancybox-script"))
      .then(() => {
        if (!isMounted) return;
        const $ = (window as any).$;
        if ($ && $.fn && $.fn.fancybox) {
          $().fancybox({
            selector: '[data-fancybox="gallery"]',
            loop: true,
            infobar: false,
            animationEffect: "zoom",
            transitionEffect: "slide",
            buttons: [
              "close"
            ]
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPublicationDropdownOpen(false);
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

  // Filter press releases based on active tab, publication, and applied search query
  const filteredReleases = useMemo(() => {
    return allPressReleases.filter((item) => {
      // 1. Tab filter
      if (activeTab === "2026" && !pressReleases2026.some((p) => p.id === item.id)) {
        return false;
      }
      if (activeTab === "archive" && !pressReleasesArchive.some((p) => p.id === item.id)) {
        return false;
      }

      // 2. Publication filter
      if (selectedPublication !== "all") {
        const text = `${item.publication || ""} ${item.date || ""}`.toLowerCase();
        if (!text.includes(selectedPublication.toLowerCase())) return false;
      }

      // 3. Search query filter (only applied on Search button click or Enter)
      if (appliedSearch) {
        const q = appliedSearch.toLowerCase();
        const headline = item.headline.toLowerCase();
        const date = item.date.toLowerCase();
        const pub = (item.publication || "").toLowerCase();
        return headline.includes(q) || date.includes(q) || pub.includes(q);
      }

      return true;
    });
  }, [activeTab, selectedPublication, appliedSearch]);

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
            Press Releases
          </h1>
          <p
            className="font-accent not-italic text-[#cf1427] !text-[18px] font-semibold mt-2 m-0 before:content-none"
            style={{ fontSize: "18px" }}
          >
            — Media Coverage, News Headlines & Institutional Press Releases
          </p>
          <p
            className="text-gray-600 !text-[16px] leading-relaxed max-w-4xl mt-2.5 m-0"
            style={{ fontSize: "16px", lineHeight: "1.6" }}
          >
            Browse official press coverage, print media releases, institutional breakthroughs, and newspaper highlights featuring NIET Pharmacy Institute.
          </p>
        </div>

        {/* Filter Pills & Search Controls Row matching Approvals & Events */}
        <div className="appr-filter-container relative z-30 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full">
            {/* Left: Filter Pills Row */}
            <div className="appr-pills-row relative z-30" role="tablist" aria-label="Press release filters">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "all" && selectedPublication === "all"}
                onClick={() => {
                  setActiveTab("all");
                  setSelectedPublication("all");
                }}
                className={`appr-pill ${activeTab === "all" && selectedPublication === "all" ? "is-active" : ""}`}
              >
                <LayersIcon />
                <span>All Releases</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "2026"}
                onClick={() => {
                  setActiveTab("2026");
                  setSelectedPublication("all");
                }}
                className={`appr-pill ${activeTab === "2026" ? "is-active" : ""}`}
              >
                <CalendarIcon />
                <span>Featured (2026)</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "archive"}
                onClick={() => {
                  setActiveTab("archive");
                  setSelectedPublication("all");
                }}
                className={`appr-pill ${activeTab === "archive" ? "is-active" : ""}`}
              >
                <CalendarIcon />
                <span>Media Archives</span>
              </button>

              {/* Publication / Media Dropdown Pill */}
              <div className="relative z-50" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsPublicationDropdownOpen((prev) => !prev)}
                  className={`appr-pill ${selectedPublication !== "all" ? "is-active" : ""}`}
                >
                  <CalendarIcon />
                  <span>
                    {selectedPublication === "all"
                      ? "Publication"
                      : publicationOptions.find((p) => p.id === selectedPublication)?.label || selectedPublication}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ml-1 ${isPublicationDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isPublicationDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-[#e5e7eb] rounded-[4px] shadow-2xl py-1.5 z-[100] divide-y divide-gray-50">
                    {publicationOptions.map((pub) => (
                      <button
                        key={pub.id}
                        type="button"
                        onClick={() => {
                          setSelectedPublication(pub.id);
                          setActiveTab("all");
                          setIsPublicationDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13.5px] font-medium transition-colors flex items-center justify-between cursor-pointer ${selectedPublication === pub.id
                          ? "bg-[#fff8f8] text-[#cf1427] font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#cf1427]"
                          }`}
                      >
                        <span>{pub.label}</span>
                        {selectedPublication === pub.id && (
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
                  placeholder="Search press releases..."
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

        {/* Press Release Cards Grid */}
        {filteredReleases.length === 0 ? (
          <div className="text-center py-16 px-4 w-full">
            <p className="text-[16px] sm:text-[18px] text-gray-500 font-medium m-0">
              Press release not found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full box-border relative z-0">
            {filteredReleases.map((item) => (
              <a
                key={item.id}
                href={item.image}
                data-fancybox="gallery"
                data-caption={`${item.headline}${item.publication ? ` • ${item.publication}` : ""}${item.date ? ` (${item.date})` : ""}`}
                className="group flex flex-col bg-white border border-gray-200 overflow-hidden shadow-none hover:shadow-none transition-all duration-300 no-underline hover:no-underline rounded-none"
                style={{ textDecoration: "none", borderRadius: 0, boxShadow: "none" }}
              >
                {/* Card Image Container with signature bottom-right curve */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-br-[32px] sm:rounded-br-[36px]"
                  style={{ borderBottomRightRadius: "36px" }}
                >
                  <EventImage
                    src={item.image}
                    alt={item.headline}
                    fallbackText={`${item.headline} photo unavailable`}
                    className="w-full h-full"
                    imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Under Image: Title, Date, Publication */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                  <h3
                    className="!text-[22px] font-bold text-gray-900 group-hover:text-[#cf1427] line-clamp-2 transition-colors leading-snug mb-3 m-0"
                    style={{ fontSize: "22px", lineHeight: "1.3" }}
                    title={item.headline}
                  >
                    {item.headline}
                  </h3>

                  <div className="flex items-center text-xs sm:text-sm font-medium text-gray-500 gap-1.5 mt-auto pt-3 border-t border-gray-100">
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
                    <span>{item.date}</span>
                  </div>

                  {item.publication && (
                    <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-gray-500">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 text-[#cf1427] shrink-0"
                      >
                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      <span className="truncate">{item.publication}</span>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
