"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { InfrastructureItem } from "@/data/infrastructure";

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

interface FacilityDetailViewProps {
  item: InfrastructureItem;
}

export const FacilityDetailView: React.FC<FacilityDetailViewProps> = ({ item }) => {
  const bannerImage = item.images && item.images.length > 0 ? item.images[0] : "";
  const [activeHubIndex, setActiveHubIndex] = useState<number>(0);
  const activeHub = CAMPUS_HUBS[activeHubIndex];

  // Initialize Fancybox Lightbox for gallery images
  useEffect(() => {
    if (!document.getElementById("fancybox-css")) {
      const link = document.createElement("link");
      link.id = "fancybox-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css";
      document.head.appendChild(link);
    }

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
          if ($.fancybox.defaults) {
            $.fancybox.defaults.hash = false;
            $.fancybox.defaults.backFocus = false;
          }

          $().fancybox({
            selector: '[data-fancybox="facility-gallery"]',
            loop: true,
            hash: false,
            backFocus: false,
            autoFocus: false,
            trapFocus: false,
            hideScrollbar: false,
            animationEffect: "zoom",
            transitionEffect: "slide",
            buttons: ["zoom", "slideShow", "fullScreen", "download", "close"],
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [item.id]);

  const subtitleClean = item.subtitle ? item.subtitle.replace(/^[\s—–-]+/, "") : "";

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation: Home / Infrastructure / {item.title} */}
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-[#6b7280] mb-5">
        <Link href="/" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
          Home
        </Link>
        <span className="text-[#9ca3af]">/</span>
        <Link href="/infrastructure" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
          Infrastructure
        </Link>
        <span className="text-[#9ca3af]">/</span>
        <span className="text-gray-900 font-medium">{item.title}</span>
      </nav>

      {/* FULL-WIDTH FACILITY CONTENT */}
      <div className="w-full space-y-6 md:space-y-8">
        {/* 1. Header Section */}
        <header className="border-b border-gray-200 pb-5">
          <h1 className="hp-title text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight m-0">
            {item.title}
          </h1>
          {subtitleClean && (
            <p
              className="font-accent not-italic text-[#cf1427] !text-[17px] md:text-[18px] font-semibold m-0"
              style={{ fontSize: "18px", marginTop: "16px" }}
            >
              — {subtitleClean}
            </p>
          )}
          {item.description && (
            <p
              className="text-gray-600 !text-[16px] leading-relaxed max-w-4xl m-0"
              style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "16px" }}
            >
              {item.description}
            </p>
          )}
        </header>

        {/* 2. Description Paragraphs */}
        <div
          className="w-full space-y-3.5 !text-[16px] text-gray-700 leading-relaxed font-sans text-justify"
          style={{ fontSize: "16px" }}
        >
          {item.paragraphs && item.paragraphs.length > 0 ? (
            item.paragraphs.map((para, pIdx) => (
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
          {item.pdfLink && (
            <div className="pt-2">
              <a
                href={item.pdfLink.url}
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
                <span className="!text-white">{item.pdfLink.label}</span>
              </a>
            </div>
          )}
        </div>

        {/* 3. Featured Upper Image Banner */}
        {bannerImage && (
          <section aria-label={`${item.title} Featured Preview`} className="w-full">
            <a
              href={bannerImage}
              data-fancybox="facility-gallery"
              data-caption={`${item.title} — Main Showcase View`}
              className="group block relative w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[540px] overflow-hidden rounded-none rounded-br-[40px] md:rounded-br-[56px] shadow-lg border border-gray-200 bg-[#0b0b0b] cursor-pointer"
            >
              <img
                src={bannerImage}
                alt={`${item.title} - Featured Showcase View`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-3 rounded-full backdrop-blur-xs shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </a>
          </section>
        )}

        {/* 4. Exactly 4 Photographs in a 4-Column Grid */}
        {item.images && item.images.length > 0 && (
          <section aria-label={`${item.title} Photo Gallery`} className="w-full pt-1">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {item.images.slice(0, 4).map((imgUrl, idx) => (
                <a
                  key={idx}
                  href={imgUrl}
                  data-fancybox="facility-gallery"
                  data-caption={`${item.title} — Photograph ${idx + 1}`}
                  className="group relative aspect-[4/3] rounded-none overflow-hidden cursor-pointer border border-gray-200 hover:border-[#c4121a]/60 shadow-xs hover:shadow-lg transition-all duration-300 block bg-gray-100"
                >
                  <img
                    src={imgUrl}
                    alt={`${item.title} photograph ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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
        )}

        {/* 5. CAMPUS CENTRES OF EXCELLENCE & RESEARCH HUBS */}
        <section aria-label="Centres of Excellence & Research Hubs" className="w-full pt-6 md:pt-10">
          <header className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight uppercase m-0">
              Centres of Excellence &amp; Research Hubs
            </h2>
            <p className="font-accent not-italic text-[#cf1427] !text-[16px] md:text-[18px] font-semibold mt-2 m-0">
              — Shaping learners into achievers through cutting-edge facilities.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start w-full relative">
            {/* Left Column: 5 Selectable Hub Cards */}
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
                    <div className="w-[85px] sm:w-[100px] md:w-[110px] h-full shrink-0 overflow-hidden bg-transparent">
                      <img
                        src={hub.image}
                        alt={hub.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
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

            {/* Right Column: Featured Showcase Banner */}
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
        {item.tables && item.tables.length > 0 && (
          <section aria-label="Equipment Register" className="w-full pt-4">
            {item.tables.map((tbl, tIdx) => (
              <div
                key={tIdx}
                className="bg-white border border-gray-200 rounded-none rounded-br-[32px] sm:rounded-br-[40px] p-5 sm:p-7 shadow-xs mb-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e293b] font-heading m-0">
                    {item.title} — Equipment &amp; Facility Register
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
