import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Govt. Funded Seminars | R&D | NIET Pharmacy",
  description:
    "DST-SERB sponsored national conferences, expert symposiums, and photographic conference archives at NIET Pharmacy Institute.",
};

const section = researchSections.find((s) => s.id === "govtseminar")!;

export default function FundedSeminarsPage() {
  return (
    <ResearchSectionView
      sectionId="funded-seminars"
      title="Govt. Funded Seminar"
      subtitle="— SERB & Apex Government Sponsored Conferences"
      description="Documentation and photographic gallery of DST-SERB sponsored national conferences, expert keynote sessions, scientific proceedings, and oral presentations."
      tables={section?.tables || []}
      paragraphs={section?.paragraphs || []}
      isSeminar={true}
    />
  );
}
