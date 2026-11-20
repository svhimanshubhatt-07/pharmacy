import { DetailPage } from "@/admin/pages/events/DetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Release Details | NIET Pharmacy Admin",
};

interface PressReleaseDetailRouteProps {
  params: {
    id: string;
  };
}

export default function AdminPressReleaseDetailRoute({ params }: PressReleaseDetailRouteProps) {
  const pressId = parseInt(params.id, 10);
  return <DetailPage id={pressId} entityType="press" />;
}
