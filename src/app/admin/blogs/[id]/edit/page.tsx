import { BlogFormPage } from "@/admin/pages/blogs/BlogFormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog Article | NIET Pharmacy Administration",
  description: "Update article heading, category, featured image, and content description."
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminBlogEditRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <BlogFormPage mode="edit" id={id} />;
}
