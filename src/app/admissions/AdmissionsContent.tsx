"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import {
  admissionPrograms,
  admissionDocumentTables,
  applicationSteps,
  requiredDocuments,
  admissionFAQs,
  afrcDisclaimer,
} from "@/data/admissions";

function PdfFileIcon({ className = "w-5 h-6 sm:w-5.5 sm:h-6.5 shrink-0" }: { className?: string }) {
  return (
    <svg
      className={`${className} transition-transform group-hover:scale-110 drop-shadow-xs`}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Red document sheet with rounded corners */}
      <path
        d="M3 2.5C3 1.11929 4.11929 0 5.5 0H15.5L22 6.5V25.5C22 26.8807 20.8807 28 19.5 28H5.5C4.11929 28 3 26.8807 3 25.5V2.5Z"
        fill="#C4121A"
      />
      {/* Folded corner */}
      <path
        d="M15.5 0V6.5H22L15.5 0Z"
        fill="#8E0D13"
      />
      {/* Document line hints */}
      <rect x="6.5" y="6" width="5.5" height="1.5" rx="0.75" fill="white" fillOpacity="0.75" />
      <rect x="6.5" y="9.5" width="11" height="1.5" rx="0.75" fill="white" fillOpacity="0.75" />
      <rect x="6.5" y="13" width="11" height="1.5" rx="0.75" fill="white" fillOpacity="0.75" />
      {/* White PDF badge */}
      <rect x="4" y="16.5" width="16" height="8.5" rx="1.5" fill="white" />
      <text
        x="12"
        y="23"
        textAnchor="middle"
        fill="#C4121A"
        fontSize="6.5"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        letterSpacing="0.5"
      >
        PDF
      </text>
    </svg>
  );
}

export function AdmissionsContent() {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number>(0);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0); // 0 = first step expanded by default

  const dpharm = admissionPrograms.find((p) => p.name.includes("Diploma"))!;
  const bpharm = admissionPrograms.find((p) => p.name.includes("Bachelor"))!;
  const bpharmLateral = admissionPrograms.find((p) => p.name.includes("Direct Admission"))!;
  const mpharm = admissionPrograms.find((p) => p.name.includes("Master"))!;

  const processSteps = [
    {
      number: "01",
      title: "Application Form",
      description:
        "Complete online application at applynow.niet.co.in, collect physical prospectus from campus, or register via UPSEE / CUET / AKTU counseling (Code: 908/1067).",
    },
    {
      number: "02",
      title: "Document Verification",
      description:
        "Submit 10th, 12th, or graduation marksheets, transfer certificate, migration, category certificates, and entrance scorecards for verification.",
    },
    {
      number: "03",
      title: "Seat Allocation",
      description:
        "Merit-based seat confirmation and official seat allotment letter issued through faculty committee and AKTU/BTE online portal.",
    },
    {
      number: "04",
      title: "Fee Submission",
      description:
        "Pay academic tuition fees via Razorpay, ERP, or Paytm to complete enrollment and collect your official admission kit.",
      hasApplyButton: true,
    },
  ];

  const syllabusList = [
    {
      title: "Bachelor of Pharmacy (B.Pharm) I, II, III & IV Year Syllabus",
      url: "/pdf/bachelor-of-pharmacy-I-II-III-IV-year-syllabus.pdf",
    },
    {
      title: "Diploma in Pharmacy (D.Pharm) New Syllabus (PCI ER-2020)",
      url: "/pdf/DPHARM-NEW-SYLLABUS.pdf",
    },
    {
      title: "M.Pharm (Pharmaceutics) Syllabus",
      url: "/pdf/pharmaceutics-syllabus.pdf",
    },
    {
      title: "M.Pharm (Pharmacology) Syllabus",
      url: "/pdf/pharmacology-syllabus.pdf",
    },
    {
      title: "M.Pharm (Pharmaceutical Chemistry) Syllabus",
      url: "/pdf/pharmaceutical-chemistry-syllabus.pdf",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* 1. Hero Banner */}
      <Banner
        title=""
        backgroundImage="/images/aboutbanner.jpg"
        mobileBackgroundImage="/images/aboutbanner.jpg"
      />

      {/* Main Page Container — Synchronized to Home Page Container (--site-content-max: 1280px & --site-page-margin) */}
      <div className="hp-container pb-12 md:pb-20 space-y-16 md:space-y-24">
        {/* 2. Find Your Programmes Section — 50% Banner Overlap, 50% White Section Below */}
        <section
          aria-label="Find Your Programmes"
          className="relative z-20 -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-36"
        >
          <div className="bg-[#c4121a] text-white rounded-none rounded-br-[60px] md:rounded-br-[80px] lg:rounded-br-[100px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
              <h2 className="hp-title text-[26px] md:text-[30px] font-bold !text-white font-heading leading-tight tracking-tight">
                Find your Programmes
              </h2>
            </div>

            {/* 2 Columns: Col 1 shifted left towards corner, Col 2 shifted right, with longer underlines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 text-base md:text-lg px-2 sm:px-6 md:px-10 lg:px-12">
              {/* Column 1: B Pharma & D Pharma (Shifted Left) */}
              <div className="space-y-6 md:space-y-7">
                <div className="w-full">
                  <Link
                    href="/admissions/b-pharma"
                    className="hover:text-red-100 transition-colors block text-white font-medium no-underline hover:no-underline pb-2.5"
                  >
                    B Pharma
                  </Link>
                  <div
                    className="w-full h-[1.5px] bg-white/75"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.75)", height: "1.5px" }}
                  />
                </div>
                <div className="w-full">
                  <Link
                    href="/admissions/d-pharma"
                    className="hover:text-red-100 transition-colors block text-white font-medium no-underline hover:no-underline pb-2.5"
                  >
                    D Pharma
                  </Link>
                  <div
                    className="w-full h-[1.5px] bg-white/75"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.75)", height: "1.5px" }}
                  />
                </div>
              </div>

              {/* Column 2: M Pharma (Shifted Right) */}
              <div className="space-y-6 md:space-y-7">
                <div className="w-full">
                  <Link
                    href="/admissions/m-pharma"
                    className="hover:text-red-100 transition-colors block text-white font-medium no-underline hover:no-underline pb-2.5"
                  >
                    M Pharma
                  </Link>
                  <div
                    className="w-full h-[1.5px] bg-white/75"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.75)", height: "1.5px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About College Section — Equal 50/50 Split (Image on Left, Content on Right) */}
        <section aria-label="About College">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Image (Equal 6 columns width) with Only Bottom-Right Corner Curved */}
            <div className="lg:col-span-6 h-full">
              <div className="relative overflow-hidden rounded-none rounded-br-[48px] md:rounded-br-[64px] lg:rounded-br-[80px] shadow-lg border border-gray-200 h-full min-h-[380px] md:min-h-[460px] flex">
                <img
                  src="https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg"
                  alt="NIET Pharmacy Campus and Laboratories"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
           
              </div>
            </div>

            {/* Right Column: Heading, Tagline, Description, 2x2 Feature Cards, Action Buttons (Equal 6 columns width) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-2">
                  About College
                </h2>
                <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-4">
                  Building Knowledge. Inspiring Purpose.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                  NIET Pharmacy is a premier educational institution affiliated with Dr. A.P.J. Abdul Kalam Technical
                  University (AKTU Code: 908) and Board of Technical Education, UP (BTE Code: 1067). Ranked 37th in
                  India by NIRF 2024, our institute blends academic rigor with industry-focused practical training,
                  state-of-the-art research laboratories, and dedicated placement support.
                </p>
              </div>

              {/* 2x2 Grid of Feature/Metric Cards — Full Width matching text alignment, Equal Card Widths, White BG, Red Icons without Icon BG */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Feature 1 */}
                <div className="w-full h-full p-4 rounded-none border border-gray-200 bg-white flex items-start gap-3.5">
                  <div className="shrink-0 text-[#c4121a] pt-0.5">
                    <svg className="w-6 h-6 text-[#c4121a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3h14v4a7 7 0 01-14 0V3zM3 6h2m14 0h2m-7 8v4m-4 3h8" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-gray-900">NIRF 37th Nationally</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Top-ranked private pharmacy institute in UP</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="w-full h-full p-4 rounded-none border border-gray-200 bg-white flex items-start gap-3.5">
                  <div className="shrink-0 text-[#c4121a] pt-0.5">
                    <svg className="w-6 h-6 text-[#c4121a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-gray-900">NBA Accredited</h4>
                    <p className="text-xs text-gray-600 mt-0.5">B.Pharm program accredited for quality education</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="w-full h-full p-4 rounded-none border border-gray-200 bg-white flex items-start gap-3.5">
                  <div className="shrink-0 text-[#c4121a] pt-0.5">
                    <svg className="w-6 h-6 text-[#c4121a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-gray-900">PCI &amp; AICTE Approved</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Approved regulatory codes for all programs</p>
                  </div>
                </div>

                {/* Feature 4 — Only Bottom-Right Corner Curved to match Image, other corners 90 degrees */}
                <div className="w-full h-full p-4 rounded-none rounded-br-[36px] md:rounded-br-[48px] border border-gray-200 bg-white flex items-start gap-3.5">
                  <div className="shrink-0 text-[#c4121a] pt-0.5">
                    <svg className="w-6 h-6 text-[#c4121a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-gray-900">Research &amp; Animal House</h4>
                    <p className="text-xs text-gray-600 mt-0.5">CPCSEA-approved animal house &amp; HPLC labs</p>
                  </div>
                </div>
              </div>

              {/* Action Button: Direct Admission in signature Red (Text Stays Pure White on Hover) */}
              <div className="pt-2">
                <a
                  href="https://applynow.niet.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white hover:!text-white focus:!text-white active:!text-white text-sm font-semibold shadow-sm transition-all inline-flex items-center gap-2 group no-underline hover:no-underline"
                >
                  <span className="!text-white group-hover:!text-white no-underline">Direct Admission</span>
                  <span className="!text-white group-hover:!text-white no-underline">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Eligibility Criteria Section — 3 Dedicated Program Boxes (One below another layout per request) */}
        <section aria-label="Eligibility Criteria" className="w-full">
          <div className="mb-6 md:mb-8 text-left">
            <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-1">
              Eligibility Criteria
            </h2>
            <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-2">
              Qualifying Admission Norms
            </p>
          </div>

          {/* 3 Dedicated Boxes for B.Pharm, D.Pharm, and M.Pharm */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Box 1: B.Pharm */}
            <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-none p-6 sm:p-7 shadow-sm flex flex-col justify-between transition-colors">
              <div>
                <h3
                  style={{ fontSize: "22px", lineHeight: "1.3" }}
                  className="!text-[22px] font-bold text-gray-900 mb-2 font-sans !leading-snug"
                >
                  Bachelor of Pharmacy (B.Pharm)
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans mb-3">
                  Passed 10+2 examination with Physics and Chemistry as compulsory subjects along with
                  Mathematics or Biology, securing at least 50% marks for General &amp; OBC (45% for SC/ST).
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                <p className="text-sm text-gray-700 font-sans leading-relaxed">
                  Lateral Entry: Direct admission into 2nd year for D.Pharm holders with min. 45% marks (10 seats).
                </p>
                <Link
                  href="/admissions/b-pharma"
                  className="px-5 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs md:text-sm font-semibold transition-colors shadow inline-flex items-center gap-2 group no-underline hover:no-underline self-start mt-1"
                >
                  <span className="!text-white group-hover:!text-white no-underline">Explore B.Pharm</span>
                  <span className="!text-white group-hover:!text-white no-underline">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Box 2: D.Pharm */}
            <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-none p-6 sm:p-7 shadow-sm flex flex-col justify-between transition-colors">
              <div>
                <h3
                  style={{ fontSize: "22px", lineHeight: "1.3" }}
                  className="!text-[22px] font-bold text-gray-900 mb-2 font-sans !leading-snug"
                >
                  Diploma in Pharmacy (D.Pharm)
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans mb-3">
                  Passed intermediate (10+2) examination without grace with Physics and Chemistry along with
                  Mathematics or Biology, conducted by UP Board or recognized equivalent.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                <p className="text-sm text-gray-700 font-sans leading-relaxed">
                  Approved Intake: 60 Seats under PCI &amp; Board of Technical Education (BTE UP) norms.
                </p>
                <Link
                  href="/admissions/d-pharma"
                  className="px-5 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs md:text-sm font-semibold transition-colors shadow inline-flex items-center gap-2 group no-underline hover:no-underline self-start mt-1"
                >
                  <span className="!text-white group-hover:!text-white no-underline">Explore D.Pharm</span>
                  <span className="!text-white group-hover:!text-white no-underline">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Box 3: M.Pharm */}
            <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-none rounded-br-[40px] md:rounded-br-[48px] p-6 sm:p-7 shadow-sm flex flex-col justify-between transition-colors">
              <div>
                <h3
                  style={{ fontSize: "22px", lineHeight: "1.3" }}
                  className="!text-[22px] font-bold text-gray-900 mb-2 font-sans !leading-snug"
                >
                  Master of Pharmacy (M.Pharm)
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans mb-3">
                  Passed B.Pharm degree from a PCI-approved institution with minimum 55% marks (50% for SC/ST).
                  GPAT-qualified candidates receive preference for admission &amp; AICTE PG stipend.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                <p className="text-sm text-gray-700 font-sans leading-relaxed">
                  Specializations in Pharmaceutics, Pharmacology, and Pharmaceutical Chemistry.
                </p>
                <Link
                  href="/admissions/m-pharma"
                  className="px-5 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs md:text-sm font-semibold transition-colors shadow inline-flex items-center gap-2 group no-underline hover:no-underline self-start mt-1"
                >
                  <span className="!text-white group-hover:!text-white no-underline">Explore M.Pharm</span>
                  <span className="!text-white group-hover:!text-white no-underline">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. List of Documents Section — Full Width Stacked Below Eligibility Criteria */}
        <section aria-label="List of Documents" className="w-full">
          <div className="bg-[#0a0a0a] text-white border border-white/10 rounded-none rounded-br-[55px] p-6 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-2">
                <h2 className="hp-title text-[26px] md:text-[30px] font-bold !text-white font-heading leading-tight tracking-tight mb-1">
                  List of Documents
                </h2>
                <p className="hp-subtitle font-accent text-[#ff6b6b] text-[17px] md:text-[18px] font-semibold mb-3">
                  Required Verification Checklist
                </p>
              </div>

              <p className="text-xs md:text-sm text-gray-400 mb-6 leading-relaxed font-sans max-w-3xl">
                Candidates must present original credentials along with two sets of self-attested photocopies
                during admission reporting &amp; document verification:
              </p>

              {/* Document Checklist with Red Dots & Clean Multi-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5 sm:gap-y-4">
                {requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a] shrink-0 mt-2 inline-block" />
                    <span className="text-xs md:text-sm text-gray-200 leading-relaxed font-sans">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action: Info note & Download Checklist PDF Button */}
            <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-gray-400 font-sans">
                Official verified document checklist for Session 2026-27 admission reporting.
              </p>
              <a
                href="/pdf/List-of-Documents.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs md:text-sm font-semibold transition-colors shadow inline-flex items-center gap-2 group no-underline hover:no-underline shrink-0"
              >
                <span className="!text-white group-hover:!text-white no-underline">Download Checklist PDF</span>
                <span className="!text-white group-hover:!text-white no-underline">&darr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. Admission Process Section — Interactive Sliding & Overlapping Cards matching Reference Wireframe */}
        <section aria-label="Admission Process" className="w-full">
          <div className="text-left mb-8 md:mb-10">
            <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-2">
              Admission Process
            </h2>
            <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-2">
              Clear, Transparent Step-by-Step Procedure for Session 2026-27.
            </p>
          </div>

          {/* Smooth Flex Accordion Cards matching Home Page Milestones with 55px bottom-right rounded corner and no bottom icons */}
          <div className="hp ab w-full">
            <ol
              className="ab-milestones__grid rounded-none !rounded-br-[55px] shadow-2xl min-h-[300px] md:min-h-[330px]"
              aria-label="Admission Steps"
            >
              {processSteps.map((step, idx) => {
                const isActive = activeProcessStep === idx;
                return (
                  <li
                    key={step.number}
                    tabIndex={0}
                    aria-current={isActive ? "step" : undefined}
                    onMouseEnter={() => setActiveProcessStep(idx)}
                    onFocus={() => setActiveProcessStep(idx)}
                    onClick={() => setActiveProcessStep(idx)}
                    className={`ab-milestone ab-milestone--${idx % 2 === 0 ? "red" : "black"}${
                      isActive ? " is-active" : ""
                    }`}
                  >
                    <span className="ab-milestone__num">{step.number}</span>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                    {step.hasApplyButton && (
                      <div className="mt-auto pt-4 self-start">
                        <a
                          href="https://applynow.niet.co.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs md:text-sm font-semibold shadow transition-colors no-underline hover:no-underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="!text-white no-underline">Apply now</span>
                          <span className="!text-white no-underline">&rarr;</span>
                        </a>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* 6. Brochure & Syllabus Section — Equal Height Columns, Left Syllabi with View buttons, Right Brochure */}
        <section aria-label="Brochure and Syllabus" className="w-full">
          <div className="text-left mb-8 md:mb-10">
            <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-2">
              Brochure &amp; Syllabus
            </h2>
            <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-2">
              Official Curricula, Course Guidelines, and Information Prospectus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Syllabi List with View buttons and NO subheadings */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="bg-white border border-gray-200 rounded-none rounded-br-[48px] md:rounded-br-[55px] p-6 sm:p-7 md:p-8 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="pb-4 border-b border-gray-100 mb-5">
                    <h3 className="hp-title text-[24px] md:text-[28px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-1">
                      Course Syllabus
                    </h3>
                    <p className="hp-subtitle font-accent text-[#CF1427] text-[16px] md:text-[17px] font-semibold mb-1">
                      Curriculum Guidelines
                    </p>
                  </div>

                  {/* PDF Syllabi List — Simple text on left, bottom divider line on each row, flat 2D PDF icon on right */}
                  <div className="w-full">
                    {syllabusList.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 sm:py-4 px-1 flex items-center justify-between gap-4 border-b border-gray-200 transition-colors hover:bg-gray-50/70 group no-underline hover:no-underline"
                      >
                        <span className="text-xs sm:text-sm md:text-[15px] font-medium text-gray-800 group-hover:text-[#c4121a] transition-colors font-sans">
                          {item.title}
                        </span>
                        {/* Professional PDF File Icon */}
                        <div className="shrink-0 flex items-center pl-2">
                          <PdfFileIcon />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 mt-5">
                  <span>Affiliated with AKTU &amp; PCI Approved Curricula</span>
                  <span className="font-semibold text-gray-700">PDF Format</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Brochure Section */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="bg-white border border-gray-200 rounded-none rounded-br-[48px] md:rounded-br-[55px] p-6 sm:p-7 md:p-8 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="pb-4 border-b border-gray-100 mb-5">
                    <h3 className="hp-title text-[24px] md:text-[28px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-1">
                      Institute Brochure
                    </h3>
                    <p className="hp-subtitle font-accent text-[#CF1427] text-[16px] md:text-[17px] font-semibold mb-1">
                      Official Information Publication
                    </p>
                  </div>

                  {/* Brochure Cover Banner */}
                  <div className="relative overflow-hidden rounded-none border border-gray-200 h-56 sm:h-64 md:h-72 group mb-4">
                    <img
                      src="https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg"
                      alt="NIET Pharmacy Information Brochure 2025-26"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex flex-col justify-end p-5">
                      <h4 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                        Information Brochure &amp; Academic Prospectus 2025-26
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 mt-5">
                  <div className="text-left w-full sm:w-auto">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 font-sans">Official Prospectus PDF</p>
                    <p className="text-xs sm:text-sm text-gray-500 font-sans mt-0.5">Verified Document &bull; Free Access</p>
                  </div>
                  <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                    <a
                      href="/pdf/brochure-01.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs md:text-sm font-semibold transition-colors shadow inline-flex items-center gap-2 shrink-0 no-underline hover:no-underline"
                    >
                      <span className="!text-white no-underline">View Brochure PDF</span>
                      <span className="!text-white no-underline">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Fee Structure Section — Dark Background with Signature 90-deg & Bottom-Right Radius */}
        <section aria-label="Fee Structure" className="w-full">
          <div className="bg-[#0b0f17] text-white rounded-none rounded-br-[55px] md:rounded-br-[64px] p-6 sm:p-8 md:p-12 shadow-2xl border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
              {/* Left Column: Heading matching Upper Page, Disclaimer, Fee PDFs */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="hp-title text-[26px] md:text-[30px] font-bold !text-white font-heading leading-tight tracking-tight mb-2">
                    Fee Structure
                  </h2>
                  <p className="hp-subtitle font-accent text-[#ff6b6b] text-[17px] md:text-[18px] font-semibold mb-2">
                    Official Regulatory Fee Matrix &amp; AFRC Guidelines.
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans max-w-2xl mt-1">
                    {afrcDisclaimer}
                  </p>
                </div>

                {/* List of Fee Structure Documents — Clean rows matching Course Syllabus with bottom divider & flat 2D PDF icon */}
                <div className="w-full">
                  {admissionDocumentTables.feeStructures.map((fee, idx) => (
                    <a
                      key={idx}
                      href={fee.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 sm:py-4 px-1 flex items-center justify-between gap-4 border-b border-white/10 transition-colors hover:bg-white/[0.04] group no-underline hover:no-underline"
                    >
                      <span className="text-xs sm:text-sm md:text-[15px] font-medium text-gray-200 group-hover:text-white transition-colors font-sans">
                        {fee.title}
                      </span>
                      {/* Professional PDF File Icon */}
                      <div className="shrink-0 flex items-center pl-2">
                        <PdfFileIcon />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Scholarships Box matching Left PDF Line background (bg-white/5 border-white/10) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white/5 border border-white/10 rounded-none rounded-br-[40px] md:rounded-br-[48px] p-6 md:p-8 pb-3.5 sm:pb-4 md:pb-4 shadow-xl flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold font-sans text-white">
                      Scholarships &amp; Government Schemes
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                      Students from reserved categories and economically weaker sections are supported through UP
                      State Post-Matric Scholarships and National Scholarship Portal (NSP).
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/10 text-[11px] text-gray-300/90 font-sans">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a] shrink-0" />
                        <span>Zero Hidden Charges &bull; Regulatory Compliant</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a] shrink-0" />
                        <span>Installment facilities as per University norms</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-auto">
                    <a
                      href="https://axisbpayments.razorpay.com/nietadmission"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white font-bold text-xs md:text-sm transition-colors shadow no-underline hover:no-underline"
                    >
                      <span className="!text-white">Pay Online via Axis Bank Razorpay &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Frequently Asked Questions Section — 2-Column Split: Heading & Questions on Left, Dark Display Card on Right */}
        <section aria-label="Frequently Asked Questions" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Heading and Question Items List */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-5 md:mb-6 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="flex flex-col space-y-3 sm:space-y-3.5">
                  {admissionFAQs.map((faq, idx) => {
                    const isActive = activeFaqIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveFaqIndex(idx)}
                        style={{
                          border: isActive ? "none" : "1px solid #e2e8f0",
                          outline: "none",
                          boxShadow: isActive ? "0 2px 8px 0 rgba(196, 18, 26, 0.2)" : "none",
                        }}
                        className={`w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-none text-left flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#c4121a] text-white"
                            : "bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50/70"
                        }`}
                      >
                        <span
                          className={`font-semibold text-sm sm:text-base md:text-[15.5px] leading-snug tracking-tight font-sans ${
                            isActive ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </span>

                        {isActive ? (
                          /* Right arrow when active */
                          <svg
                            className="w-4 h-4 text-white shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                          </svg>
                        ) : (
                          /* Downward red arrow when inactive */
                          <svg
                            className="w-4 h-4 text-[#c4121a] shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dark Display Card — Top Aligned with Heading, Bottom Aligned with Last Question */}
            <div className="lg:col-span-6 flex flex-col">
              {(() => {
                const activeFaq = admissionFAQs[activeFaqIndex] || admissionFAQs[0];
                return (
                  <div className="bg-[#121212] text-white rounded-none rounded-br-[28px] sm:rounded-br-[36px] p-7 sm:p-9 md:p-10 shadow-xl flex flex-col justify-start h-full border border-neutral-800">
                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-snug mb-4 font-sans tracking-tight">
                      {activeFaq.question}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                      {activeFaq.answer}
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-gray-700 font-sans">
              Need more information? Explore our comprehensive FAQ section or call admissions.
            </p>
            <Link
              href="/admissions/faq"
              className="px-6 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm inline-flex items-center gap-2 no-underline hover:no-underline shrink-0"
            >
              <span className="!text-white no-underline">Browse All FAQs</span>
              <span className="!text-white no-underline">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* 9. Admission-related Actions — 2 Full-Width Side-by-Side Action Buttons (Sharp 90-degree edges, Placed at Bottom after FAQ) */}
        <section aria-label="Admission Related Actions" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {/* Button 1: Contact Us (Main Brand Red: #c4121a) */}
            <Link
              href="/contact-us"
              className="w-full py-2.5 sm:py-3 md:py-3.5 px-6 rounded-none bg-[#c4121a] hover:bg-[#a50e15] text-white hover:!text-white text-base sm:text-lg md:text-xl font-medium font-sans tracking-normal text-center transition-colors shadow-sm flex items-center justify-center no-underline hover:no-underline"
            >
              <span className="!text-white no-underline">Contact Us</span>
            </Link>

            {/* Button 2: Apply Now (Deep Black: #0a0a0a) */}
            <a
              href="https://applynow.niet.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 sm:py-3 md:py-3.5 px-6 rounded-none bg-[#0a0a0a] hover:bg-black text-white hover:!text-white text-base sm:text-lg md:text-xl font-medium font-sans tracking-normal text-center transition-colors shadow-sm flex items-center justify-center no-underline hover:no-underline"
            >
              <span className="!text-white no-underline">Apply Now</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
