import { HeroBannerDetailPage } from "@/admin/pages/hero-banner/HeroBannerDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero Banner Details | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminHeroBannerDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <HeroBannerDetailPage id={id} />;
}
