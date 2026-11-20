import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { TabbedContent, TabItem } from "@/components/TabbedContent";
import { institutionalPolicies } from "@/data/policies";

export const metadata: Metadata = {
  title: "Institutional Policies | NIET Pharmacy",
  description:
    "Institutional governance, research, examination, startup, and administrative policies of NIET Pharmacy Institute.",
};

export default function PolicyPage() {
  const tabs: TabItem[] = [
    {
      id: "policy",
      label: "Policy",
      content: (
        <div>
          <strong>Policy</strong>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>Downloads</td>
                </tr>
                {institutionalPolicies.map((policy, idx) => (
                  <tr key={`${policy.pdfUrl}-${idx}`}>
                    <td>{policy.title}</td>
                    <td>
                      <a href={policy.pdfUrl} target="_blank" rel="noopener noreferrer" className="appr-download-link">
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
      <Banner title="Policy" />

      <section className="section-pad">
        <div className="container">
          <TabbedContent tabs={tabs} defaultTabId="policy" />
        </div>
      </section>
    </div>
  );
}
