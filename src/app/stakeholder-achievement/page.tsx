import React from "react";
import { Metadata } from "next";
import { StakeholderInteractive } from "@/components/stakeholder/StakeholderInteractive";

export const metadata: Metadata = {
  title: "Stakeholder Achievement | University Toppers & Medalists | NIET Pharmacy",
  description:
    "Celebration of student toppers, AKTU university gold and silver medalists, and faculty honors at NIET Pharmacy Institute.",
};

export default function StakeholderAchievementPage() {
  return (
    <div className="homePage hp ab sa-page">
      <section className="section-pad">
        <div className="hp-container">
          <StakeholderInteractive />
        </div>
      </section>
    </div>
  );
}
