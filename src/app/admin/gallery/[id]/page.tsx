import { GalleryDetailPage } from "@/admin/pages/gallery/GalleryDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photograph Details | NIET Pharmacy Administration",
  description: "View specifications and manage institutional photograph record."
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminGalleryDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <GalleryDetailPage id={id} />;
}
