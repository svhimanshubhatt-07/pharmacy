import { FacultyPage } from "@/admin/pages/faculty/FacultyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty & Facilities | NIET Pharmacy Admin",
  description: "Manage institute faculty members, leadership profiles, and academic research facility units.",
};

export default function AdminFacultyRoute() {
  return <FacultyPage />;
}
