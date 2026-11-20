"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { admissionFAQs, FAQItem } from "@/data/admissions";

interface CategorizedFAQ extends FAQItem {
  category: "all" | "general" | "eligibility" | "fees" | "campus";
}

const detailedFAQs: CategorizedFAQ[] = [
  ...admissionFAQs.map((faq) => {
    let cat: "general" | "eligibility" | "fees" | "campus" = "general";
    if (faq.question.toLowerCase().includes("fee") || faq.question.toLowerCase().includes("pay")) {
      cat = "fees";
    } else if (faq.question.toLowerCase().includes("hostel")) {
      cat = "campus";
    } else if (faq.question.toLowerCase().includes("accredited") || faq.question.toLowerCase().includes("code")) {
      cat = "general";
    }
    return { ...faq, category: cat };
  }),
  {
    category: "eligibility",
    question: "What is the minimum eligibility criteria for B.Pharm First Year admission?",
    answer:
      "Candidates must have passed 10+2 from a recognized board with minimum 50% marks for General & OBC (45% for SC/ST) in Physics, Chemistry, and Mathematics/Biology.",
  },
  {
    category: "eligibility",
    question: "Is there lateral entry available for Diploma in Pharmacy (D.Pharm) holders?",
    answer:
      "Yes, candidates who have passed D.Pharm with minimum 50% marks (55% for SC/ST) from a recognized technical board are eligible for direct admission to the 2nd year (3rd semester) of B.Pharm.",
  },
  {
    category: "eligibility",
    question: "Are GPAT qualified candidates given preference in M.Pharm admissions?",
    answer:
      "Yes, candidates with valid GPAT qualifications receive preferential seat allocation and are eligible for AICTE postgraduate scholarships as per regulatory norms.",
  },
  {
    category: "fees",
    question: "Where can I view the official AFRC approved fee structure?",
    answer:
      "You can download the approved annual fee breakdown for D.Pharm, B.Pharm, and M.Pharm directly from our Fee Structure section or pay tuition online via our official Axis Bank Razorpay portal.",
  },
  {
    category: "campus",
    question: "What laboratories and instrumentation facilities are available for students?",
    answer:
      "NIET Pharmacy houses a CPCSEA-approved Animal House, Central Instrumentation Facility (HPLC, UV-Vis, FTIR), pilot plant machine rooms, and computer-aided drug design (CADD) labs.",
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General & Codes" },
  { id: "eligibility", label: "Eligibility & Intake" },
  { id: "fees", label: "Fees & Payment" },
  { id: "campus", label: "Hostel & Labs" },
];

export default function AdmissionFAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = useMemo(() => {
    return detailedFAQs.filter((item) => {
      return selectedCategory === "all" || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="w-full bg-white">
      {/* 1. Banner */}
      <Banner
        title="Admission FAQs"
        backgroundImage="/images/aboutbanner.jpg"
        mobileBackgroundImage="/images/aboutbanner.jpg"
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-gray-200 bg-[#f8fafc]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-20 py-3">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-600 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#c4121a] transition-colors no-underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/admissions" className="hover:text-[#c4121a] transition-colors no-underline">
              Admissions
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-semibold text-gray-900">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Main Container matching Admissions Standard */}
      <main className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-20 space-y-10 md:space-y-12 pb-16 pt-8 md:pt-12">
        {/* 2. Header Section */}
        <section aria-label="FAQ Header" className="w-full">
          <div className="text-left max-w-4xl">
            <h1 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-2">
              Frequently Asked Questions
            </h1>
            <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-3">
              Clear Answers on Eligibility, Codes, Fee Structures &amp; Campus
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-sans">
              Find instant answers to commonly asked questions about NIET Pharmacy admissions, qualifying criteria,
              fee schedules, AKTU &amp; BTE counseling codes, scholarship schemes, and on-campus hostel facilities.
            </p>
          </div>
        </section>

        {/* 3. Filter Buttons (Only Filter Buttons, No Search, No Outer Box, No Filter Text, Image 3 Style) */}
        <section aria-label="FAQ Filters" className="w-full">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    border: isActive ? "none" : "1px solid #e2e8f0",
                    outline: "none",
                  }}
                  className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-[15px] font-medium transition-all duration-200 cursor-pointer font-sans ${
                    isActive
                      ? "bg-[#c4121a] text-white shadow-xs"
                      : "bg-white text-[#1e293b] hover:border-gray-300 hover:text-[#c4121a] hover:bg-gray-50/70"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. Accordion List with Signature Red Color & Bottom-Right Edge */}
        <section aria-label="FAQ Questions List" className="w-full">
          <div className="space-y-3.5 sm:space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12 px-4 bg-gray-50 rounded-none rounded-br-[36px] border border-dashed border-gray-300">
                <p className="text-gray-600 mb-4 text-sm md:text-base font-sans">
                  No matching questions found in this category.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  style={{ border: "1px solid #e2e8f0", outline: "none" }}
                  className="px-5 py-2 rounded-md bg-white text-xs sm:text-sm font-semibold text-[#1e293b] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Show All Questions
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{ border: "none", outline: "none", boxShadow: "none" }}
                    className="rounded-none rounded-br-[20px] sm:rounded-br-[24px] overflow-hidden !border-0 !border-none !shadow-none !outline-none"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      style={{ border: "none", outline: "none", boxShadow: "none" }}
                      className="w-full px-5 sm:px-6 py-2.5 sm:py-3 text-left bg-[#c4121a] hover:bg-[#b01017] text-white flex items-center justify-between gap-4 transition-colors cursor-pointer group !border-0 !border-none !outline-none !shadow-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-sm sm:text-base md:text-[16.5px] text-white font-sans tracking-tight leading-snug">
                        {faq.question}
                      </span>

                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180 bg-white text-[#c4121a] shadow-xs" : "bg-white/20 text-white"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#0a0a0a] text-white text-xs sm:text-sm md:text-[14.5px] text-gray-200 leading-relaxed border-t border-white/10 font-sans">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* 5. Still Have Questions Box — Signature Deep Black Card with 55px Bottom-Right Curve */}
        <section aria-label="Admissions Contact Support" className="w-full">
          <div className="bg-[#0a0a0a] text-white border border-white/10 rounded-none rounded-br-[48px] md:rounded-br-[55px] p-6 sm:p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#c4121a]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b6b] font-sans">
                    Counseling &amp; Guidance Desk
                  </span>
                </div>
                <h3 className="hp-title text-[22px] md:text-[26px] font-bold !text-white font-heading leading-tight mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                  Our admission counseling cell is here to assist you with program choices, qualifying norms,
                  hostel reservations, and physical document verification.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="tel:+918010500700"
                  className="px-6 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs sm:text-sm font-semibold transition-colors shadow inline-flex items-center gap-2 no-underline hover:no-underline"
                >
                  <span>Call +91-801 050 0700</span>
                </a>
                <Link
                  href="/admissions"
                  className="px-6 py-2.5 rounded-lg border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 !text-white text-xs sm:text-sm font-semibold transition-colors no-underline hover:no-underline"
                >
                  <span>Overall Admissions</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
