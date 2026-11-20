import React from "react";
import { Metadata } from "next";
import { ResearchInteractive } from "@/components/research/ResearchInteractive";

export const metadata: Metadata = {
  title: "Research & Development | NIET Pharmacy Institute",
  description:
    "NIET Pharmacy is a hub for R&D, fostering innovation in pharmaceutical sciences. Ranked 37th in NIRF, explore our research centre, publications, patents, and SIF testing facilities.",
};

export default function ResearchPage() {
  return (
    <div className="homePage hp ab sa-page appr-page research-page">
      <section className="section-pad">
        <div className="hp-container">
          <ResearchInteractive />
        </div>
      </section>
    </div>
  );
}
