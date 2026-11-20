import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Medical Plant Garden | Infrastructure | NIET Pharmacy",
  description:
    "Botanical repository featuring over 100 medicinal and aromatic plant species for pharmacognosy and herbal research at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "garden",
  title: "Medical Plant Garden",
  subtitle: "Botanical Repository of Indigenous Medicinal & Aromatic Plants",
  paragraphs: [
    "Today, there is a great demand for herbal medicines in the market on account of fewer side effects in comparison to synthetic pharmaceuticals. The Department maintains an extensive Medicinal Plant Garden with a rich collection of rare and therapeutic plant species.",
    "More than 100 plants of medicinal and aromatic importance have been established and are scientifically nurtured in the Herbal Garden. For this purpose, facilities in the Pharmacy institute are established for developing various herbal drugs, standardized extracts, and natural formulations.",
    "Garden training is an integral part of the curriculum; students utilize diverse herbal species for their pharmacognostic evaluation, herbal drug technology projects, and natural product research."
  ],
  description:
    "Botanical repository featuring over 100 therapeutic, medicinal, and aromatic plant species maintained for pharmacognostic evaluation, herbal drug extraction, and natural products research.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435167/Medicinal-Garden.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg"
  ],
  tables: []
};

export default function MedicalPlantGardenPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
