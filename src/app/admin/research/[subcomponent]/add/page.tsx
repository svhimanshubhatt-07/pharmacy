import { ResearchDocFormPage } from "@/admin/pages/research/ResearchDocFormPage";
import { FundedSeminarFormPage } from "@/admin/pages/research/FundedSeminarFormPage";
import { ResearchSubcomponentKey } from "@/admin/types";
import { RESEARCH_SUBCOMPONENTS } from "@/admin/data/research";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface RouteProps {
  params: {
    subcomponent: string;
  };
}

export function generateMetadata({ params }: RouteProps): Metadata {
  const meta = RESEARCH_SUBCOMPONENTS[params.subcomponent as ResearchSubcomponentKey];
  return {
    title: meta
      ? `Add ${meta.shortTitle} | NIET Pharmacy Admin`
      : "Add R&D Item | NIET Pharmacy Admin",
  };
}

export default function AdminResearchAddDocRoute({ params }: RouteProps) {
  const key = params.subcomponent as ResearchSubcomponentKey;
  if (!RESEARCH_SUBCOMPONENTS[key]) {
    notFound();
  }
  if (key === "funded-seminars") {
    return <FundedSeminarFormPage mode="add" />;
  }
  return <ResearchDocFormPage subcomponent={key} mode="add" />;
}
