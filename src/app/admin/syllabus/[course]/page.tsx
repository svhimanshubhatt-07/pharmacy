import { SyllabusDocListPage } from "@/admin/pages/syllabus/SyllabusDocListPage";
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
      ? `${meta.shortTitle} Syllabus Management | NIET Pharmacy Admin`
      : "Syllabus Management | NIET Pharmacy Admin",
  };
}

export default function AdminSyllabusCourseRoute({ params }: RouteProps) {
  const key = params.course as SyllabusCourseKey;
  if (!SYLLABUS_COURSES[key]) {
    notFound();
  }
  return <SyllabusDocListPage course={key} />;
}
