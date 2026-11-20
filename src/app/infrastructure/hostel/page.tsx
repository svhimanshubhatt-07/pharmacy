import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Hostel & Residences | Infrastructure | NIET Pharmacy",
  description:
    "Comfortable on-campus residential hostels for boys and girls with 24/7 security, Wi-Fi, dining, and healthcare at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "hostel",
  title: "Hostel",
  subtitle: "Secure, Modern Residential Living with Round-the-Clock Amenities",
  paragraphs: [
    "While students can choose to be day scholars, we believe that campus living encourages independence and helps students develop the ability to adapt. The leafy, lush green NIET campus offers delightful spaces for study, sports and social interaction.",
    "The residential facilities are carefully designed according to modern standards. Three hostels on the campus offer well-ventilated, comfortable rooms with separate dedicated blocks for girls and boys. Rooms are available on single, double, and multi-sharing basis.",
    "Common recreational lounges develop camaraderie and foster long-term bonds. Stringent round-the-clock biometric security arrangements, continuous power backup, and a medical doctor on call ensure that all student welfare needs are promptly attended to."
  ],
  description:
    "Comfortable, air-cooled on-campus hostels for boys and girls featuring 24/7 security, Wi-Fi connectivity, mess facilities, and round-the-clock medical care.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-2.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435159/hostel-facilities-3.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Canteen.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym-1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Transp1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg"
  ],
  tables: []
};

export default function HostelPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
