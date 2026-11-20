import React from "react";
import { Metadata } from "next";
import { ResearchSectionView } from "@/components/research/ResearchSectionView";
import { researchSections } from "@/data/research";

export const metadata: Metadata = {
  title: "Publications | R&D | NIET Pharmacy",
  description:
    "Comprehensive year-wise research publications, Scopus-indexed papers, and research dossiers by NIET Pharmacy faculty and scholars.",
};

const section = researchSections.find((s) => s.id === "publication")!;

export default function PublicationsPage() {
  return (
    <ResearchSectionView
      sectionId="publication"
      title="Publications"
      subtitle="— High-Impact Peer-Reviewed Research Papers & Journals"
      description="Comprehensive year-wise compendium of peer-reviewed research publications, conference papers, and annual scientific dossiers authored by faculty and research scholars from 2010 to 2026."
      tables={section.tables}
      paragraphs={section.paragraphs}
    />
  );
}
