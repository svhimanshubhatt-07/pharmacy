import { SyllabusDocFormPage } from "@/admin/pages/syllabus/SyllabusDocFormPage";
import { SyllabusCourseKey } from "@/admin/types";
import { SYLLABUS_COURSES } from "@/admin/data/syllabus";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface RouteProps {
  params: {
    course: string;
    id: string;
  };
}

export function generateMetadata({ params }: RouteProps): Metadata {
  const meta = SYLLABUS_COURSES[params.course as SyllabusCourseKey];
  return {
    title: meta
      ? `Edit ${meta.shortTitle} Syllabus | NIET Pharmacy Admin`
      : "Edit Syllabus | NIET Pharmacy Admin",
  };
}

export default function AdminSyllabusEditRoute({ params }: RouteProps) {
  const key = params.course as SyllabusCourseKey;
  if (!SYLLABUS_COURSES[key]) {
    notFound();
  }
  const id = parseInt(params.id, 10);
  return <SyllabusDocFormPage course={key} mode="edit" id={id} />;
}
