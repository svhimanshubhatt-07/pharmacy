"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { topUtilityNav, mainNav } from "@/data/navigation";

function ChevronIcon({ isOpen, className = "" }: { isOpen: boolean; className?: string }) {
  return (
    <svg
      className={`w-2.5 h-2.5 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface MegaColumn {
  tag: string;
  items: {
    title: string;
    sub?: string;
    href: string;
    isExternal?: boolean;
  }[];
}

interface MegaMenuConfig {
  columns: MegaColumn[];
  spotlight?: {
    tag: string;
    image: string;
    title: string;
    subtitle: string;
    href: string;
    updatesTag: string;
    updates: string[];
  };
  bottomBar?: {
    tag: string;
    links: { label: string; href: string; isExternal?: boolean }[];
  };
}

const ABOUT_US_MEGA: MegaMenuConfig = {
  columns: [
    {
      tag: "LEADERSHIP & GOVERNANCE",
      items: [
        { title: "Overview", sub: "Core foundational values", href: "/vision-mission" },
        { title: "Managing Director Message", sub: "Strategic guidance & vision", href: "/managing-director-message" },
        { title: "Additional Managing Director Message", sub: "Institutional leadership", href: "/additional-managing-director-message" },
        { title: "Director Message", sub: "Academic direction & mentorship", href: "/director-message" },
        { title: "Dean Message", sub: "Pharmacy academic leadership", href: "/dean-message" }
      ],
    },
    {
      tag: "ACADEMIC & QUALITY ",
      items: [
        { title: "All Faculty", sub: "Renowned faculty & researchers", href: "/intellectual-capital" },
        { title: "IQAC Quality Assurance", sub: "Continuous quality benchmarks", href: "/iqac" },
        { title: "Approvals & Affiliations", sub: "PCI, NBA & AKTU recognitions", href: "/approvals-and-affiliations" },
        { title: "Authorities & Council", sub: "Executive governance bodies", href: "/authorities" },
      ],
    },
    {
      tag: "CAMPUS & POLICIES",
      items: [
        { title: "Life at NIET", sub: "Campus vibrant experience", href: "/life-at-niet" },
        { title: "Committees & Councils", sub: "Anti-ragging & welfare cells", href: "/committee" },
        { title: "Institutional Policies", sub: "Ethics, research & governance", href: "/policy" },
        { title: "Audit Statements", sub: "Financial transparency reports", href: "/audit-statements" },
      ],
    },
  ],
  spotlight: {
    tag: "INSTITUTIONAL EXCELLENCE",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
    title: "NIRF 2024 Rank #37 in Pharmacy",
    subtitle: "Recognized among India's elite Pharmacy colleges with NBA-Accredited B.Pharm program.",
    href: "/nirf",
    updatesTag: "LATEST HIGHLIGHTS",
    updates: [
      "Autonomous Status by UGC",
      "100% Placement Support with Top MNCs",
      "PCI Approved · AKTU Code: 1067",
    ],
  },
  bottomBar: {
    tag: "STATUTORY RECOGNITIONS",
    links: [
      { label: "PCI Approved Statutory Institute", href: "/approvals-and-affiliations" },
      { label: "AKTU Affiliated Code: 1067", href: "/approvals-and-affiliations" },
      { label: "NBA Accredited B.Pharm Programme", href: "/approvals-and-affiliations" },
      { label: "NIRF 2024 Rank 37th", href: "/nirf" },
    ],
  },
};

const ADMISSIONS_MEGA: MegaMenuConfig = {
  columns: [
    {
      tag: "ADMISSIONS OVERVIEW",
      items: [
        { title: "Overall", sub: "Comprehensive admissions overview & guidelines", href: "/admissions" },
        { title: "Admission Form", sub: "Official online application registration 2026-27", href: "https://applynow.niet.co.in/?_gl=1*watz86*_gcl_au*MTEwOTIzMjc1MS4xNzQzNTEwMDY3", isExternal: true },
      ],
    },
    {
      tag: "PROGRAMMES OFFERED",
      items: [
        { title: "D Pharma", sub: "Diploma in Pharmacy (2-Year Programme)", href: "/admissions#dpharm" },
        { title: "B Pharma", sub: "Bachelor of Pharmacy (4-Year NBA Accredited)", href: "/admissions#bpharm" },
        { title: "M Pharma", sub: "Master of Pharmacy (Pharmaceutics)", href: "/admissions#mpharm" },
      ],
    },
    {
      tag: "PROCEDURES & HELP",
      items: [
        { title: "Payment Procedure", sub: "Tuition fee structure, net banking & UPI guide", href: "/admissions#payment" },
        { title: "Admission Procedure", sub: "Admission steps and eligibility requirements", href: "/admissions#procedure" },
        { title: "Required Documents", sub: "Documents required for admission", href: "/admissions#documents" },
        { title: "FAQ", sub: "Frequently asked questions & eligibility criteria", href: "/admissions#faqs" },
      ],
    },
  ],
  spotlight: {
    tag: "ADMISSION DESK 2026-27",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
    title: "Admissions Open for Session 2026-27",
    subtitle: "Join India's Top 37th NIRF Ranked Pharmacy Institute with NBA-Accredited B.Pharm program.",
    href: "https://applynow.niet.co.in/?_gl=1*watz86*_gcl_au*MTEwOTIzMjc1MS4xNzQzNTEwMDY3",
    updatesTag: "ADMISSION HIGHLIGHTS",
    updates: [
      "Direct Online Application Portal",
      "PCI Approved · AKTU Counseling Code: 1067",
      "100% Placement Support with Top MNCs",
    ],
  },
  bottomBar: {
    tag: "DIRECT ADMISSION ACTIONS",
    links: [
      { label: "Apply Online (Session 2026-27)", href: "https://applynow.niet.co.in/?_gl=1*watz86*_gcl_au*MTEwOTIzMjc1MS4xNzQzNTEwMDY3", isExternal: true },
      { label: "Payment Procedure Guide", href: "/admissions#payment" },
      { label: "Admissions Frequently Asked Questions", href: "/admissions#faqs" },
    ],
  },
};

const IMPORTANT_LINKS_MEGA: MegaMenuConfig = {
  columns: [
    {
      tag: "MANDATORY & STATUTORY",
      items: [
        { title: "PCI - SIF Dossier", sub: "Pharmacy Council of India Standard Inspection Format", href: "/pdf/PCI-SIF.pdf", isExternal: true },
        { title: "RTI Mandatory Portal", sub: "Right to Information guidelines & statutory contacts", href: "/pdf/RTI.pdf", isExternal: true },
        { title: "Mandatory Public Disclosures", sub: "Regulatory disclosures, marksheet & degree procedures", href: "/pdf/Original-Marksheets-and-Degree-by-post.pdf", isExternal: true },
      ],
    },
    {
      tag: "ACADEMIC CALENDARS",
      items: [
        { title: "Calendar Even Sem 2024-25", sub: "B.Pharm & M.Pharm session timelines", href: "/pdf/Academic Calendar 2024-25 Even Semester.pdf", isExternal: true },
        { title: "Calendar Odd Sem 2025-26", sub: "Upcoming academic curriculum schedule", href: "/pdf/Academic Calendar 2025-26 ODD Semester.pdf", isExternal: true },
      ],
    },
    {
      tag: "NIRF RANKINGS & DISCLOSURES",
      items: [
        { title: "NIRF Pharmacy Ranking Dossier", sub: "Detailed data submitted for Pharmacy 2024 (Rank #37)", href: "/pdf/NIRF-PHARMACY.pdf", isExternal: true },
        { title: "NIRF Overall Institute Report", sub: "Comprehensive institutional submission & audit", href: "/pdf/NIRF-OVERALL.pdf", isExternal: true },
        { title: "All NIRF Historical Reports", sub: "Year-wise ranking certificates & parameters", href: "/nirf" },
      ],
    },
  ],
  spotlight: {
    tag: "MANDATORY DISCLOSURES",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
    title: "100% Transparency & Regulatory Compliance",
    subtitle: "Complete repository of statutory disclosures, PCI inspections, and academic calendars.",
    href: "/pdf/PCI-SIF.pdf",
    updatesTag: "QUICK VERIFICATION",
    updates: [
      "PCI Approved · AKTU Code: 1067",
      "NBA Accredited B.Pharm Programme",
      "NIRF 2024 All-India Rank 37th",
    ],
  },
  bottomBar: {
    tag: "REGULATORY ACTIONS",
    links: [
      { label: "Download PCI-SIF Dossier", href: "/pdf/PCI-SIF.pdf", isExternal: true },
      { label: "View RTI Provisions", href: "/pdf/RTI.pdf", isExternal: true },
      { label: "NIRF Ranking Summary", href: "/nirf" },
      { label: "Contact Grievance Committee", href: "/committee" },
    ],
  },
};

const RD_MEGA: MegaMenuConfig = {
  columns: [
    {
      tag: "RESEARCH & CENTERS",
      items: [
        { title: "Research Overview", sub: "R&D Cell overview & AKTU PhD research centre", href: "/research" },
        { title: "Publications", sub: "High-impact peer-reviewed research papers & journals", href: "/research/publications" },
        { title: "Patents", sub: "Granted & published pharmaceutical patents portfolio", href: "/research/patents" },
        { title: "SIF Facilities", sub: "Sophisticated analytical instrumentation & testing rates", href: "/research/sif-facilities" },
      ],
    },
    {
      tag: "PROJECTS & GRANTS",
      items: [
        { title: "Consultancy & Sponsored Research", sub: "Industry partnerships & technical research advisory", href: "/research/consultancy" },
        { title: "Govt. Funded Projects Received", sub: "National & state competitive research project grants", href: "/research/funded-projects" },
        { title: "Govt. Funded Seminars", sub: "Government-sponsored national conferences & seminars", href: "/research/funded-seminars" },
      ],
    },
    {
      tag: "PUBLICATIONS & E-LEARNING",
      items: [
        { title: "Online MOOCs Lectures", sub: "Digital e-learning modules & video lecture repository", href: "/research/moocs" },
        { title: "Institute Magazine", sub: "Annual student & faculty technical magazine", href: "/research/magazines" },
        { title: "Institute Newsletter", sub: "Bi-annual research updates, breakthroughs & events", href: "/research/newsletters" },
      ],
    },
  ],
  spotlight: {
    tag: "RESEARCH & INNOVATION HUB",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
    title: "AKTU Authorized PhD Research Centre",
    subtitle: "Advancing pharmaceutical research through innovation and doctoral programs.",
    href: "/research",
    updatesTag: "R&D HIGHLIGHTS",
    updates: [
      "State-of-the-Art SIF Instrument Testing",
      "Multiple Active Government Research Grants",
      "Over 100+ Scopus & Web of Science",
    ],
  },
  bottomBar: {
    tag: "RESEARCH REPOSITORIES & DOWNLOADS",
    links: [
      { label: "Explore Full R&D Cell Overview", href: "/research" },
      { label: "AKTU PhD Approval Letter", href: "/pdf/research/AKTU-APPROVAL.pdf", isExternal: true },
      { label: "Annual Publications Dossier", href: "/pdf/research/new/2024-PUBLICATION-LIST.pdf", isExternal: true },
      { label: "SIF Testing Charges & Guidelines", href: "/pdf/sif/SIF Charges 2025.pdf", isExternal: true },
    ],
  },
};

const INFRASTRUCTURE_MEGA: MegaMenuConfig = {
  columns: [
    {
      tag: "ACADEMIC INFRASTRUCTURE",
      items: [
        { title: "Classrooms", sub: "Interactive ICT-enabled smart classrooms & lecture halls", href: "/infrastructure/classrooms" },
        { title: "Library", sub: "Extensive pharmaceutical book stacks, journals & DELNET", href: "/infrastructure/library" },
        { title: "Laboratories", sub: "16 Specialized Pharmaceutics, Chemistry & Pharmacology labs", href: "/infrastructure/laboratories" },
        { title: "Machine Room", sub: "Industrial-scale formulation, compression & pilot batches", href: "/infrastructure/machine-room" },
      ],
    },
    {
      tag: "RESEARCH & ADVANCED CENTRES",
      items: [
        { title: "Instrumentation Lab", sub: "HPLC, UV-Vis, FTIR, Dissolution & rotary apparatus", href: "/infrastructure/instrumentation-lab" },
        { title: "Toxicology Centre", sub: "Advanced pre-clinical toxicity & bio-safety testing", href: "/infrastructure/toxicology-centre" },
        { title: "Animal House", sub: "CPCSEA approved experimental breeding & research house", href: "/infrastructure/animal-house" },
        { title: "Medical Plant Garden", sub: "Botanical repository of indigenous therapeutic flora", href: "/infrastructure/medical-plant-garden" },
      ],
    },
    {
      tag: "CAMPUS & RESIDENTIAL LIFE",
      items: [
        { title: "Hostel", sub: "Comfortable residential accommodation for boys & girls", href: "/infrastructure/hostel" },
        { title: "Canteen", sub: "Hygienic multi-cuisine food courts & student dining", href: "/infrastructure/canteen" },
        { title: "Sports & Leisure", sub: "Multi-sport complex, cricket ground & athletic tracks", href: "/infrastructure/sports-and-leisure" },
        { title: "Gymnasium", sub: "Modern fitness arena & cardiovascular equipment", href: "/infrastructure/gymnasium" },
        { title: "Transportation", sub: "Safe GPS-tracked bus transit fleet across Delhi NCR", href: "/infrastructure/transportation" },
      ],
    },
  ],
  spotlight: {
    tag: "CAMPUS ARCHITECTURE",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
    title: "World-Class Pharmaceutical Infrastructure",
    subtitle: "Join India's Top 37th NIRF Ranked Pharmacy Institute with NBA-Accredited B.Pharm program.",
    href: "/infrastructure",
    updatesTag: "KEY AMENITIES",
    updates: [
      "CPCSEA Approved Modern Animal House",
      "High-Tech SIF Analytical Instrumentation Centre",
      "Fully Wi-Fi Enabled Smart Campus Blocks",
    ],
  },
  bottomBar: {
    tag: "CAMPUS TOURS & FACILITIES",
    links: [
      { label: "Explore Infrastructure Overview", href: "/infrastructure" },
      { label: "Instrumentation Lab", href: "/infrastructure/instrumentation-lab" },
      { label: "Library", href: "/infrastructure/library" },
      { label: "Hostel", href: "/infrastructure/hostel" },
    ],
  },
};

const STAKEHOLDER_ACHIEVEMENT_MEGA: MegaMenuConfig = {
  columns: [
    {
      tag: "STUDENT & ALUMNI EXCELLENCE",
      items: [
        { title: "Overview", sub: "Distinguished achievements across academics & careers", href: "/stakeholder-achievement" },
        { title: "List of Student", sub: "Top all-India national fellowship qualifying students", href: "/stakeholder-achievement#gpat" }
      ],
    },
    {
      tag: "FACULTY & RESEARCH AWARDS",
      items: [
        { title: "List of University Toppers", sub: "National & state level faculty recognitions", href: "/stakeholder-achievement#faculty" }
      ],
    },
    {
      tag: "COMMUNITY & OUTREACH",
      items: [
        { title: "Faculty Achievement", sub: "Community public health outreach drives & surveys", href: "/stakeholder-achievement#outreach" }
      ],
    },
  ],
  spotlight: {
    tag: "CENTRE OF EXCELLENCE",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
    title: "Recognizing Exceptional Talent & Impact",
    subtitle: "Celebrating excellence in pharmaceutical sciences.",
    href: "/stakeholder-achievement",
    updatesTag: "RECENT MILESTONES",
    updates: [
      "Consistent Double-Digit GPAT",
      "100% Placement Track Record",
      "Over 40+ National & State Research Awards",
    ],
  },
  bottomBar: {
    tag: "ACHIEVEMENTS DIRECTORY",
    links: [
      { label: "View All Stakeholder Achievements", href: "/stakeholder-achievement" },
      { label: "Placement Statistics & Records", href: "/placement-pharmacy" },
      { label: "Faculty Research Accolades", href: "/intellectual-capital" },
      { label: "NIRF All-India Ranking 37th", href: "/nirf" },
    ],
  },
};

const APPROVALS_MEGA: MegaMenuConfig = {
  columns: [
    {
      tag: "STATUTORY RECOGNITIONS",
      items: [
        { title: "Approval 2025-26", sub: "CCSEA, NBA & PCI valid operational orders", href: "/approvals-and-affiliations" },
        { title: "Approval 2024-25", sub: "AKTU, PCI, NIRF accreditation certifications", href: "/approvals-and-affiliations" },
        { title: "Approval 2023-24", sub: "AICTE, NBA, PCI statutory sanction orders", href: "/approvals-and-affiliations" },
        { title: "Approval 2022-23", sub: "PCI, AKTU, BTE compliance certifications", href: "/approvals-and-affiliations" },
      ],
    },
    {
      tag: "MANDATORY DOSSIERS & REPORTS",
      items: [
        { title: "Approval 2021-22", sub: "Historical PCI & NBA statutory renewals", href: "/approvals-and-affiliations" },
        { title: "PCI-SIF Mandatory Dossier", sub: "Complete Standard Inspection Format document", href: "/pdf/PCI-SIF.pdf", isExternal: true },
        { title: "NBA Accreditation Certificate", sub: "National Board of Accreditation tier-1 status", href: "/approvals-and-affiliations" },
      ],
    },
    {
      tag: "ALL ORDERS & DISCLOSURES",
      items: [
        { title: "All Statutory Approvals", sub: "Complete archive of government recognition gazettes", href: "/approvals-and-affiliations" },
        { title: "AKTU Affiliation Code: 1067", sub: "Official university counseling affiliation certificate", href: "/approvals-and-affiliations" },
        { title: "UGC Autonomous Sanction", sub: "University Grants Commission autonomous confirmation", href: "/approvals-and-affiliations" },
      ],
    },
  ],
  spotlight: {
    tag: "STATUTORY COMPLIANCE",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
    title: "100% Regulatory Accreditations",
    subtitle: "Complete repository of approvals from PCI, NBA, AICTE, AKTU, and UPBTE across all operational years.",
    href: "/approvals-and-affiliations",
    updatesTag: "KEY REGULATORY BODIES",
    updates: [
      "Pharmacy Council of India (PCI) Approved",
      "NBA Accredited B.Pharm Programme",
      "AKTU Lucknow Counseling Code: 1067",
    ],
  },
  bottomBar: {
    tag: "QUICK REGULATORY ACTIONS",
    links: [
      { label: "All Approvals & Affiliations", href: "/approvals-and-affiliations" },
      { label: "Download PCI-SIF Dossier", href: "/pdf/PCI-SIF.pdf", isExternal: true },
      { label: "NIRF 2024 Ranking Report", href: "/nirf" },
      { label: "Mandatory Public Disclosures", href: "/pdf/Original-Marksheets-and-Degree-by-post.pdf", isExternal: true },
    ],
  },
};

const MEGA_MENUS: Record<string, MegaMenuConfig> = {
  "ABOUT US": ABOUT_US_MEGA,
  "ADMISSIONS": ADMISSIONS_MEGA,
  "INFRASTRUCTURE": INFRASTRUCTURE_MEGA,
  "R & D": RD_MEGA,
  "RAND D": RD_MEGA,
  "R&D": RD_MEGA,
  "RESEARCH": RD_MEGA,
  "STAKEHOLDER ACHIEVEMENT": STAKEHOLDER_ACHIEVEMENT_MEGA,
  "STAKEHOLDER ACHIEVEMENTS": STAKEHOLDER_ACHIEVEMENT_MEGA,
  "ACHIEVEMENTS": STAKEHOLDER_ACHIEVEMENT_MEGA,
  "IMPORTANT LINK": IMPORTANT_LINKS_MEGA,
};

const CONFERENCES_MOBILE: MegaMenuConfig = {
  columns: [
    {
      tag: "CONFERENCES & SYMPOSIA",
      items: [
        {
          title: "NICS-2023 on Technology in Pharma Healthcare",
          sub: "National & International Conference proceedings & details",
          href: "/ics",
        },
      ],
    },
  ],
};

const MEDIA_MOBILE: MegaMenuConfig = {
  columns: [
    {
      tag: "CAMPUS MEDIA & PRESS",
      items: [
        {
          title: "Campus Events & Conferences",
          sub: "Conclaves, seminars, health awareness drives & workshops",
          href: "/event",
        },
        {
          title: "Official Press Releases",
          sub: "Media coverage, news headlines & institutional press releases",
          href: "/press-releases",
        },
      ],
    },
  ],
};

const APPROVALS_MOBILE: MegaMenuConfig = {
  columns: [
    {
      tag: "STATUTORY APPROVALS & AFFILIATIONS",
      items: [
        { title: "Approval 2025-26 (CCSEA, NBA, PCI)", sub: "Current statutory council recognitions", href: "/approvals-and-affiliations" },
        { title: "Approval 2024-25 (AKTU, PCI, NIRF)", sub: "Affiliation & ranking documentation", href: "/approvals-and-affiliations" },
        { title: "Approval 2023-24 (AICTE, NBA, PCI)", sub: "Regulatory orders & approvals", href: "/approvals-and-affiliations" },
        { title: "Approval 2022-23 (PCI, AKTU, BTE)", sub: "Accreditation dossier archive", href: "/approvals-and-affiliations" },
        { title: "Approval 2021-22 (PCI & NBA)", sub: "Historical compliance certificates", href: "/approvals-and-affiliations" },
        { title: "PCI-SIF Mandatory Dossier", sub: "Complete Standard Inspection Format document", href: "/pdf/PCI-SIF.pdf", isExternal: true },
        { title: "All Statutory Approvals & Orders", sub: "Complete archive of accreditation gazettes", href: "/approvals-and-affiliations" },
      ],
    },
  ],
};

const MOBILE_DRILLDOWN_MENUS: Record<string, MegaMenuConfig> = {
  "ABOUT US": ABOUT_US_MEGA,
  "ADMISSIONS": ADMISSIONS_MEGA,
  "INFRASTRUCTURE": INFRASTRUCTURE_MEGA,
  "R & D": RD_MEGA,
  "RAND D": RD_MEGA,
  "R&D": RD_MEGA,
  "RESEARCH": RD_MEGA,
  "STAKEHOLDER ACHIEVEMENT": STAKEHOLDER_ACHIEVEMENT_MEGA,
  "STAKEHOLDER ACHIEVEMENTS": STAKEHOLDER_ACHIEVEMENT_MEGA,
  "ACHIEVEMENTS": STAKEHOLDER_ACHIEVEMENT_MEGA,
  "IMPORTANT LINK": IMPORTANT_LINKS_MEGA,
  "CONFERENCES": CONFERENCES_MOBILE,
  "MEDIA": MEDIA_MOBILE,
  "APPROVALS": APPROVALS_MOBILE,
  "APPROVAL": APPROVALS_MOBILE,
  "APPROVALS AND AFFILIATIONS": APPROVALS_MOBILE,
  "APPROVALS & AFFILIATIONS": APPROVALS_MOBILE,
};

function MegaMenuPanel({
  config,
  pathname,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  config: MegaMenuConfig;
  pathname: string;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 shadow-xl py-6 z-[1001] max-h-[85vh] overflow-y-auto animate-fadeIn min-h-[460px] xl:min-h-[470px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 max-w-[1360px] min-h-[412px] xl:min-h-[422px] flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-8 xl:gap-10">
          {/* 3 Grouped Columns */}
          <div className="grid grid-cols-3 gap-6 xl:gap-8">
            {config.columns.map((col, cIdx) => (
              <div key={cIdx} className="flex flex-col">
                {col.tag && (
                  <span className="text-[11px] font-bold text-[#c8102e] tracking-wider uppercase mb-3 block">
                    {col.tag}
                  </span>
                )}
                <ul className="flex flex-col gap-2 list-none p-0 m-0">
                  {col.items.map((sub, sIdx) => {
                    const isSelected = pathname === sub.href;
                    return (
                      <li key={sIdx}>
                        {sub.isExternal ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-start px-2 py-1.5 rounded-md transition-all group no-underline ${isSelected ? "bg-red-50 text-[#c8102e]" : "hover:bg-slate-50"
                              }`}
                            onClick={onClose}
                          >
                            <span className="flex flex-col">
                              <strong
                                className={`text-[13px] font-semibold leading-snug transition-colors ${isSelected ? "text-[#c8102e]" : "text-gray-900 group-hover:text-[#c8102e]"
                                  }`}
                              >
                                {sub.title}
                              </strong>
                              {sub.sub && (
                                <small className="text-[11px] text-gray-500 mt-0.5 leading-snug block">
                                  {sub.sub}
                                </small>
                              )}
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={sub.href}
                            className={`flex flex-col items-start px-2 py-1.5 rounded-md transition-all group no-underline ${isSelected ? "bg-red-50 text-[#c8102e]" : "hover:bg-slate-50"
                              }`}
                            onClick={onClose}
                          >
                            <span className="flex flex-col">
                              <strong
                                className={`text-[13px] font-semibold leading-snug transition-colors ${isSelected ? "text-[#c8102e]" : "text-gray-900 group-hover:text-[#c8102e]"
                                  }`}
                              >
                                {sub.title}
                              </strong>
                              {sub.sub && (
                                <small className="text-[11px] text-gray-500 mt-0.5 leading-snug block">
                                  {sub.sub}
                                </small>
                              )}
                            </span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Spotlight Column */}
          {config.spotlight && (
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#c8102e] tracking-wider uppercase mb-3 block">
                {config.spotlight.tag}
              </span>
              {config.spotlight.href.startsWith("http") ? (
                <a
                  href={config.spotlight.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline group"
                  onClick={onClose}
                >
                  <div className="relative w-full h-[130px] rounded-lg overflow-hidden bg-slate-100">
                    <img
                      src={config.spotlight.image}
                      alt={config.spotlight.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <div className="mt-2.5">
                    <h4 className="text-[14px] font-bold text-gray-900 leading-snug group-hover:text-[#c8102e] transition-colors m-0 no-underline">
                      {config.spotlight.title}
                    </h4>
                    <p className="text-[11.5px] text-gray-500 leading-relaxed mt-1 m-0 no-underline">
                      {config.spotlight.subtitle}
                    </p>
                  </div>
                </a>
              ) : (
                <Link
                  href={config.spotlight.href}
                  className="block no-underline group"
                  onClick={onClose}
                >
                  <div className="relative w-full h-[130px] rounded-lg overflow-hidden bg-slate-100">
                    <img
                      src={config.spotlight.image}
                      alt={config.spotlight.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <div className="mt-2.5">
                    <h4 className="text-[14px] font-bold text-gray-900 leading-snug group-hover:text-[#c8102e] transition-colors m-0 no-underline">
                      {config.spotlight.title}
                    </h4>
                    <p className="text-[11.5px] text-gray-500 leading-relaxed mt-1 m-0 no-underline">
                      {config.spotlight.subtitle}
                    </p>
                  </div>
                </Link>
              )}

              {/* Latest Updates Bullets */}
              {config.spotlight.updates && (
                <div className="mt-3.5">
                  <span className="text-[11px] font-bold text-[#c8102e] tracking-wider uppercase mb-2 block">
                    {config.spotlight.updatesTag}
                  </span>
                  <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
                    {config.spotlight.updates.map((update, uIdx) => (
                      <li key={uIdx} className="flex items-center gap-2 text-[12px] text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] shrink-0" />
                        <span>{update}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Recognitions / Actions Strip */}
        {config.bottomBar && (
          <div className="border-t border-gray-100 mt-auto pt-4 flex items-center justify-between gap-5 flex-wrap">
            {config.bottomBar.tag && (
              <span className="text-[11px] font-bold text-[#c8102e] tracking-wider uppercase">
                {config.bottomBar.tag}
              </span>
            )}
            <div className="flex items-center gap-5 flex-wrap">
              {config.bottomBar.links.map((link, lIdx) =>
                link.isExternal ? (
                  <a
                    key={lIdx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-gray-600 hover:text-[#c8102e] transition-colors no-underline"
                    onClick={onClose}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#c8102e] font-semibold text-[13px]" aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-gray-600 hover:text-[#c8102e] transition-colors no-underline"
                    onClick={onClose}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#c8102e] font-semibold text-[13px]" aria-hidden="true">→</span>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setActiveMobileMenu(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleNonDropdownHover = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(null);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 140);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const admissionLink = topUtilityNav.find((item) =>
    item.label.toUpperCase().startsWith("ADMISSION")
  );

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileMenu(null);
  };

  return (
    <div className="sticky top-0 z-[1000] w-full bg-white shadow-xs" onMouseLeave={handleMouseLeave}>
      {/* ====================================================================
          1. TOP UTILITY HEADER (NIET BRAND RED)
          ==================================================================== */}
      <header className="bg-[#cf1427] text-white border-b border-white/10 hidden lg:block">
        <div className="container mx-auto px-4 max-w-[1360px]">
          <div className="flex items-center justify-between min-h-[38px] py-1 gap-1.5 xl:gap-3 flex-nowrap">
            {topUtilityNav.map((item, index) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isMega = Boolean(MEGA_MENUS[item.label.toUpperCase()]);

              if (hasChildren || item.hasDropdown || isMega) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={index}
                    className="relative shrink-0 flex items-center"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                  >
                    {item.href && item.href !== "#" && item.href !== "javascript:void(0)" ? (
                      <Link
                        href={item.href}
                        className={`inline-flex items-center justify-center h-7 px-2 text-[11.5px] font-semibold tracking-[0.02em] uppercase leading-none font-[inherit] transition-colors rounded whitespace-nowrap no-underline hover:no-underline gap-1 ${
                          isOpen ? "text-white bg-white/15" : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setOpenDropdown(null)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronIcon isOpen={isOpen} className="opacity-80 shrink-0" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className={`inline-flex items-center justify-center h-7 px-2 text-[11.5px] font-semibold tracking-[0.02em] uppercase leading-none font-[inherit] transition-colors rounded whitespace-nowrap bg-transparent border-0 cursor-pointer m-0 p-0 gap-1 ${
                          isOpen ? "text-white bg-white/15" : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => toggleDropdown(item.label)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronIcon isOpen={isOpen} className="opacity-80 shrink-0" />
                      </button>
                    )}

                    {/* Clean dropdown for top utility items (Conferences, Approvals, Media) */}
                    {!isMega && isOpen && item.children && (
                      <div
                        className={`absolute top-full ${
                          item.label.toUpperCase() === "MEDIA" ? "right-0" : "left-0"
                        } mt-1 w-max max-w-[340px] bg-white text-gray-800 border border-gray-200 rounded-md shadow-xl p-3 z-[1050] animate-fadeIn`}
                      >
                        <span className="block text-[10.5px] font-bold text-[#c8102e] tracking-wider uppercase mb-2">
                          {item.label.toUpperCase() === "MEDIA"
                            ? "CAMPUS MEDIA"
                            : item.label.toUpperCase().includes("APPROVAL")
                              ? "STATUTORY APPROVALS & AFFILIATIONS"
                              : "CONFERENCES & SYMPOSIA"}
                        </span>
                        <div className="flex flex-col gap-1">
                          {item.children.map((subItem, sIdx) => (
                            <Link
                              key={sIdx}
                              href={subItem.href}
                              target={subItem.isExternal ? "_blank" : undefined}
                              className="block px-2.5 py-1.5 text-[12px] font-medium text-gray-700 hover:text-[#c8102e] hover:bg-slate-50 rounded transition-colors no-underline hover:no-underline"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.isExternal) {
                const isAdmission = item === admissionLink;
                return (
                  <div key={index} className="shrink-0 flex items-center" onMouseEnter={handleNonDropdownHover}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        isAdmission
                          ? "inline-flex items-center justify-center h-7 px-3.5 bg-white text-black font-bold text-[11.5px] tracking-[0.02em] uppercase leading-none font-[inherit] rounded shadow-sm hover:bg-gray-100 transition-all ml-1.5 whitespace-nowrap no-underline hover:no-underline"
                          : "inline-flex items-center justify-center h-7 px-2 text-[11.5px] font-semibold tracking-[0.02em] uppercase leading-none font-[inherit] text-white/90 hover:text-white hover:bg-white/10 rounded transition-colors whitespace-nowrap no-underline hover:no-underline"
                      }
                    >
                      <span className={isAdmission ? "text-black font-bold" : undefined}>
                        {item.label}
                      </span>
                    </a>
                  </div>
                );
              }

              return (
                <div key={index} className="shrink-0 flex items-center" onMouseEnter={handleNonDropdownHover}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center h-7 px-2 text-[11.5px] font-semibold tracking-[0.02em] uppercase leading-none font-[inherit] text-white/90 hover:text-white hover:bg-white/10 rounded transition-colors whitespace-nowrap no-underline hover:no-underline"
                  >
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. MAIN NAVIGATION BAR (CRISP WHITE WITH NIET LOGO)
          ==================================================================== */}
      <nav className="bg-white border-b border-gray-200 relative z-[1000]" aria-label="Main Navigation">
        <div className="container mx-auto px-4 max-w-[1360px]">
          <div className="flex items-center justify-between min-h-[74px] py-1 gap-2 xl:gap-4">
            {/* Logo */}
            <div className="shrink-0" onMouseEnter={handleNonDropdownHover}>
              <Link href="/" className="block">
                <img
                  src="https://res.cloudinary.com/boss8zib/image/upload/v1793776158/pharmacy-logo.png"
                  alt="NIET Pharmacy Logo"
                  width={140}
                  height={69}
                  className="h-[52px] xl:h-[58px] w-auto object-contain block"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center justify-between flex-1 gap-1 xl:gap-2 list-none m-0 p-0 flex-nowrap">
              {mainNav.map((item, idx) => {
                const isOpen = openDropdown === item.label;
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isMega = Boolean(MEGA_MENUS[item.label.toUpperCase()]);
                const isImportantLink = item.label.toUpperCase() === "IMPORTANT LINK";

                const navLinkClasses = isImportantLink
                  ? "inline-flex items-center gap-1 px-3 py-2 text-[12.5px] font-bold tracking-[0.02em] uppercase text-white bg-[#cf1427] hover:bg-[#a90f17] rounded transition-colors whitespace-nowrap shadow-sm no-underline hover:no-underline border-0 cursor-pointer font-[inherit]"
                  : `inline-flex items-center gap-1 px-2.5 py-2 text-[12.5px] font-semibold tracking-[0.02em] uppercase transition-colors rounded whitespace-nowrap no-underline hover:no-underline bg-transparent border-0 cursor-pointer font-[inherit] ${isOpen
                    ? "text-[#c8102e] bg-red-50/70"
                    : "text-gray-800 hover:text-[#c8102e] hover:bg-slate-50"
                  }`;

                if (item.hasDropdown || hasChildren || isMega) {
                  return (
                    <li
                      key={idx}
                      className="relative shrink-0"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          className={navLinkClasses}
                          onClick={() => setOpenDropdown(null)}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                        >
                          <span>{item.label}</span>
                          <ChevronIcon isOpen={isOpen} className="opacity-70" />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className={navLinkClasses}
                          onClick={() => toggleDropdown(item.label)}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                        >
                          <span>{item.label}</span>
                          <ChevronIcon isOpen={isOpen} className="opacity-70" />
                        </button>
                      )}

                      {/* Dropdown for non-mega items (Media, Conferences, Approvals, Important Link fallback) */}
                      {!isMega && isOpen && item.children && (
                        <div className="absolute top-full left-0 mt-0.5 bg-white border border-gray-200 rounded-md shadow-xl py-2 min-w-[230px] z-[1050] animate-fadeIn">
                          {item.children.map((sub, sIdx) => {
                            const isSelected = pathname === sub.href;
                            return (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                target={sub.isExternal ? "_blank" : undefined}
                                className={`block px-4 py-2 text-[12.5px] font-medium transition-colors no-underline hover:no-underline ${isSelected
                                    ? "bg-red-50 text-[#c8102e] font-semibold"
                                    : "text-gray-800 hover:text-[#c8102e] hover:bg-slate-50"
                                  }`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={idx} className="shrink-0" onMouseEnter={handleNonDropdownHover}>
                    <Link href={item.href} className={navLinkClasses}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile actions: admission CTA + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              {admissionLink && (
                <a
                  href={admissionLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 px-3.5 bg-[#cf1427] text-white font-bold text-[11px] tracking-[0.03em] uppercase rounded-md shadow-sm hover:bg-[#a90f17] transition-all no-underline whitespace-nowrap"
                >
                  {admissionLink.label}
                </a>
              )}
              <button
                type="button"
                className="inline-flex items-center justify-center w-9 h-9 text-gray-800 hover:text-[#cf1427] transition-colors cursor-pointer bg-transparent border-0 border-none outline-none focus:outline-none shadow-none p-0 m-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-drawer"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {mobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ====================================================================
            DESKTOP MEGA-MENU DROPDOWNS (ABOUT US, ADMISSIONS, ETC.)
            ==================================================================== */}
        {openDropdown && MEGA_MENUS[openDropdown.toUpperCase()] && (
          <MegaMenuPanel
            config={MEGA_MENUS[openDropdown.toUpperCase()]}
            pathname={pathname}
            onClose={() => setOpenDropdown(null)}
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {/* ====================================================================
            MOBILE NAVIGATION DRAWER
            ==================================================================== */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-[1099] backdrop-blur-sm transition-opacity"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
            />
            <div
              id="mobile-drawer"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-white z-[1100] shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
              aria-modal="true"
              role="dialog"
            >
              {/* Drawer Topbar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shrink-0">
                <Link href="/" onClick={closeMobileMenu} className="block" aria-label="NIET Pharmacy home">
                  <img
                    src="https://res.cloudinary.com/boss8zib/image/upload/v1793776158/pharmacy-logo.png"
                    alt="NIET Pharmacy"
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors bg-transparent border-0 cursor-pointer p-0"
                  aria-label="Close navigation menu"
                  onClick={closeMobileMenu}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto px-4 py-3">
                {activeMobileMenu ? (
                  /* Submenu Drilldown View */
                  <div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#c8102e] mb-3 hover:opacity-80 transition-opacity bg-transparent border-0 cursor-pointer p-0"
                      onClick={() => setActiveMobileMenu(null)}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                      <span>Back</span>
                    </button>

                    <h3 className="text-[16px] font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">
                      {activeMobileMenu}
                    </h3>

                    {MOBILE_DRILLDOWN_MENUS[activeMobileMenu] ? (
                      <div className="flex flex-col gap-4">
                        {MOBILE_DRILLDOWN_MENUS[activeMobileMenu].columns.map((col, cIdx) => (
                          <div key={cIdx} className="flex flex-col">
                            {col.tag && (
                              <span className="text-[11px] font-bold text-[#c8102e] tracking-wider uppercase mb-1.5">
                                {col.tag}
                              </span>
                            )}
                            <ul className="flex flex-col gap-1 list-none p-0 m-0">
                              {col.items.map((sub, sIdx) => {
                                const isSelected = pathname === sub.href;
                                return (
                                  <li key={sIdx}>
                                    <Link
                                      href={sub.href}
                                      target={sub.isExternal ? "_blank" : undefined}
                                      className={`block py-1.5 px-2 rounded text-[13px] no-underline ${isSelected
                                          ? "bg-red-50 text-[#c8102e] font-semibold"
                                          : "text-gray-800 hover:text-[#c8102e] hover:bg-slate-50"
                                        }`}
                                      onClick={closeMobileMenu}
                                    >
                                      <div className="font-medium">{sub.title}</div>
                                      {sub.sub && (
                                        <div className="text-[11px] text-gray-500 mt-0.5">{sub.sub}</div>
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="flex flex-col gap-1 list-none p-0 m-0">
                        {[...mainNav, ...topUtilityNav]
                          .find((m) => m.label.toUpperCase() === activeMobileMenu)
                          ?.children?.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                href={sub.href}
                                target={sub.isExternal ? "_blank" : undefined}
                                className="block py-2 px-2 text-[13px] text-gray-800 hover:text-[#c8102e] rounded hover:bg-slate-50 no-underline font-medium"
                                onClick={closeMobileMenu}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  /* Root Menu View */
                  <div className="flex flex-col gap-5">
                    {/* Section 1: Main Academic Navigation */}
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                        Main Navigation
                      </span>
                      <ul className="flex flex-col gap-0.5 list-none p-0 m-0">
                        {mainNav.map((item, idx) => {
                          const hasChildren = Boolean(
                            item.hasDropdown ||
                            (item.children && item.children.length > 0) ||
                            MOBILE_DRILLDOWN_MENUS[item.label.toUpperCase()]
                          );
                          return (
                            <li key={`main-${idx}`} className="border-b border-gray-50 last:border-none">
                              {hasChildren ? (
                                <div className="flex items-center justify-between w-full">
                                  {item.href ? (
                                    <Link
                                      href={item.href}
                                      className="flex-1 py-2 text-[13px] font-semibold text-gray-800 hover:text-[#c8102e] uppercase no-underline"
                                      onClick={closeMobileMenu}
                                    >
                                      <span>{item.label}</span>
                                    </Link>
                                  ) : (
                                    <span
                                      className="flex-1 py-2 text-[13px] font-semibold text-gray-800 hover:text-[#c8102e] uppercase cursor-pointer"
                                      onClick={() => setActiveMobileMenu(item.label.toUpperCase())}
                                    >
                                      {item.label}
                                    </span>
                                  )}
                                  <button
                                    type="button"
                                    className="p-2 text-gray-400 hover:text-[#c8102e] bg-transparent border-0 cursor-pointer transition-colors"
                                    onClick={() => setActiveMobileMenu(item.label.toUpperCase())}
                                    aria-expanded={activeMobileMenu === item.label.toUpperCase()}
                                    aria-label={`Open ${item.label} submenu`}
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      aria-hidden="true"
                                    >
                                      <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                  </button>
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="block py-2 text-[13px] font-semibold text-gray-800 hover:text-[#c8102e] uppercase no-underline"
                                  onClick={closeMobileMenu}
                                >
                                  <span>{item.label}</span>
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Section 2: Institute Portals & Quick Links */}
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                        Institute Portals & Quick Links
                      </span>
                      <ul className="flex flex-col gap-0.5 list-none p-0 m-0">
                        {topUtilityNav
                          .filter((item) => !item.label.toUpperCase().startsWith("ADMISSION"))
                          .map((item, idx) => {
                            const hasChildren = Boolean(item.children && item.children.length > 0);
                            return (
                              <li key={`util-${idx}`} className="border-b border-gray-50 last:border-none">
                                {hasChildren ? (
                                  <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-2 text-[12px] font-medium text-gray-700 hover:text-[#c8102e] uppercase text-left bg-transparent border-0 cursor-pointer transition-colors"
                                    onClick={() => setActiveMobileMenu(item.label.toUpperCase())}
                                  >
                                    <span>{item.label}</span>
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
                                    >
                                      <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                  </button>
                                ) : (
                                  <Link
                                    href={item.href}
                                    target={item.isExternal ? "_blank" : undefined}
                                    className="block py-2 text-[12px] font-medium text-gray-700 hover:text-[#c8102e] uppercase no-underline"
                                    onClick={closeMobileMenu}
                                  >
                                    <span>{item.label}</span>
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Bottom Buttons */}
              <div className="p-4 border-t border-gray-100 flex flex-col gap-2 shrink-0 bg-slate-50">
                <Link
                  href="/contact-us"
                  className="w-full text-center py-2 text-[12.5px] font-semibold text-gray-700 border border-gray-300 rounded hover:bg-white transition-colors no-underline"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
                <a
                  href="https://applynow.niet.co.in/?_gl=1*watz86*_gcl_au*MTEwOTIzMjc1MS4xNzQzNTEwMDY3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 text-[12.5px] font-bold text-white bg-[#cf1427] hover:bg-[#a90f17] rounded shadow transition-colors no-underline uppercase"
                  onClick={closeMobileMenu}
                >
                  Apply Online (2026-27)
                </a>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* ====================================================================
          3. MOVING ANNOUNCEMENT TICKER
          ==================================================================== */}
      <div
        className="announcement-ticker"
        aria-label="Institute highlights"
        onMouseEnter={handleNonDropdownHover}
      >
        <div className="announcement-ticker-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="announcement-ticker-group"
              aria-hidden={copy === 1}
            >
              <span>PCI Approved</span>
              <span>Affiliated to AKTU</span>
              <span>Established in 2005</span>
              <span>NBA-Accredited B.Pharm Programme</span>
              <span>NIRF 2024 Rank #37</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;