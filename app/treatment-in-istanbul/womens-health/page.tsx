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

const reassuranceCards = [
  {
    title: "Discreet coordination",
    desc: "Some patients want a more private route into treatment planning. We help create a calmer first step, with more thoughtful communication before direct provider review.",
  },
  {
    title: "Specialist-led city fit",
    desc: "For women’s health and more specialist gynaecological procedures, Istanbul is often the better fit due to broader specialist access and more advanced hospital pathways.",
  },
  {
    title: "UK-based clarity first",
    desc: "Before speaking directly with a provider, many patients simply want to understand whether the destination, treatment route, and next step make sense for them.",
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
                    className="rounded-full bg-white px-7 py-4 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:opacity-95"
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

        <section className="border-y border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                UK-based coordination
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                Private and discreet
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                Istanbul specialist pathways
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                Direct review where appropriate
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Overview
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              A more considered route into women’s health treatment abroad
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Some women’s health and gynaecological procedures require a more
              thoughtful pathway than a typical cosmetic or general treatment
              search. Patients often want greater privacy, stronger specialist
              fit, and clearer communication before speaking directly with a
              provider.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              That is where Istanbul can be especially relevant. For
              specialist-led and more clinically sensitive procedures, it often
              provides broader access to advanced hospitals and more established
              treatment environments.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reassuranceCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f7f4ee] py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-14">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Procedures
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Common areas patients may explore
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Treatment suitability always depends on individual clinical
                review, but patients researching women’s health pathways in
                Istanbul may commonly explore the following:
              </p>

              <div className="mt-8 grid gap-4">
                {procedures.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              <p className="mt-8 text-sm leading-7 text-slate-500">
                We approach this category with particular care, discretion, and
                respect. Medical suitability, procedure details, and provider
                decisions remain the responsibility of the relevant medical
                provider.
              </p>
            </div>

            <div className="relative h-[360px] overflow-hidden rounded-[32px] md:h-auto md:min-h-[520px]">
              <Image
                src="/womens-health-feature.avif"
                alt="Discreet women’s health coordination in Istanbul"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-14">
            <div className="relative h-[360px] overflow-hidden rounded-[32px] md:h-auto md:min-h-[520px]">
              <Image
                src="/trust.avif"
                alt="How to assess a clinic for women’s health treatment in Istanbul"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Choosing carefully
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Questions worth asking before moving forward
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Women’s health procedures deserve more than a generic sales-led
                conversation. Before proceeding, it is worth understanding how
                the provider approaches your specific procedure, communication,
                and aftercare.
              </p>

              <div className="mt-8 space-y-4">
                {clinicChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Istanbul vs Antalya
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Why Istanbul is often the stronger fit here
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              For specialist-led women’s health treatments, Istanbul is often
              the stronger route because of its broader clinical infrastructure
              and access to more advanced provider environments. Antalya can be
              attractive for recovery-focused or comfort-led treatment journeys,
              but for more specialist pathways, Istanbul is often the first city
              worth considering.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-[30px] border border-slate-200/80 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Often stronger for
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Istanbul
              </h3>
              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                <p>• Specialist-led and more complex pathways</p>
                <p>• Advanced hospital environments</p>
                <p>• Broader provider choice for sensitive procedures</p>
                <p>• Patients prioritising specialist depth</p>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200/80 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                May suit patients prioritising
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Antalya
              </h3>
              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                <p>• A calmer recovery setting</p>
                <p>• Comfort and environment</p>
                <p>• Selected value-led procedures</p>
                <p>• Patients exploring simpler treatment pathways</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f8f4ef] py-24 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                FAQ
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-5">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
                >
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,244,239,0.98)_100%)] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Private consultation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Want a clearer next step before contacting clinics directly?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We help patients think more clearly about destination fit,
                treatment pathway, and whether Istanbul is the right route for
                their priorities before moving into direct provider review.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                CareBridge Health is an independent coordination service and not
                a clinic or medical provider.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#form"
                  className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Request private consultation
                </a>

                <Link
                  href="/treatment-in-istanbul"
                  className="inline-flex rounded-full border border-slate-300 px-7 py-4 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
                >
                  Explore Istanbul treatments
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14 text-sm leading-7 text-slate-500">
          CareBridge Health is not a clinic or medical provider. We act as an
          independent coordination service connecting patients with third-party
          clinics and Turkey-licensed medical providers. All treatments,
          clinical decisions, suitability assessments, and medical outcomes
          remain the responsibility of the relevant provider.
        </section>
      </main>
    </>
  );
}