import { AuthoritiesCouncilDetailPage } from "@/admin/pages/authorities-council/AuthoritiesCouncilDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Council Member Details | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminAuthoritiesCouncilDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <AuthoritiesCouncilDetailPage id={id} />;
}
