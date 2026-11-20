import { ResearchDocDetailPage } from "@/admin/pages/research/ResearchDocDetailPage";
import { FundedSeminarDetailPage } from "@/admin/pages/research/FundedSeminarDetailPage";
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
      ? `${meta.shortTitle} Details | NIET Pharmacy Admin`
      : "R&D Details | NIET Pharmacy Admin",
  };
}

export default function AdminResearchDetailRoute({ params }: RouteProps) {
  const key = params.subcomponent as ResearchSubcomponentKey;
  if (!RESEARCH_SUBCOMPONENTS[key]) {
    notFound();
  }
  const id = parseInt(params.id, 10);
  if (key === "funded-seminars") {
    return <FundedSeminarDetailPage id={id} />;
  }
  return <ResearchDocDetailPage subcomponent={key} id={id} />;
}
