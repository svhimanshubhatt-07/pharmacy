import { FacultyFormPage } from "@/admin/pages/faculty/FacultyFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Faculty / Facility | NIET Pharmacy Admin",
};

export default function AdminFacultyAddRoute() {
  return <FacultyFormPage mode="add" />;
}
