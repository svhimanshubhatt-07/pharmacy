"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DocumentTable } from "@/components/DocumentTable";
import { authoritiesDocuments } from "@/data/authorities";

export function AuthoritiesInteractive() {
  const [activeTab, setActiveTab] = useState<"advisory" | "governing">("advisory");

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
            Authorities
          </span>
        </nav>

        {/* 2. Top Header Section: 30px heading, red subheading with '-', 2-3 line 16px desc */}
        <header className="flex flex-col gap-4 mb-8">
          <h1 className="text-[28px] sm:text-[30px] font-extrabold text-[#0f172a] tracking-tight leading-tight m-0">
            Authorities &amp; Governance
          </h1>
          <p className="text-[#cf1427] font-semibold text-[17px] lg:text-[18px] m-0">
            — Institutional Advisory Board, Governing Body &amp; Strategic Leadership
          </p>
          <p
            className="w-full text-[16px] text-slate-600 leading-relaxed m-0"
            style={{ fontSize: "16px", lineHeight: "1.7" }}
          >
            The statutory authorities and advisory bodies at NIET Pharmacy Institute provide strategic guidance, institutional governance, and academic direction. Comprising eminent medical practitioners, educational leaders, and pharmaceutical scientists, these councils steer academic standards and regulatory compliance in alignment with PCI and AKTU.
          </p>
        </header>

        {/* 3. Top Horizontal Navigation Tabs (2 Buttons) */}
        <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-slate-200 pb-5">
          <button
            type="button"
            onClick={() => setActiveTab("advisory")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              activeTab === "advisory"
                ? "bg-[#cf1427] text-white shadow-sm ring-2 ring-[#cf1427] ring-offset-2"
                : "bg-white text-slate-700 border border-slate-200 hover:border-[#cf1427] hover:text-[#cf1427]"
            }`}
          >
            <span>Members of Advisory Board</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("governing")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all ${
              activeTab === "governing"
                ? "bg-[#cf1427] text-white shadow-sm ring-2 ring-[#cf1427] ring-offset-2"
                : "bg-white text-slate-700 border border-slate-200 hover:border-[#cf1427] hover:text-[#cf1427]"
            }`}
          >
            <span>Governing Body</span>
          </button>
        </div>

        {/* 4. Tab Content Area */}
        {activeTab === "advisory" && (
          <section className="animate-fadeIn">
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] m-0">
                Members of Advisory Board
              </h2>
              <p className="text-[#cf1427] font-semibold text-[17px] lg:text-[18px] m-0">
                — Strategic Academic Advisory &amp; Healthcare Leadership Council
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed m-0">
                Official statutory notification and compendium of the Advisory Board at NIET Pharmacy Institute:
              </p>
            </div>

            {/* Official PDF Document Table matching user image */}
            <DocumentTable
              documents={[
                {
                  sNo: 1,
                  title: "Members of Advisory Board",
                  pdfUrl: authoritiesDocuments.advisoryBoardPdf,
                  actionText: "Download PDF",
                },
              ]}
            />
          </section>
        )}

        {activeTab === "governing" && (
          <section className="animate-fadeIn">
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] m-0">
                Governing Body
              </h2>
              <p className="text-[#cf1427] font-semibold text-[17px] lg:text-[18px] m-0">
                — Statutory Institutional Governance &amp; Administrative Council
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed m-0">
                Official statutory notification and constitution of the Governing Body at NIET Pharmacy Institute:
              </p>
            </div>

            {/* Official PDF Document Table matching user image */}
            <DocumentTable
              documents={[
                {
                  sNo: 1,
                  title: "Governing Body",
                  pdfUrl: authoritiesDocuments.governingBodyPdf,
                  actionText: "Download PDF",
                },
              ]}
            />
          </section>
        )}
      </div>
    </main>
  );
}

export default AuthoritiesInteractive;
