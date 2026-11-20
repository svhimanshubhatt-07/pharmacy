import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Govt. Funded Projects Received | R&D | NIET Pharmacy",
  description:
    "Competitive government research grants received from DST, SERB, AICTE, and UP Government at NIET Pharmacy Institute.",
};

const section = researchSections.find((s) => s.id === "govt")!;

export default function FundedProjectsPage() {
  return (
    <ResearchSectionView
      sectionId="funded-projects"
      title="Govt. Funded Project Received"
      subtitle="— National & State Competitive Research Project Grants"
      description="Extramural competitive research grants received from apex government bodies including DST, AICTE, SERB, and UP Government to fund innovative pharmaceutical investigations."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
