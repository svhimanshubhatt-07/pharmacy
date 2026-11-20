import { ResearchDocFormPage } from "@/admin/pages/research/ResearchDocFormPage";
import { FundedSeminarFormPage } from "@/admin/pages/research/FundedSeminarFormPage";
import { ResearchSubcomponentKey } from "@/admin/types";
import { RESEARCH_SUBCOMPONENTS } from "@/admin/data/research";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface RouteProps {
  params: {
    subcomponent: string;
    id: string;
  };
}

export function generateMetadata({ params }: RouteProps): Metadata {
  const meta = RESEARCH_SUBCOMPONENTS[params.subcomponent as ResearchSubcomponentKey];
  return {
    title: meta
      ? `Edit ${meta.shortTitle} | NIET Pharmacy Admin`
      : "Edit R&D Item | NIET Pharmacy Admin",
  };
}

export default function AdminResearchEditDocRoute({ params }: RouteProps) {
  const key = params.subcomponent as ResearchSubcomponentKey;
  if (!RESEARCH_SUBCOMPONENTS[key]) {
    notFound();
  }
  const id = parseInt(params.id, 10);
  if (key === "funded-seminars") {
    return <FundedSeminarFormPage mode="edit" id={id} />;
  }
  return <ResearchDocFormPage subcomponent={key} mode="edit" id={id} />;
}
