import { RankingsDetailPage } from "@/admin/pages/rankings/RankingsDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ranking Details | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminRankingsDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <RankingsDetailPage id={id} />;
}
