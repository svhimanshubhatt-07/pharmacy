import type { Metadata } from "next";
import { LeadershipMessage } from "@/components/LeadershipMessage";
import { leadershipMessages } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Managing Director's Message | Dr. Om Prakash Agarwal | NIET Pharmacy",
  description:
    "Message from Dr. Om Prakash Agarwal, Managing Director of NIET Group of Institutions. Transforming education into excellence.",
};

export default function ManagingDirectorMessagePage() {
  return <LeadershipMessage message={leadershipMessages.managingDirector} />;
}
