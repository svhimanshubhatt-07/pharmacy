import { FormPage } from "@/admin/pages/events/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Event | NIET Pharmacy Admin",
};

interface EditEventRouteProps {
  params: {
    id: string;
  };
}

export default function AdminEditEventRoute({ params }: EditEventRouteProps) {
  const eventId = parseInt(params.id, 10);
  return <FormPage mode="edit" entityType="event" id={eventId} />;
}
