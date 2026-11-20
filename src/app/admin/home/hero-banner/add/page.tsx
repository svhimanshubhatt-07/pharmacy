import { HeroBannerFormPage } from "@/admin/pages/hero-banner/HeroBannerFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Hero Banner | NIET Pharmacy Admin",
};

export default function AdminHeroBannerAddRoute() {
  return <HeroBannerFormPage mode="add" />;
}
