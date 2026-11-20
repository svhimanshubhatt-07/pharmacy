import { AllApprovalsFormPage } from "@/admin/pages/approvals/AllApprovalsFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Approval Document | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminApprovalsEditRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <AllApprovalsFormPage mode="edit" id={id} />;
}
