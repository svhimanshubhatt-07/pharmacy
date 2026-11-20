import { FeeStructureDocDetailPage } from "@/admin/pages/fee-structure/FeeStructureDocDetailPage";
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
      ? `${meta.shortTitle} Fee Structure Details | NIET Pharmacy Admin`
      : "Fee Details | NIET Pharmacy Admin",
  };
}

export default function AdminFeeStructureDetailRoute({ params }: RouteProps) {
  const key = params.course as FeeStructureCourseKey;
  if (!FEE_STRUCTURE_COURSES[key]) {
    notFound();
  }
  const id = parseInt(params.id, 10);
  return <FeeStructureDocDetailPage course={key} id={id} />;
}
