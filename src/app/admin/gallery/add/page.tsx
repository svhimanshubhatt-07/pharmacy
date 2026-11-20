import { GalleryFormPage } from "@/admin/pages/gallery/GalleryFormPage";

export const metadata = {
  title: "Add New Photo | NIET Pharmacy Administration",
  description: "Upload and publish a new photograph to the institutional gallery."
};

export default function Page() {
  return <GalleryFormPage mode="add" />;
}
