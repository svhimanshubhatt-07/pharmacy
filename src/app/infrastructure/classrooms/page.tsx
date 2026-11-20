import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Smart Classrooms | Infrastructure | NIET Pharmacy",
  description:
    "Explore smart ICT-enabled lecture theatres, digital podiums, and interactive learning spaces at NIET Pharmacy Institute.",
};

const facilityData: InfrastructureItem = {
  id: "classrooms",
  title: "Classrooms",
  subtitle: "Smart ICT-Enabled Lecture Theatres & Interactive Learning Spaces",
  paragraphs: [
    "We, at NIET, believe that the whole process of teaching can be highly enhanced by using the latest technological tools which further helps the students gain a better understanding of tough concepts and gives a boost by providing the ways and means to visualize the concept being put forward by the professors, or let’s say, the education experts.",
    "Hence, the classrooms are well-equipped with projectors, computers, high-tech sound systems, OHPs and other kinds of audio-visual tools. The classrooms have ergonomically designed furniture, seamless Wi-Fi connectivity, climate controlling systems, aesthetic lighting and visually pleasing interiors, that make the environment of the classroom more conducive towards learning.",
    "Smart interactive digital podiums and step-tiered acoustic seating ensure clear line-of-sight and auditory clarity from every position in the hall, fostering active classroom discussions and collaborative learning."
  ],
  description:
    "Well-equipped smart lecture halls with audio-visual equipment, ergonomically designed furniture, high-speed Wi-Fi, and climate control to provide a comfortable and technology-driven learning experience.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435154/Classrooms.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793699882/Event-banner.jpg",
    "https://res.cloudinary.com/boss8zib/image/upload/v1793701139/cover.jpg",
    "/images/gallery/thumb-1.jpg",
    "/images/gallery/thumb-2.jpg",
    "/images/gallery/thumb-3.jpg",
    "/images/gallery/thumb-4.jpg",
    "/images/gallery/thumb-5.jpg"
  ],
  tables: []
};

export default function ClassroomsPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
