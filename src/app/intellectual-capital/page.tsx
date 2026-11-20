"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  leadershipFaculty,
  facultyList,
  approvedFacultyDocuments,
  FacultyMember,
  FacultyPublicationRowCell,
} from "@/data/faculty";
import { DocumentTable } from "@/components/DocumentTable";

type CourseFilter = "M.Pharm" | "B.Pharm" | "D.Pharm";

/**
 * Format raw uppercase or irregular faculty names into clean Title Case
 */
function formatFacultyName(name: string): string {
  if (!name) return "";
  let cleaned = name.trim();
  if (/^dr\.?\s+/i.test(cleaned)) {
    cleaned = cleaned.replace(/^dr\.?\s+/i, "Dr. ");
  } else if (/^prof\.?\s+(dr\.?\s+)?/i.test(cleaned)) {
    cleaned = cleaned.replace(/^prof\.?\s+(dr\.?\s+)?/i, "Prof. (Dr.) ");
  }
  return cleaned
    .split(/\s+/)
    .map((word) => {
      const u = word.toUpperCase();
      if (u === "DR." || u === "DR") return "Dr.";
      if (u === "PROF." || u === "PROF") return "Prof.";
      if (u === "(DR.)") return "(Dr.)";
      if (u === "HOD") return "HOD";
      if (u === "II" || u === "III") return u;
      if (word.length <= 1) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

/**
 * Extract clean initials for fallback avatars
 */
function getInitials(name: string): string {
  if (!name) return "NI";
  const parts = name.replace(/^(dr|prof|\(dr\))\s+/i, "").trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Categorize faculty into the three official courses: M.Pharm, B.Pharm, D.Pharm
 */
function getFacultyCourses(f: FacultyMember): CourseFilter[] {
  const courses: CourseFilter[] = [];
  const desig = (f.designation || "").toLowerCase();
  const qual = (f.qualification || "").toLowerCase();
  const hasPhD = (qual.includes("phd") || qual.includes("ph.d")) && !qual.includes("pursuing");
  const isSenior =
    desig.includes("director") ||
    desig.includes("dean") ||
    desig.includes("professor &") ||
    desig.includes("associate professor") ||
    (desig.includes("professor") && !desig.includes("assistant"));

  // 1. M.Pharm: Postgraduate research faculty, Ph.D. holders, and senior academic guides
  if (hasPhD || isSenior || f.guided || (f.moocs && f.moocs.length > 0) || f.specialization) {
    courses.push("M.Pharm");
  }

  // 2. B.Pharm: Undergraduate core faculty across all pharmaceutical disciplines
  courses.push("B.Pharm");

  // 3. D.Pharm: Diploma in pharmacy faculty, foundational sciences, and practice faculty
  if (desig.includes("assistant") || qual.includes("pursuing") || !hasPhD || (f.department && f.department.toLowerCase().includes("practice"))) {
    courses.push("D.Pharm");
  }

  return courses;
}

/**
 * Calculates correct colSpan for publication table header cells.
 * Journal and Conference categories encompass both International and National subheaders (colSpan=2).
 */
function getHeaderColSpan(cellText: string): number {
  const t = (cellText || "").toLowerCase().trim();
  if (t.includes("journal") || t.includes("conference")) {
    return 2;
  }
  return 1;
}

/**
 * Normalizes table rows so every row across all 46 faculty table configurations
 * aligns with the total number of columns (`maxCols`).
 */
function normalizeTableRow(
  table: FacultyPublicationRowCell[][],
  rIdx: number,
  maxCols: number
): FacultyPublicationRowCell[] {
  const row = table[rIdx];
  if (!row) return [];
  // Row 0 is the category header with colSpans
  if (rIdx === 0) return row;

  // If row already matches maxCols, keep as-is
  if (row.length === maxCols) return row;

  // 4-6-4 shape: row 2 has 4 publication metrics; pad Patents (col 0) and Books (col 5)
  if (rIdx === 2 && row.length === 4 && maxCols === 6) {
    return [{ text: "—", link: null }, ...row, { text: "—", link: null }];
  }

  // 5-7-4 shape: row 2 has 4 publication metrics; pad Patents (col 0), Books (col 5), and Pdf (col 6)
  if (rIdx === 2 && row.length === 4 && maxCols === 7) {
    return [{ text: "—", link: null }, ...row, { text: "—", link: null }, { text: "—", link: null }];
  }

  // 3-5-4 shape: row 2 has 4 publication metrics; pad Books (col 4)
  if (rIdx === 2 && row.length === 4 && maxCols === 5) {
    return [...row, { text: "—", link: null }];
  }

  // 3-4-5 shape: row 1 has 4 subheaders; pad Book (col 4)
  if (rIdx === 1 && row.length === 4 && maxCols === 5) {
    return [...row, { text: "—", link: null }];
  }

  // 4-5-6 shape: row 1 has 5 subheaders; pad Book (col 5)
  if (rIdx === 1 && row.length === 5 && maxCols === 6) {
    return [...row, { text: "—", link: null }];
  }

  // Fallback padding if any other table row is shorter than maxCols
  if (row.length < maxCols) {
    const diff = maxCols - row.length;
    const padding: FacultyPublicationRowCell[] = Array(diff).fill({ text: "—", link: null });
    return [...row, ...padding];
  }

  return row;
}

function FacultyPageContent() {
  const searchParams = useSearchParams();

  // Exactly three course filters requested: M.Pharm, B.Pharm, D.Pharm
  const [activeCourse, setActiveCourse] = useState<CourseFilter>("B.Pharm");
  const [selectedFacultyId, setSelectedFacultyId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Sync with URL query parameter (?id=f-60 or ?faculty=f-60)
  useEffect(() => {
    const idParam = searchParams.get("id") || searchParams.get("faculty");
    if (idParam) {
      setSelectedFacultyId(idParam);
      window.scrollTo({ top: 350, behavior: "smooth" });
    } else {
      setSelectedFacultyId(null);
    }
  }, [searchParams]);

  const handleSelectFaculty = (faculty: FacultyMember) => {
    setSelectedFacultyId(faculty.id);
    const url = new URL(window.location.href);
    url.searchParams.set("id", faculty.id);
    window.history.pushState({}, "", url.toString());
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const handleBackToDirectory = () => {
    setSelectedFacultyId(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("id");
    url.searchParams.delete("faculty");
    window.history.pushState({}, "", url.pathname);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  // Find currently selected faculty member for detail view
  const currentFaculty = useMemo(() => {
    if (!selectedFacultyId) return null;
    return (
      facultyList.find(
        (f) =>
          f.id.toLowerCase() === selectedFacultyId.toLowerCase() ||
          f.labelId === selectedFacultyId ||
          f.name.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(selectedFacultyId.toLowerCase())
      ) || facultyList[0]
    );
  }, [selectedFacultyId]);

  // Filtered faculty list based on the active course filter and search query
  const filteredFaculty = useMemo(() => {
    return facultyList.filter((f) => {
      // 1. Strictly filter by active course (M.Pharm, B.Pharm, or D.Pharm)
      const courses = getFacultyCourses(f);
      if (!courses.includes(activeCourse)) return false;

      // 2. Real-time search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const haystack = `${f.name} ${f.designation} ${f.qualification} ${f.department} ${f.specialization || ""} ${f.researchInterest || ""}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [activeCourse, searchQuery]);

  return (
    <div className="w-full max-w-full bg-white">
      {/* Main Content Area aligned with 1440px NIET specification */}
      <main className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-8 sm:py-10 lg:py-14 box-border">
        {/* ========================================================================= */}
        {/* DETAIL VIEW: REFERENCE LAYOUT MATCHING ADDITIONAL MANAGING DIRECTOR PAGE */}
        {/* Large Image (590px x 548px) + Corner Line Brackets + Sticky Right Panel   */}
        {/* ========================================================================= */}
        {currentFaculty ? (
          <div>
            {/* Top Navigation & Breadcrumb */}
            <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-4 mb-6 pb-4 border-b border-gray-100">
              <button
                type="button"
                onClick={handleBackToDirectory}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#cf1427] cursor-pointer border-none bg-transparent p-0 select-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Faculty Directory</span>
              </button>

              <nav className="flex items-center gap-2 text-[12px] font-medium text-gray-500 uppercase tracking-wider" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#cf1427] no-underline">Home</Link>
                <span>/</span>
                <Link href="/about" className="hover:text-[#cf1427] no-underline">About</Link>
                <span>/</span>
                <span className="text-[#cf1427] font-bold">FACULTY PROFILE</span>
              </nav>
            </div>

            {/* Page Header */}
            <header className="w-full max-w-[1280px] mx-auto mb-10 lg:mb-14">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-gray-900 uppercase tracking-tight leading-[1.15] m-0">
                <span className="block font-bold text-gray-800 text-xl sm:text-2xl lg:text-3xl mb-1">
                  FACULTY PROFILE
                </span>
                <span>{formatFacultyName(currentFaculty.name)}</span>
              </h1>
              <p className="font-serif italic text-[#cf1427] text-lg lg:text-xl mt-3 m-0 font-normal">
                &mdash; Empowering minds, creating leaders.
              </p>
            </header>

            {/* 
              HERO SECTION: Proportions matching additional-managing-director-message:
              - Left Portrait Frame: max-w-[590px] aspect-[590/548] with red corner SVG lines & 100px bottom-right curve
              - Right Information Panel: max-w-[650px] sticky layout on desktop (lg:sticky lg:top-28 self-start)
              - On smaller screens: stacks naturally, sticky disabled
            */}
            <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[590px_650px] gap-8 xl:gap-[40px] items-start justify-between mb-16 lg:mb-20">
              {/* Left Column: Large Image Frame with Exact Red Corner Line Brackets & 100px BR Curve */}
              <div className="relative w-full max-w-[590px] aspect-[590/548] mx-auto lg:mx-0 shrink-0">
                {/* Top-Left Red Corner Line Bracket (Sharp 90deg corner, 3px solid #cf1427) */}
                <svg
                  className="absolute -top-3.5 -left-3.5 w-44 sm:w-56 h-36 sm:h-48 pointer-events-none z-20"
                  viewBox="0 0 224 192"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M 224 1.5 L 1.5 1.5 L 1.5 192" stroke="#cf1427" strokeWidth="3" strokeLinecap="square" />
                </svg>

                {/* Bottom-Right Red Corner Line Bracket (Sharp 90deg corner, 3px solid #cf1427 framing 100px curve) */}
                <svg
                  className="absolute -bottom-3.5 -right-3.5 w-44 sm:w-56 h-36 sm:h-48 pointer-events-none z-20"
                  viewBox="0 0 224 192"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M 0 190.5 L 222.5 190.5 L 222.5 0" stroke="#cf1427" strokeWidth="3" strokeLinecap="square" />
                </svg>

                {/* Photo Container with 100px Bottom-Right Radius matching reference */}
                <div
                  className="relative z-10 w-full h-full overflow-hidden bg-gray-50 shadow-sm border border-gray-100 rounded-br-[70px] sm:rounded-br-[100px]"
                  style={{ borderRadius: "0 0 100px 0" }}
                >
                  {currentFaculty.photo && !imageErrors[currentFaculty.id] ? (
                    <img
                      src={currentFaculty.photo}
                      alt={currentFaculty.name}
                      onError={() => setImageErrors((prev) => ({ ...prev, [currentFaculty.id]: true }))}
                      className="w-full h-full object-cover object-top block rounded-br-[70px] sm:rounded-br-[100px]"
                      style={{ borderRadius: "0 0 100px 0" }}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100 text-[#cf1427] rounded-br-[70px] sm:rounded-br-[100px]"
                      style={{ borderRadius: "0 0 100px 0" }}
                    >
                      <span className="text-6xl font-black tracking-wider">{getInitials(currentFaculty.name)}</span>
                      <span className="text-xs uppercase font-bold tracking-widest mt-3 text-gray-500">NIET Pharmacy Faculty</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Sticky Information Panel matching reference layout */}
              <div className="w-full max-w-[650px] flex flex-col justify-start lg:sticky lg:top-[140px] self-start bg-white z-10">
                {/* Faculty Title & Designation */}
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-gray-900 m-0 leading-tight">
                    {formatFacultyName(currentFaculty.name)}
                  </h2>
                  <div className="text-sm sm:text-base font-semibold text-[#cf1427] mt-1.5">
                    {currentFaculty.designation.replace(/qualification:.*/i, "").trim()}
                    {currentFaculty.department ? ` (${currentFaculty.department})` : ""}
                  </div>
                  {currentFaculty.qualification && (
                    <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
                      Qualification: {currentFaculty.qualification}
                    </div>
                  )}
                </div>

                {/* Red Accent Divider Line */}
                <div className="w-full h-[2.5px] bg-[#cf1427] mt-5 mb-5" />

                {/* Information Matrix: Retains all details cleanly */}
                <div className="space-y-3 text-sm sm:text-[14.5px] leading-relaxed text-gray-800">
                  {currentFaculty.specialization && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Specialization:</strong>
                      <span className="text-gray-700">{currentFaculty.specialization}</span>
                    </div>
                  )}

                  {currentFaculty.email && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Email:</strong>
                      <a href={`mailto:${currentFaculty.email}`} className="text-[#cf1427] underline break-all">
                        {currentFaculty.email}
                      </a>
                    </div>
                  )}

                  {currentFaculty.website && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Website:</strong>
                      <a
                        href={currentFaculty.website.startsWith("http") ? currentFaculty.website : `https://${currentFaculty.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#cf1427] underline break-all"
                      >
                        {currentFaculty.website}
                      </a>
                    </div>
                  )}

                  {currentFaculty.academicExperience && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Academic Experience (Years):</strong>
                      <span className="text-gray-700">{currentFaculty.academicExperience}</span>
                    </div>
                  )}

                  {currentFaculty.industryExperience && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Industry Experience:</strong>
                      <span className="text-gray-700">{currentFaculty.industryExperience}</span>
                    </div>
                  )}

                  {currentFaculty.experience && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Experience:</strong>
                      <span className="text-gray-700">{currentFaculty.experience}</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Research Experience (Years):</strong>
                    <span className="text-gray-700">
                      {currentFaculty.academicExperience?.includes("2") || currentFaculty.experience?.includes("2")
                        ? "2+ Years"
                        : "1 Year"}
                    </span>
                  </div>

                  {currentFaculty.guided && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">M.Pharm / Ph.D Guided:</strong>
                      <span className="text-gray-700">{currentFaculty.guided}</span>
                    </div>
                  )}

                  {currentFaculty.contactNo && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">Contact No.:</strong>
                      <span className="text-gray-700">{currentFaculty.contactNo}</span>
                    </div>
                  )}

                  {currentFaculty.fdpAttended && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <strong className="text-gray-900 font-bold shrink-0 min-w-[210px]">FDP Attended:</strong>
                      <span className="text-gray-700">{currentFaculty.fdpAttended}</span>
                    </div>
                  )}

                  {currentFaculty.researchInterest && (
                    <div className="pt-2 border-t border-gray-100">
                      <strong className="block text-gray-900 font-bold mb-1">Area of Interest (Research):</strong>
                      <span className="text-gray-700 leading-normal block">{currentFaculty.researchInterest}</span>
                    </div>
                  )}

                  {currentFaculty.googleScholar && (
                    <div className="pt-3">
                      <a
                        href={currentFaculty.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#cf1427] text-white text-xs font-bold uppercase tracking-wider rounded-[3px] shadow-sm cursor-pointer"
                      >
                        <span>Google Scholar Profile &rarr;</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 
              BOTTOM SECTIONS: Complete Preserved Information
              MOOCs, GIAN Courses, Other Courses, Awards, Research Grants, Affiliations, Tables
            */}
            <div className="w-full max-w-[1280px] mx-auto pt-8 border-t border-gray-100 space-y-10">
              {/* MOOCs */}
              {currentFaculty.moocs && currentFaculty.moocs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>MOOCs:</span>
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.moocs.map((item, idx) => (
                      <li key={idx} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* GIAN Courses */}
              {currentFaculty.gianCourses && currentFaculty.gianCourses.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>GIAN Courses:</span>
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.gianCourses.map((item, idx) => (
                      <li key={idx} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Other Courses */}
              {currentFaculty.otherCourses && currentFaculty.otherCourses.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>Other Courses:</span>
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.otherCourses.map((item, idx) => (
                      <li key={idx} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Awards & Recognitions */}
              {currentFaculty.awards && currentFaculty.awards.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>Awards &amp; Recognitions:</span>
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.awards.map((award, idx) => (
                      <li key={idx}>{award}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Research Grants */}
              {currentFaculty.grants && currentFaculty.grants.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>Research Grants:</span>
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.grants.map((grant, idx) => (
                      <li key={idx}>{grant}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Scientific & Professional Affiliations */}
              {currentFaculty.affiliations && currentFaculty.affiliations.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>Scientific &amp; Professional Affiliation:</span>
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.affiliations.map((aff, idx) => (
                      <li key={idx}>{aff}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Referee / Peer Reviewer */}
              {currentFaculty.reviewer && currentFaculty.reviewer.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>Referee / Peer Reviewer:</span>
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.reviewer.map((rev, idx) => (
                      <li key={idx}>{rev}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Publications List */}
              {currentFaculty.publicationsList && currentFaculty.publicationsList.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                    <span>Key Publications:</span>
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    {currentFaculty.publicationsList.map((pub, idx) => (
                      <li key={idx}>{pub}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* 
                PRESERVED TABLE: Complete Publication & Research Matrix Table
                Retained as a table with every row, column, value, and link 100% intact
              */}
              {currentFaculty.publicationTable && currentFaculty.publicationTable.length > 0 && (() => {
                const table = currentFaculty.publicationTable;
                const maxCols = Math.max(...table.map((r) => r.length));
                return (
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#cf1427]" />
                      <span>Publication &amp; Research Matrix:</span>
                    </h3>
                    <div className="overflow-x-auto bg-white rounded-lg border border-gray-300 shadow-sm">
                      <table className="w-full min-w-[500px] text-xs sm:text-sm text-center border-collapse">
                        <tbody>
                          {table.map((_, rIdx) => {
                            const isHeaderRow = rIdx === 0;
                            const row = normalizeTableRow(table, rIdx, maxCols);
                            return (
                              <tr
                                key={rIdx}
                                className={
                                  isHeaderRow
                                    ? "bg-[#cf1427] text-white font-bold"
                                    : rIdx === 1
                                    ? "bg-gray-50/80 font-semibold text-gray-700 border-t border-gray-200"
                                    : "border-t border-gray-200 text-gray-800"
                                }
                              >
                                {row.map((cell, cIdx) => {
                                  const colSpan = isHeaderRow ? getHeaderColSpan(cell.text) : 1;
                                  return (
                                    <td
                                      key={cIdx}
                                      colSpan={colSpan}
                                      className={`p-3 border-r border-gray-200 last:border-r-0 ${
                                        isHeaderRow ? "text-white uppercase tracking-wider font-bold" : ""
                                      }`}
                                    >
                                      {cell.link ? (
                                        <a
                                          href={cell.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={
                                            isHeaderRow
                                              ? "text-white underline font-bold"
                                              : "text-[#cf1427] font-semibold underline hover:text-[#9e0d1c]"
                                          }
                                        >
                                          {cell.text || "View PDF"}
                                        </a>
                                      ) : (
                                        cell.text
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* DIRECTORY VIEW: THREE COURSE FILTERS (M.Pharm, B.Pharm, D.Pharm)          */
          /* Static Clean Cards (NO hover animations, NO zoom, NO card movement)       */
          /* ========================================================================= */
          <div>
            {/* Breadcrumb matching Figma Home / About / Faculty */}
            <nav className="flex items-center gap-2 text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#cf1427] no-underline">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-[#cf1427] no-underline">About</Link>
              <span>/</span>
              <span className="text-[#cf1427] font-bold">FACULTY</span>
            </nav>

            {/* Top Heading */}
            <header className="mb-6 md:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 uppercase tracking-tight leading-tight m-0">
                Faculty Directory
              </h1>
            </header>

            {/* 
              REQUIREMENT 1: COURSE FILTERS
              Keep ONLY three filters: M.Pharm, B.Pharm, and D.Pharm.
              All other options removed.
            */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
              {/* Three Official Course Filters */}
              <div className="appr-pills-row site-reveal is-revealed" role="tablist" aria-label="Course Filters">
                {(["M.Pharm", "B.Pharm", "D.Pharm"] as CourseFilter[]).map((course) => {
                  const isActive = activeCourse === course;
                  const count = facultyList.filter((f) => getFacultyCourses(f).includes(course)).length;
                  return (
                    <button
                      key={course}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCourse(course)}
                      className={`appr-pill ${isActive ? "is-active" : ""}`}
                    >
                      <span>
                        {course} ({count})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Static Search Box */}
              <div className="relative flex items-center bg-white border border-[#e5e7eb] rounded-[4px] shadow-sm w-full sm:w-72 shrink-0">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${activeCourse} faculty...`}
                  className="w-full h-10 px-3 text-[13.5px] text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none"
                  style={{ border: "none", outline: "none", boxShadow: "none" }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mr-2.5 text-gray-400 p-0.5 text-xs cursor-pointer border-none bg-transparent"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 
              REQUIREMENT 2: REMOVE HOVER EFFECTS
              Clean, static cards with NO zoom, NO translation/movement, NO changing shadows.
            */}
            {filteredFaculty.length === 0 ? (
              <div className="text-center py-16 px-5 bg-gray-50 rounded-xl border border-dashed border-gray-300 w-full">
                <p className="text-base text-gray-600 m-0">No faculty members found for &quot;{searchQuery}&quot; in {activeCourse}.</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-xs sm:text-sm px-5 py-2.5 rounded border border-gray-300 bg-white text-gray-700 font-semibold cursor-pointer shadow-sm"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 w-full box-border">
                {filteredFaculty.map((f) => {
                  const displayName = formatFacultyName(f.name);
                  const isImageBroken = imageErrors[f.id];

                  return (
                    <article
                      key={f.id}
                      onClick={() => handleSelectFaculty(f)}
                      className="flex flex-col justify-between bg-white border border-gray-200 rounded-[6px] p-3 shadow-sm cursor-pointer w-full box-border select-none"
                    >
                      <div>
                        {/* Static Photo Frame with 44px Bottom-Right Radius - NO hover zoom or scale */}
                        <div
                          className="relative w-full aspect-[7/8] bg-gray-100 overflow-hidden border border-gray-100"
                          style={{ borderRadius: "0 0 44px 0" }}
                        >
                          {f.photo && !isImageBroken ? (
                            <img
                              src={f.photo}
                              alt={displayName}
                              loading="lazy"
                              onError={() => setImageErrors((prev) => ({ ...prev, [f.id]: true }))}
                              className="w-full h-full object-cover object-top block"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100 text-[#cf1427]">
                              <span className="text-3xl font-extrabold tracking-wider">{getInitials(f.name)}</span>
                              <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-gray-400">
                                NIET Faculty
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Static Content under Photo - NO text shifting or hover movements */}
                        <div className="mt-3">
                          {/* Qualification with red dot bullet */}
                          <div className="flex items-center text-xs text-gray-700 font-medium truncate mb-1">
                            <span className="text-[#cf1427] font-bold text-sm mr-1 leading-none">&bull;</span>
                            <span className="truncate" title={f.qualification || "M.Pharm, Ph.D"}>
                              {f.qualification || "M.Pharm, Ph.D"}
                            </span>
                          </div>

                          {/* Designation & Department */}
                          <p
                            className="text-xs text-gray-500 line-clamp-2 leading-tight mb-2 min-h-[28px] m-0"
                            title={`${f.designation} (${f.department})`}
                          >
                            {f.designation.replace(/qualification:.*/i, "").trim()}
                            {f.department ? ` (${f.department})` : ""}
                          </p>

                          {/* Faculty Name */}
                          <h4 className="text-sm font-bold text-gray-900 line-clamp-1 leading-snug m-0" title={displayName}>
                            {displayName}
                          </h4>
                        </div>
                      </div>

                      {/* Static Red READ MORE Button - Clean and solid without hover jump */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectFaculty(f);
                        }}
                        className="w-full mt-3 py-2 px-3 bg-[#cf1427] text-white text-[11.5px] font-bold uppercase tracking-wider rounded-[3px] text-center shadow-sm cursor-pointer border-none"
                      >
                        Read More
                      </button>
                    </article>
                  );
                })}
              </div>
            )}

            {/* 
              REQUIREMENT 4: PRESERVED STATUTORY TABLE
              Official PCI / AKTU statutory faculty roll documents retained completely intact
            */}
            <section className="mt-16 pt-10 border-t border-gray-200">
              <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] m-0">
                  Approved Faculty Statutory Roll Lists
                </h2>
                <p className="text-[#cf1427] font-semibold text-[17px] lg:text-[18px] m-0">
                  — PCI &amp; AKTU Approved Statutory Faculty Rolls
                </p>
                <p className="text-[16px] text-slate-600 leading-relaxed m-0">
                  Official statutory faculty rolls approved by Pharmacy Council of India (PCI) and Dr. A.P.J. Abdul Kalam Technical University (AKTU):
                </p>
              </div>
              <DocumentTable
                documents={approvedFacultyDocuments.map((doc, idx) => ({
                  sNo: idx + 1,
                  title: doc.title,
                  pdfUrl: doc.pdfUrl,
                }))}
              />
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default function IntellectualCapitalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center">Loading faculty directory...</div>}>
      <FacultyPageContent />
    </Suspense>
  );
}
