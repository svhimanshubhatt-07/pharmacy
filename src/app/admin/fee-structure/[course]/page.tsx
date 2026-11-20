import { FeeStructureDocListPage } from "@/admin/pages/fee-structure/FeeStructureDocListPage";
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
      ? `${meta.shortTitle} Fee Structure | NIET Pharmacy Admin`
      : "Fee Structure Management | NIET Pharmacy Admin",
  };
}

export default function AdminFeeStructureCourseRoute({ params }: RouteProps) {
  const key = params.course as FeeStructureCourseKey;
  if (!FEE_STRUCTURE_COURSES[key]) {
    notFound();
  }
  return <FeeStructureDocListPage course={key} />;
}
