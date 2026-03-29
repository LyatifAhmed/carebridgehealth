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
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          Partnerships
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
          Work with CareBridge Health
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          We collaborate with a limited number of carefully selected clinics
          and specialists in Turkey. If you provide high-quality care and work
          with international patients, you can apply to join our network.
        </p>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <input
                placeholder="Clinic / organisation name"
                value={form.clinic}
                onChange={(e) => update("clinic", e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <input
                placeholder="Website (optional)"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
                className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <input
                placeholder="Specialty (e.g. hair transplant, dental)"
                value={form.specialty}
                onChange={(e) => update("specialty", e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <textarea
                placeholder="Tell us briefly about your clinic"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-slate-950 p-4 text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {sending ? "Submitting..." : "Apply to work with us"}
              </button>
            </form>

            {submitted && (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
                Application received. We’ll review and get back to you.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}