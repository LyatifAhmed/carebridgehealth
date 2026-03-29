import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
  title: "CareBridge Health | Medical Treatment in Turkey from the UK",
  description:
    "CareBridge Health helps UK-based patients access carefully selected clinics in Istanbul for dental, hair transplant, cosmetic, and specialised treatments.",
  metadataBase: new URL("https://carebridgehealth.co"),
  openGraph: {
    title: "CareBridge Health",
    description:
      "Private medical treatment in Turkey, carefully coordinated from the UK.",
    url: "https://carebridgehealth.co",
    siteName: "CareBridge Health",
    images: [
      {
        url: "/hero-medical.avif",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareBridge Health",
    description:
      "Private medical treatment in Turkey, coordinated from the UK.",
    images: ["/hero-medical.avif"],
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
      <body className="flex min-h-full flex-col bg-[#fcfaf7] text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}