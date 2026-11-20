"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  bpharmToppers,
  mpharmToppers,
  studentListPdf,
  facultyAchievementPhotos,
  topperGalleryPhotos,
} from "@/data/achievements";
import { spotlightItems } from "@/data/showcase";

export interface AchievementRecord {
  id: string;
  period: string;
  programme: string;
  category: string;
  categoryKey: "topper" | "student" | "faculty";
  recipient: string;
  achievement: string;
  rollAndBatch: string;
  image?: {
    src: string;
    alt: string;
  };
  documentUrl?: string;
}

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

function AwardIcon() {
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
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function UserCheckIcon() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  );
}

function FileTextIcon() {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function DownloadIcon() {
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
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/**
 * Compiles all authentic achievement records across university toppers,
 * student competition honours, statutory student roll, and faculty accolades.
 */
function buildAchievementRecords(): AchievementRecord[] {
  // 1. University Toppers (AKTU Gold, Silver, Bronze Medalists & Merit Rank Holders)
  const toppers: AchievementRecord[] = [...bpharmToppers, ...mpharmToppers].map(
    (student) => ({
      id: `topper-${student.rollNo}`,
      period: student.session,
      programme: student.course,
      category: "University Topper",
      categoryKey: "topper",
      recipient: student.name,
      achievement:
        student.medal === "-"
          ? `University Rank ${student.rank}`
          : `University Rank ${student.rank}; ${student.medal} Medal`,
      rollAndBatch: `${student.rollNo}; Batch ${student.batch}`,
      image: student.image
        ? {
            src: student.image,
            alt: `${student.name} - Rank ${student.rank}`,
          }
        : undefined,
    })
  );

  // 2. Official Student List (Statutory Registry Roll)
  const studentListRec: AchievementRecord = {
    id: "student-list-official",
    period: "All Sessions",
    programme: "B.Pharm & M.Pharm",
    category: "Official Student Roll",
    categoryKey: "student",
    recipient: "All Students List",
    achievement: "Statutory student roll approved by regulatory councils",
    rollAndBatch: "Official Institutional Registry",
    documentUrl: studentListPdf,
  };

  // 3. Student Competition & Merit Recognitions
  const studentRecog: AchievementRecord[] = spotlightItems
    .filter(
      (item) =>
        item.href === "/stakeholder-achievement" &&
        !item.name.startsWith("Student Name")
    )
    .map((item) => ({
      id: `student-recognition-${item.title}`,
      period: "2023-26",
      programme: "B.Pharm & M.Pharm",
      category: item.tag || "Student Recognition",
      categoryKey: "student",
      recipient: item.name,
      achievement: item.title,
      rollAndBatch: "Merit Scholar",
      image: {
        src: item.image,
        alt: `${item.title}: ${item.name}`,
      },
    }));

  // 4. Faculty Recognition
  const facultyRecog: AchievementRecord[] = [
    ...spotlightItems
      .filter((item) => item.title === "Felicitated at PCI-sponsored FDP")
      .map((item) => ({
        id: `faculty-recognition-${item.title}`,
        period: "2024-25",
        programme: "Faculty Development",
        category: "Faculty Honor",
        categoryKey: "faculty" as const,
        recipient: item.name,
        achievement: item.title,
        rollAndBatch: "PCI FDP Delegate",
        image: {
          src: item.image,
          alt: `${item.title}: ${item.name}`,
        },
      })),
    // 24 Authentic Faculty Achievement Award Certificates from NIET Pharmacy
    ...facultyAchievementPhotos.map((photo, idx) => {
      const certNo = (idx + 1).toString().padStart(2, "0");
      return {
        id: `faculty-cert-${certNo}`,
        period: "2023-26",
        programme: "Faculty of Pharmacy",
        category: "Faculty Achievement",
        categoryKey: "faculty" as const,
        recipient: `NIET Faculty Award #${certNo}`,
        achievement: "Certificate of Appreciation & Research Excellence",
        rollAndBatch: "Faculty Roll",
        image: {
          src: photo,
          alt: `Faculty Achievement Certificate ${certNo}`,
        },
      };
    }),
  ];

  return [...toppers, studentListRec, ...studentRecog, ...facultyRecog];
}

export function StakeholderInteractive() {
  const allRecords = useMemo(() => buildAchievementRecords(), []);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  // Exactly four requested pills keeping all achievements
  const categories = useMemo(
    () => [
      { key: "ALL", label: "All Achievements", hash: "", icon: LayersIcon },
      { key: "student", label: "List of Student", hash: "#Student", icon: FileTextIcon },
      { key: "topper", label: "List of University Toppers", hash: "#University", icon: AwardIcon },
      { key: "faculty", label: "Faculty Achievement", hash: "#Faculty-Achievement", icon: UserCheckIcon },
    ],
    []
  );

  // Synchronize category state with URL hash
  const updateCategoryFromHash = useCallback((hash: string, scroll = false) => {
    const cleanHash = hash.replace(/^#/, "").toLowerCase();
    const map: Record<string, string> = {
      all: "ALL",
      student: "student",
      "list-of-student": "student",
      university: "topper",
      "list-of-university-toppers": "topper",
      topper: "topper",
      "faculty-achievement": "faculty",
      faculty: "faculty",
    };

    const targetKey = map[cleanHash];
    if (targetKey) {
      setSelectedCategory(targetKey);
      if (scroll && filtersRef.current) {
        window.requestAnimationFrame(() => {
          filtersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    // Initial load from URL hash
    if (window.location.hash) {
      updateCategoryFromHash(window.location.hash, false);
    }

    const handleHashChange = () => {
      updateCategoryFromHash(window.location.hash, false);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [updateCategoryFromHash]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
    };
    if (modalImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalImage]);

  // Initialize Fancybox Lightbox (matching the exact effect on the event details page)
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
            selector: '[data-fancybox="stakeholder-gallery"]',
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
  }, []);

  const handleSelectPill = (catKey: string, catHash: string) => {
    setSelectedCategory(catKey);
    if (catHash) {
      window.history.pushState(null, "", catHash);
    } else {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const filteredRecords = useMemo(() => {
    if (selectedCategory === "ALL") return allRecords;
    return allRecords.filter((r) => r.categoryKey === selectedCategory);
  }, [allRecords, selectedCategory]);

  return (
    <div className="sa-container-wrap">
      {/* Header & Subheading */}
      <header className="sa-header">
        <h1 className="hp-title">Stakeholder Achievement</h1>
        <p className="hp-subtitle">Recognised for Quality in Pharmacy Education.</p>
        <p className="sa-lead">
          Honoring our high achievers, university rank holders, gold medalists, distinguished faculty, and scholars who demonstrate exemplary academic excellence and research merit.
        </p>
      </header>

      {/* 
        FOUR FILTER PILLS WITH EXACT REQUESTED CLASSES:
        class="appr-pills-row site-reveal is-revealed"
        1. All Achievements
        2. List of Student (#Student)
        3. List of University Toppers (#University)
        4. Faculty Achievement (#Faculty-Achievement)
      */}
      <div className="appr-filter-container" ref={filtersRef}>
        <div
          className="appr-pills-row site-reveal is-revealed"
          role="tablist"
          aria-label="Filter by Achievement Category"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectPill(cat.key, cat.hash)}
                className={`appr-pill ${isActive ? "is-active" : ""}`}
              >
                <Icon />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* STUDENT LIST STATUTORY DOWNLOAD BANNER (Visible on 'student' tab or 'ALL') */}
      {(selectedCategory === "student" || selectedCategory === "ALL") && (
        <div className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-red-50/70 via-white to-gray-50 border border-red-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="w-9 h-9 rounded-full bg-[#cf1427]/10 text-[#cf1427] flex items-center justify-center flex-shrink-0 mt-0.5">
              <FileTextIcon />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 m-0">
                Official Statutory List of Students
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 mt-1 mb-0 leading-relaxed">
                Comprehensive statutory student roll approved by regulatory bodies (PCI / AKTU). Complete official roll record available for review.
              </p>
            </div>
          </div>
          <a
            href={studentListPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cf1427] hover:bg-[#b01020] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm flex-shrink-0 no-underline cursor-pointer"
          >
            <DownloadIcon />
            <span>Download Official PDF</span>
          </a>
        </div>
      )}

      {/* UNIVERSITY TOPPERS HONOURS SHOWCASE (Visible on 'topper' tab or 'ALL') */}
      {(selectedCategory === "topper" || selectedCategory === "ALL") && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 m-0 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
              <span>University Rank Holders &amp; Medalists</span>
            </h2>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              B.Pharm &amp; M.Pharm
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topperGalleryPhotos.slice(0, 4).map((photo, idx) => (
              <a
                key={idx}
                href={photo.image}
                data-fancybox="stakeholder-gallery"
                data-caption={photo.caption}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  const $ = (window as any).$;
                  if (!$ || !$.fn || !$.fn.fancybox) {
                    e.preventDefault();
                    setModalImage({ src: photo.image, title: photo.caption });
                  }
                }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col cursor-pointer no-underline hover:no-underline"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 relative">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white">
                  <div className="text-xs sm:text-sm font-bold text-gray-900 truncate" title={photo.caption}>
                    {photo.caption}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* FULL WIDTH SPACIOUS ACHIEVEMENT DIRECTORY TABLE */}
      <div
        className="sa-table-wrap"
        role="region"
        aria-label="Stakeholder achievement records"
        tabIndex={0}
      >
        <table className="sa-table">
          <caption className="sr-only">
            Student and faculty achievement records at NIET Pharmacy
          </caption>
          <thead>
            <tr>
              <th scope="col" className="sa-th-sno">S.No.</th>
              <th scope="col" className="sa-th-period">Year / Session</th>
              <th scope="col" className="sa-th-prog">Programme / Department</th>
              <th scope="col" className="sa-th-cat">Category</th>
              <th scope="col" className="sa-th-name">Name / Group</th>
              <th scope="col" className="sa-th-achieve">Achievement / Details</th>
              <th scope="col" className="sa-th-roll">Roll No. / Batch</th>
              <th scope="col" className="sa-th-doc">Image / Document</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length > 0 ? (
              filteredRecords.map((record, index) => (
                <tr key={record.id}>
                  <td className="sa-td-center font-medium">{index + 1}</td>
                  <td className="sa-td-center font-semibold">{record.period}</td>
                  <td className="font-medium">{record.programme}</td>
                  <td>{record.category}</td>
                  <td className="sa-td-name">{record.recipient}</td>
                  <td>{record.achievement}</td>
                  <td className="sa-td-roll">{record.rollAndBatch}</td>
                  <td className="sa-image-cell">
                    {record.image ? (
                      <a
                        href={record.image.src}
                        data-fancybox="stakeholder-gallery"
                        data-caption={`${record.recipient} — ${record.achievement}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          const $ = (window as any).$;
                          if (!$ || !$.fn || !$.fn.fancybox) {
                            e.preventDefault();
                            setModalImage({
                              src: record.image!.src,
                              title: `${record.recipient} — ${record.achievement}`,
                            });
                          }
                        }}
                        className="bg-transparent border-none p-0 cursor-pointer block no-underline hover:no-underline"
                        aria-label={`Open image for ${record.recipient}`}
                      >
                        <img
                          src={record.image.src}
                          alt={record.image.alt}
                          width={120}
                          height={76}
                          loading="lazy"
                          className="rounded border border-gray-200 hover:border-[#cf1427] transition-colors"
                        />
                      </a>
                    ) : record.documentUrl ? (
                      <a
                        href={record.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sa-document-link"
                      >
                        Download PDF
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="sa-no-results">
                  No achievement records found for this category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="sa-scroll-hint">Scroll horizontally to view all columns.</p>

      {/* FACULTY ACHIEVEMENT CERTIFICATES GALLERY (Visible on 'faculty' tab or 'ALL') */}
      {(selectedCategory === "faculty" || selectedCategory === "ALL") && (
        <section className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#cf1427]" />
                <span>Faculty Achievement Certificates Gallery ({facultyAchievementPhotos.length})</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-0">
                Official certificates of appreciation, honors, and research achievements awarded to NIET Pharmacy faculty members. Click any certificate to enlarge.
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Session 2023–2026
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {facultyAchievementPhotos.map((photo, idx) => {
              const certNo = (idx + 1).toString().padStart(2, "0");
              const title = `Faculty Achievement Certificate #${certNo}`;
              return (
                <a
                  key={idx}
                  href={photo}
                  data-fancybox="stakeholder-gallery"
                  data-caption={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    const $ = (window as any).$;
                    if (!$ || !$.fn || !$.fn.fancybox) {
                      e.preventDefault();
                      setModalImage({
                        src: photo,
                        title,
                      });
                    }
                  }}
                  className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm flex flex-col cursor-pointer no-underline hover:no-underline"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={photo}
                      alt={title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2 text-center bg-gray-50 border-t border-gray-100">
                    <div className="text-[11px] font-bold text-gray-800">Cert #{certNo}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}

      {/* LIGHTBOX PREVIEW MODAL (Event-style Fullscreen Lightbox) */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 select-none"
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-red-400 p-2 z-10 transition-colors cursor-pointer bg-black/40 hover:bg-black/70 rounded-full border-none"
            onClick={() => setModalImage(null)}
            aria-label="Close image popup"
          >
            <CloseIcon />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
          >
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
            />
            {modalImage.title && (
              <p className="mt-4 text-center text-white text-sm font-medium">
                {modalImage.title}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
