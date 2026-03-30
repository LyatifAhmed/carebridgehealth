import type { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";

export const metadata: Metadata = {
  title:
    "CareBridge Health | Private Medical Treatment in Turkey, Coordinated from the UK",
  description:
    "CareBridge Health helps UK-based patients access carefully selected clinics in Istanbul and Antalya with clear communication, structured coordination, and a discreet experience.",
  keywords: [
    "medical tourism Turkey",
    "medical treatment Turkey from UK",
    "private medical treatment Turkey",
    "private medical treatment Istanbul",
    "private medical treatment Antalya",
    "medical treatment in Istanbul",
    "medical treatment in Antalya",
    "hair transplant Turkey",
    "hair transplant Antalya",
    "dental treatment Turkey",
    "dental treatment Antalya",
    "eye treatment Turkey",
    "cosmetic surgery Turkey",
    "women's health Turkey",
    "UK medical tourism coordination",
    "CareBridge Health",
  ],
  alternates: {
    canonical: "https://carebridgehealth.co",
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CareBridge Health",
    url: "https://carebridgehealth.co",
    logo: "https://carebridgehealth.co/logo.png",
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