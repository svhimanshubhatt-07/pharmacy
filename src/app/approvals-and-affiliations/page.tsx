import React from "react";
import { Metadata } from "next";
import { ApprovalsInteractive } from "@/components/approvals/ApprovalsInteractive";

export const metadata: Metadata = {
  title: "Approvals and Affiliations | AICTE, PCI, AKTU & BTE | NIET Pharmacy",
  description:
    "Statutory approval orders and affiliation letters from AICTE, Pharmacy Council of India (PCI), AKTU Lucknow, and BTE UP from 2018 to 2026.",
};

export default function ApprovalsPage() {
  return (
    <div className="homePage hp ab sa-page appr-page">
      <section className="section-pad">
        <div className="hp-container">
          <ApprovalsInteractive />
        </div>
      </section>
    </div>
  );
}
