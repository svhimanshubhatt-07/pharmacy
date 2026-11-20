import { InfrastructureFormPage } from "@/admin/pages/infrastructure/InfrastructureFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Infrastructure Component | NIET Pharmacy Admin",
};

interface EditInfrastructurePageProps {
  params: {
    slug: string;
  };
}

export default function EditInfrastructurePage({ params }: EditInfrastructurePageProps) {
  return <InfrastructureFormPage mode="edit" slug={params.slug} />;
}
