"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DocumentTable } from "@/components/DocumentTable";
import {
  iqacCompositionPdf,
  iqacMembers,
  iqacMinutesOfMeetings,
} from "@/data/iqac";

export function IQACInteractive() {
  const [activeTab, setActiveTab] = useState<"composition" | "mom">("composition");

  return (
    <main className="min-h-screen bg-slate-50/50 py-8 sm:py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-sm text-slate-500"
        >
          <Link
            href="/"
            className="hover:text-[#cf1427] transition-colors font-medium"
          >
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#0f172a]" aria-current="page">
            IQAC
          </span>
        </nav>

        {/* 2. Top Header Section: 30px heading, red subheading with '-', 2-3 line 16px desc */}
        <header className="flex flex-col gap-4 mb-8">
          <h1 className="text-[28px] sm:text-[30px] font-extrabold text-[#0f172a] tracking-tight leading-tight m-0">
            Internal Quality Assurance Cell (IQAC)
          </h1>
          <p className="text-[#cf1427] font-semibold text-[17px] lg:text-[18px] m-0">
            — Continuous Quality Monitoring, Accreditation Standards &amp; Institutional Excellence
          </p>
          <p
            className="w-full text-[16px] text-slate-600 leading-relaxed m-0"
            style={{ fontSize: "16px", lineHeight: "1.7" }}
          >
            The Internal Quality Assurance Cell (IQAC) at NIET Pharmacy Institute was established to build and sustain a comprehensive quality culture. In strict alignment with NAAC and NBA frameworks, the cell initiates, plans, and supervises institutional quality benchmarks to ensure student-centric learning and cutting-edge pharmaceutical research.
          </p>
        </header>

        {/* 3. Top Horizontal Navigation Tabs (2 Buttons) */}
        <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-slate-200 pb-5">
          <button
            type="button"
            onClick={() => setActiveTab("composition")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              activeTab === "composition"
                ? "bg-[#cf1427] text-white shadow-sm ring-2 ring-[#cf1427] ring-offset-2"
                : "bg-white text-slate-700 border border-slate-200 hover:border-[#cf1427] hover:text-[#cf1427]"
            }`}
          >
            <span>IQAC Composition</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("mom")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              activeTab === "mom"
                ? "bg-[#cf1427] text-white shadow-sm ring-2 ring-[#cf1427] ring-offset-2"
                : "bg-white text-slate-700 border border-slate-200 hover:border-[#cf1427] hover:text-[#cf1427]"
            }`}
          >
            <span>Minutes of Meeting (MOM)</span>
          </button>
        </div>

        {/* 4. Tab Content Area */}
        {activeTab === "composition" && (
          <section className="animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] m-0">
                  IQAC Composition
                </h2>
                <p className="text-[#cf1427] font-semibold text-[17px] lg:text-[18px] m-0">
                  — Committee Structure &amp; Designated Institutional Quality Officers
                </p>
                <p className="text-[16px] text-slate-600 leading-relaxed m-0">
                  The IQAC operates in accordance with NAAC guidelines to ensure continuous academic quality enhancement:
                </p>
              </div>
              <a
                href={iqacCompositionPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-center shrink-0 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{
                  backgroundColor: "#cf1427",
                  color: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  paddingTop: "11px",
                  paddingBottom: "11px",
                  borderRadius: "6px",
                  fontWeight: "700",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(207, 20, 39, 0.25)",
                  minWidth: "270px",
                }}
              >
                Official Composition PDF ↓
              </a>
            </div>

            {/* IQAC Composition Table using .appr-table styling */}
            <div
              className="appr-table-wrap mb-6 overflow-x-auto"
              role="region"
              aria-label="IQAC Composition Members"
              tabIndex={0}
            >
              <table
                className="appr-table w-full table-auto"
                style={{ width: "100%" }}
              >
                <caption className="sr-only">
                  Internal Quality Assurance Cell Composition Members
                </caption>
                <colgroup>
                  <col style={{ width: "80px" }} />
                  <col style={{ width: "260px" }} />
                  <col />
                  <col style={{ width: "380px" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="appr-th-sno text-center whitespace-nowrap"
                      style={{ width: "80px", textAlign: "center" }}
                    >
                      S.No
                    </th>
                    <th
                      scope="col"
                      className="text-left whitespace-nowrap"
                      style={{ width: "260px", textAlign: "left" }}
                    >
                      Name of Member
                    </th>
                    <th
                      scope="col"
                      className="text-left whitespace-nowrap"
                      style={{ textAlign: "left" }}
                    >
                      Designation / Post
                    </th>
                    <th
                      scope="col"
                      className="text-left whitespace-nowrap"
                      style={{ width: "380px", textAlign: "left" }}
                    >
                      IQAC Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {iqacMembers.map((m) => (
                    <tr key={m.sNo}>
                      <td
                        className="appr-td-center font-medium text-center whitespace-nowrap"
                        style={{ width: "80px", textAlign: "center" }}
                      >
                        {m.sNo}
                      </td>
                      <td
                        className="font-semibold text-slate-900 text-left whitespace-nowrap"
                        style={{ width: "260px", textAlign: "left" }}
                      >
                        {m.name}
                      </td>
                      <td
                        className="text-slate-700 text-left whitespace-nowrap"
                        style={{ textAlign: "left" }}
                      >
                        {m.detail}
                      </td>
                      <td
                        className="text-left font-medium text-gray-900 text-sm sm:text-[14px] whitespace-nowrap"
                        style={{ width: "380px", textAlign: "left" }}
                      >
                        {m.designation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === "mom" && (
          <section className="animate-fadeIn">
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] m-0">
                Verified Minutes of Meeting Records (2018 - 2025)
              </h2>
              <p className="text-[#cf1427] font-semibold text-[17px] lg:text-[18px] m-0">
                — Official Records of Quarterly &amp; Annual Institutional Quality Reviews
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed m-0">
                Official records of quarterly and annual IQAC institutional quality reviews, deliberations, and resolutions:
              </p>
            </div>

            <DocumentTable
              documents={iqacMinutesOfMeetings.map((mom, idx) => ({
                sNo: idx + 1,
                title: `IQAC Minutes of Meeting - ${mom.date}`,
                pdfUrl: mom.pdfUrl,
                actionText: "Download MOM PDF",
              }))}
            />
          </section>
        )}
      </div>
    </main>
  );
}

export default IQACInteractive;
