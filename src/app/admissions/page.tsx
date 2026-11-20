import React from "react";
import { Metadata } from "next";
import { AdmissionsContent } from "./AdmissionsContent";

export const metadata: Metadata = {
  title: "Admissions 2025-26 | NIET Pharmacy | D.Pharm, B.Pharm & M.Pharm",
  description:
    "Apply for admissions at NIET Pharmacy, a top-ranked institute (NIRF #37). Complete eligibility, fee structures, seat intake, and document checklists for D.Pharm, B.Pharm, and M.Pharm programs.",
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}
