import { AllApprovalsPage } from "@/admin/pages/approvals/AllApprovalsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandatory Approvals & Affiliations | NIET Pharmacy Admin",
  description: "Manage official session-wise approval letters, affiliation notifications, and compliance disclosures.",
};

export default function AdminApprovalsRoute() {
  return <AllApprovalsPage />;
}
