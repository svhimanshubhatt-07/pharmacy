import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Consultancy & Sponsored Research | R&D | NIET Pharmacy",
  description:
    "Collaborative industry consultancy projects, sponsored research initiatives, and contract testing facilities at NIET Pharmacy.",
};

const section = researchSections.find((s) => s.id === "consultancy")!;

export default function ConsultancyPage() {
  return (
    <ResearchSectionView
      sectionId="consultancy"
      title="Consultancy & Sponsored Research"
      subtitle="— Industry Partnerships & Technical Research Advisory"
      description="Collaborative industrial projects, sponsored investigations, formulation development, and analytical consultancy services provided to pharmaceutical manufacturing companies."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
