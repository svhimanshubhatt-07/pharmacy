import React from "react";
import { Metadata } from "next";
import { AuthoritiesInteractive } from "@/components/authorities/AuthoritiesInteractive";

export const metadata: Metadata = {
  title: "Authorities | Advisory Board & Governing Body | NIET Pharmacy",
  description:
    "Institutional governance, Members of Advisory Board, and Governing Body of NIET Pharmacy Institute.",
};

export default function AuthoritiesPage() {
  return <AuthoritiesInteractive />;
}
