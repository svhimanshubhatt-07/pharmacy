"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { infrastructureData } from "@/data/infrastructure";

// Canonical hash alias mapper supporting all titles, shortTitles, and common aliases
const BASE_HASH_MAP: Record<string, string> = {
  overview: "classrooms",
  "campus-overview": "classrooms",
  "campus overview": "classrooms",
  classrooms: "classrooms",
  classroom: "classrooms",
  "smart-classrooms": "classrooms",
  "smart classrooms": "classrooms",
  "seminar-halls": "classrooms",
  library: "library",
  "central-library": "library",
  "central library": "library",
  centrallibrary: "library",
  toxicology: "toxicologycentre",
  toxicologycentre: "toxicologycentre",
  "toxicology-centre": "toxicologycentre",
  "toxicology centre": "toxicologycentre",
  animalhouse: "animalhouse",
  "animal-house": "animalhouse",
  "animal house": "animalhouse",
  cpcsea: "animalhouse",
  laboratory: "laboratory",
  laboratories: "laboratory",
  labs: "laboratory",
  lab: "laboratory",
  hostel: "hostel",
  hostels: "hostel",
  residences: "hostel",
  "hostel & residences": "hostel",
  "hostel-residences": "hostel",
  sports: "sports",
  fitness: "sports",
  leisure: "sports",
  "sports & leisure": "sports",
  "sports-leisure": "sports",
  canteen: "canteen",
  cafeteria: "canteen",
  dining: "canteen",
  "canteen & dining": "canteen",
  "canteen-dining": "canteen",
  gymnasium: "gymnasium",
  gym: "gymnasium",
  "modern gymnasium": "gymnasium",
  "modern-gymnasium": "gymnasium",
  transportation: "transportation",
  transport: "transportation",
  bus: "transportation",
  instrumentation: "instrumentation",
  "instrumentation-lab": "instrumentation",
  "instrumentation lab": "instrumentation",
  "instrumentation lab (sif)": "instrumentation",
  sif: "instrumentation",
  machine: "machine",
  "machine-room": "machine",
  "machine room": "machine",
  machineroom: "machine",
  garden: "garden",
  "herbal-garden": "garden",
  "herbal garden": "garden",
  "medicinal-plant-garden": "garden",
  "medical-plant-garden": "garden",
  "medical plant garden": "garden",
  plantgarden: "garden",
  healthcare: "hostel",
  health: "hostel",
};

// Auto-augment with all data titles, ids, and sanitized slug variants
const HASH_MAP: Record<string, string> = (() => {
  const map: Record<string, string> = { ...BASE_HASH_MAP };
  infrastructureData.forEach((item) => {
    map[item.id.toLowerCase()] = item.id;
    map[item.title.toLowerCase()] = item.id;
    map[item.title.toLowerCase().replace(/\s+/g, "-")] = item.id;
    map[item.title.toLowerCase().replace(/[^a-z0-9]/g, "")] = item.id;
    if (item.shortTitle) {
      map[item.shortTitle.toLowerCase()] = item.id;
      map[item.shortTitle.toLowerCase().replace(/\s+/g, "-")] = item.id;
      map[item.shortTitle.toLowerCase().replace(/[^a-z0-9]/g, "")] = item.id;
    }
  });
  return map;
})();

function resolveFacilityId(input: string | null | undefined): string | null {
  if (!input) return null;
  const cleaned = decodeURIComponent(input).replace(/^#/, "").toLowerCase().trim();
  if (!cleaned) return null;
  const mapped = HASH_MAP[cleaned] || cleaned;
  const found = infrastructureData.find((item) => item.id.toLowerCase() === mapped);
  return found ? found.id : null;
}

const CAMPUS_HUBS = [
  {
    id: "sif",
    title: "Sophisticated Instrumentation Facility (SIF)",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
  },
  {
    id: "cpcsea",
    title: "CPCSEA-Approved Animal Research Centre",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435150/animalhouse1.jpg",
  },
  {
    id: "machine",
    title: "Pharmaceutics Pilot Plant & Machine Room",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Machine_room_1.jpg",
  },
  {
    id: "toxicology",
    title: "Advanced Preclinical Toxicology Centre",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
  },
  {
    id: "library",
    title: "Central Knowledge Repository & E-Library",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
  },
];

export const InfrastructureShowcase: React.FC = () => {
  // Read initial hash or query parameter immediately on mount/render
  const [activeTabId, setActiveTabId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const initialId = resolveFacilityId(window.location.hash);
      if (initialId) return initialId;
      const params = new URLSearchParams(window.location.search);
      const queryId = resolveFacilityId(params.get("tab") || params.get("facility") || "");
      if (queryId) return queryId;
    }
    return "classrooms";
  });

  const contentAreaRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<string>(activeTabId);
  activeTabRef.current = activeTabId;

  // Sync with URL Hash, PopState, Route Changes, and Custom Navigation Events
  useEffect(() => {
    const applyHash = (customId?: string, shouldScroll = false) => {
      if (typeof window === "undefined") return;

      // Ignore any lightbox / fancybox / modal hashes
      const currentRawHash = window.location.hash || "";
      if (
        currentRawHash.toLowerCase().includes("gallery") ||
        currentRawHash.toLowerCase().includes("fancybox")
      ) {
        return;
      }

      const targetId =
        customId ||
        resolveFacilityId(window.location.hash) ||
        resolveFacilityId(new URLSearchParams(window.location.search).get("tab") || "") ||
        resolveFacilityId(new URLSearchParams(window.location.search).get("facility") || "");

      if (targetId) {
        const isDifferentTab = targetId !== activeTabRef.current;
        if (isDifferentTab) {
          activeTabRef.current = targetId;
          setActiveTabId(targetId);

          if (shouldScroll && contentAreaRef.current) {
            const headerOffset = 110;
            const elementPosition = contentAreaRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth",
            });
          }
        }
      }
    };

    // Immediate check without scrolling
    applyHash(undefined, false);

    // Initial load scroll ONLY if URL has an explicit facility hash/query that differs from default
    const hasInitialTarget = Boolean(
      (window.location.hash && resolveFacilityId(window.location.hash)) ||
      (new URLSearchParams(window.location.search).get("tab") &&
        resolveFacilityId(new URLSearchParams(window.location.search).get("tab")!)) ||
      (new URLSearchParams(window.location.search).get("facility") &&
        resolveFacilityId(new URLSearchParams(window.location.search).get("facility")!))
    );

    let t1: NodeJS.Timeout | undefined;
    let t2: NodeJS.Timeout | undefined;
    if (hasInitialTarget) {
      t1 = setTimeout(() => applyHash(undefined, true), 100);
      t2 = setTimeout(() => applyHash(undefined, true), 300);
    }

    const handleCustomNav = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        const id = resolveFacilityId(customEvent.detail);
        if (id) {
          applyHash(id, true);
        }
      }
    };

    const handleHashChange = () => applyHash(undefined, true);
    const handlePopState = () => applyHash(undefined, true);

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("infrastructure-tab-change", handleCustomNav);

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("infrastructure-tab-change", handleCustomNav);
    };
  }, []);

  // Initialize Fancybox Lightbox (matching the exact effect on the event details page)
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
      .then(() =>
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js", "fancybox-script")
      )
      .then(() => {
        if (!isMounted) return;
        const $ = (window as any).$;
        if ($ && $.fn && $.fn.fancybox) {
          // Disable global Fancybox hash and focus handling
          if ($.fancybox.defaults) {
            $.fancybox.defaults.hash = false;
            $.fancybox.defaults.backFocus = false;
          }

          $().fancybox({
            selector: '[data-fancybox="infrastructure-gallery"]',
            loop: true,
            hash: false,          // Never change URL hash when opening/navigating images
            backFocus: false,     // Never restore focus to trigger element (prevents auto-scroll)
            autoFocus: false,     // Never auto-focus inside popup
            trapFocus: false,     // Do not trap focus (prevents viewport shifting)
            hideScrollbar: false, // Keep page scrollbar intact (prevents 0-scroll reset on html/body)
            animationEffect: "zoom",
            transitionEffect: "slide",
            buttons: ["zoom", "slideShow", "fullScreen", "download", "close"],
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [activeTabId]);

  const activeItem =
    infrastructureData.find((item) => item.id === activeTabId) || infrastructureData[0];
  const bannerImage = activeItem.images[0];

  const [activeHubIndex, setActiveHubIndex] = useState<number>(0);
  const activeHub = CAMPUS_HUBS[activeHubIndex];

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation: Home / Infrastructure */}
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-[#6b7280] mb-5">
        <Link href="/" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
          Home
        </Link>
        <span className="text-[#9ca3af]">/</span>
        <span className="text-gray-900 font-medium">Infrastructure</span>
      </nav>

      {/* ====================================================================
          FULL-WIDTH FACILITY CONTENT (Consistent Structure)
          1. Heading & Subheading
          2. Description & Action Links
          3. Upper Featured Image Banner (Click opens in Lightbox Popup)
          4. Exactly 4 Images in 4-Column Grid (Click opens in Lightbox Popup)
          5. Equipment Register (if applicable)
          ==================================================================== */}
      <div ref={contentAreaRef} className="w-full space-y-6 md:space-y-8">
        {/* 1. Header Section matching Admissions Overview Typography */}
        <header className="border-b border-gray-200 pb-5">
          <h1 className="hp-title text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight m-0">
            {activeItem.title}
          </h1>
          {activeItem.subtitle && (
            <p
              className="font-accent not-italic text-[#cf1427] !text-[17px] md:text-[18px] font-semibold m-0"
              style={{ fontSize: "18px", marginTop: "16px" }}
            >
              — {activeItem.subtitle.replace(/^[\s—–-]+/, "")}
            </p>
          )}
          {activeItem.description && (
            <p
              className="text-gray-600 !text-[16px] leading-relaxed max-w-4xl m-0"
              style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "16px" }}
            >
              {activeItem.description}
            </p>
          )}
        </header>

        {/* 2. Description Paragraphs stretching full width to right edge with 16px font size */}
        <div
          className="w-full space-y-3.5 !text-[16px] text-gray-700 leading-relaxed font-sans text-justify"
          style={{ fontSize: "16px" }}
        >
          {activeItem.paragraphs && activeItem.paragraphs.length > 0 ? (
            activeItem.paragraphs.map((para, pIdx) => (
              <p
                key={pIdx}
                className="m-0 !text-[16px] leading-[1.8] text-justify"
                style={{ fontSize: "16px" }}
              >
                {para}
              </p>
            ))
          ) : null}

          {/* Special PDF Action Link if present */}
          {activeItem.pdfLink && (
            <div className="pt-2">
              <a
                href={activeItem.pdfLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm no-underline hover:no-underline"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="!text-white">{activeItem.pdfLink.label}</span>
              </a>
            </div>
          )}
        </div>

        {/* 3. Featured Upper Image Banner (Opens in Fancybox Lightbox Popup) */}
        <section
          aria-label={`${activeItem.title} Featured Preview`}
          className="w-full"
        >
          <a
            href={bannerImage}
            data-fancybox="infrastructure-gallery"
            data-caption={`${activeItem.title} — Main Showcase View`}
            className="group block relative w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[540px] overflow-hidden rounded-none rounded-br-[40px] md:rounded-br-[56px] shadow-lg border border-gray-200 bg-[#0b0b0b] cursor-pointer"
          >
            <img
              src={bannerImage}
              alt={`${activeItem.title} - Featured Showcase View`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager"
            />
            {/* Subtle hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-3 rounded-full backdrop-blur-xs shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          </a>
        </section>

        {/* 4. Exactly 4 Photographs in a 4-Column Grid (Flat Corners rounded-none, Opens in Fancybox Lightbox Popup) */}
        <section aria-label={`${activeItem.title} Photo Gallery`} className="w-full pt-1">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {activeItem.images.slice(0, 4).map((imgUrl, idx) => (
              <a
                key={idx}
                href={imgUrl}
                data-fancybox="infrastructure-gallery"
                data-caption={`${activeItem.title} — Photograph ${idx + 1}`}
                className="group relative aspect-[4/3] rounded-none overflow-hidden cursor-pointer border border-gray-200 hover:border-[#c4121a]/60 shadow-xs hover:shadow-lg transition-all duration-300 block bg-gray-100"
              >
                <img
                  src={imgUrl}
                  alt={`${activeItem.title} photograph ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-2 rounded-full backdrop-blur-xs shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ====================================================================
            5. CAMPUS CENTRES OF EXCELLENCE & RESEARCH HUBS (Interactive Showcase)
            - Upper Heading: Bold Title + Red Italic Subtitle matching admissions/overview typography
            - Left: 5 Interactive rows (Active row is Solid Red bg-[#c4121a] with white text)
            - Right: Featured Showcase Banner with bottom-right corner curve (rounded-br-[40px] md:rounded-br-[56px])
            ==================================================================== */}
        <section aria-label="Centres of Excellence & Research Hubs" className="w-full pt-6 md:pt-10">
          {/* Header Section */}
          <header className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight uppercase m-0">
              Centres of Excellence &amp; Research Hubs
            </h2>
            <p className="font-accent not-italic text-[#cf1427] !text-[16px] md:text-[18px] font-semibold mt-2 m-0">
              — Shaping learners into achievers through cutting-edge facilities.
            </p>
          </header>

          {/* Interactive Split Layout */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start w-full relative">
            {/* Left Column: 5 Selectable Hub Cards (Sticky on Desktop below header until bottoms align) */}
            <div className="w-full lg:w-[38%] flex flex-col gap-3 lg:sticky lg:top-[140px] xl:top-[145px] z-10 self-start">
              {CAMPUS_HUBS.map((hub, idx) => {
                const isActive = activeHubIndex === idx;
                return (
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => setActiveHubIndex(idx)}
                    className={`group w-full flex items-start gap-3 p-2 sm:p-2.5 text-left transition-all duration-300 rounded-none cursor-pointer border overflow-hidden h-[74px] sm:h-[78px] ${
                      isActive
                        ? "bg-[#c4121a] text-white border-[#c4121a] shadow-md"
                        : "bg-white text-gray-800 border-gray-200 hover:border-[#c4121a]/40 hover:bg-gray-50/70"
                    }`}
                  >
                    {/* Left Thumbnail without dark border */}
                    <div className="w-[85px] sm:w-[100px] md:w-[110px] h-full shrink-0 overflow-hidden bg-transparent">
                      <img
                        src={hub.image}
                        alt={hub.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Right Content - Top-aligned text */}
                    <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
                      <h4
                        className={`text-xs sm:text-[13px] md:text-sm font-bold font-heading leading-snug line-clamp-2 m-0 ${
                          isActive ? "text-white" : "text-[#1e293b] group-hover:text-[#c4121a]"
                        }`}
                      >
                        {hub.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Clean Featured Showcase Banner with Increased Height & Bottom-Right Corner Curve */}
            <div className="w-full lg:w-[62%] relative flex">
              <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[620px] min-h-[360px] sm:min-h-[460px] overflow-hidden rounded-none rounded-br-[40px] md:rounded-br-[56px] shadow-lg border border-gray-200 bg-[#0b0b0b]">
                <img
                  key={activeHub.id}
                  src={activeHub.image}
                  alt={`${activeHub.title} - Showcase Preview`}
                  className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Equipment & Facilities Register (for Instrumentation, Machine Room & Labs) */}
        {activeItem.tables && activeItem.tables.length > 0 && (
          <section aria-label="Equipment Register" className="w-full pt-4">
            {activeItem.tables.map((tbl, tIdx) => (
              <div
                key={tIdx}
                className="bg-white border border-gray-200 rounded-none rounded-br-[32px] sm:rounded-br-[40px] p-5 sm:p-7 shadow-xs mb-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e293b] font-heading m-0">
                    {activeItem.title} — Equipment &amp; Facility Register
                  </h3>
                  <span className="text-xs font-semibold text-[#c4121a] bg-[#fff5f5] px-2.5 py-1 rounded-md self-start sm:self-auto">
                    {tbl.rows.length} Verified Entries
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm font-sans">
                    <thead>
                      <tr className="bg-[#c4121a] text-white">
                        {tbl.headers.map((header, hIdx) => (
                          <th
                            key={hIdx}
                            className={`py-3 px-3.5 font-semibold uppercase tracking-wider text-[12px] ${
                              hIdx === 0 ? "w-16 text-center" : ""
                            }`}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {tbl.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={`transition-colors ${
                            rIdx % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          } hover:bg-red-50/40`}
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`py-2.5 px-3.5 text-gray-800 ${
                                cIdx === 0 ? "text-center font-bold text-gray-500" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};
