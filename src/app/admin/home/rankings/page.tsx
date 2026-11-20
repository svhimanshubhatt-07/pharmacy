import { RankingsPage } from "@/admin/pages/rankings/RankingsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rankings & Accreditations | NIET Pharmacy Admin",
  description: "Manage institutional rankings, NIRF awards, and accreditation certificates.",
};

export default function AdminRankingsRoute() {
  return <RankingsPage />;
}
