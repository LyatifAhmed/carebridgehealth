import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      {/* Hero / Intro */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              About
            </p>

            <h1 className="font-display mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
              CareBridge Health
            </h1>

            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-9 text-slate-600">
              <p>
                CareBridge Health is a UK-based coordination service helping
                patients access carefully selected clinics in Turkey with more
                clarity, structure, and discretion.
              </p>

              <p>
                We are not a medical provider. Treatments are carried out by
                independent clinics, and every case is reviewed individually by
                the relevant medical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="relative h-[520px] w-full">
              <Image
                src="/lyatif-ahmed-founder-carebridgehealth-istanbul.avif"
                alt="Latif Ahmed, founder of CareBridge Health"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-[center_10%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent p-6">
                <p className="text-sm font-medium text-white">Latif Ahmed</p>
                <p className="mt-1 text-sm text-white/80">
                  Founder, CareBridge Health
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Founder
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.03em]">
              Built around trust, calm communication, and careful coordination
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                CareBridge Health was created to offer a more structured and
                transparent way for patients to explore treatment abroad.
              </p>

              <p>
                Instead of aggressive sales tactics or unclear promises, the
                focus is on thoughtful planning, selected providers, and helping
                patients make informed decisions with confidence.
              </p>

              <p>
                Every enquiry is handled individually, with privacy and clear
                communication at the centre of the process.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/lyatif-ahmed-redzheb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              >
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                View LinkedIn profile
              </a>

              <Link
                href="/#form"
                className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Request private consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach + Trust */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200/80 bg-[#f8f5ef] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Our approach
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">
              A more considered way to access treatment abroad
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>• Selected clinic relationships, reviewed case by case</p>
              <p>• Clear communication before any travel planning</p>
              <p>• A private, professional, UK-based coordination experience</p>
              <p>• No promise of outcomes and no medical advice provided</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.05)] md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Company & trust
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <p className="text-base font-semibold text-slate-900">
                Generation Beta Digital Ltd
              </p>

              <p>
                3rd Floor, 86–90 Paul Street
                <br />
                London EC2A 4NE, UK
              </p>

              <p>Company No: 16274319</p>
              <p>ICO No: ZB883806</p>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs leading-6 text-slate-500">
              CareBridge Health is operated by Generation Beta Digital Ltd as an
              independent treatment coordination service.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[32px] border border-slate-200 bg-[#f3efe8] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-12">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Private consultation
              </p>

              <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-0.03em]">
                Start with a private, no-obligation enquiry
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Share a few details and we’ll review your request with care,
                discretion, and clear next steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#form"
                  className="inline-flex items-center rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Start consultation
                </Link>

                <Link
                  href="/#services"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  View treatments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}