import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ChatAssistant from "../components/ChatAssistant";
import HeroCursor from "../components/HeroCursor";

export const metadata: Metadata = {
  title: "Medical Treatment in Antalya for UK Patients | CareBridge Health",
  description:
    "Explore private medical treatment in Antalya through CareBridge Health. Carefully selected clinics, UK-based coordination, and a more comfort-led treatment journey for selected procedures.",
};

const treatmentAreas = [
  {
    title: "Dental treatments",
    desc: "Implants, veneers, smile design, and selected restorative treatments through carefully selected clinics.",
  },
  {
    title: "Hair transplant",
    desc: "Natural-result focused options with clear planning, recovery guidance, and structured communication before travel.",
  },
  {
    title: "Eye treatments",
    desc: "Selected vision-focused procedures for patients seeking a well-organised and more comfort-led journey.",
  },
  {
    title: "Cosmetic surgery",
    desc: "Selected face, body, and aesthetic procedures approached with privacy, planning, and careful clinic selection.",
  },
  {
    title: "Weight loss surgery",
    desc: "Selected bariatric procedures reviewed individually, with clear coordination before travel.",
  },
  {
    title: "Women’s health",
    desc: "Selected gynaecological and functional procedures handled with discretion and a more carefully guided process.",
  },
];

const reasons = [
  "A calmer, more recovery-friendly destination",
  "Strong value for selected treatment categories",
  "A more comfort-led international patient experience",
  "Particularly appealing for selected aesthetic and dental journeys",
  "Clear UK-based coordination before travel",
];

const processSteps = [
  {
    title: "Share your enquiry",
    desc: "Tell us what treatment you are considering, your timing, and whether Antalya is your preferred destination.",
  },
  {
    title: "We review suitability",
    desc: "We help assess whether Antalya may be a good fit based on your priorities, treatment type, and overall preferences.",
  },
  {
    title: "Receive next steps",
    desc: "If appropriate, we guide you through selected provider pathways and practical preparation before travel.",
  },
];

export default function TreatmentInAntalyaPage() {
  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      <section
        id="hero-section"
        className="relative min-h-[88svh] overflow-hidden cursor-none"
      >
        <Image
          src="/trust.avif"
          alt="Medical treatment in Antalya"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/28 to-transparent" />
        <HeroCursor containerId="hero-section" />

        <div className="relative z-10 flex min-h-[88svh] items-center pt-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/72">
                CareBridge Health
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
                Medical treatment in Antalya,
                <span className="block text-white/88">
                  carefully coordinated from the UK
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
                Antalya can be a strong choice for patients seeking a more
                comfort-led treatment journey, a recovery-friendly destination,
                and strong value in selected procedures in Turkey.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Comfort-led experience
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Recovery-friendly destination
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  UK-based coordination
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#form"
                  className="inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Request private consultation
                </a>

                <Link
                  href="/treatment-in-istanbul"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Compare with Istanbul
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Why Antalya
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              A strong option for comfort, recovery, and value in selected treatment journeys
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We do not position Antalya as identical to Istanbul. Antalya is
              often especially attractive for patients who value a calmer
              environment, a more lifestyle-oriented recovery setting, and strong
              value in selected treatment categories.
            </p>

            <div className="mt-8 space-y-4 text-base leading-8 text-slate-700">
              {reasons.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="relative h-[520px] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/hero-medical.avif"
              alt="Trusted medical coordination in Antalya"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ef] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Treatment areas
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Treatment categories we can help coordinate in Antalya
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Every case is reviewed individually. We focus on clear guidance,
              careful planning, and a more reassuring patient journey before
              travel.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {treatmentAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <div className="relative h-[560px] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/cosmetic-feature.avif"
              alt="Comfort-led private treatment planning in Antalya"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Our approach
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Designed for patients who want a calmer and better-guided experience
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              International treatment is not only about the procedure itself. For
              many patients, the overall journey matters just as much. Our role is
              to help create a more organised, discreet, and better-supported path
              for those considering Antalya.
            </p>

            <div className="mt-8 space-y-4 text-base leading-8 text-slate-700">
              <p>• Clear communication before travel</p>
              <p>• Structured guidance around selected providers</p>
              <p>• A more discreet and professionally handled experience</p>
              <p>• Destination support that begins in the UK</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#form"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Start your enquiry
              </a>

              <Link
                href="/"
                className="inline-flex rounded-full border border-slate-300 px-7 py-4 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Process
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              How it works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
              >
                <div className="text-sm text-slate-500">Step {index + 1}</div>
                <div className="mt-3 text-lg font-medium tracking-[-0.02em]">
                  {step.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[32px] border border-slate-200/80 bg-[#fcfaf7] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                Private consultation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Considering treatment in Antalya?
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Tell us what you are considering and we will review your enquiry
                carefully. If Antalya is not the strongest fit for your goals, we
                can also help guide you towards Istanbul where relevant.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#form"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Go to consultation form
              </Link>

              <Link
                href="/treatment-in-istanbul"
                className="inline-flex rounded-full border border-slate-300 px-7 py-4 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Explore Istanbul instead
              </Link>
            </div>
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
  );
}