import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CareBridge Health | UK-Based Treatment Coordination",
  description:
    "Learn about CareBridge Health, a UK-based coordination service helping patients explore treatment in Turkey with clearer communication, selected provider routes, and careful planning.",
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  "UK-based coordination",
  "Independent service",
  "Not a clinic",
  "Patient-first approach",
];

const operatingModel = [
  {
    title: "CareBridge Health",
    text: "UK-based coordination, enquiry handling, patient guidance, communication support, and structured next steps.",
  },
  {
    title: "Provider routes in Turkey",
    text: "Independent clinics, doctors, and healthcare partners review suitability and provide medical assessment where appropriate.",
  },
  {
    title: "Patient decision",
    text: "Patients remain in control. Treatment only proceeds if the patient is comfortable after provider review and informed discussion.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#fbf7ef] text-slate-950 dark:bg-[#0d1920] dark:text-[#edf5f3]">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            About CareBridge Health
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1] tracking-[-0.05em] md:text-7xl">
            Helping patients approach treatment abroad with more clarity.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            CareBridge Health is a UK-based treatment coordination service
            designed for patients who want a calmer, more structured starting
            point before exploring treatment options in Turkey.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {principles.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <article className="flow-root">
          <figure className="relative mb-9 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] lg:float-left lg:mb-6 lg:mr-12 lg:w-[39%]">
            <div className="relative h-[430px] w-full sm:h-[500px] lg:h-[515px]">
            <Image
              src="/Lyatif-Ahmed-Redzheb-Founder-of-BetaOffice.png"
              alt="Latif Ahmed, founder of CareBridge Health"
              fill
              sizes="(max-width: 1023px) 90vw, 39vw"
              className="object-cover object-[center_25%]"
              priority
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-8">
              <p className="text-lg font-semibold text-white">Latif Ahmed</p>
              <p className="mt-1 text-sm text-white/80">
                Founder, CareBridge Health
              </p>
            </div>
            </div>
          </figure>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Founder note
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Built for patients who want clarity before commitment.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
            <p>
              My experience in healthcare began long before I founded CareBridge Health.
              I spent years working in a family-run medical clinic, welcoming patients
              and their relatives, helping coordinate appointments and seeing first-hand
              how important clear communication is for both patients and clinic teams.
            </p>
            <p>
              Patients needed reassurance and straightforward answers while busy clinics
              worked to keep each part of the patient journey organised. I learned
              what can go wrong when communication breaks down, and the difference
              careful coordination makes.
            </p>
            <p>
              After living and working in the UK, I recognised similar challenges for
              people considering treatment abroad. Comparing unfamiliar providers,
              understanding the process and knowing whom to speak to can be overwhelming.
            </p>
            <p>
              I created CareBridge Health to bridge that gap between patients and
              independent healthcare professionals in Turkey. My established personal
              relationships in the healthcare sector help me coordinate introductions,
              while patients are encouraged to verify the provider's credentials
              and make their own informed decisions.
            </p>
            <p>
              I also bring my software development experience to this work. I continue
              developing CareBridge to make enquiries easier, help clinics communicate
              more clearly and create a more organised experience from the first
              question to the conversation with a medical professional.
            </p>
            <p>
              I am not a doctor, and CareBridge is not a clinic. We coordinate
              enquiries and introductions, while independent healthcare professionals
              are responsible for clinical assessments, treatment decisions and aftercare.
              CareBridge may receive a referral commission if a patient proceeds
              with treatment through a provider we introduce.
            </p>
          </div>

          <div className="clear-both mt-9 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/lyatif-ahmed-redzheb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-medium text-slate-800 transition hover:border-slate-500 dark:border-[#39545a] dark:bg-[#1b2e35] dark:text-[#edf5f3]"
            >
              Connect on LinkedIn
            </a>

            <Link
              href="/#form"
              className="inline-flex rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-[#075f63] dark:text-white dark:hover:bg-[#087b7b]"
            >
              Request private review
            </Link>
          </div>
          </div>
        </article>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              How we operate
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              We coordinate the pathway. Providers deliver the treatment.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              This distinction matters. CareBridge Health is not a hospital,
              clinic, or medical practice. Treatment decisions and clinical
              responsibility stay with qualified providers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {operatingModel.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-slate-200 bg-[#fbf7ef] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] dark:border-[#354d55] dark:bg-[#1b2e35]"
              >
                <div className="text-sm font-semibold text-slate-400">
                  0{index + 1}
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-2">
        <div className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Company information
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
            BetaOffice Ltd
          </h2>

          <div className="mt-7 space-y-4 text-sm leading-7 text-slate-700">
            <p>
              66 Paul Street
              <br />
              London, England, EC2A 4NA, United Kingdom
            </p>

            <p>Company No: 16274319</p>
            <p>ICO Registration: ZB883806</p>
          </div>

          <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            CareBridge Health is operated by BetaOffice Ltd as an
            independent treatment coordination service.
          </div>
        </div>

        <div className="rounded-[34px] bg-slate-950 p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Important distinction
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
            We do not provide medical advice or treatment.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/65">
            CareBridge Health helps with coordination, communication, and
            structured next steps. Any diagnosis, medical suitability, treatment
            recommendation, consent, procedure, or outcome remains the
            responsibility of the relevant independent healthcare provider.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-slate-200 bg-[#f3efe8] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] dark:border-[#354d55] dark:bg-[#1b2e35] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Private consultation
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
            Start with a private, no-obligation enquiry.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Share a few details and we’ll review your request with care,
            discretion, and clearer next steps.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#form"
              className="inline-flex rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-[#075f63] dark:text-white dark:hover:bg-[#087b7b]"
            >
              Start consultation
            </Link>

            <Link
              href="/how-treatment-in-turkey-works"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-medium text-slate-800 transition hover:border-slate-500 dark:border-[#39545a] dark:bg-[#1b2e35] dark:text-[#edf5f3]"
            >
              How treatment works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}