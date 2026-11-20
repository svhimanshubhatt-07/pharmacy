import { SyllabusDocDetailPage } from "@/admin/pages/syllabus/SyllabusDocDetailPage";
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
      ? `${meta.shortTitle} Syllabus Details | NIET Pharmacy Admin`
      : "Syllabus Details | NIET Pharmacy Admin",
  };
}

export default function AdminSyllabusDetailRoute({ params }: RouteProps) {
  const key = params.course as SyllabusCourseKey;
  if (!SYLLABUS_COURSES[key]) {
    notFound();
  }
  const id = parseInt(params.id, 10);
  return <SyllabusDocDetailPage course={key} id={id} />;
}
