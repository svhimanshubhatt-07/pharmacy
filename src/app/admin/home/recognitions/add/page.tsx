import { RecognitionFormPage } from "@/admin/pages/recognitions/RecognitionFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Government Recognition | NIET Pharmacy Admin",
};

export default function AdminAddRecognitionRoute() {
  return <RecognitionFormPage mode="add" />;
}
