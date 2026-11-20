import React from "react";
import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { PlacementInteractive } from "@/components/PlacementInteractive";
import { HomeScrollReveal } from "@/components/HomeScrollReveal";

export const metadata: Metadata = {
  title: "Placements | NIET Pharmacy Institute - Ranked 37th NIRF",
  description:
    "Discover the exceptional placement records of NIET Pharmacy. 9.20 LPA highest package, top recruiters like Cipla, Nestle, Mankind, Wipro, and 100% career guidance.",
};

export default function PlacementPharmacyPage() {
  return (
    <main className="hp pl-page">
      <HomeScrollReveal />
      <Banner title="Placement Pharmacy" />
      <PlacementInteractive />
    </main>
  );
}
