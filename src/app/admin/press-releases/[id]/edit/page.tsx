import { FormPage } from "@/admin/pages/events/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Press Release | NIET Pharmacy Admin",
};

interface EditPressReleaseRouteProps {
  params: {
    id: string;
  };
}

export default function AdminEditPressReleaseRoute({ params }: EditPressReleaseRouteProps) {
  const pressId = parseInt(params.id, 10);
  return <FormPage mode="edit" entityType="press" id={pressId} />;
}
