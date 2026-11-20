import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Transportation Facilities | Infrastructure | NIET Pharmacy",
  description:
    "Extensive GPS-tracked institute bus network covering Delhi NCR, Noida, Greater Noida, and Ghaziabad for NIET Pharmacy students.",
};

const facilityData: InfrastructureItem = {
  id: "transportation",
  title: "Transportation",
  subtitle: "Extensive Safe Transit Network Across Delhi NCR & Greater Noida",
  paragraphs: [
    "NIET provides a comprehensive, punctual, and safe fleet of institute buses connecting all prominent residential hubs of New Delhi, Noida, Greater Noida, Ghaziabad, and Faridabad.",
    "Buses are operated by experienced drivers, equipped with GPS telemetry and speed governors, ensuring that day scholars commute smoothly, securely, and comfortably.",
    "Transit schedules are carefully synchronized with academic morning lectures and evening laboratory sessions, making daily travel effortless and reliable for students and faculty alike."
  ],
  description:
    "GPS-enabled fleet of institute buses operating across comprehensive routes covering Delhi, Noida, Ghaziabad, and NCR regions.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp2.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435169/Transp3.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435153/buss.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435169/Transp4.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg"
  ],
  tables: []
};

export default function TransportationPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
