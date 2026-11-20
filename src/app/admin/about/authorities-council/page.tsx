import { AuthoritiesCouncilPage } from "@/admin/pages/authorities-council/AuthoritiesCouncilPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorities & Council (PDFs) | NIET Pharmacy Admin",
  description: "Manage institutional Advisory Board, Governing Body, and Academic Council PDF documents.",
};

export default function AdminAuthoritiesCouncilRoute() {
  return <AuthoritiesCouncilPage />;
}
