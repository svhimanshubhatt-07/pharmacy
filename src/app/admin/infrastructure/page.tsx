import { InfrastructureListPage } from "@/admin/pages/infrastructure/InfrastructureListPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure Management | NIET Pharmacy Admin",
  description: "Manage content, specifications, and imagery for all 13 specialized campus infrastructure divisions.",
};

export default function AdminInfrastructureListRoute() {
  return <InfrastructureListPage />;
}
