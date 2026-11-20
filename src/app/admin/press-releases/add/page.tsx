import { FormPage } from "@/admin/pages/events/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Press Release | NIET Pharmacy Admin",
};

export default function AdminAddPressReleaseRoute() {
  return <FormPage mode="add" entityType="press" />;
}
