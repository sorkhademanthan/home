import type { Metadata } from "next";
import ARRTargetCard from "@/components/arr-target-card";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ARRCardPage() {
  return <ARRTargetCard />;
}
