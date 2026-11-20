import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { admissionDocumentTables, afrcDisclaimer } from "@/data/admissions";

export const metadata: Metadata = {
  title: "B.Pharm Admission 2025-26 | Bachelor of Pharmacy | NIET Pharmacy",
  description:
    "Apply for Bachelor of Pharmacy (B.Pharm) & B.Pharm Lateral Entry at NIET Pharmacy. NBA Accredited, NIRF #37, AKTU Code: 908. Complete eligibility, fee structure, intake, and syllabi.",
};

export default function BPharmaAdmissionPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner (Shared with Admissions) */}
      <Banner
        title="B.Pharm Admissions"
        backgroundImage="/images/aboutbanner.jpg"
        mobileBackgroundImage="/images/aboutbanner.jpg"
      />

      {/* Breadcrumb Navigation */}
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
            <span className="font-semibold text-gray-900">B.Pharm</span>
          </nav>
        </div>
      </div>

      {/* Main Container matching Overall Admissions */}
      <main className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-20 space-y-12 md:space-y-16 pb-16 pt-8 md:pt-12">
        {/* 2. Top Header Section: Clean Open Layout (No Enclosing Box) */}
        <section aria-label="B.Pharm Overview" className="w-full">
          <div>
            <h1 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-2">
              Bachelor of Pharmacy (B.Pharm) Admission 2025-26
            </h1>
            <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-3">
              Building Knowledge. Inspiring Purpose.
            </p>
            <p className="!text-[16px] text-gray-700 leading-relaxed font-sans max-w-4xl mb-7" style={{ fontSize: "16px" }}>
              A flagship 4-year undergraduate degree program recognized nationally for research excellence,
              modern formulation sciences, and top-tier industrial placements. Accredited by NBA and NIRF ranked
              #37 in India, affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU Code: 908) and approved
              by the Pharmacy Council of India (PCI). The program offers an approved intake of 100 regular seats and
              10 lateral entry seats for diploma holders with state-of-the-art laboratory infrastructure.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://applynow.niet.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm inline-flex items-center gap-2 no-underline hover:no-underline"
              >
                <span className="!text-white no-underline">Apply Online Now</span>
                <span className="!text-white no-underline">&rarr;</span>
              </a>
              <a
                href="https://axisbpayments.razorpay.com/nietadmission"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg border border-gray-300 hover:border-gray-900 bg-white text-gray-900 text-xs sm:text-sm font-semibold transition-colors shadow-sm inline-flex items-center gap-2 no-underline hover:no-underline"
              >
                <span>Pay Fees (Axis Bank)</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. Fee Structure & Course Syllabus (Official Regulatory Tables matching Reference Table) */}
        <section aria-label="Fee Structure and Syllabi" className="w-full space-y-10 md:space-y-12">
          {/* Table 1: B.Pharm Fee Structure */}
          <div>
            <div className="mb-4">
              <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-2">
                B.Pharm Fee Structure
              </h2>
              <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-2">
                Official AFRC Approved Annual Fee Matrix
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans max-w-3xl mt-1">
                {afrcDisclaimer}
              </p>
            </div>

            {/* Regulatory Table 1 */}
            <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-xs bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#c4121a] text-white text-xs sm:text-sm font-semibold tracking-normal">
                      <th className="py-3.5 px-4 sm:px-6 w-16 text-center">S.No</th>
                      <th className="py-3.5 px-4 sm:px-6">Document Title</th>
                      <th className="py-3.5 px-4 sm:px-6 hidden md:table-cell">Category</th>
                      <th className="py-3.5 px-4 sm:px-6 w-44 text-center">Download</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-800 font-sans">
                    <tr className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-4 px-4 sm:px-6 text-center font-medium text-gray-600">1</td>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900">
                        B.Pharm Fee Structure 2025-26
                        <span className="block md:hidden text-xs text-gray-500 font-normal mt-0.5">
                          Official AFRC Approved Document
                        </span>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-gray-600 hidden md:table-cell">
                        Official AFRC Approved Document
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-center">
                        <a
                          href="/pdf/fees-2025/B._Pharm_Fee_Structure_2025.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-md bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs sm:text-sm font-semibold shadow-xs inline-flex items-center gap-1.5 no-underline hover:no-underline transition-colors whitespace-nowrap"
                        >
                          <span className="!text-white">Download PDF</span>
                          <span className="!text-white">&darr;</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-end">
              <a
                href="https://axisbpayments.razorpay.com/nietadmission"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#c4121a] hover:underline"
              >
                <span>Pay Online via Axis Bank Razorpay</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Table 2: Course Syllabus */}
          <div>
            <div className="mb-4">
              <h2 className="hp-title text-[26px] md:text-[30px] font-bold text-[#1e293b] font-heading leading-tight tracking-tight mb-2">
                Course Syllabus
              </h2>
              <p className="hp-subtitle font-accent text-[#CF1427] text-[17px] md:text-[18px] font-semibold mb-2">
                AKTU &amp; PCI Approved 4-Year Credit Scheme
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans max-w-3xl mt-1">
                Access Dr. A.P.J. Abdul Kalam Technical University (AKTU) and PCI approved 8-semester curriculum credit structures.
              </p>
            </div>

            {/* Regulatory Table 2 */}
            <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-xs bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#c4121a] text-white text-xs sm:text-sm font-semibold tracking-normal">
                      <th className="py-3.5 px-4 sm:px-6 w-16 text-center">S.No</th>
                      <th className="py-3.5 px-4 sm:px-6">Curriculum / Syllabus Title</th>
                      <th className="py-3.5 px-4 sm:px-6 hidden md:table-cell">Regulatory Council / Body</th>
                      <th className="py-3.5 px-4 sm:px-6 w-44 text-center">Download</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-800 font-sans">
                    {admissionDocumentTables.bpharmSyllabi.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-4 sm:px-6 text-center font-medium text-gray-600">{idx + 1}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900">
                          {item.title}
                          <span className="block md:hidden text-xs text-gray-500 font-normal mt-0.5">
                            AKTU &amp; PCI Approved 4-Year Scheme
                          </span>
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600 hidden md:table-cell">
                          AKTU &amp; PCI Approved 4-Year Scheme
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-center">
                          <a
                            href={item.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-md bg-[#c4121a] hover:bg-[#a50e15] !text-white text-xs sm:text-sm font-semibold shadow-xs inline-flex items-center gap-1.5 no-underline hover:no-underline transition-colors whitespace-nowrap"
                          >
                            <span className="!text-white">Download PDF</span>
                            <span className="!text-white">&darr;</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-end">
              <a
                href="/pdf/brochure-01.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#c4121a] hover:underline"
              >
                <span>Download Admission Brochure (PDF)</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
