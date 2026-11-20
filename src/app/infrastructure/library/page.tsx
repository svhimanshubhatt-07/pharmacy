import React from "react";
import { Metadata } from "next";
import { FacilityDetailView } from "@/components/infrastructure/FacilityDetailView";
import { InfrastructureFooterBanner } from "@/components/infrastructure/InfrastructureFooterBanner";
import { InfrastructureItem } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Central Library | Infrastructure | NIET Pharmacy",
  description:
    "14,000+ sq. ft. digital knowledge repository, research journals, e-library, and round-the-clock reading spaces at NIET Pharmacy.",
};

const facilityData: InfrastructureItem = {
  id: "library",
  title: "Library",
  subtitle: "14,000+ Sq. Ft. Digital Knowledge Repository & 24/7 Reading Space",
  paragraphs: [
    "The libraries at NIET occupy over 14,000 square feet area and provide students access to a vast repository of resources, including books and periodicals. The peaceful and sunlit areas provide ideal study spaces. Our libraries remain open until midnight on all days. During the examinations, they remain open for 24 hours.",
    "Completely automated library management systems make it possible to borrow books at any time of the day or night, as well as make reservations online. Multiple copies ensure that resources are easily available for reference in the library. Trained staff is always at hand to assist students.",
    "In addition to standard hard-bound volumes, students have high-speed digital terminals to access DELNET, IEEE, ScienceDirect, and national digital libraries containing thousands of indexed pharmaceutical research papers and monographs."
  ],
  description:
    "A 14,000+ sq. ft. central library with an extensive collection of books, national and international journals, automated lending systems, and round-the-clock examination study areas.",
  images: [
    "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg",
    "/images/gallery/thumb-6.jpg",
    "/images/gallery/thumb-7.jpg",
    "/images/gallery/thumb-8.jpg",
    "/images/gallery/thumb-9.jpg",
    "/images/gallery/thumb-10.jpg",
    "/images/research/phd-doctoral.jpg",
    "/images/research/research-publications.jpg"
  ],
  tables: []
};

export default function LibraryPage() {
  return (
    <div className="w-full bg-white">
      <main className="container mx-auto px-0 md:px-0 max-w-[1360px] pt-8 md:pt-14 pb-0 box-border">
        <FacilityDetailView item={facilityData} />
      </main>
      <InfrastructureFooterBanner />
    </div>
  );
}
