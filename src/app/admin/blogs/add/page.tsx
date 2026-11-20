import { BlogFormPage } from "@/admin/pages/blogs/BlogFormPage";

export const metadata = {
  title: "Add New Blog Article | NIET Pharmacy Administration",
  description: "Compose and publish a new pharmaceutical blog post or academic article."
};

export default function Page() {
  return <BlogFormPage mode="add" />;
}
