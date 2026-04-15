import type { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";

export const metadata: Metadata = {
  title:
    "Private Medical Treatment in Turkey | UK-Based Coordination | CareBridge Health",
  description:
    "CareBridge Health helps UK-based patients explore private medical treatment in Turkey through carefully selected clinics in Istanbul and Antalya, with clearer communication, structured coordination, and a discreet experience.",
  keywords: [
    "private medical treatment in Turkey",
    "medical treatment Turkey from UK",
    "treatment in Turkey",
    "private medical treatment Istanbul",
    "private medical treatment Antalya",
    "hair transplant Turkey",
    "dental treatment Turkey",
    "eye treatment Turkey",
    "cosmetic surgery Turkey",
    "weight loss surgery Turkey",
    "medical tourism coordination UK",
    "CareBridge Health",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Private Medical Treatment in Turkey | UK-Based Coordination | CareBridge Health",
    description:
      "CareBridge Health helps UK-based patients explore treatment in Turkey with clearer communication, structured coordination, and carefully selected clinic pathways.",
    url: "https://www.carebridgehealth.co/",
    siteName: "CareBridge Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Private Medical Treatment in Turkey | UK-Based Coordination | CareBridge Health",
    description:
      "Explore treatment in Turkey with more guidance, structure, and confidence before travel.",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CareBridge Health",
    url: "https://www.carebridgehealth.co/",
    logo: "https://www.carebridgehealth.co/logo.png",
    description:
      "Independent coordination service helping UK-based patients access selected third-party clinics in Istanbul and Antalya, Turkey.",
    areaServed: ["United Kingdom", "Turkey"],
    availableLanguage: ["English", "Turkish", "Russian"],
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}