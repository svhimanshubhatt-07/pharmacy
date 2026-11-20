import { PressReleasesPage } from "@/admin/pages/press-releases/PressReleases";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Releases Management | NIET Pharmacy Admin",
  description: "Publish and maintain media coverage, achievements, and press statements.",
};

export default function AdminPressReleasesRoute() {
  return <PressReleasesPage />;
}
