import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Machine Room & Pilot Plant | Infrastructure | NIET Pharmacy",
  description:
    "Industrial scale pharmaceutical manufacturing pilot plant, tablet punching machines, coating pans, and GMP packaging equipment at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "machine",
  title: "Machine Room",
  subtitle: "Industrial Scale Pharmaceutical Manufacturing & Pilot Plant",
  paragraphs: [
    "The Machine Room serves as a pilot-scale industrial simulation plant, providing students hands-on familiarity with full-scale pharmaceutical manufacturing operations.",
    "The facility houses commercial equipment including Rotary 16-Station Tablet Punching Machines, Tablet Coating Pans, Ampoule Washing & Sealing Apparatus, Capsule Filling Machines, Tray Dryers, and Ointment Tube Crimping Machines.",
    "Working in the Machine Room enables pharmacy scholars to master scale-up fundamentals, packaging mechanics, solid dosage compaction, and Good Manufacturing Practice (GMP) protocols demanded by pharmaceutical companies."
  ],
  description:
    "Industrial pilot plant equipped with 16-station rotary tablet presses, coating pans, ampoule fillers, capsule loaders, and tray dryers for practical formulation processing.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/instrument-room.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Machine_room_1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435166/Machine_room_2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435167/Machine_room_3.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435167/Machine_room_4.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435164/Laboratory-3.jpg"
  ],
  tables: [
    {
      headers: ["S.No", "Machine / Equipment", "Unit Operation"],
      rows: [
        ["1", "Ampoule Sealing Machine", "Aseptic Glass Ampoule Hermetic Closure"],
        ["2", "Ampoule Washing Machine", "High-Pressure Injectable Washing"],
        ["3", "Industrial Ball Mill", "Size Reduction & Micronization"],
        ["4", "Automatic Bottle Filling Machine", "Liquid Syrups & Elixir Dispensing"],
        ["5", "B.O.D. Incubator", "Biological Oxygen Demand Storage"],
        ["6", "Rotary Bottle Sealing & Capping Machine", "Pilfer-Proof Container Sealing"],
        ["7", "Double Cone Blender", "Homogeneous Powder Blending"],
        ["8", "Motorized Disintegrator", "Coarse Granule Pulverization"],
        ["9", "Roche Friabilator", "Tablet Mechanical Durability Testing"],
        ["10", "Digital Monsanto / Pfizer Hardness Tester", "Radial Crushing Strength Assay"],
        ["11", "Collapsible Ointment Tube Filling & Crimping", "Semi-Solid Creams Packaging"],
        ["12", "Electrically Operated Tray Dryer", "Granule Dehydration & Moisture Removal"],
        ["13", "Tablet Coating Pan with Hot Air Blower", "Sugar & Film Coating of Core Tablets"],
        ["14", "Rotary 16-Station Tablet Punching Machine", "High-Speed Pharmaceutical Compression"],
        ["15", "Semi-Automatic Capsule Filling Machine", "Gelatin Capsule Alignment & Powder Filling"],
        ["16", "Tablet & Capsule Counting Device", "Packaging Unit Counting Accuracy"],
        ["17", "Reynolds & Bernoulli Fluid Flow Apparatus", "Pharmaceutical Engineering Hydrodynamics"],
        ["18", "Rotary Sieve Shaker with Standard Mesh", "Particle Size Distribution Grading"]
      ]
    }
  ]
};

export default function MachineRoomPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
