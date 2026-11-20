import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Canteen & Dining | Infrastructure | NIET Pharmacy",
  description:
    "Hygienic multi-cuisine cafeteria, healthy dining spaces, and student refreshment food courts at NIET Pharmacy Institute.",
};

const facilityData: InfrastructureItem = {
  id: "canteen",
  title: "Canteen",
  subtitle: "Hygienic Multi-Cuisine Food Courts & Student Mess Facilities",
  paragraphs: [
    "The NIET college canteen is not just a place to dine; it serves as a vibrant social arena for discussions, study groups, relaxation, and memorable moments with friends between academic sessions.",
    "The institute features well-furnished, spacious canteens that offer hygienic, freshly prepared breakfast, lunch, hot beverages, and nutritious snacks under strict quality control standards.",
    "The dining halls are maintained under high standards of cleanliness, with modern commercial kitchen equipment and seating arrangements designed to comfortably accommodate hundreds of scholars simultaneously."
  ],
  description:
    "Multi-outlet hygienic cafeteria and cooperative dining halls offering clean, nutritious, and balanced meal plans for day scholars, hostellers, and staff.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Canteen.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435158/hostel-facilities-2.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435159/hostel-facilities-3.webp",
    "https://www.niet.co.in/assets/frontend/images/sports-1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg"
  ],
  tables: []
};

export default function CanteenPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
