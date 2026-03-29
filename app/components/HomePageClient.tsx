"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import ChatAssistant from "./ChatAssistant";
import HeroCursor from "./HeroCursor";

type ConsultationForm = {
  fullName: string;
  email: string;
  whatsapp: string;
  treatment: string;
  location: string;
  timeframe: string;
  note: string;
};

const initialState: ConsultationForm = {
  fullName: "",
  email: "",
  whatsapp: "",
  treatment: "",
  location: "",
  timeframe: "",
  note: "",
};

const treatmentCards = [
  {
    title: "Dental treatments",
    desc: "Implants, veneers, and smile design with carefully selected clinics.",
    img: "/dental.avif",
  },
  {
    title: "Hair transplant",
    desc: "Structured planning and natural-result focused clinics in Istanbul.",
    img: "/hair.avif",
  },
  {
    title: "Eye treatments",
    desc: "Vision-focused procedures and specialist support with clear coordination.",
    img: "/eye.avif",
  },
  {
    title: "Cosmetic surgery",
    desc: "Selected face, body, and aesthetic procedures handled with privacy and care.",
    img: "/cosmetic.avif",
  },
  {
    title: "Weight loss surgery",
    desc: "Gastric sleeve and selected bariatric procedures with full planning support.",
    img: "/bariatric.avif",
  },
  {
    title: "Women’s health",
    desc: "Selected gynaecological and functional procedures handled with discretion.",
    img: "/womens-health.avif",
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
      <section id="hero-section" className="relative min-h-[100svh] w-full overflow-hidden cursor-none">
  <Image
    src="/hero-medical.avif"
    alt="Private medical treatment coordination in Turkey"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-slate-950/38" />
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/22 to-transparent" />
  <HeroCursor containerId="hero-section" />
  
  <div className="relative z-10 flex min-h-[100svh] items-center pt-24">
    <div className="mx-auto w-full max-w-7xl px-6">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/72">
          CareBridge Health
        </p>

        <h1 className="font-display mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
          Private medical treatment in Turkey,
          <span className="block text-white/88">
            carefully coordinated from the UK
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
          We help UK-based patients access carefully selected clinics in
          Istanbul with clarity, structure, and discretion.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#form"
            className="inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:opacity-95"
          >
            Request private consultation
          </a>

          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Explore treatments
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Treatments
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.03em]">
  What we help with
</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Carefully selected treatment categories for patients seeking a more
            structured and private experience before travelling.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {treatmentCards.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-[260px] w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover transition duration-700 group-hover:scale-105 ${
                    item.title === "Hair transplant"
                      ? "object-[center_38%]"
                      : item.title === "Eye treatments"
                      ? "object-[center_35%]"
                      : "object-center"
                  }`}
                />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f1eb] py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative h-[560px] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/womens-health-feature.avif"
              alt="Women's health and advanced gynaecological procedures"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
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
              we can help coordinate selected women’s health procedures in
              Istanbul through trusted partner clinics.
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

            <div className="mt-9">
              <a
                href="#form"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Request a private consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Featured area
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Cosmetic surgery with a more structured, discreet process
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We can help coordinate selected aesthetic procedures through
              trusted partner clinics for patients who value privacy, clear
              communication, and careful planning before travel.
            </p>

            <div className="mt-8 space-y-3 text-slate-700">
              <p>• Face and neck procedures</p>
              <p>• Breast procedures</p>
              <p>• Body contouring and selected aesthetic surgery</p>
              <p>• Case-by-case review through selected providers</p>
            </div>

            <p className="mt-7 text-sm leading-7 text-slate-500">
              We do not promise outcomes. Each case is reviewed individually,
              and treatment suitability is determined by the relevant medical
              provider.
            </p>

            <div className="mt-9">
              <a
                href="#form"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Enquire about cosmetic treatment
              </a>
            </div>
          </div>

          <div className="relative h-[560px] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/cosmetic-feature.avif"
              alt="Selected cosmetic surgery coordination"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-[30%_center] md:object-center"
            />
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#f7f4ee] py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative h-[460px] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/trust.avif"
              alt="Trusted clinic coordination"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-[70%_center] md:object-center"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Why CareBridge
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Why patients choose us
            </h2>

            <ul className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <li>✔ UK-based coordination</li>
              <li>✔ Carefully selected partner clinics</li>
              <li>✔ Clear communication before travel</li>
              <li>✔ Structured guidance from enquiry to treatment</li>
              <li>✔ Discreet and professional experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Process
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
            How it works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Submit your consultation request",
            "We review your case and respond",
            "You receive clear next steps",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
            >
              <div className="text-sm text-slate-500">Step {index + 1}</div>
              <div className="mt-3 text-lg font-medium tracking-[-0.02em]">
                {step}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="form" className="bg-[#f7f4ee] py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                Private consultation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Request a private consultation
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Share a few details and we’ll review your request by email. We
                usually respond within 24 hours.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-4 py-2">
                No obligation enquiry
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2">
                Private and discreet
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2">
                Reviewed individually
              </span>
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
                className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95 disabled:opacity-50"
              >
                {sending ? "Sending..." : "Request private review"}
              </button>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                Your request has been received. We’ll get back to you by email.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 text-sm leading-7 text-slate-500">
        CareBridge Health is not a medical provider. We act as an independent
        coordination service connecting patients with third-party clinics.
      </section>

      <ChatAssistant />
    </main>
  );
}