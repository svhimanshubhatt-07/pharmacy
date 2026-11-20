import { AdminGalleryItem } from "../types";
import { allGalleryPhotos } from "@/data/gallery";

// Exactly 15 dummy images as requested
export const initialGalleryItems: AdminGalleryItem[] = allGalleryPhotos.slice(0, 15).map((photo, index) => ({
  id: index + 1,
  image: photo.image,
  status: "Visible"
}));
