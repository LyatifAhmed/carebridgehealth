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
  consentDataProcessing: boolean;
  consentDisclaimer: boolean;
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
  consentDataProcessing: false,
  consentDisclaimer: false,
};

const trustItems = [
  "UK-based coordination",
  "Independent, not a clinic",
  "Doctor review where appropriate",
  "Selected provider routes",
];

const heroStats = [
  {
    label: "Destinations",
    value: "Istanbul & Antalya",
  },
  {
    label: "Response target",
    value: "Within 24 hours",
  },
  {
    label: "Model",
    value: "Private coordination",
  },
];

const treatmentCards = [
  {
    title: "Dental treatment",
    desc: "Implants, veneers, crowns, Hollywood Smile and broader restorative treatment planning.",
    img: "/dental.avif",
    href: "/dental-treatment-turkey",
    tag: "Dental",
  },
  {
    title: "Hair transplant",
    desc: "FUE and natural-result focused hair restoration planning for patients researching Turkey.",
    img: "/hair.avif",
    href: "/hair-transplant-turkey",
    tag: "Hair",
  },
  {
    title: "Cosmetic surgery",
    desc: "Selected aesthetic procedures approached with privacy, structure and pre-treatment clarity.",
    img: "/cosmetic.avif",
    href: "/cosmetic-surgery-turkey",
    tag: "Aesthetic",
  },
  {
    title: "Weight loss surgery",
    desc: "Selected bariatric pathways with careful suitability, planning and destination guidance.",
    img: "/bariatric.avif",
    href: "/weight-loss-surgery-turkey",
    tag: "Bariatric",
  },
  {
    title: "Eye treatment",
    desc: "Vision-focused procedures and specialist coordination for patients seeking treatment abroad.",
    img: "/eye.avif",
    href: "/eye-treatment-turkey",
    tag: "Eye care",
  },
  {
    title: "Women’s health",
    desc: "Selected women’s health and gynaecological procedures handled with discretion.",
    img: "/womens-health.avif",
    href: "/treatment-in-istanbul/womens-health",
    tag: "Specialist",
  },
];

const guideLinks = [
  {
    label: "Dental implants",
    href: "/dental-implants-turkey",
    type: "Dental",
  },
  {
    label: "Dental implant cost",
    href: "/dental-implants-cost-turkey",
    type: "Cost guide",
  },
  {
    label: "Dental veneers",
    href: "/veneers-turkey",
    type: "Dental",
  },
  {
    label: "Veneers cost",
    href: "/dental-veneers-cost-turkey",
    type: "Cost guide",
  },
  {
    label: "Hollywood Smile",
    href: "/hollywood-smile-turkey",
    type: "Dental",
  },
  {
    label: "Hollywood Smile cost",
    href: "/hollywood-smile-cost-turkey",
    type: "Cost guide",
  },
  {
    label: "FUE hair transplant",
    href: "/fue-hair-transplant-turkey",
    type: "Hair",
  },
  {
    label: "Hair transplant cost",
    href: "/hair-transplant-cost-turkey",
    type: "Cost guide",
  },
  {
    label: "Gastric sleeve cost",
    href: "/gastric-sleeve-cost-turkey",
    type: "Weight loss",
  },
  {
    label: "How treatment works",
    href: "/how-treatment-in-turkey-works",
    type: "Patient guide",
  },
];

const reassurancePoints = [
  {
    title: "A UK-facing point of contact",
    desc: "Clearer communication before travel, so you are not left comparing overseas providers alone.",
  },
  {
    title: "Selected provider pathways",
    desc: "We are not a generic marketplace. We help route enquiries through relevant third-party clinic or partner pathways.",
  },
  {
    title: "Medical decisions stay clinical",
    desc: "CareBridge coordinates. Suitability, consent, treatment plans and outcomes remain with qualified providers.",
  },
];

const destinationCards = [
  {
    title: "Istanbul",
    subtitle: "Specialist access and complex care",
    desc: "Often stronger for specialist-led pathways, advanced hospitals and more complex treatment journeys.",
    href: "/treatment-in-istanbul",
    image: "/istanbul-hero.avif",
  },
  {
    title: "Antalya",
    subtitle: "Comfort, recovery and selected value-led care",
    desc: "A calmer destination for selected procedures where comfort, recovery and value matter.",
    href: "/treatment-in-antalya",
    image: "/trust.avif",
  },
];

const processSteps = [
  {
    title: "Share your request",
    desc: "Tell us the treatment, your location, preferred destination and rough timeframe.",
  },
  {
    title: "We review and guide",
    desc: "We help clarify destination fit, key questions and the most suitable next step.",
  },
  {
    title: "Receive next steps",
    desc: "You receive a structured response by email with no obligation to proceed.",
  },
];

const premiumServiceCards = [
  {
    title: "Optional concierge travel support",
    desc: "For patients who want a smoother experience, we can help coordinate selected extras through trusted third-party partners.",
    bullets: [
      "Hotel options available on request",
      "Airport pickup and local transport support",
      "Flight planning support",
      "Coordinated around your treatment timeline",
    ],
  },
  {
    title: "Secure Stripe payment options",
    desc: "Selected coordination and package payments can be handled securely through Stripe where appropriate.",
    bullets: [
      "Stripe available for selected payments",
      "Trusted card payment experience",
      "Clearer payment handling before travel",
      "Helpful for patients who prefer secure checkout",
    ],
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
    <main className="bg-[#fbf7ef] text-slate-950">
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

        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

        <HeroCursor containerId="hero-section" />

        <div className="relative z-10 flex min-h-[100svh] items-center pt-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/65">
                CareBridge Health
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">
                Private treatment in Turkey,
                <span className="block text-white/85">
                  coordinated from the UK.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                A calmer way for UK-based patients to explore carefully selected
                treatment routes in Istanbul and Antalya before travelling.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
                CareBridge Health is not a clinic or medical provider. We are an
                independent coordination and information service helping patients
                move from online research to clearer next steps.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#form"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Get a private review
                </a>

                <Link
                  href="/how-treatment-in-turkey-works"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  How treatment works
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  Explore treatments
                </a>
              </div>
            </div>

            <div className="hidden cursor-auto rounded-[36px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl lg:block">
              <div className="cursor-auto rounded-[30px] bg-white p-6 text-slate-950 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Private pathway review
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Start with clarity before you travel.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Share your treatment interest and receive a structured first response
                  before committing to anything.
                </p>

                <div className="mt-6 space-y-3">
                  {heroStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
                    >
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="mt-1 text-lg font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#form"
                  className="mt-6 inline-flex w-full cursor-pointer justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Start enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-4 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Treatments
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Start with the treatment route that fits your case
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Focused pages for patients comparing Turkey with private treatment
              options in the UK.
            </p>
          </div>

          <Link
            href="/treatment-in-turkey"
            className="inline-flex w-fit rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            View all treatment routes
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatmentCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover transition duration-700 group-hover:scale-105 ${
                    item.tag === "Hair"
                      ? "object-[center_38%]"
                      : item.tag === "Eye care"
                        ? "object-[center_35%]"
                        : "object-center"
                  }`}
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
                  {item.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
                <p className="mt-5 text-sm font-semibold text-slate-950">
                  Explore route →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.07)]">
          <div className="grid lg:grid-cols-[0.9fr_1.4fr]">
            <div className="relative overflow-hidden bg-slate-950 p-8 text-white md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_38%)]" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                  Popular guides
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  More specific treatment and cost guides
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70">
                  Explore focused pages for dental implants, veneers, Hollywood
                  Smile, FUE hair transplant, gastric sleeve cost and treatment
                  planning before making an enquiry.
                </p>

                <Link
                  href="/how-treatment-in-turkey-works"
                  className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  How treatment in Turkey works
                </Link>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,244,239,0.98)_100%)] p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {guideLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_14px_34px_rgba(15,23,42,0.07)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {item.type}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-slate-900">
                          {item.label}
                        </p>
                      </div>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {reassurancePoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-slate-200 bg-[#fbf7ef] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
            >
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Destinations
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Istanbul or Antalya — choose the right journey
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We do not position every destination in the same way. Istanbul is
              often stronger for specialist-led and more complex pathways, while
              Antalya can suit comfort-led recovery and selected value-focused
              treatments.
            </p>
          </div>

          <a
            href="#form"
            className="inline-flex w-fit rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Ask for guidance
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {destinationCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1"
            >
              <div className="relative h-[280px] overflow-hidden md:h-[340px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
                <p className="mt-6 text-sm font-semibold text-slate-950">
                  Explore {item.title} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <InsightsPreview />
            <section className="bg-white py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14">
          <div className="relative h-[420px] overflow-hidden rounded-[36px] md:h-[560px]">
            <Image
              src="/womens-health-feature.avif"
              alt="Women's health and advanced gynaecological procedures in Turkey"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Featured area
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Women’s health and specialised gynaecological procedures
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              For patients seeking a more private, carefully handled experience,
              we can help coordinate selected women’s health procedures through
              relevant provider routes in Turkey.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {[
                "Hysterectomy",
                "Myomectomy",
                "Urinary incontinence surgery",
                "Selected genital aesthetic procedures",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-200 bg-[#fbf7ef] px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm leading-7 text-slate-500">
              We approach this category with particular care, discretion, and
              clear communication. Suitability and treatment details are always
              reviewed individually by the relevant medical provider.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#form"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Request private review
              </a>

              <Link
                href="/treatment-in-istanbul/womens-health"
                className="inline-flex rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Explore women’s health
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f0e7] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Premium support
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Optional support for a smoother overall experience
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Some patients want more than treatment coordination alone. Where
                suitable, we can also help structure selected travel and payment
                arrangements through trusted third-party partners.
              </p>
            </div>

            <div className="grid gap-6">
              {premiumServiceCards.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Available on request
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-2xl bg-slate-50 px-4 py-3"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Process
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            How it works
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Designed to feel clear, discreet and easy to follow before you make
            any major decision.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_14px_44px_rgba(15,23,42,0.05)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="form" className="bg-slate-950 py-24 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Private consultation
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Get a private treatment plan review
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Share a few details and we’ll review your request more carefully
              by email. We can help you think through destination fit, next
              steps, and whether Istanbul or Antalya may be more appropriate for
              your priorities.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/70">
              {[
                "No obligation review",
                "Private and discreet",
                "UK-based coordination",
                "Destination guidance included",
                "Response target within 24 hours",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <textarea
                value={form.note}
                onChange={(e) => updateField("note", e.target.value)}
                placeholder="Optional notes"
                rows={5}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <div className="space-y-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    checked={form.consentDataProcessing}
                    onChange={(e) =>
                      updateField("consentDataProcessing", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                    required
                  />
                  <span>
                    I explicitly consent to CareBridge Health using my
                    information, including health-related information I choose to
                    provide, to review my enquiry and, where appropriate, share
                    relevant details with a suitable third-party clinic partner
                    or Turkey-licensed medical provider for initial review and
                    coordination.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    checked={form.consentDisclaimer}
                    onChange={(e) =>
                      updateField("consentDisclaimer", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                    required
                  />
                  <span>
                    I understand that CareBridge Health is an independent
                    coordination service and not a clinic or medical provider,
                    and does not provide medical advice, diagnosis, or treatment.
                  </span>
                </label>
              </div>

              <p className="text-xs leading-6 text-slate-500">
                Please only include information you are comfortable sharing at
                this stage. By submitting this form, you confirm that you have
                read our{" "}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-slate-900"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-2 hover:text-slate-900"
                >
                  Terms
                </Link>.
              </p>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending..." : "Get my private review"}
              </button>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                Your request has been received. We’ll review it carefully and
                get back to you by email.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 text-sm leading-7 text-slate-500">
        CareBridge Health is not a clinic or medical provider. We act as an
        independent coordination service connecting patients with third-party
        clinics and Turkey-licensed medical providers. All treatments, clinical
        decisions, suitability assessments, and medical outcomes remain the
        responsibility of the relevant provider.
      </section>
    </main>
  );
}
