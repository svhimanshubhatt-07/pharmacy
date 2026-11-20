import { SyllabusDocFormPage } from "@/admin/pages/syllabus/SyllabusDocFormPage";
import { SyllabusCourseKey } from "@/admin/types";
import { SYLLABUS_COURSES } from "@/admin/data/syllabus";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface RouteProps {
  params: {
    course: string;
  };
}

export function generateMetadata({ params }: RouteProps): Metadata {
  const meta = SYLLABUS_COURSES[params.course as SyllabusCourseKey];
  return {
    title: meta
      ? `Add ${meta.shortTitle} Syllabus | NIET Pharmacy Admin`
      : "Add Syllabus | NIET Pharmacy Admin",
  };
}

export default function AdminSyllabusAddRoute({ params }: RouteProps) {
  const key = params.course as SyllabusCourseKey;
  if (!SYLLABUS_COURSES[key]) {
    notFound();
  }
  return <SyllabusDocFormPage course={key} mode="add" />;
}
