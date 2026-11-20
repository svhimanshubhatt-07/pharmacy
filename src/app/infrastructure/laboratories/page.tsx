import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Pharmaceutical Laboratories | Infrastructure | NIET Pharmacy",
  description:
    "16 specialized departmental pharmaceutical laboratories spanning pharmaceutics, medicinal chemistry, pharmacology, and microbiology at NIET.",
};

const facilityData: InfrastructureItem = {
  id: "laboratory",
  title: "Laboratories",
  subtitle: "Comprehensive Departmental Practical & Formulation Facilities",
  paragraphs: [
    "NIET believes in acing practicality along with theoretical expertise. The laboratories we possess aren't just for conducting chemical experiments, but also for brainstorming new ideas as well as learning new scientific workflows every day.",
    "With refined infrastructure, best-in-market equipment to work on, the laboratories aim to fulfil every curiosity that a keen mind has towards learning. Apart from technical aspects, the labs also help students learn practical implementation of theoretical knowledge with assistance from expert professors and technical assistants.",
    "The institute features 16 specialized laboratories covering Pharmaceutics, Pharmacognosy, Pharmaceutical Chemistry, Pharmacology, Microbiology with dedicated Aseptic Suites, and Anatomy & Physiology."
  ],
  description:
    "16 dedicated pharmaceutical laboratories configured for synthetic chemistry, formulation development, pharmacognosy, microbiology, and pre-clinical screening.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Instrument_room_1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435310/toxicology2.jpg"
  ],
  tables: [
    {
      headers: ["S.No", "Laboratory Name", "Key Domain"],
      rows: [
        ["1", "Pharmaceutics Lab I", "Formulation & Dispensing"],
        ["2", "Pharmaceutics Lab II", "Industrial Pharmacy Unit Operations"],
        ["3", "Physical Pharmacy Lab", "Rheology & Colloid Science"],
        ["4", "Microbiology Lab", "Sterility Testing & Aseptic Room"],
        ["5", "Pharmacognosy Lab", "Crude Drugs & Extraction"],
        ["6", "Phytochemistry Lab", "Herbal Standardization"],
        ["7", "Pharm. Chem. Lab-I", "Organic & Medicinal Synthesis"],
        ["8", "Pharm. Chem. Lab-II", "Inorganic & Bio-organic Analysis"],
        ["9", "Pharmaceutical Analysis Lab", "Titrimetry, Spectrometry & Quality Control"],
        ["10", "Computer & Modeling Lab", "In Silico CADD & Bioinformatics"],
        ["11", "Anatomy & Physiology Lab", "Histology, Hematology & Bio-Models"],
        ["12", "Pharmacology Lab", "Organ Bath & In Vivo Pharmacodynamics"],
        ["13", "Pharmaceutics Research Lab I", "Novel Drug Delivery Systems (NDDS)"],
        ["14", "Pharmaceutics Research Lab II", "Polymer & Nano-carrier Formulations"],
        ["15", "Pharmacology Research Lab", "Pre-clinical Neuro & Metabolic Assays"],
        ["16", "Pharm. Chem. Research Lab", "Drug Synthesis & Lead Optimization"]
      ]
    }
  ]
};

export default function LaboratoriesPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
