import { FeeStructureDocFormPage } from "@/admin/pages/fee-structure/FeeStructureDocFormPage";
import { FeeStructureCourseKey } from "@/admin/types";
import { FEE_STRUCTURE_COURSES } from "@/admin/data/feeStructure";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface RouteProps {
  params: {
    course: string;
  };
}

export function generateMetadata({ params }: RouteProps): Metadata {
  const meta = FEE_STRUCTURE_COURSES[params.course as FeeStructureCourseKey];
  return {
    title: meta
      ? `Add ${meta.shortTitle} Fee Structure | NIET Pharmacy Admin`
      : "Add Fee Structure | NIET Pharmacy Admin",
  };
}

export default function AdminFeeStructureAddRoute({ params }: RouteProps) {
  const key = params.course as FeeStructureCourseKey;
  if (!FEE_STRUCTURE_COURSES[key]) {
    notFound();
  }
  return <FeeStructureDocFormPage course={key} mode="add" />;
}
