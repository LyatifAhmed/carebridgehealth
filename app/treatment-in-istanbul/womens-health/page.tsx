import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LandingCursorHalo from "../../components/LandingCursorHalo";

export const metadata: Metadata = {
  title:
    "Women’s Health Treatments in Istanbul for International Patients",
  description:
    "Explore women’s health and gynaecological procedures in Istanbul through CareBridge Health. Discreet coordination, clinics within the independent Turkish partner’s network, and UK-based guidance for patients seeking clarity before travelling.",
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
    a: "No. CareBridge Health is an independent referral service. Medical suitability, provider decisions, and treatment outcomes remain the responsibility of the relevant medical provider.",
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

      <main className="carebridge-halo-page bg-[#fcfaf7] text-slate-900">
        <LandingCursorHalo />
        <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-[#fbf8f3] via-white to-[#eff8f5]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-16 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-36 md:gap-14 md:pb-20 md:pt-40 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">Women’s health · Istanbul</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.65rem]">
                Women’s health treatment in Istanbul, with a more personal approach
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
                Considering treatment in Turkey? Tell us what you’re looking for.
                We’ll introduce you to our authorised Turkish medical tourism partner, which coordinates consultations with independent specialists. You decide whether to proceed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#form" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#075f63] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/10 transition hover:bg-[#064c50]">Start a free enquiry</a>
                <Link href="/how-treatment-in-turkey-works" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-teal-500">How it works</Link>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-6 text-slate-500">
                Free to enquire, with no obligation. Medical assessment, treatment and any
                provider charges are handled by the independent healthcare provider.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[30px] border border-slate-200/80 bg-[#f8f5f1] p-3 shadow-[0_25px_65px_rgba(15,23,42,0.08)] md:p-4 lg:ml-auto">
              <Image src="/womens-health-feature.avif" alt="Illustration of women’s health support and care" width={920} height={700} priority sizes="(max-width: 1024px) 90vw, 500px" className="h-auto w-full rounded-[20px] object-contain" />
              <figcaption className="px-2 pb-1 pt-3 text-xs leading-5 text-slate-500">Illustrative image. Treatment and clinical advice are provided by independent healthcare professionals.</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                UK-based referral
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

        <section className="bg-[#f7f4ee] py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14">
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

            <div className="self-center rounded-[30px] border border-[#d9e6e2] bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.04)] md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">An easier first step</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">You can ask questions before deciding.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Our enquiry and introduction service is free. We can help arrange the next conversation, while independent clinicians explain whether a procedure is suitable, including risks, costs and aftercare.</p>
              <div className="mt-7 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold text-slate-900">Your privacy comes first</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">You don’t need to send medical records to CareBridge. Share sensitive medical information directly with your healthcare professional.</p>
                <Link href="/privacy-policy" className="mt-4 inline-block text-sm font-semibold text-teal-800 underline underline-offset-4">Read our Privacy Policy</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-14">
            <figure className="mx-auto w-full max-w-[520px] self-center rounded-[30px] border border-slate-200 bg-[#f8f7f4] p-4 shadow-[0_18px_55px_rgba(15,23,42,0.05)] md:p-6">
              <Image src="/trust.avif" alt="Illustration of questions to consider when choosing a healthcare provider" width={1000} height={800} sizes="(max-width: 768px) 90vw, 520px" className="h-auto w-full rounded-2xl object-contain" />
              <figcaption className="mt-3 text-xs leading-5 text-slate-500">Illustrative image; provider credentials, treatment risks and aftercare should always be checked directly.</figcaption>
            </figure>

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
                Free introduction
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Want a clearer next step before contacting clinics directly?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We share general information about treatment categories,
                treatment pathway, and whether Istanbul is the right route for
                their priorities before moving into direct provider review.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                CareBridge Health is an independent referral service and not
                a clinic or medical provider.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#form"
                  className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Request a free introduction
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
          independent referral service connecting patients with third-party
          clinics and Turkey-licensed medical providers. All treatments,
          clinical decisions, suitability assessments, and medical outcomes
          remain the responsibility of the relevant provider.
        </section>
      </main>
    </>
  );
}
