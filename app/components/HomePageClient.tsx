"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { recordCareBridgeEvent } from "./AnalyticsConsent";
import InsightsPreview from "./InsightsPreview";
import FounderSection from "./FounderSection";
import MedicalPartnerSection from "./MedicalPartnerSection";
import FaqSection from "./FaqSection";
import PatientJourneySection from "./PatientJourneySection";
import { GentleParallax, ScrollReveal } from "./ScrollMotion";
import LandingCursorHalo from "./LandingCursorHalo";

// İkonları import ediyoruz
import { MapPin, Clock, ShieldCheck, ArrowRight, Sparkles, LockKeyhole } from "lucide-react";

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
  "UK-based, international support",
  "Independent, not a clinic",
  "Doctor review where appropriate",
  "Patient privacy first",
];

// heroStats array'imize ilgili Lucide ikonlarını eşleştiriyoruz
const heroStats = [
  { label: "Destinations", value: "Istanbul & Antalya", icon: MapPin },
  { label: "Response target", value: "Within 24 hours", icon: Clock },
  { label: "Model", value: "Private coordination", icon: ShieldCheck },
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
  { label: "Dental implants", href: "/dental-implants-turkey", type: "Dental" },
  { label: "Dental implant cost", href: "/dental-implants-cost-turkey", type: "Cost guide" },
  { label: "Dental veneers", href: "/veneers-turkey", type: "Dental" },
  { label: "Veneers cost", href: "/dental-veneers-cost-turkey", type: "Cost guide" },
  { label: "Hollywood Smile", href: "/hollywood-smile-turkey", type: "Dental" },
  { label: "Hollywood Smile cost", href: "/hollywood-smile-cost-turkey", type: "Cost guide" },
  { label: "FUE hair transplant", href: "/fue-hair-transplant-turkey", type: "Hair" },
  { label: "Hair transplant cost", href: "/hair-transplant-cost-turkey", type: "Cost guide" },
  { label: "Gastric sleeve cost", href: "/gastric-sleeve-cost-turkey", type: "Weight loss" },
  { label: "How treatment works", href: "/how-treatment-in-turkey-works", type: "Patient guide" },
];

const procedureLinks = [
  {
    category: "Cosmetic surgery",
    links: [
      { label: "Rhinoplasty", href: "/rhinoplasty-turkey" },
      { label: "Revision rhinoplasty", href: "/revision-rhinoplasty-turkey" },
      { label: "Liposuction", href: "/liposuction-turkey" },
      { label: "Tummy tuck", href: "/tummy-tuck-turkey" },
      { label: "Breast augmentation", href: "/breast-augmentation-turkey" },
      { label: "Breast lift", href: "/breast-lift-turkey" },
      { label: "Facelift", href: "/facelift-turkey" },
    ],
  },
  {
    category: "Women’s health",
    links: [
      { label: "Hysterectomy", href: "/hysterectomy-turkey" },
      { label: "Myomectomy", href: "/myomectomy-turkey" },
      {
        label: "Urinary incontinence surgery",
        href: "/urinary-incontinence-surgery-turkey",
      },
      { label: "Labiaplasty", href: "/labiaplasty-turkey" },
      {
        label: "Genital aesthetic surgery",
        href: "/genital-aesthetic-surgery-turkey",
      },
    ],
  },
  {
    category: "Eye treatment",
    links: [
      { label: "Laser eye surgery", href: "/laser-eye-surgery-turkey" },
      { label: "LASIK eye surgery", href: "/lasik-eye-surgery-turkey" },
      { label: "Cataract surgery", href: "/cataract-surgery-turkey" },
      {
        label: "Lens replacement surgery",
        href: "/lens-replacement-surgery-turkey",
      },
    ],
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
    title: "Clear payment arrangements",
    desc: "Treatment costs and payment arrangements are discussed directly with the relevant medical tourism provider before any booking.",
    bullets: [
      "Payment details explained by the provider",
      "Treatment costs confirmed before booking",
      "Payments handled by the relevant provider",
      "CareBridge does not collect treatment payments",
    ],
  },
];

export default function HomePageClient() {
  const [form, setForm] = useState<ConsultationForm>(initialState);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formObserved = useRef(false);
  const formStarted = useRef(false);

  useEffect(() => {
    const node = document.getElementById("form");
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !formObserved.current) {
        formObserved.current = true;
        recordCareBridgeEvent("consultation_form_viewed");
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send consultation request.");
      }

      setSubmitted(true);
      recordCareBridgeEvent("consultation_form_submitted");
      setForm(initialState);
      formStarted.current = false;
    } catch (error) {
      console.error(error);
      alert("Something went wrong while sending your request.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="carebridge-halo-page bg-[#fbf7ef] text-slate-950">
      <LandingCursorHalo />
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-[#fbf8f3] via-white to-[#ecf8f5]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-12 h-[420px] w-[420px] rounded-full bg-teal-100/45 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 md:pb-20 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-800">
                Founder-led patient coordination
                <span className="h-px w-9 bg-teal-600/70" />
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.1rem]">
                Treatment in Turkey, made easier to explore
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
                Simply tell us which treatment you’re interested in. We’ll get back to you with the next steps and help arrange a conversation with an independent healthcare professional, where appropriate. It’s free to enquire, and the decision to proceed is always yours.
              </p>

              <div className="mt-8 border-l-[3px] border-teal-600 pl-5">
                <p className="text-sm leading-7 text-slate-700 md:text-base">
                  I&apos;m Latif Ahmed. After years of working with patients and families at a medical clinic, I founded CareBridge to address the coordination challenges I saw first-hand. Today, I combine that experience with software development to make the journey clearer for patients and clinics.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold text-slate-950">Latif Ahmed <span className="font-normal text-slate-500">· Founder</span></p>
                  <a href="https://www.linkedin.com/in/lyatif-ahmed-redzheb/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">
                    Verify my background on LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#form" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#075f63] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/10 transition hover:bg-[#064c50]">
                  Tell us what treatment you need
                </a>
                <a href="#process" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:bg-white">
                  How it works
                </a>
              </div>
              <p className="mt-5 max-w-lg text-xs leading-5 text-slate-500">
                CareBridge is an independent referral and coordination service, not a clinic or medical provider. Medical advice and treatment are provided by independent healthcare professionals.
              </p>
            </div>

            <GentleParallax className="mx-auto w-full max-w-[440px] lg:ml-auto">
              <figure className="relative overflow-hidden rounded-[32px] border border-white/75 bg-slate-100 shadow-[0_30px_70px_rgba(15,23,42,0.13)]">
                <div className="relative aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5]">
                  <Image
                    src="/Lyatif-Ahmed-Redzheb-Founder-of-BetaOffice.png"
                    alt="Latif Ahmed, founder of CareBridge Health"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 440px, 35vw"
                    className="object-cover object-[center_30%]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-transparent px-6 pb-6 pt-16 text-white">
                  <span className="block text-lg font-semibold">Latif Ahmed</span>
                  <span className="mt-1 block text-xs text-white/85">Founder, CareBridge Health</span>
                </figcaption>
              </figure>
            </GentleParallax>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
            {[
              { title: "Start for free", desc: "Tell us what treatment you’re interested in. There’s no charge to send an enquiry or receive an introduction." },
              { title: "We arrange the next step", desc: "We aim to reply within 24 hours and help arrange a conversation with an independent healthcare professional." },
              { title: "You decide", desc: "Ask questions, consider the options and only go ahead if you feel ready." },
            ].map((item) => (
              <ScrollReveal key={item.title} className="h-full">
                <div className="h-full rounded-[24px] border border-slate-200/85 bg-white/85 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
                <div className="mb-4 h-1 w-10 rounded-full bg-teal-600" />
                <h2 className="text-base font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
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

      <section aria-labelledby="privacy-trust-title" className="border-b border-slate-200 bg-[#f1faf7]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">Your privacy matters</p>
            <h2 id="privacy-trust-title" className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 md:text-4xl">Your medical information belongs between you and your doctor.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">You don't need to send us medical records, test results or your medical history to get started. Share those directly with your healthcare professional if needed. CareBridge uses your enquiry details to respond and help arrange an introduction, with your permission.</p>
            <Link href="/privacy-policy" className="mt-5 inline-flex text-sm font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">How we protect your information</Link>
          </div>
          <div className="grid gap-3">
            {[
              { heading: "A simple first step", detail: "Start with your contact details and the type of treatment you're interested in." },
              { heading: "You choose what to share", detail: "Please don't put medical records or detailed health history in our enquiry form." },
              { heading: "UK data protection responsibilities", detail: "CareBridge is operated by BetaOffice Ltd, registered with the UK ICO. We take our UK GDPR responsibilities seriously; ICO registration is not an endorsement or certification." },
            ].map((item) => (
              <div key={item.heading} className="rounded-2xl border border-teal-100 bg-white p-5">
                <p className="font-semibold text-slate-950">{item.heading}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-[#fbf7ef] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:flex md:items-center md:justify-between md:gap-10 md:p-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Before & after photos
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 md:text-3xl">
                Patient result photos are discussed privately where appropriate.
              </h2>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:mt-0">
              We do not publish patient before-and-after galleries publicly. Where
              clinically appropriate, partner doctors may discuss relevant examples
              during a private consultation, helping protect patient privacy and
              keeping examples relevant to your own case.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Treatments
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Choose the treatment you’re interested in
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Explore your options, then send us a free enquiry when you’re ready.
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
                  Explore focused pages for dental implants, veneers, Hollywood Smile,
                  FUE hair transplant, gastric sleeve cost and treatment planning before
                  making an enquiry.
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

        <div className="mt-14 rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Popular procedures
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Explore specific treatment pathways
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Focused pages for patients comparing treatment options in Turkey before
                making an enquiry.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {procedureLinks.map((group) => (
              <div
                key={group.category}
                className="rounded-[28px] border border-slate-200 bg-[#fbf7ef] p-5"
              >
                <h4 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {group.category}
                </h4>

                <div className="mt-5 grid gap-3">
                  {group.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-sm"
                    >
                      <span>{item.label}</span>
                      <span className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-900">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="carebridge-clinic-banner-heading" className="bg-white px-6 py-6 md:py-10">
        <div className="relative mx-auto min-h-[360px] max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.13)] md:min-h-[390px]">
          <Image
            src="/hero-medical.avif"
            alt="Illustrative modern medical environment representing treatment coordination in Turkey"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />
          <div className="relative flex min-h-[360px] items-center px-7 py-12 text-white md:min-h-[390px] md:px-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">Explore with confidence</p>
              <h2 id="carebridge-clinic-banner-heading" className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
                Your questions deserve clear answers before you travel.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/85">
                Our role is to coordinate introductions and help you prepare for an informed conversation with an independent healthcare professional — without pressure to proceed.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#form" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-50">
                  Ask about treatment
                </a>
                <a href="#process" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Understand the process
                </a>
              </div>
              <p className="mt-5 text-xs text-white/65">Illustrative image. CareBridge does not provide medical treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <FounderSection />

      <PatientJourneySection />

      <MedicalPartnerSection />

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
                suitable, travel arrangements may be coordinated through
                third-party partners. Treatment payments are handled directly
                by the relevant medical tourism provider.
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

      <FaqSection />

      <section id="form" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#f6f3ec] via-[#fcfaf7] to-[#e9f5f1] py-20 text-slate-950 md:py-24">
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="lg:pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Private enquiry
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Tell us what treatment you’re considering
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              Choose a treatment and leave your contact details. We’ll aim to get back to you within 24 hours and explain what happens next. Our enquiry and introduction service is free, with no obligation to book treatment.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-slate-700">
              {[
                "Free to enquire — no obligation",
                "Private and discreet",
                "UK-based coordination",
                "Destination guidance included",
                "We aim to reply within 24 hours",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#dbe9e3] bg-white/75 px-4 py-3 shadow-[0_5px_18px_rgba(15,23,42,0.025)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#dce8e3] bg-white/95 p-6 text-slate-950 shadow-[0_22px_65px_rgba(15,74,66,0.09)] md:p-8">
            <form onSubmit={handleSubmit} data-clarity-mask="true" onChangeCapture={() => {
              if (!formStarted.current) {
                formStarted.current = true;
                recordCareBridgeEvent("consultation_form_started");
              }
            }} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                  required
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  value={form.whatsapp}
                  onChange={(e) => updateField("whatsapp", e.target.value)}
                  placeholder="WhatsApp number (optional)"
                  className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                />

                <select
                  value={form.treatment}
                  onChange={(e) => updateField("treatment", e.target.value)}
                  className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
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
                  className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                >
                  <option value="">Where would you like treatment? (optional)</option>
                  <option>Istanbul</option>
                  <option>Antalya</option>
                  <option>Open to guidance / not sure yet</option>
                </select>

                <select
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                >
                  <option value="">Where are you based? (optional)</option>
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
                className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
              >
                <option value="">When are you considering treatment? (optional)</option>
                <option>As soon as possible</option>
                <option>Within 1 month</option>
                <option>Within 1–3 months</option>
                <option>Just exploring options</option>
              </select>

              <textarea
                value={form.note}
                onChange={(e) => updateField("note", e.target.value)}
                placeholder="Optional practical questions (no medical details, please)"
                rows={3}
                className="w-full rounded-2xl border border-[#d3e2dd] bg-[#fcfdfb] px-4 py-4 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
              />

              <p className="rounded-xl bg-[#f5faf8] px-3 py-3 text-xs leading-5 text-slate-600">Please do not include medical records, test results, diagnoses or other sensitive medical details here. Share those directly with your healthcare professional.</p>

              <div className="space-y-4 rounded-[24px] border border-[#dbe9e3] bg-[#f3faf7] p-5">
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    checked={form.consentDataProcessing}
                    onChange={(e) =>
                      updateField("consentDataProcessing", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded border-teal-300 accent-[#076b68]"
                    required
                  />
                  <span>
                    I explicitly consent to CareBridge Health using my enquiry
                    details (which may reveal my treatment interest) to respond
                    and, where appropriate, sharing necessary details with an
                    independent healthcare provider or coordination partner in
                    Turkey to arrange an introduction. I understand I should
                    share detailed medical information directly with my doctor.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    checked={form.consentDisclaimer}
                    onChange={(e) =>
                      updateField("consentDisclaimer", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded border-teal-300 accent-[#076b68]"
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
                  className="font-medium text-teal-800 underline underline-offset-2 hover:text-teal-950"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  className="font-medium text-teal-800 underline underline-offset-2 hover:text-teal-950"
                >
                  Terms
                </Link>.
              </p>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-[#075f63] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(7,95,99,0.16)] transition hover:-translate-y-0.5 hover:bg-[#064c50] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send my enquiry"}
              </button>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                Your enquiry has been received. We’ll review it and get back
                to you within 24 hours.
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