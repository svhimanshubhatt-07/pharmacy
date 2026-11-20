import { GalleryFormPage } from "@/admin/pages/gallery/GalleryFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Photograph | NIET Pharmacy Administration",
  description: "Update institutional photograph caption, URL, and category classification."
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminGalleryEditRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <GalleryFormPage mode="edit" id={id} />;
}
