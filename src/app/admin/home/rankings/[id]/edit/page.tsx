import { RankingsFormPage } from "@/admin/pages/rankings/RankingsFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Ranking | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminRankingsEditRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <RankingsFormPage mode="edit" id={id} />;
}
