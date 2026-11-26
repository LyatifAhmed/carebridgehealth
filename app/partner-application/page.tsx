import type { Metadata } from "next";
import PartnerApplicationClient from "./PartnerApplicationClient";

export const metadata: Metadata = {
  title: "Partner Application",
  description:
    "Medical tourism companies can submit referral partnership enquiries. Clinics, hospitals and doctors may submit credentials for independent Turkish partner evaluation.",
  alternates: {
    canonical: "/partner-application",
  },
};

export default function PartnerApplicationPage() {
  return <PartnerApplicationClient />;
}
