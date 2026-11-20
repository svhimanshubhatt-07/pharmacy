import { ResearchDocListPage } from "@/admin/pages/research/ResearchDocListPage";
import { FundedSeminarsListPage } from "@/admin/pages/research/FundedSeminarsListPage";
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
      ? `${meta.title} | NIET Pharmacy Admin`
      : "R&D Document Management | NIET Pharmacy Admin",
  };
}

export default function AdminResearchSubcomponentRoute({ params }: RouteProps) {
  const key = params.subcomponent as ResearchSubcomponentKey;
  if (!RESEARCH_SUBCOMPONENTS[key]) {
    notFound();
  }
  if (key === "funded-seminars") {
    return <FundedSeminarsListPage />;
  }
  return <ResearchDocListPage subcomponent={key} />;
}
