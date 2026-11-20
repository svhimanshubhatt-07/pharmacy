import { HeroBannerFormPage } from "@/admin/pages/hero-banner/HeroBannerFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Hero Banner | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminHeroBannerEditRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <HeroBannerFormPage mode="edit" id={id} />;
}
