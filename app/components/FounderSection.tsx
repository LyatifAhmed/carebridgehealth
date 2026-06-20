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
                After years of living and working in the UK, I noticed how
                difficult it was for patients to compare treatment options
                abroad with confidence.
              </p>

              <p>
                Most people were left navigating clinic websites, social media
                pages, advertisements, and conflicting information on their own.
                Important decisions were often being made with very little
                guidance.
              </p>

              <p>
                CareBridge Health was created to provide a calmer and more
                structured starting point — helping patients understand their
                options, ask better questions, and make informed decisions
                before committing to treatment abroad.
              </p>

              <p>
                We are not a clinic and we do not provide medical treatment.
                Instead, we focus on communication, coordination, and helping
                patients access carefully selected providers through a more
                transparent process.
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