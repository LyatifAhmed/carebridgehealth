import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCursor from "../../components/HeroCursor";

export const metadata: Metadata = {
  title:
    "Women’s Health Treatments in Istanbul for UK Patients | CareBridge Health",
  description:
    "Explore women’s health and gynaecological procedures in Istanbul through CareBridge Health. Discreet coordination, carefully selected clinics, and UK-based guidance for patients seeking clarity before travelling.",
  keywords: [
    "women's health Turkey",
    "women's health treatment Istanbul",
    "gynaecology Istanbul",
    "gynaecological procedures Turkey",
    "hysterectomy Turkey",
    "myomectomy Turkey",
    "ovarian cyst treatment Turkey",
    "private women's health treatment Istanbul",
    "medical tourism women's health Turkey",
    "women's health treatment Turkey from UK",
    "CareBridge Health",
  ],
  alternates: {
    canonical: "/treatment-in-istanbul/womens-health",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const procedures = [
  { title: "Hysterectomy", href: "/#form" },
  { title: "Myomectomy", href: "/#form" },
  { title: "Ovarian cyst treatment", href: "/#form" },
  { title: "Urinary incontinence surgery", href: "/#form" },
  { title: "Selected genital aesthetic procedures", href: "/#form" },
];

const clinicChecklist = [
  "Does the provider specialise in your specific procedure?",
  "Who performs the consultation and the procedure itself?",
  "Is the treatment plan clearly explained before travel?",
  "Are risks, limitations, and recovery expectations discussed transparently?",
  "Is aftercare structured and clearly communicated?",
];

const faqItems = [
  {
    q: "Is Istanbul a good option for women’s health treatments?",
    a: "Istanbul can be a strong option for specialist-led and more complex gynaecological procedures, with access to advanced hospitals and experienced providers.",
  },
  {
    q: "How do I choose a clinic for gynaecological procedures in Turkey?",
    a: "Look for specialisation in the specific procedure, clear consultation processes, transparent discussion of risks, and structured aftercare.",
  },
  {
    q: "Is Antalya or Istanbul better for women’s health procedures?",
    a: "Istanbul is often the stronger fit for specialist-led treatments, while Antalya may suit patients who prioritise comfort and recovery environment depending on the procedure.",
  },
  {
    q: "Can CareBridge Health provide medical advice?",
    a: "No. CareBridge Health is an independent coordination service. Medical suitability, provider decisions, and treatment outcomes remain the responsibility of the relevant medical provider.",
  },
];

export default function WomensHealthIstanbulPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.carebridgehealth.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Treatment in Istanbul",
        item: "https://www.carebridgehealth.co/treatment-in-istanbul",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Women’s Health",
        item:
          "https://www.carebridgehealth.co/treatment-in-istanbul/womens-health",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-[#fcfaf7] text-slate-900">
        <section
          id="hero-section"
          className="relative min-h-[70svh] overflow-hidden cursor-none md:min-h-[88svh]"
        >
          <Image
            src="/womens-health-feature.avif"
            alt="Women's health treatment in Istanbul"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_32%] md:object-[center_18%]"
          />

          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/72 via-slate-950/32 to-transparent" />

          <HeroCursor containerId="hero-section" />

          <div className="relative z-10 flex min-h-[70svh] items-center pt-16 md:min-h-[88svh] md:pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  CareBridge Health
                </p>

                <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] text-white md:text-7xl">
                  Women’s health treatments in Istanbul,
                  <span className="block text-white/85">
                    handled with discretion and care
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                  We help UK-based patients explore women’s health treatment in
                  Istanbul through structured coordination, clear communication,
                  and a more private experience before travelling.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/#form"
                    className="rounded-full bg-white px-7 py-4 text-sm font-medium text-slate-950"
                  >
                    Request private consultation
                  </a>

                  <Link
                    href="/treatment-in-antalya"
                    className="rounded-full border border-white/30 px-7 py-4 text-sm text-white"
                  >
                    Compare with Antalya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* içerik aynı şekilde devam ediyor */}
      </main>
    </>
  );
}