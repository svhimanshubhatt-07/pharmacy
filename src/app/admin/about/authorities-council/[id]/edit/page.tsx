import { AuthoritiesCouncilFormPage } from "@/admin/pages/authorities-council/AuthoritiesCouncilFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Council Member | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminAuthoritiesCouncilEditRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <AuthoritiesCouncilFormPage mode="edit" id={id} />;
}
