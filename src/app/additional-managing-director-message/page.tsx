import type { Metadata } from "next";
import { LeadershipMessage } from "@/components/LeadershipMessage";
import { leadershipMessages } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Additional Managing Director's Message | Dr. Neema Agarwal | NIET Pharmacy",
  description:
    "Message from Dr. Neema Agarwal, Additional Managing Director of NIET Group of Institutions. Shaping learners into achievers.",
};

export default function AdditionalManagingDirectorMessagePage() {
  return <LeadershipMessage message={leadershipMessages.additionalManagingDirector} />;
}
