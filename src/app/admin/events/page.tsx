import { EventsPage } from "@/admin/pages/events/Events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Management | NIET Pharmacy Admin",
  description: "Manage NIET Pharmacy campus events, workshops, and academic seminars.",
};

export default function AdminEventsRoute() {
  return <EventsPage />;
}
