import { AllApprovalsFormPage } from "@/admin/pages/approvals/AllApprovalsFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Approval Document | NIET Pharmacy Admin",
};

export default function AdminApprovalsAddRoute() {
  return <AllApprovalsFormPage mode="add" />;
}
