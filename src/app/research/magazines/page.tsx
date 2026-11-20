import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Institute Magazine | R&D | NIET Pharmacy",
  description:
    "Official editions of Pharmainnovation, the annual technical and creative magazine of NIET Pharmacy Institute.",
};

const section = researchSections.find((s) => s.id === "magazine")!;

export default function MagazinesPage() {
  return (
    <ResearchSectionView
      sectionId="magazines"
      title="Institute Magazine"
      subtitle="— Pharmainnovation Annual Student & Faculty Technical Volume"
      description="Official annual issues of Pharmainnovation magazine showcasing scientific essays, pharmacy trends, student achievements, and creative articles."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
