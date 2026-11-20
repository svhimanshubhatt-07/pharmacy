import { BlogDetailPage } from "@/admin/pages/blogs/BlogDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Article Details | NIET Pharmacy Administration",
  description: "View full article specifications and manage publication status."
};

interface RouteProps {
  params: {
    id: string;
  };
}

export default function AdminBlogDetailRoute({ params }: RouteProps) {
  const id = parseInt(params.id, 10);
  return <BlogDetailPage id={id} />;
}
