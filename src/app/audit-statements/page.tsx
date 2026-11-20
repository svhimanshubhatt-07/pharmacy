import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { TabbedContent, TabItem } from "@/components/TabbedContent";
import { auditStatementsData } from "@/data/auditStatements";

export const metadata: Metadata = {
  title: "Statutory Financial Audit Statements | NIET Pharmacy",
  description:
    "Audited balance sheets and statutory financial statements (2021-2024) of NIET Pharmacy Institute.",
};

export default function AuditStatementsPage() {
  const tabs: TabItem[] = [
    {
      id: "statements",
      label: "Audit Statements",
      content: (
        <div>
          <strong>Audit Statements</strong>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>Downloads</td>
                </tr>
                {auditStatementsData.map((stmt) => (
                  <tr key={stmt.year}>
                    <td>{stmt.title}</td>
                    <td>
                      <a href={stmt.pdfUrl} target="_blank" rel="noopener noreferrer" className="appr-download-link">
                        Download PDF ↓
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Banner title="Audit Statements" />

      <section className="section-pad">
        <div className="container">
          <TabbedContent tabs={tabs} defaultTabId="statements" />
        </div>
      </section>
    </div>
  );
}
