import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Online MOOCs Lectures | R&D | NIET Pharmacy",
  description:
    "Curated digital video lectures, e-learning modules, and online pharmaceutical coursework developed by NIET Pharmacy faculty.",
};

const section = researchSections.find((s) => s.id === "moocs")!;

export default function MoocsPage() {
  return (
    <ResearchSectionView
      sectionId="moocs"
      title="Online moocs lectures"
      subtitle="— Digital E-Learning Modules & Video Lecture Repository"
      description="Curated digital coursework, video lecture modules, and online learning materials developed by NIET Pharmacy faculty across pharmaceutics, pharmacology, and medicinal chemistry."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
