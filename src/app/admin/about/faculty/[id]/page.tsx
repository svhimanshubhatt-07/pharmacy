import { FacultyDetailPage } from "@/admin/pages/faculty/FacultyDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty Details | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminFacultyDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <FacultyDetailPage id={id} />;
}
