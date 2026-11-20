import React from "react";
import { Metadata } from "next";
import { InfrastructureShowcase } from "@/components/infrastructure/InfrastructureShowcase";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";

export const metadata: Metadata = {
  title: "World-Class Infrastructure | NIET Pharmacy | Greater Noida",
  description:
    "Explore the state-of-the-art infrastructure at NIET Pharmacy, including smart classrooms, central library, advanced laboratories, CPCSEA animal house, SIF instrumentation suites, and pilot plant.",
};

export default function InfrastructurePage() {
  return (
    <div className="w-full bg-white">
      {/* Main Content Container matching standard width */}
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <InfrastructureShowcase />
      </main>

      {/* Full-width edge-to-edge Banner flush with left, right, and bottom footer */}
      <InfrastructureFooterBanner />
    </div>
  );
}
