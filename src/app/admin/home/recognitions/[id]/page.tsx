import { RecognitionDetailPage } from "@/admin/pages/recognitions/RecognitionDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recognition Details | NIET Pharmacy Admin",
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminRecognitionDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <RecognitionDetailPage id={id} />;
}
