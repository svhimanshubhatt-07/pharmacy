import { InfrastructureFormPage } from "@/admin/pages/infrastructure/InfrastructureFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Infrastructure Component | NIET Pharmacy Admin",
  description: "Create a new campus infrastructure facility with custom heading, description, banner, and gallery photos.",
};

export default function AddInfrastructurePage() {
  return <InfrastructureFormPage mode="add" />;
}
