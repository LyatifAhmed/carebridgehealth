"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import HeroCursor from "./HeroCursor";
import InsightsPreview from "./InsightsPreview";

type ConsultationForm = {
  fullName: string;
  email: string;
  whatsapp: string;
  treatment: string;
  treatmentCity: string;
  location: string;
  timeframe: string;
  note: string;
};

const initialState: ConsultationForm = {
  fullName: "",
  email: "",
  whatsapp: "",
  treatment: "",
  treatmentCity: "",
  location: "",
  timeframe: "",
  note: "",
};

const trustItems = [
  "UK-based coordination",
  "Carefully selected clinics",
  "Private and discreet process",
  "Structured treatment planning",
];

const destinationCards = [
  {
    title: "Treatment in Istanbul",
    subtitle: "For specialist care and more complex procedures",
    desc: "A strong choice for patients prioritising specialist access, advanced hospitals, and more structured clinical pathways for complex or higher-acuity treatment journeys.",
    bullets: [
      "Advanced hospitals and specialists",
      "Stronger fit for more complex procedures",
      "Well-suited to specialist-led pathways",
    ],
    href: "/treatment-in-istanbul",
    cta: "Explore Istanbul",
    image: "/istanbul-hero.avif",
  },
  {
    title: "Treatment in Antalya",
    subtitle: "For comfort, recovery, and selected value-led care",
    desc: "A strong choice for patients who want a calmer environment, a more recovery-focused setting, and good value in carefully selected treatments and clinics.",
    bullets: [
      "Comfort-led treatment journey",
      "Recovery-friendly destination",
      "Strong value for selected procedures",
    ],
    href: "/treatment-in-antalya",
    cta: "Explore Antalya",
    image: "/trust.avif",
  },
];

const premiumServiceCards = [
  {
    title: "Optional concierge travel support",
    desc: "For patients who want a smoother experience, we can help coordinate selected extras such as hotel stay, airport pickup, local transport, and flight planning support through trusted third-party partners.",
    bullets: [
      "Hotel options available on request",
      "Airport pickup and local transport support",
      "Flight planning support for a smoother journey",
      "Coordinated around your treatment timeline",
    ],
  },
  {
    title: "Secure Stripe payment options",
    desc: "For additional convenience and trust, selected coordination and package payments can be handled securely through Stripe, offering a familiar and professional payment experience before travel.",
    bullets: [
      "Stripe available for selected payments",
      "Trusted card payment experience",
      "Clearer payment handling before travel",
      "Helpful for patients who prefer secure checkout",
    ],
  },
];

const treatmentCards = [
  {
    title: "Dental treatment in Turkey",
    shortTitle: "Dental treatments",
    desc: "Implants, veneers, crowns, and broader restorative treatment planning through carefully selected clinics in Istanbul and Antalya.",
    img: "/dental.avif",
    href: "/dental-treatment-turkey",
  },
  {
    title: "Hair transplant in Turkey",
    shortTitle: "Hair transplant",
    desc: "Structured planning and natural-result focused clinic routes for patients researching hair restoration in Turkey.",
    img: "/hair.avif",
    href: "/hair-transplant-turkey",
  },
  {
    title: "Eye treatment in Turkey",
    shortTitle: "Eye treatments",
    desc: "Vision-focused procedures and specialist coordination for patients seeking a more organised treatment pathway abroad.",
    img: "/eye.avif",
    href: "/eye-treatment-turkey",
  },
  {
    title: "Cosmetic surgery in Turkey",
    shortTitle: "Cosmetic surgery",
    desc: "Selected face, body, and aesthetic procedures approached with more discretion, structure, and pre-treatment clarity.",
    img: "/cosmetic.avif",
    href: "/cosmetic-surgery-turkey",
  },
  {
    title: "Weight loss surgery in Turkey",
    shortTitle: "Weight loss surgery",
    desc: "Selected bariatric procedures with careful planning support and a more considered treatment journey.",
    img: "/bariatric.avif",
    href: "/weight-loss-surgery-turkey",
  },
  {
    title: "Treatment in Turkey",
    shortTitle: "Women’s health",
    desc: "Selected women’s health and gynaecological procedures handled with particular discretion and individual review.",
    img: "/womens-health.avif",
    href: "/treatment-in-turkey",
  },
];

const processSteps = [
  {
    title: "Share your request",
    desc: "Tell us the treatment you are considering, where you are based, and whether you are leaning towards Istanbul, Antalya, or want guidance.",
  },
  {
    title: "We review and guide",
    desc: "We review your enquiry and help guide you towards the most suitable next step based on treatment type, priorities, and destination fit.",
  },
  {
    title: "Receive clear next steps",
    desc: "You receive a structured response by email, with no obligation to proceed and a clearer understanding of your options.",
  },
];

const reassurancePoints = [
  {
    title: "A UK-facing point of contact",
    desc: "Many patients are comfortable exploring treatment abroad, but still want clear communication before travel. Our UK-based coordination model helps make that part feel more familiar and structured.",
  },
  {
    title: "Not all clinics are positioned the same",
    desc: "We do not present treatment as a generic marketplace. Different clinics, cities, and pathways suit different types of patients and procedures.",
  },
  {
    title: "More than a price comparison",
    desc: "Patients often start by comparing cost, but the right route also depends on complexity, recovery needs, timing, discretion, and the kind of support you want around the journey.",
  },
];

export default function HomePageClient() {
  const [form, setForm] = useState<ConsultationForm>(initialState);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ConsultationForm>(
    key: K,
    value: ConsultationForm[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send consultation request.");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while sending your request.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      <section
        id="hero-section"
        className="relative min-h-[100svh] overflow-hidden cursor-none"
      >
        <Image
          src="/hero-medical.avif"
          alt="Private medical treatment in Turkey with UK-based coordination"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

        <HeroCursor containerId="hero-section" />

        <div className="relative z-10 flex min-h-[100svh] items-center pt-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 md:text-xs">
                CareBridge Health
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:mt-6 md:text-7xl">
                Private medical treatment in Turkey,
                <span className="mt-2 block text-white/88">
                  carefully coordinated from the UK
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 md:mt-7 md:text-lg md:leading-8">
                We help UK-based patients access carefully selected clinics in
                <span className="font-medium text-white"> Istanbul and Antalya</span>
                , with a more structured, discreet, and premium experience before
                travel.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10 md:gap-4">
                <a
                  href="#form"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-medium text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Get a private treatment plan review
                </a>

                <a
                  href="#destinations"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Compare Istanbul & Antalya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="grid gap-8 md:grid-cols-3">
          {reassurancePoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
            >
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="destinations"
        className="mx-auto max-w-7xl px-6 py-24 md:py-28"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Destinations
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Choose the treatment experience that fits you best
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We do not position every destination in the same way. Istanbul is
            often stronger for specialist-led and more complex pathways, while
            Antalya can be especially appealing for comfort, recovery, and value
            in selected treatments.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {destinationCards.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="relative h-[240px] w-full overflow-hidden md:h-[260px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 md:text-xs">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-sm leading-7 text-slate-600">{item.desc}</p>

                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                  {item.bullets.map((bullet) => (
                    <p key={bullet}>• {bullet}</p>
                  ))}
                </div>

                <div className="mt-7">
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="bg-[#f7f4ee] py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14">
          <div className="relative order-2 h-[360px] w-full overflow-hidden rounded-[32px] md:order-1 md:h-[460px]">
            <Image
              src="/trust.avif"
              alt="UK-based treatment coordination and trusted clinic matching"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[70%_center] md:object-center"
            />
          </div>

          <div className="order-1 max-w-xl md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Why CareBridge
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              A more reassuring way to plan treatment abroad
            </h2>

            <ul className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <li>✔ UK-based communication before travel</li>
              <li>✔ Carefully selected third-party partner clinics</li>
              <li>✔ Clear destination guidance based on treatment type</li>
              <li>✔ More discreet and structured planning</li>
              <li>✔ Optional support for patients who want a smoother journey</li>
            </ul>

            <p className="mt-8 text-sm leading-7 text-slate-600">
              We are designed for patients who want more confidence before making
              treatment decisions abroad. That means clearer communication, more
              thoughtful clinic positioning, and a less overwhelming starting
              point than contacting multiple providers at random.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Premium support
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Optional support for a more complete experience
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Some patients prefer more than treatment coordination alone. Where
              suitable, we can also help structure selected travel and payment
              arrangements to make the overall experience feel smoother, clearer,
              and more reassuring.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {premiumServiceCards.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,244,239,0.98)_100%)] p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_38%)]" />

                <div className="relative z-10">
                  <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                    Available on request
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                    {item.bullets.map((bullet) => (
                      <p key={bullet}>✦ {bullet}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="#form"
                      className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
                    >
                      Discuss your preferences
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f8f4ef] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Treatments
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Explore treatment routes in Turkey
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              These treatment pages are designed to help patients explore their
              options more clearly before making contact. Each one supports a
              stronger internal linking structure and gives you a more informed
              starting point.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {treatmentCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-[240px] w-full overflow-hidden md:h-[260px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition duration-700 group-hover:scale-105 ${
                      item.shortTitle === "Hair transplant"
                        ? "object-[center_38%]"
                        : item.shortTitle === "Eye treatments"
                        ? "object-[center_35%]"
                        : "object-center"
                    }`}
                  />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {item.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                  <p className="mt-5 text-sm font-medium text-slate-900">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/treatment-in-turkey"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
            >
              Explore treatment in Turkey
            </Link>
            <Link
              href="/treatment-in-istanbul"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
            >
              See treatments in Istanbul
            </Link>
            <Link
              href="/treatment-in-antalya"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
            >
              See treatments in Antalya
            </Link>
          </div>
        </div>
      </section>

      <InsightsPreview />

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[32px] md:h-[560px]">
            <Image
              src="/womens-health-feature.avif"
              alt="Women's health and advanced gynaecological procedures in Turkey"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Featured area
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Women’s health and specialised gynaecological procedures
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              For patients seeking a more private, carefully handled experience,
              we can help coordinate selected women’s health procedures through
              trusted partner clinics in Turkey, with destination choice guided
              by the nature of the treatment and patient preference.
            </p>

            <div className="mt-8 space-y-3 text-slate-700">
              <p>• Hysterectomy</p>
              <p>• Myomectomy</p>
              <p>• Urinary incontinence surgery</p>
              <p>• Selected genital aesthetic procedures</p>
            </div>

            <p className="mt-7 text-sm leading-7 text-slate-500">
              We approach this category with particular care, discretion, and
              clear communication. Suitability and treatment details are always
              reviewed individually by the relevant medical provider.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#form"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Request a private consultation
              </a>
              <Link
                href="/treatment-in-turkey"
                className="inline-flex rounded-full border border-slate-300 px-7 py-4 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Learn more about treatment in Turkey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Process
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
            How it works
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our approach is designed to feel clear, discreet, and easy to follow
            for patients who want a more guided route into treatment abroad.
          </p>
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
      </section>

      <section id="form" className="bg-[#f7f4ee] py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                Private consultation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Get a private treatment plan review
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Share a few details and we’ll review your case more carefully by
                email. We can help you think through destination fit, likely
                next steps, and whether Istanbul or Antalya may be more
                appropriate for your priorities.
              </p>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-center">
                No obligation review
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-center">
                Private and discreet
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-center">
                Reviewed individually
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-center">
                UK-based coordination
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-center">
                Response within 24 hours
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-center">
                Destination guidance included
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/treatment-in-turkey"
                className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Learn about treatment in Turkey
              </Link>
              <Link
                href="/treatment-in-istanbul"
                className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Learn about Istanbul
              </Link>
              <Link
                href="/treatment-in-antalya"
                className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Learn about Antalya
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  required
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  value={form.whatsapp}
                  onChange={(e) => updateField("whatsapp", e.target.value)}
                  placeholder="WhatsApp number"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  required
                />

                <select
                  value={form.treatment}
                  onChange={(e) => updateField("treatment", e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  required
                >
                  <option value="">Select treatment</option>
                  <option>Dental</option>
                  <option>Hair transplant</option>
                  <option>Eye treatment</option>
                  <option>Women’s health / gynaecological procedure</option>
                  <option>Cosmetic surgery</option>
                  <option>Weight loss surgery</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <select
                  value={form.treatmentCity}
                  onChange={(e) => updateField("treatmentCity", e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  required
                >
                  <option value="">Where would you like treatment?</option>
                  <option>Istanbul</option>
                  <option>Antalya</option>
                  <option>Open to guidance / not sure yet</option>
                </select>

                <select
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  required
                >
                  <option value="">Where are you based?</option>
                  <option>United Kingdom</option>
                  <option>Europe</option>
                  <option>Middle East</option>
                  <option>North America</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <select
                  value={form.timeframe}
                  onChange={(e) => updateField("timeframe", e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  required
                >
                  <option value="">When are you considering treatment?</option>
                  <option>As soon as possible</option>
                  <option>Within 1 month</option>
                  <option>Within 1–3 months</option>
                  <option>Just exploring options</option>
                </select>
              </div>

              <textarea
                value={form.note}
                onChange={(e) => updateField("note", e.target.value)}
                placeholder="Optional notes"
                rows={6}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending..." : "Get my private review"}
              </button>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                Your request has been received. We’ll review it carefully and get
                back to you by email.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 text-sm leading-7 text-slate-500">
        CareBridge Health is not a medical provider. We act as an independent
        coordination service connecting patients with third-party clinics and
        selected travel partners. All treatments, suitability decisions, and
        medical outcomes remain the responsibility of the relevant provider.
      </section>

      
    </main>
  );
}