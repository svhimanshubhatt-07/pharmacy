import { redirect } from "next/navigation";

export default function AdminEventRedirect() {
  redirect("/admin/events");
}
