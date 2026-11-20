import type { Metadata } from "next";
import { LeadershipMessage } from "@/components/LeadershipMessage";
import { leadershipMessages } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Dean's Message | Dr. Rupa Mazumder | NIET Pharmacy",
  description:
    "Message from Dr. Rupa Mazumder, Dean of NIET (Pharmacy Institute). Excellence in outcome-based pharmaceutical education and research.",
};

export default function DeanMessagePage() {
  return <LeadershipMessage message={leadershipMessages.dean} />;
}
