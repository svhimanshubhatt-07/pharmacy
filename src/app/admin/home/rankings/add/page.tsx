import { RankingsFormPage } from "@/admin/pages/rankings/RankingsFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Ranking | NIET Pharmacy Admin",
};

export default function AdminRankingsAddRoute() {
  return <RankingsFormPage mode="add" />;
}
