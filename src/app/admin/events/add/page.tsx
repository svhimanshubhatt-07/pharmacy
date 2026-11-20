import { FormPage } from "@/admin/pages/events/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Event | NIET Pharmacy Admin",
};

export default function AdminAddEventRoute() {
  return <FormPage mode="add" entityType="event" />;
}
