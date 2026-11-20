import { HeroBannerPage } from "@/admin/pages/hero-banner/HeroBannerPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero Banner Management | NIET Pharmacy Admin",
  description: "Manage homepage hero slides, copy, badges, and CTAs.",
};

export default function AdminHeroBannerRoute() {
  return <HeroBannerPage />;
}
