import React from "react";
import { AdminProvider } from "@/admin/context/AdminContext";
import { AdminLayout } from "@/admin/components/AdminLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | NIET Pharmacy",
  description: "Institutional administration portal for managing NIET Pharmacy events and press releases.",
};

export default function AdminRootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      <AdminLayout>
        {children}
      </AdminLayout>
    </AdminProvider>
  );
}
