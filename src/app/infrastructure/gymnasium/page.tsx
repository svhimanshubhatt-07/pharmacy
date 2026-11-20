import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Modern Gymnasium | Infrastructure | NIET Pharmacy",
  description:
    "State-of-the-art campus fitness arena with modern cardio machines, strength training equipment, and certified fitness trainers at NIET.",
};

const facilityData: InfrastructureItem = {
  id: "gymnasium",
  title: "Gymnasium",
  subtitle: "State-of-the-Art Fitness Arena & Advanced Exercise Equipment",
  paragraphs: [
    "To help students keep their bodies fit alongside rigorous intellectual endeavors, NIET Pharmacy houses a state-of-the-art gymnasium equipped with the latest cardio and weight-training equipment.",
    "Facility equipment includes motorized treadmills, elliptical cross trainers, exercise bikes, multi-station weight machines, dumbbells, bench presses, and dedicated stretching areas.",
    "Certified instructors guide students on physical fitness routines, posture, and wellness regimens, fostering an active, healthy lifestyle across campus."
  ],
  description:
    "Fully equipped campus gymnasium with cardio machines, free weights, Olympic lifting stations, and qualified fitness instructors.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym--2.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435155/gym-1.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435156/gym-2.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435156/gym-3.webp",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435157/gym-4.webp",
    "https://www.niet.co.in/assets/frontend/images/sports-5.webp",
    "https://www.niet.co.in/assets/frontend/images/sports-6.webp"
  ],
  tables: []
};

export default function GymnasiumPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
