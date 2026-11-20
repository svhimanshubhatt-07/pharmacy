import { DashboardPage } from "@/admin/pages/dashboard/Dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Overview | NIET Pharmacy Admin",
  description: "Overview statistics and activity monitoring for NIET Pharmacy.",
};

export default function AdminDashboardRoute() {
  return <DashboardPage />;
}
