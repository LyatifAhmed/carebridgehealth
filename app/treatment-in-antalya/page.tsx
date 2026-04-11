import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    href: "/dental-treatment-turkey",
  },
  {
    title: "Hair transplant",
    desc: "Natural-result focused options with clear planning, recovery guidance, and structured communication before travel.",
    href: "/hair-transplant-turkey",
  },
  {
    title: "Eye treatments",
    desc: "Selected vision-focused procedures for patients seeking a well-organised and more comfort-led journey.",
    href: "/eye-treatment-turkey",
  },
  {
    title: "Cosmetic surgery",
    desc: "Selected face, body, and aesthetic procedures approached with privacy, planning, and careful clinic selection.",
    href: "/cosmetic-surgery-turkey",
  },
  {
    title: "Weight loss surgery",
    desc: "Selected bariatric procedures reviewed individually, with clear coordination before travel.",
    href: "/weight-loss-surgery-turkey",
  },
  {
    title: "Women’s health",
    desc: "Selected gynaecological and functional procedures handled with discretion and a more carefully guided process.",
    href: "/treatment-in-turkey",
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
          className="object-cover object-[center_35%] md:object-[center_25%]"
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

              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
                Medical treatment in Antalya,
                <span className="block text-white/88">
                  carefully coordinated from the UK
                </span>
              </h1>

              <p className="mt-7 text-base leading-8 text-white/82 md:text-lg">
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
                  href="/#form"
                  className="inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5"
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
          <div>
            <h2 className="text-4xl font-semibold">
              A strong option for comfort, recovery, and value
            </h2>

            <div className="mt-8 space-y-4">
              {reasons.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>

            <p className="mt-8 text-base leading-8 text-slate-600">
              Antalya is often especially appealing for patients who care not
              only about the procedure itself, but also about how the overall
              treatment journey feels before, during, and after travel.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Many patients start by comparing cost, but choosing the right
              clinic is just as important. You can read our{" "}
              <Link
                href="/blog/how-to-choose-a-clinic-in-turkey"
                className="underline underline-offset-4 hover:text-slate-900"
              >
                clinic selection guide
              </Link>{" "}
              to understand what really matters.
            </p>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[32px]">
            <Image
              src="/hero-medical.avif"
              alt="Private treatment coordination and recovery-focused planning in Antalya"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ef] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold">
            Treatment categories in Antalya
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {treatmentAreas.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                <p className="mt-5 text-sm font-medium text-slate-900">
                  Learn more
                  <span className="ml-1 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold">How it works</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-500">Step {i + 1}</p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-semibold">
            Considering treatment in Antalya?
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            If you already have a treatment in mind, the next best step is to
            send an enquiry so we can help you understand whether Antalya is the
            right fit.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/#form"
              className="rounded-full bg-slate-950 px-7 py-4 text-white"
            >
              Go to consultation form
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}