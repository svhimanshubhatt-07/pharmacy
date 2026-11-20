import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Animal House Facility | Infrastructure | NIET Pharmacy",
  description:
    "CPCSEA-approved animal research and breeding centre for in-vivo pharmacology, drug evaluation, and pre-clinical testing at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "animalhouse",
  title: "Animal House",
  subtitle: "CPCSEA-Approved Pre-Clinical Pharmacology & In Vivo Research Centre",
  paragraphs: [
    "In alignment with our commitment to quality education and ethical research, NIET (Pharmacy Institute) establishes a CPCSEA-approved Animal House facility that supports in vivo research essential for pharmaceutical sciences.",
    "The Animal House is maintained under the highest standards of hygiene, ventilation, and temperature control to ensure the well-being of the laboratory animals. It serves as a vital resource for pharmacological testing, toxicological assessments, and pre-clinical drug evaluations.",
    "The facility adheres strictly to all statutory guidelines for animal care, ensuring humane handling and ethical experimentation. Our students are trained to conduct studies responsibly, promoting an understanding of animal models in therapeutic development."
  ],
  description:
    "A statutory CPCSEA-registered facility providing ethical housing, controlled quarantine, and temperature-regulated environments for pre-clinical screening of therapeutic drug candidates.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435150/animalhouse1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435151/animalhouse2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435151/animalhouse3.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435152/animalhouse4.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435152/animalhouse5.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435153/animalhouse6.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435149/Animal_House_1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435149/Animal_House_2.jpg"
  ],
  tables: []
};

export default function AnimalHousePage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
