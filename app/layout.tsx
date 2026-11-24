import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ChatAssistant from "./components/ChatAssistant";
import AnalyticsConsent from "./components/AnalyticsConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carebridgehealth.co"),

  title: {
    default: "CareBridge Health | Medical Tourism in Turkey for International Patients",
    template: "%s | CareBridge Health",
  },

  description:
    "CareBridge Health provides UK-based coordination for international patients exploring dental treatment, hair transplants, cosmetic surgery and other independent treatment providers in Turkey.",

  keywords: [
    "medical treatment in Turkey from the UK",
    "Turkey medical tourism UK",
    "medical treatment Istanbul",
    "dental treatment Turkey",
    "hair transplant Turkey",
    "cosmetic surgery Turkey",
    "bariatric surgery Turkey",
    "eye treatment Turkey",
    "women's health treatment Turkey",
    "medical tourism Turkey from USA",
    "medical treatment Turkey for international patients",
    "Istanbul clinics for international patients",
    "CareBridge Health",
  ],

  openGraph: {
    title: "CareBridge Health | Medical Tourism in Turkey for International Patients",
    description:
      "International patient coordination from the UK for independent treatment providers in Istanbul, Turkey.",
    url: "https://www.carebridgehealth.co",
    siteName: "CareBridge Health",
    images: [
      {
        url: "https://www.carebridgehealth.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CareBridge Health international patient coordination for treatment in Turkey",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CareBridge Health | Medical Tourism in Turkey for International Patients",
    description:
      "International patient coordination from the UK for independent treatment providers in Istanbul, Turkey.",
    images: ["https://www.carebridgehealth.co/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body className="flex min-h-full flex-col bg-[#fcfaf7] text-slate-900">
        <AnalyticsConsent />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatAssistant />
      </body>
    </html>
  );
}
