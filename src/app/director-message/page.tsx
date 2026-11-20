import type { Metadata } from "next";
import { LeadershipMessage } from "@/components/LeadershipMessage";
import { leadershipMessages } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Director's Message | Dr. Avijit Mazumder | NIET Pharmacy",
  description:
    "Message from Dr. Avijit Mazumder, Director of NIET (Pharmacy Institute). Excellence in outcome-based pharmaceutical education.",
};

export default function DirectorMessagePage() {
  return <LeadershipMessage message={leadershipMessages.director} />;
}
