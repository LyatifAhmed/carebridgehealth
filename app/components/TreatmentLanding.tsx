import Link from "next/link";

type TreatmentLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroNote: string;
  suitableFor: string[];
  whyTurkey: string[];
  processSteps: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  ctaTitle?: string;
  ctaText?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  tertiaryCtaHref?: string;
  tertiaryCtaLabel?: string;
};

export default function TreatmentLanding({
  eyebrow,
  title,
  intro,
  heroNote,
  suitableFor,
  whyTurkey,
  processSteps,
  faq,
  ctaTitle = "Start with a private consultation",
  ctaText = "Tell us what you are considering and we will help you understand the next steps, likely treatment pathway, and whether Istanbul or Antalya may be a better fit.",
  primaryCtaHref = "/#form",
  primaryCtaLabel = "Request private consultation",
  secondaryCtaHref = "/#form",
  secondaryCtaLabel = "Start your enquiry",
  tertiaryCtaHref = "/blog",
  tertiaryCtaLabel = "Read patient insights",
}: TreatmentLandingProps) {
  return (
    <main className="min-h-screen bg-[#fcfaf7] text-neutral-900">
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
            {intro}
          </p>

          <div className="mt-8 max-w-3xl rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm md:p-7">
            <p className="text-base leading-7 text-neutral-700">{heroNote}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={primaryCtaHref}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {primaryCtaLabel}
            </Link>

            <Link
              href={secondaryCtaHref}
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">
              Who this may suit
            </h2>

            <ul className="mt-6 space-y-4 text-neutral-700">
              {suitableFor.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">
              Why patients consider Turkey
            </h2>

            <ul className="mt-6 space-y-4 text-neutral-700">
              {whyTurkey.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            How the process works
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-base leading-7 text-neutral-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            {ctaTitle}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
            {ctaText}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCtaHref}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {primaryCtaLabel}
            </Link>

            <Link
              href={secondaryCtaHref}
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
            >
              {secondaryCtaLabel}
            </Link>

            <Link
              href={tertiaryCtaHref}
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
            >
              {tertiaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 md:px-10 md:pb-24">
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-4">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-neutral-700">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}