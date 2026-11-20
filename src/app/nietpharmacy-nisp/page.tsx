import React from "react";
import { Metadata } from "next";
import { nispOverview, nispTeamMembers, nispDocuments } from "@/data/nisp";

export const metadata: Metadata = {
  title: "NIET Pharmacy NISP | National Innovation and Startup Policy",
  description:
    "National Innovation and Startup Policy (NISP) implementation, innovation cell, and startup guidance at NIET Pharmacy Institute.",
};

export default function NISPPage() {
  return (
    <div className="homePage hp ab sa-page appr-page nisp-page">
      <section className="section-pad">
        <div className="hp-container">
          <div className="appr-container-wrap">
            {/* Header copy matching Approval page */}
            <div className="appr-header-copy mb-8">
              <h1 className="hp-title">National Innovation &amp; Startup Policy (NISP)</h1>
              <p className="hp-subtitle">Empowering Innovation, Technology Transfer &amp; Campus Entrepreneurship.</p>
              <p className="sa-lead">
                Implementation framework guiding students and faculty in innovation, intellectual property generation, startup incubation, and technology transfer at NIET Pharmacy Institute.
              </p>
            </div>

            {/* Written content shown cleanly over the tables */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                {nispOverview.title}
              </h2>

              <p className="text-[15.5px] leading-[1.8] text-slate-700 mb-4 text-justify">
                {nispOverview.description1}
              </p>

              <p className="text-[15.5px] leading-[1.8] text-slate-700 text-justify">
                {nispOverview.description2}
              </p>
            </div>

            {/* Section 1: NISP Team Table (Approval Page Table Style) */}
            <div className="mb-12">
              <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  NIET Pharmacy Institute NISP Team
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Designated institutional committee overseeing NISP implementation, mentoring, and student startup incubation.
                </p>
              </div>

              <div
                className="appr-table-wrap"
                role="region"
                aria-label="NIET Pharmacy Institute NISP Team Table"
                tabIndex={0}
              >
                <table className="appr-table">
                  <caption className="sr-only">
                    NIET Pharmacy Institute NISP Team Members and Committee Roles
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" className="appr-th-sno">S.No</th>
                      <th scope="col" className="appr-th-agency">Name</th>
                      <th scope="col" className="appr-th-cat">Role / Committee Designation</th>
                      <th scope="col">Department / Affiliation</th>
                      <th scope="col">Email ID</th>
                      <th scope="col" className="appr-th-session">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nispTeamMembers.map((member, idx) => (
                      <tr key={idx}>
                        <td className="appr-td-center font-medium">{idx + 1}</td>
                        <td className="appr-td-agency">{member.name}</td>
                        <td className="font-medium text-slate-800">{member.role}</td>
                        <td className="text-slate-700">{member.affiliation}</td>
                        <td>
                          <a
                            href={`mailto:${member.email}`}
                            className="text-[#cf1427] hover:underline font-medium inline-flex items-center gap-1.5"
                          >
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
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                            {member.email}
                          </a>
                        </td>
                        <td className="appr-td-center font-medium text-slate-700 whitespace-nowrap">
                          {member.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="appr-scroll-hint">Scroll horizontally to view all columns.</p>
            </div>

            {/* Section 2: Policy Documents Table (Approval Page Table Style) */}
            <div className="mb-8">
              <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  NISP Policy Documents &amp; Institutional Guidelines
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Official policy dossiers, state frameworks, and national guidelines available for direct download.
                </p>
              </div>

              <div
                className="appr-table-wrap"
                role="region"
                aria-label="NISP Policy Documents Table"
                tabIndex={0}
              >
                <table className="appr-table">
                  <caption className="sr-only">
                    NISP Policy Documents and Direct Download Links
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" className="appr-th-sno">S.No</th>
                      <th scope="col" className="appr-th-agency">Policy Document Title</th>
                      <th scope="col" className="appr-th-cat">Governing Framework / Authority</th>
                      <th scope="col" className="appr-th-download">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nispDocuments.map((doc, idx) => {
                      const upper = doc.title.toUpperCase();
                      const authority = upper.includes("UP STARTUP") || upper.includes("UTTAR PRADESH")
                        ? "Government of Uttar Pradesh (State Startup Policy)"
                        : upper.includes("MOE") || upper.includes("2019")
                        ? "Ministry of Education (MoE) Innovation Cell, Govt. of India"
                        : "NIET Pharmacy Institute (Institutional IPR & Innovation Framework)";
                      return (
                        <tr key={idx}>
                          <td className="appr-td-center font-medium">{idx + 1}</td>
                          <td className="appr-td-agency">{doc.title}</td>
                          <td className="font-medium text-slate-700">{authority}</td>
                          <td className="appr-td-center">
                            <a
                              href={doc.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="appr-download-link"
                            >
                              Download PDF ↓
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="appr-scroll-hint">Scroll horizontally to view all columns.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
