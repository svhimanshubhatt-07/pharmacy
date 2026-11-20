"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ResearchTableCell, seminarGalleryData } from "@/data/research";

interface ResearchSectionViewProps {
  sectionId: string;
  title: string;
  subtitle?: string;
  description?: string;
  tables?: ResearchTableCell[][][];
  paragraphs?: string[];
  isSeminar?: boolean;
}

export const ResearchSectionView: React.FC<ResearchSectionViewProps> = ({
  sectionId,
  title,
  subtitle,
  description,
  tables = [],
  paragraphs = [],
  isSeminar = false,
}) => {
  const subtitleClean = subtitle ? subtitle.replace(/^[\s—–-]+/, "") : "";
  const [isSeminarExpanded, setIsSeminarExpanded] = useState(false);
  const [openGalleryDays, setOpenGalleryDays] = useState<Record<number, boolean>>({});

  const toggleGalleryDay = (idx: number) => {
    setOpenGalleryDays((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="homePage hp ab sa-page appr-page research-page bg-white min-h-screen">
      <main className="container mx-auto px-4 max-w-[1360px] py-8 md:py-12 box-border">
        {/* Full-width Main Content Area */}
        <div className="w-full">
          {/* Breadcrumb Navigation: Home / Research & Development / {title} */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-[#6b7280] mb-5">
            <Link href="/" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
              Home
            </Link>
            <span className="text-[#9ca3af]">/</span>
            <Link href="/research" className="text-[#6b7280] hover:text-[#111827] transition-colors no-underline">
              Research &amp; Development
            </Link>
            <span className="text-[#9ca3af]">/</span>
            <span className="text-gray-900 font-medium">{title}</span>
          </nav>

          {/* Header Section: Section title, red subheading with single dash, 16px description */}
          <header className="mb-8 border-b border-gray-100 pb-5">
            <h1
              className="!text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight m-0"
              style={{ fontSize: "30px" }}
            >
              {title}
            </h1>
            {subtitleClean && (
              <p
                className="font-accent not-italic text-[#cf1427] !text-[18px] font-semibold m-0 before:content-none"
                style={{ fontSize: "18px", marginTop: "16px" }}
              >
                — {subtitleClean}
              </p>
            )}
            {description && (
              <p
                className="text-gray-600 !text-[16px] leading-relaxed max-w-4xl m-0"
                style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "16px" }}
              >
                {description}
              </p>
            )}
          </header>

          {/* Paragraphs if present (e.g. Seminar overview: Border removed, 10 lines + Read More) */}
          {paragraphs && paragraphs.length > 0 && (
            <div className="mb-8">
              <div className="space-y-3.5 bg-transparent p-0 border-0 shadow-none">
                {(isSeminar && !isSeminarExpanded
                  ? paragraphs.slice(0, 4)
                  : paragraphs
                ).map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className={`!text-[16px] text-base leading-[1.8] text-gray-700 text-justify m-0 ${
                      pIdx === 0 || p === "Overview of the Programme :"
                        ? "font-bold text-slate-900"
                        : ""
                    }`}
                    style={{ fontSize: "16px", lineHeight: "1.8" }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {isSeminar && paragraphs.length > 4 && (
                <button
                  type="button"
                  onClick={() => setIsSeminarExpanded(!isSeminarExpanded)}
                  className="inline-flex items-center gap-1.5 text-[#cf1427] hover:text-[#990000] font-bold text-[15.5px] mt-3 cursor-pointer underline underline-offset-4 decoration-[#cf1427]/40 hover:decoration-[#cf1427] transition-colors"
                >
                  {isSeminarExpanded ? "Read Less ↑" : "Read More ↓"}
                </button>
              )}
            </div>
          )}

          {/* Solid Red Institutional Tables with PDF downloads */}
          {tables && tables.length > 0 && (
            <div className="space-y-6">
              {tables.map((tbl, tIdx) => {
                const headerRow = tbl[0] || [];
                const dataRows = tbl.slice(1);
                const firstHeader =
                  sectionId === "publication" || sectionId === "publications"
                    ? "Publication Year"
                    : headerRow[0]?.text || "Title";

                return (
                  <div
                    key={tIdx}
                    className="appr-table-wrap mb-6"
                    role="region"
                    aria-label={title}
                    tabIndex={0}
                  >
                    <table
                      className="appr-table appr-table-3col w-full table-fixed"
                      style={{ tableLayout: "fixed", width: "100%" }}
                    >
                      <caption className="sr-only">
                        {title} Research and Publication Records
                      </caption>
                      <colgroup>
                        <col style={{ width: "80px" }} />
                        <col />
                        <col style={{ width: "260px" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="appr-th-sno text-center"
                            style={{ width: "80px", textAlign: "center" }}
                          >
                            S.No
                          </th>
                          <th
                            scope="col"
                            className="appr-th-agency !text-left"
                            style={{ textAlign: "left" }}
                          >
                            {firstHeader}
                          </th>
                          <th
                            scope="col"
                            className="appr-th-download text-center"
                            style={{ width: "260px", textAlign: "center" }}
                          >
                            Download
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, rIdx) => {
                          const titleCell = row[0];
                          const linkCells = row.slice(1);

                          return (
                            <tr key={rIdx}>
                              <td
                                className="appr-td-center font-medium text-center"
                                style={{ width: "80px", textAlign: "center" }}
                              >
                                {rIdx + 1}
                              </td>
                              <td
                                className="appr-td-agency font-semibold text-slate-900 !text-left"
                                style={{ textAlign: "left" }}
                              >
                                {titleCell?.text}
                              </td>
                              <td
                                className="appr-td-center text-center"
                                style={{ width: "260px", textAlign: "center" }}
                              >
                                <div className="flex flex-col items-center justify-center gap-1.5 w-full">
                                  {linkCells.map((cell, cIdx) => (
                                    cell.link ? (
                                      <a
                                        key={cIdx}
                                        href={cell.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="appr-download-link w-[160px] min-w-[160px] max-w-[160px] text-center justify-center"
                                      >
                                        {cell.text && cell.text !== "Click Here to Download"
                                          ? cell.text.includes("↓")
                                            ? cell.text
                                            : `${cell.text} ↓`
                                          : linkCells.length > 1
                                            ? cell.link?.includes("new") || cell.link?.includes("2025") || cell.link?.includes("PUBLICATION")
                                              ? "Current List ↓"
                                              : "Archive PDF ↓"
                                            : "Download PDF ↓"}
                                      </a>
                                    ) : (
                                      <span
                                        key={cIdx}
                                        className="text-slate-600 font-medium"
                                      >
                                        {cell.text}
                                      </span>
                                    )
                                  ))}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <p className="appr-scroll-hint">Scroll horizontally to view all columns.</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Seminar Gallery for Govt Seminar */}
          {isSeminar && (
            <div className="mt-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                DST-SERB Sponsored Seminar Gallery
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Seminar Day 1 (Inaugural & Technical Sessions)",
                    photos: seminarGalleryData.day1,
                  },
                  {
                    title: "Seminar Day 2 (E-Posters & Keynote Addresses)",
                    photos: seminarGalleryData.day2,
                  },
                  {
                    title: "Seminar Day 3 (Valedictory & Award Ceremony)",
                    photos: seminarGalleryData.day3,
                  },
                ].map((day, dIdx) => {
                  const isOpen = !!openGalleryDays[dIdx];

                  return (
                    <div
                      key={day.title}
                      className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs transition-all"
                    >
                      <div
                        onClick={() => toggleGalleryDay(dIdx)}
                        className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                      >
                        <span className="font-bold text-slate-800 text-[15px] sm:text-base select-none">
                          {day.title} ({day.photos.length} Photos)
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleGalleryDay(dIdx);
                          }}
                          className="appr-download-link w-[160px] min-w-[160px] max-w-[160px] text-center justify-center cursor-pointer shadow-sm hover:shadow"
                          style={{ width: "160px" }}
                        >
                          {isOpen ? "Close ↑" : "View ↓"}
                        </button>
                      </div>

                      {isOpen && (
                        <div className="p-4 pt-1 border-t border-slate-100 bg-slate-50/40">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
                            {day.photos.map((src, pIdx) => (
                              <a
                                key={pIdx}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-lg overflow-hidden border border-slate-200/80 hover:shadow-md transition-shadow bg-white"
                              >
                                <img
                                  src={src}
                                  alt={`${day.title} photo ${pIdx + 1}`}
                                  loading="lazy"
                                  className="w-full h-36 object-cover hover:scale-105 transition-transform duration-200"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
