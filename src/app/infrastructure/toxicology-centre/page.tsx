import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Toxicology Centre | Infrastructure | NIET Pharmacy",
  description:
    "Advanced pre-clinical toxicity testing, bio-safety evaluations, and specialized exposure assessment laboratories at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "toxicologycentre",
  title: "Toxicology Centre",
  subtitle: "Advanced Pre-Clinical Toxicity Testing & Bio-Safety Facility",
  paragraphs: [
    "At NIET (Pharmacy Institute), we understand the critical role of toxicological studies in pharmaceutical research. Our state-of-the-art Toxicology Centre is designed to facilitate practical learning and in-depth understanding of the effects of chemicals and drugs on biological systems.",
    "The centre is equipped with advanced instrumentation for analytical testing, exposure assessment, and toxicity evaluations, enabling students to engage in experimental learning and research-based activities. The facility strictly follows bio-safety norms and ethical practices, offering a secure and controlled environment for conducting high-impact studies.",
    "With experienced faculty and technical staff, the centre aims to instill scientific curiosity, enhance safety protocols, and support innovative drug discovery and risk assessment programs across undergraduate and doctoral research."
  ],
  description:
    "A specialized, cutting-edge facility dedicated to toxicological studies, analytical testing, and evaluating the biological safety of new chemical entities in a controlled, bio-safe environment.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435310/toxicology2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
    "/images/research/research-development.jpg",
    "/images/research/patents.jpg"
  ],
  tables: []
};

export default function ToxicologyCentrePage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
