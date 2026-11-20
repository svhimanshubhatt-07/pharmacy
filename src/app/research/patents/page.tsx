import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Patents | R&D | NIET Pharmacy",
  description:
    "Granted and published pharmaceutical patents, drug design innovations, and intellectual property portfolio of NIET Pharmacy.",
};

const section = researchSections.find((s) => s.id === "patents")!;

export default function PatentsPage() {
  return (
    <ResearchSectionView
      sectionId="patents"
      title="Patents"
      subtitle="— Granted & Published Pharmaceutical Patents Portfolio"
      description="Official compendium of granted and published national and international patents in novel drug delivery, bioactive compounds, and pharmaceutical formulations."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
