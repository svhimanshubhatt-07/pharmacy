import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Instrumentation Lab (SIF) | Infrastructure | NIET Pharmacy",
  description:
    "Sophisticated Instrumentation Facility housing HPLC, FT-IR, UV-Vis, Karl Fischer titrimeter, and dissolution test apparatus at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "instrumentation",
  title: "Instrumentation Lab",
  subtitle: "Central Instrumentation Facility with Advanced Analytical Systems",
  paragraphs: [
    "The Pharmacy Institute houses two specialized instrumentation suites alongside the Central Instrumentation Facility (SIF), equipped with high-value analytical instruments to cater to advanced research, testing, and characterization.",
    "Equipped with HPLC, UV-Vis Spectrophotometers, FT-IR Spectrometers, Karl Fischer Titrimeters, Fluorimeters, Moisture Analyzers, and Dissolution Test Apparatus, this facility supports rigorous empirical testing for Undergraduates, Postgraduates, and Doctoral Scholars.",
    "The instrumentation suites follow Good Laboratory Practices (GLP), providing calibrated testing environments for trace chemical assay, pharmacokinetic profiles, and structural drug elucidation."
  ],
  description:
    "High-precision analytical instrumentation hub housing HPLC, FTIR, UV-Vis, Karl Fischer titrimeter, and dissolution systems for advanced quality control and research assays.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Instrument_room_1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_2.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_3.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/Instrument_room_4.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435161/instrument-room.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435163/Laboratory-1.jpg"
  ],
  tables: [
    {
      headers: ["S No.", "Name of Instrument", "Primary Application"],
      rows: [
        ["1", "Flame Photometer", "Alkali Metal Elemental Analysis"],
        ["2", "Fluorimeter", "Fluorescence & Luminescence Assays"],
        ["3", "Potentiometer", "Electrochemical Oxidation-Reduction"],
        ["4", "Auto Karl Fischer Titrimeter", "Precise Moisture Content Estimation"],
        ["5", "Moisture Balance", "Thermogravimetric Moisture Loss"],
        ["6", "Ultrasonic Sonicator", "Cell Disruption & Degassing"],
        ["7", "Digital pH Meter", "Aqueous Solution Hydrogen Ion Activity"],
        ["8", "High-Performance Liquid Chromatography (HPLC)", "Quantitative Separation & Purity Assay"],
        ["9", "Trinocular Research Microscope", "Microscopic Examination & Image Capture"],
        ["10", "Digital Balance (0.1 mg)", "Analytical Precision Weighing"],
        ["11", "UV-Vis Double Beam Spectrophotometer", "Quantitative Absorption Spectroscopy"],
        ["12", "Fourier-Transform Infrared Spectrometer (FT-IR)", "Molecular Functional Group Characterization"],
        ["13", "KBr Hydraulic Pellet Press", "Solid Sample Disk Preparation for IR"],
        ["14", "Polarograph", "Voltammetric Trace Analysis"],
        ["15", "Nephelo-Turbidimeter", "Colloidal Suspensions & Haze Measurement"],
        ["16", "Digital Dissolution Test Apparatus (USP)", "In Vitro Drug Release Profiling"],
        ["17", "Tablet Disintegration Apparatus", "Solid Dosage Breakdown Kinetics"],
        ["18", "Brookfield Viscometer & Rheometer", "Fluid & Semi-Solid Flow Rheology"]
      ]
    }
  ]
};

export default function InstrumentationLabPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
