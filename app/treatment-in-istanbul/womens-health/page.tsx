import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCursor from "../../components/HeroCursor";
import ChatAssistant from "../../components/ChatAssistant";

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
    canonical:
      "https://carebridgehealth.co/treatment-in-istanbul/womens-health",
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

const procedures = [
  "Hysterectomy",
  "Myomectomy",
  "Ovarian cyst treatment",
  "Urinary incontinence surgery",
  "Selected genital aesthetic procedures",
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
        item: "https://carebridgehealth.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Treatment in Istanbul",
        item: "https://carebridgehealth.co/treatment-in-istanbul",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Women’s Health",
        item: "https://carebridgehealth.co/treatment-in-istanbul/womens-health",
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
          className="relative min-h-[70svh] md:min-h-[88svh] overflow-hidden cursor-none"
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

          <div className="relative z-10 flex min-h-[70svh] md:min-h-[88svh] items-center pt-16 md:pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  CareBridge Health
                </p>

                <h1 className="font-display mt-6 text-5xl font-semibold tracking-[-0.03em] text-white md:text-7xl">
                  Women’s health treatments in Istanbul,
                  <span className="block text-white/85">
                    handled with discretion and care
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                  We help UK-based patients explore women’s health treatment in
                  Istanbul, including selected gynaecological procedures,
                  through carefully structured coordination, clear
                  communication, and a more private experience before travelling
                  to Turkey.
                </p>

                <p className="mt-6 text-sm text-white/60">
                  UK-based coordination · Specialist-led pathways · Clear
                  guidance before travel
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#form"
                    className="rounded-full bg-white px-7 py-4 text-sm font-medium text-slate-950 transition hover:scale-[1.03] hover:shadow-lg"
                  >
                    Request private consultation
                  </a>

                  <Link
                    href="/treatment-in-antalya"
                    className="rounded-full border border-white/30 px-7 py-4 text-sm text-white transition hover:bg-white/10"
                  >
                    Compare with Antalya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Overview
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              A more structured and discreet approach to women’s health
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Women’s health procedures often require a higher level of privacy,
              clarity, and trust. Istanbul can be a strong option for patients
              seeking specialist-led care in well-equipped hospital
              environments, combined with a more structured process before
              travel.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              For patients researching women’s health treatment in Turkey from
              the UK, Istanbul is often a stronger fit when the priority is
              clinical depth, specialist access, and a more organised treatment
              journey.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              You can also explore our full{" "}
              <Link
                href="/treatment-in-istanbul"
                className="underline underline-offset-4 hover:text-slate-900"
              >
                medical treatment in Istanbul
              </Link>{" "}
              page for a broader overview of available treatment pathways.
            </p>
          </div>
        </section>

        <section className="bg-[#f8f4ef] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Procedures
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Procedures patients often explore
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {procedures.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
                >
                  <p className="text-base font-medium text-slate-900">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500">
              These examples are provided for general informational purposes.
              Treatment suitability, provider recommendations, and clinical
              decisions must always be made by the relevant medical provider.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Choosing a clinic
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              How to choose the right clinic or specialist
            </h2>

            <div className="mt-8 space-y-4 text-slate-700">
              {clinicChecklist.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>

            <p className="mt-8 text-base leading-8 text-slate-600">
              Patients researching gynaecology in Istanbul often focus on the
              provider first, but the overall process matters too. Clear
              communication, realistic expectations, and a well-structured
              treatment pathway can make a significant difference before
              travelling.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f4ee] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Destination comparison
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Istanbul or Antalya?
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Istanbul is often the stronger choice for more complex or
              specialist-led procedures. Antalya may be more suitable for
              patients prioritising recovery environment and comfort.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/treatment-in-istanbul"
                className="inline-block rounded-full border border-slate-300 px-6 py-3 transition hover:bg-white"
              >
                View Istanbul treatments
              </Link>

              <Link
                href="/treatment-in-antalya"
                className="inline-block rounded-full border border-slate-300 px-6 py-3 transition hover:bg-white"
              >
                Explore Antalya
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Guidance for researchers
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Questions to ask before travelling for treatment
            </h2>

            <div className="mt-8 space-y-4 text-slate-700">
              <p>• What does the consultation process look like before travel?</p>
              <p>• Who will review your case and answer medical questions?</p>
              <p>• What does recovery typically involve after the procedure?</p>
              <p>• What practical support is available before and after arrival?</p>
              <p>• How is follow-up or aftercare explained?</p>
            </div>

            <p className="mt-8 text-base leading-8 text-slate-600">
              This type of preparation can help patients compare options more
              clearly and make better-informed decisions. Our role is to support
              that process with coordination and clear communication, not to
              replace clinical advice.
            </p>
          </div>
        </section>

        <section className="bg-[#fcfaf7] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Frequently asked questions about women’s health treatment in Istanbul
            </h2>

            <div className="mt-10 space-y-8">
              {faqItems.map((item) => (
                <div key={item.q} className="border-b border-slate-200 pb-6">
                  <h3 className="text-lg font-medium text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="form" className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Private consultation
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Request a private consultation
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              Share your situation and we’ll help you understand whether
              Istanbul may be the right fit for your priorities.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#form"
                className="inline-block rounded-full bg-slate-950 px-8 py-4 text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Go to consultation form
              </Link>

              <Link
                href="/treatment-in-istanbul"
                className="inline-block rounded-full border border-slate-300 px-8 py-4 text-slate-900 transition hover:bg-slate-50"
              >
                Back to Istanbul treatments
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14 text-sm leading-7 text-slate-500">
          CareBridge Health is not a medical provider. We act as an independent
          coordination service connecting patients with third-party clinics. All
          treatments, provider selection, suitability decisions, and medical
          outcomes remain the responsibility of the relevant medical provider.
        </section>

        <ChatAssistant />
      </main>
    </>
  );
}