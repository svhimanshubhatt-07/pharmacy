import { DetailPage } from "@/admin/pages/events/DetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Details | NIET Pharmacy Admin",
};

interface EventDetailRouteProps {
  params: {
    id: string;
  };
}

export default function AdminEventDetailRoute({ params }: EventDetailRouteProps) {
  const eventId = parseInt(params.id, 10);
  return <DetailPage id={eventId} entityType="event" />;
}
