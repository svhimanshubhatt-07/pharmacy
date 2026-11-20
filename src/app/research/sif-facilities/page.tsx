import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "SIF Facilities | R&D | NIET Pharmacy",
  description:
    "Sophisticated Instrumentation Facility (SIF) equipment, testing guidelines, and official analytical charges at NIET Pharmacy.",
};

const section = researchSections.find((s) => s.id === "SIF-facilities")!;

export default function SifFacilitiesPage() {
  return (
    <ResearchSectionView
      sectionId="sif-facilities"
      title="SIF facilities"
      subtitle="— Sophisticated Analytical Instrumentation & User Testing Rates"
      description="Central instrumentation facility equipped with HPLC, FTIR, UV-Vis Spectrophotometer, and precision analytical tools available for academic, scholar, and industry testing."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
