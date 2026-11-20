import { AuthoritiesCouncilFormPage } from "@/admin/pages/authorities-council/AuthoritiesCouncilFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Council Member | NIET Pharmacy Admin",
};

export default function AdminAuthoritiesCouncilAddRoute() {
  return <AuthoritiesCouncilFormPage mode="add" />;
}
