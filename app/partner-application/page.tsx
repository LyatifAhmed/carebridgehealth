import type { Metadata } from "next";
import PartnerApplicationClient from "./PartnerApplicationClient";

export const metadata: Metadata = {
  title: "Partner Application",
  description:
    "Apply to work with CareBridge Health as a clinic or specialist partner. We review selected providers focused on trust, communication, and patient experience.",
  alternates: {
    canonical: "/partner-application",
  },
};

export default function PartnerApplicationPage() {
  return <PartnerApplicationClient />;
}