import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.carebridgehealth.co"),

  title: {
    default: "CareBridge Health | Medical Treatment in Turkey from the UK",
    template: "%s | CareBridge Health",
  },

  description:
    "CareBridge Health helps UK-based patients access carefully selected clinics in Istanbul and Antalya for dental, hair transplant, cosmetic, bariatric, eye, women’s health, and specialised treatments.",

  keywords: [
    "medical treatment in Turkey from the UK",
    "Turkey medical tourism UK",
    "medical treatment Istanbul",
    "medical treatment Antalya",
    "dental treatment Turkey",
    "hair transplant Turkey",
    "cosmetic surgery Turkey",
    "bariatric surgery Turkey",
    "eye treatment Turkey",
    "women's health treatment Turkey",
    "Istanbul clinics for UK patients",
    "Antalya clinics for UK patients",
    "CareBridge Health",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CareBridge Health | Medical Treatment in Turkey from the UK",
    description:
      "Private medical treatment in Turkey, carefully coordinated for UK-based patients in Istanbul and Antalya.",
    url: "https://www.carebridgehealth.co",
    siteName: "CareBridge Health",
    images: [
      {
        url: "https://www.carebridgehealth.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CareBridge Health medical treatment in Turkey from the UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CareBridge Health | Medical Treatment in Turkey from the UK",
    description:
      "Private medical treatment in Turkey, carefully coordinated for UK-based patients in Istanbul and Antalya.",
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
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w3ih7va589");`,
          }}
        />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}