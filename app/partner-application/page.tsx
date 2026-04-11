"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  clinic: string;
  email: string;
  website: string;
  specialty: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  clinic: "",
  email: "",
  website: "",
  specialty: "",
  message: "",
};

const partnershipPoints = [
  "Limited network of carefully reviewed clinics",
  "Focus on patient experience, clarity, and trust",
  "Selected specialties only",
  "Long-term quality over volume",
];

export default function PartnerApplicationPage() {
  const [form, setForm] = useState(initialState);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);

    try {
      const res = await fetch("/api/partner-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to submit application.");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while sending your application.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      <section className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fcfaf7_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Partnerships
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              Work with CareBridge Health
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              We collaborate with a limited number of carefully selected clinics
              and specialists in Turkey. Our focus is not volume. We look for
              providers who deliver strong clinical standards, clear communication,
              and a high-quality experience for international patients.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              If your clinic shares that approach, you can apply to be considered
              for our network.
            </p>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-4">
            {partnershipPoints.map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-3 text-center shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_1.25fr]">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              What we look for
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              A selective network built around trust
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                We are especially interested in clinics and specialists who are
                experienced in working with international patients and who value
                a more structured, transparent, and carefully handled process.
              </p>

              <p>
                Applications are reviewed individually. Submission does not
                guarantee acceptance into our network.
              </p>
            </div>

            <div className="mt-8 space-y-4 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  Strong fit
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Dental, hair transplant, selected cosmetic pathways, women’s
                  health, eye treatments, and other specialties where patient
                  communication and trust matter deeply.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  Review criteria
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We typically review specialty fit, patient communication,
                  international readiness, clarity of process, and overall brand
                  alignment.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                Partner application
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Apply to be considered
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                Tell us a little about your clinic, specialty, and why you may
                be a strong fit for CareBridge Health.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                />

                <input
                  placeholder="Clinic / organisation name"
                  value={form.clinic}
                  onChange={(e) => update("clinic", e.target.value)}
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Professional email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                />

                <input
                  placeholder="Website (optional)"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                />
              </div>

              <input
                placeholder="Specialty (e.g. hair transplant, dental, cosmetic surgery)"
                value={form.specialty}
                onChange={(e) => update("specialty", e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <textarea
                placeholder="Tell us briefly about your clinic, experience with international patients, and why you may be a strong fit"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={6}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <p className="text-xs leading-6 text-slate-500">
                By submitting this form, you confirm that the information
                provided is accurate and that CareBridge Health may contact you
                regarding your application.
              </p>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {sending ? "Submitting..." : "Apply to work with us"}
              </button>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                Application received. We’ll review it carefully and get back to
                you if there may be a fit.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 text-sm leading-7 text-slate-500 md:pb-20">
        CareBridge Health is an independent coordination brand and not a clinic.
        Any future collaboration is subject to review, alignment, and separate
        approval.
      </section>
    </main>
  );
}