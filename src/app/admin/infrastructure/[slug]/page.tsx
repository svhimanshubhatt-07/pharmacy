import { InfrastructureDetailPage } from "@/admin/pages/infrastructure/InfrastructureDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure Facility Editor | NIET Pharmacy Admin",
};

interface AdminInfrastructureSlugRouteProps {
  params: {
    slug: string;
  };
}

export default function AdminInfrastructureSlugRoute({
  params
}: AdminInfrastructureSlugRouteProps) {
  return <InfrastructureDetailPage slug={params.slug} />;
}
