import { FacultyFormPage } from "@/admin/pages/faculty/FacultyFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Faculty Profile | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminFacultyEditRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <FacultyFormPage mode="edit" id={id} />;
}
