import { RecognitionFormPage } from "@/admin/pages/recognitions/RecognitionFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Government Recognition | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminEditRecognitionRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <RecognitionFormPage mode="edit" id={id} />;
}
