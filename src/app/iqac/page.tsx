import React from "react";
import { Metadata } from "next";
import { IQACInteractive } from "@/components/iqac/IQACInteractive";

export const metadata: Metadata = {
  title: "IQAC | Internal Quality Assurance Cell | NIET Pharmacy",
  description:
    "Internal Quality Assurance Cell (IQAC) composition and official Minutes of Meeting records at NIET Pharmacy Institute.",
};

export default function IQACPage() {
  return <IQACInteractive />;
}
