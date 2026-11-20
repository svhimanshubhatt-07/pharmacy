import { AllApprovalsDetailPage } from "@/admin/pages/approvals/AllApprovalsDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approval Document Details | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminApprovalsDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <AllApprovalsDetailPage id={id} />;
}
