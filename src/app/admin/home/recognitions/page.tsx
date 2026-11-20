import { RecognitionsPage } from "@/admin/pages/recognitions/RecognitionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Recognitions | NIET Pharmacy Admin",
  description: "Manage homepage statutory government recognition logos and accreditation titles.",
};

export default function AdminRecognitionsRoute() {
  return <RecognitionsPage />;
}
