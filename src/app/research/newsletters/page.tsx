import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Institute Newsletter | R&D | NIET Pharmacy",
  description:
    "Pharma Chronicles, the bi-annual research and event newsletter of NIET Pharmacy Institute.",
};

const section = researchSections.find((s) => s.id === "Newsletter")!;

export default function NewslettersPage() {
  return (
    <ResearchSectionView
      sectionId="newsletters"
      title="Institute Newsletter"
      subtitle="— Pharma Chronicles Bi-Annual Institutional Highlights"
      description="Bi-annual official newsletters publishing institutional milestones, faculty recognitions, placement news, breakthroughs, and research achievements."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
