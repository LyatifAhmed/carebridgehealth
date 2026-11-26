import type { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";

export const metadata: Metadata = {
  title:
    "Medical Tourism in Turkey | International Patient Referrals",
  description:
    "Explore treatment in Turkey from the USA, UK, Canada, Europe and beyond. Free introductions to an independent Istanbul medical tourism partner, which arranges appointments, treatment and optional travel.",
  keywords: [
    "private medical treatment in Turkey",
    "medical treatment Turkey from UK",
    "medical tourism Turkey from USA",
    "medical treatment in Turkey for international patients",
    "Turkey medical tourism Canada",
    "treatment in Turkey",
    "private medical treatment Istanbul",
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
      "Medical Tourism in Turkey | International Patient Referrals",
    description:
      "UK-based marketing, introductions and referrals to an independent Istanbul medical tourism partner, which arranges treatment and optional travel.",
    url: "https://www.carebridgehealth.co/",
    siteName: "CareBridge Health",
    images: [{
      url: "https://www.carebridgehealth.co/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "CareBridge Health — independent patient referrals for treatment in Turkey",
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Medical Tourism in Turkey | International Patient Referrals",
    description:
      "Explore treatment in Turkey with more guidance, structure, and confidence before travel.",
    images: ["https://www.carebridgehealth.co/og-image.jpg"],
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
      "UK-based marketing, introduction and referral service introducing international patients to an independent medical tourism partner in Istanbul.",
    areaServed: ["United States", "United Kingdom", "Canada", "Europe", "Worldwide"],
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
