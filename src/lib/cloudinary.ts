const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "boss8zib";

export function cloudinaryImageUrl(asset: string): string {
  return `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/${asset}`;
}
