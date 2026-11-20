"use client";

import React, { useState, useMemo } from "react";
import { approvalsData } from "@/data/approvals";

interface ParsedApproval {
  id: string;
  sessionId: string;
  session: string;
  yearNumber: number;
  title: string;
  agencyKey: string;
  agencyName: string;
  category: string;
  status: "Approved" | "Affiliated" | "Accredited" | "Ranked";
  pdfUrl: string;
}

function parseApprovals(): ParsedApproval[] {
  const list: ParsedApproval[] = [];
  let counter = 1;

  approvalsData.forEach((sessionGroup) => {
    const match = sessionGroup.session.match(/\b(20\d\d)/);
    const yr = match ? parseInt(match[1], 10) : 2025;

    sessionGroup.documents.forEach((doc) => {
      const upperTitle = doc.title.toUpperCase();
      let agencyKey = "OTHER";
      let agencyName = "Regulatory Authority";
      let category = "Statutory Approval";
      let status: "Approved" | "Affiliated" | "Accredited" | "Ranked" = "Approved";

      if (upperTitle.includes("PCI")) {
        agencyKey = "PCI";
        agencyName = "Pharmacy Council of India (PCI)";
        category = "Council Approval";
        status = "Approved";
      } else if (upperTitle.includes("AKTU")) {
        agencyKey = "AKTU";
        agencyName = "Dr. A.P.J. Abdul Kalam Technical University (AKTU)";
        category = "University Affiliation";
        status = "Affiliated";
      } else if (upperTitle.includes("AICTE")) {
        agencyKey = "AICTE";
        agencyName = "All India Council for Technical Education (AICTE)";
        category = "Apex Council Approval";
        status = "Approved";
      } else if (upperTitle.includes("NBA")) {
        agencyKey = "NBA";
        agencyName = "National Board of Accreditation (NBA)";
        category = "National Accreditation";
        status = "Accredited";
      } else if (upperTitle.includes("NIRF")) {
        agencyKey = "NIRF";
        agencyName = "National Institutional Ranking Framework (NIRF)";
        category = "National Ranking (MHRD)";
        status = "Ranked";
      } else if (upperTitle.includes("BTE") || upperTitle.includes("UPBTE")) {
        agencyKey = "BTE";
        agencyName = "Board of Technical Education UP (BTE)";
        category = "State Board Affiliation";
        status = "Affiliated";
      } else if (upperTitle.includes("CPCSEA") || upperTitle.includes("CCSEA")) {
        agencyKey = "CCSEA";
        agencyName = "Committee for Control & Supervision of Animal Experiments (CCSEA)";
        category = "IAEC Animal Ethics Approval";
        status = "Approved";
      }

      list.push({
        id: `appr-${counter++}`,
        sessionId: sessionGroup.id,
        session: sessionGroup.session.replace(/APPROVAL\s*/i, "").trim(),
        yearNumber: yr,
        title: doc.title,
        agencyKey,
        agencyName,
        category,
        status,
        pdfUrl: doc.pdfUrl,
      });
    });
  });

  return list;
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

function CalendarIcon() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function ApprovalsInteractive() {
  const allApprovals = useMemo(() => parseApprovals(), []);
  const [selectedSession, setSelectedSession] = useState<string>("ALL");

  const sessionList = useMemo(() => {
    return approvalsData.map((s) => ({
      id: s.id,
      sessionName: s.session.replace(/APPROVAL\s*/i, "").trim(),
      fullLabel: s.session,
      count: s.documents.length,
    }));
  }, []);

  const filteredApprovals = useMemo(() => {
    return allApprovals.filter((item) => {
      const matchSession =
        selectedSession === "ALL" ||
        item.sessionId === selectedSession ||
        item.session === selectedSession;

      return matchSession;
    });
  }, [allApprovals, selectedSession]);

  return (
    <div className="appr-container-wrap">
      {/* Heading & Description */}
      <div className="appr-header-copy">
        <h1 className="hp-title">Approvals and Affiliations</h1>
        <p className="hp-subtitle">Recognised for Quality in Pharmacy Education.</p>
        <p className="sa-lead">
          Official statutory approvals, council recognitions, university affiliations, and accreditation orders issued by Pharmacy Council of India (PCI), AICTE, Dr. A.P.J. Abdul Kalam Technical University (AKTU), and National Board of Accreditation (NBA).
        </p>
      </div>

      {/* FILTER PILLS DIRECTLY AFTER DESCRIPTION */}
      <div className="appr-filter-container">
        <div className="appr-pills-row" role="tablist" aria-label="Filter by Academic Session">
          <button
            type="button"
            role="tab"
            aria-selected={selectedSession === "ALL"}
            onClick={() => setSelectedSession("ALL")}
            className={`appr-pill ${selectedSession === "ALL" ? "is-active" : ""}`}
          >
            <LayersIcon />
            <span>All Sessions</span>
          </button>

          {sessionList.map((s) => {
            const isActive = selectedSession === s.id;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedSession(s.id)}
                className={`appr-pill ${isActive ? "is-active" : ""}`}
              >
                <CalendarIcon />
                <span>{s.sessionName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FULL WIDTH SOLID RED INSTITUTIONAL TABLE (COVERING THE WHOLE PAGE) */}
      <div className="appr-table-wrap" role="region" aria-label="Approvals and Affiliations Table" tabIndex={0}>
        <table className="appr-table">
          <caption className="sr-only">
            Official approvals and statutory affiliations for NIET Pharmacy Institute
          </caption>
          <thead>
            <tr>
              <th scope="col" className="appr-th-sno">S.No</th>
              <th scope="col" className="appr-th-session">Session</th>
              <th scope="col" className="appr-th-agency">Regulatory Council / Body</th>
              <th scope="col" className="appr-th-cat">Category</th>
              <th scope="col" className="appr-th-download">Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredApprovals.length > 0 ? (
              filteredApprovals.map((item, index) => (
                <tr key={item.id}>
                  <td className="appr-td-center">{index + 1}</td>
                  <td className="appr-td-center font-medium">{item.session}</td>
                  <td className="appr-td-agency">{item.agencyName}</td>
                  <td>{item.category}</td>
                  <td className="appr-td-center">
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="appr-download-link"
                    >
                      Download PDF ↓
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="appr-no-results">
                  No approval records found matching your active filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="appr-scroll-hint">Scroll horizontally to view all columns.</p>
    </div>
  );
}
