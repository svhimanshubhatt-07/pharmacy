import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Sports & Leisure | Infrastructure | NIET Pharmacy",
  description:
    "Comprehensive athletic infrastructure, multi-sport complex, cricket ground, badminton courts, and fitness facilities at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "sports",
  title: "Sports & Leisure",
  subtitle: "Multi-Sport Complex, Cricket Ground, Indoor Courts & Athletics",
  paragraphs: [
    "At NIET, students develop leadership and team skills while pursuing their interests through diverse athletic organizations. From cricket to basketball, athletics to yoga, students can stay active and physically fit in any discipline they choose.",
    "Excellent coaching facilities allow students to hone their talents, and NIET sports teams regularly win accolades across inter-collegiate and university tournaments. Outdoor complexes include cricket grounds, football fields, volleyball courts, and standard athletic tracks.",
    "NIET also runs the community Marathon Club and hosts annual sports galas where hundreds of pharmacy scholars participate to foster holistic well-being and active team camaraderie."
  ],
  description:
    "Extensive indoor and outdoor sports infrastructure spanning basketball courts, cricket pitches, badminton halls, athletic tracks, and table tennis facilities.",
  images: [
    "https://www.niet.co.in/assets/frontend/images/sports-1.webp",
    "https://www.niet.co.in/assets/frontend/images/sports2.webp",
    "https://www.niet.co.in/assets/frontend/images/sports3.webp",
    "https://www.niet.co.in/assets/frontend/images/sport4.webp",
    "https://www.niet.co.in/assets/frontend/images/sports-5.webp",
    "https://www.niet.co.in/assets/frontend/images/sports-6.webp",
    "https://www.niet.co.in/assets/frontend/images/sports-7.webp",
    "https://www.niet.co.in/assets/frontend/images/gym--2.webp"
  ],
  tables: []
};

export default function SportsLeisurePage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
