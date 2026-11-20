import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
            <div className="relative h-[520px] w-full">
              <Image
                src="/lyatif-ahmed-founder-carebridgehealth-istanbul.avif"
                alt="Latif Ahmed, Founder of CareBridge Health"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_10%]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-8">
                <p className="text-lg font-semibold text-white">
                  Latif Ahmed
                </p>

                <p className="mt-1 text-sm text-white/80">
                  Founder, CareBridge Health
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Founder story
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Why I started CareBridge Health
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
              <p>
                My experience in healthcare began long before I founded
                CareBridge Health. I spent years working in a family-run
                medical clinic, welcoming patients and their families,
                coordinating visits, and seeing first-hand how much clear
                communication matters to both patients and clinic teams.
              </p>

              <p>
                I saw the challenges on both sides: patients looking for
                reassurance and straightforward answers, and busy clinics
                trying to keep every part of the patient journey organised.
                Those experiences showed me how much difference thoughtful
                coordination can make.
              </p>

              <p>
                After living and working in the UK, I recognised a similar
                problem for people considering treatment abroad. Comparing
                unfamiliar providers, understanding the process, and knowing
                whom to speak to could be overwhelming.
              </p>

              <p>
                That is why I created CareBridge Health: to help bridge the
                gap between patients and healthcare professionals in Turkey.
                My personal connections in the healthcare sector allow me to
                build introductions around established relationships rather
                than an anonymous directory, while encouraging every patient
                to ask questions and verify the provider for themselves.
              </p>

              <p>
                CareBridge is not a clinic and I do not provide medical
                advice or treatment. My role is to make communication and
                coordination clearer; independent medical professionals
                remain responsible for clinical assessment, suitability,
                treatment and aftercare.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/lyatif-ahmed-redzheb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Connect on LinkedIn
              </a>

              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Read our story
              </Link>

              <Link
                href="/#form"
                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Request consultation
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Based in
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  London, UK
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Focus
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  Patient Coordination
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Approach
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  Clarity & Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}