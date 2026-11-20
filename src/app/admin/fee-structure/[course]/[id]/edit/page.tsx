import { FeeStructureDocFormPage } from "@/admin/pages/fee-structure/FeeStructureDocFormPage";
import { FeeStructureCourseKey } from "@/admin/types";
import { FEE_STRUCTURE_COURSES } from "@/admin/data/feeStructure";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface RouteProps {
  params: {
    course: string;
    id: string;
  };
}

export function generateMetadata({ params }: RouteProps): Metadata {
  const meta = FEE_STRUCTURE_COURSES[params.course as FeeStructureCourseKey];
  return {
    title: meta
      ? `Edit ${meta.shortTitle} Fee Structure | NIET Pharmacy Admin`
      : "Edit Fee Structure | NIET Pharmacy Admin",
  };
}

export default function AdminFeeStructureEditRoute({ params }: RouteProps) {
  const key = params.course as FeeStructureCourseKey;
  if (!FEE_STRUCTURE_COURSES[key]) {
    notFound();
  }
  const id = parseInt(params.id, 10);
  return <FeeStructureDocFormPage course={key} mode="edit" id={id} />;
}
