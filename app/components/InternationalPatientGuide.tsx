import Link from "next/link";
import { internationalGuides, type InternationalGuideKey } from "../international-guides";

const treatments = [
  { label: "Dental treatment", href: "/dental-treatment-turkey" },
  { label: "Hair restoration", href: "/hair-transplant-turkey" },
  { label: "Cosmetic surgery", href: "/cosmetic-surgery-turkey" },
  { label: "Eye treatment", href: "/eye-treatment-turkey" },
  { label: "Weight loss surgery", href: "/weight-loss-surgery-turkey" },
  { label: "Women’s health", href: "/treatment-in-istanbul/womens-health" },
];

export default function InternationalPatientGuide({ region }: { region: InternationalGuideKey }) {
  const guide = internationalGuides[region];
  return (
    <article className="min-h-screen bg-[#fcfaf7] text-slate-950 dark:bg-[#13222a] dark:text-slate-100">
      <section className="border-b border-teal-100 bg-gradient-to-br from-[#fbf8f3] via-white to-[#e8f6f2] px-6 pb-16 pt-32 dark:border-slate-700 dark:!bg-none dark:bg-[#17272f] md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span>
            {region === "global" ? <span>International patient guide</span> : <><Link href="/medical-tourism-turkey" className="underline underline-offset-4">International patients</Link><span aria-hidden="true">/</span><span>{guide.label}</span></>}
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800 dark:text-teal-200">UK-based coordination · International patients</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">{guide.heading}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">{guide.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#form" className="rounded-full bg-[#075f63] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#064c50]">Send a free enquiry</Link>
            <Link href="/how-treatment-in-turkey-works" className="rounded-full border border-teal-200 bg-white px-7 py-3.5 text-sm font-semibold text-teal-950 hover:border-teal-500">How coordination works</Link>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">Independent coordination and referral service, not a clinic. Medical assessment and treatment are provided by independent healthcare professionals. No clinical outcomes or prices are guaranteed.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-teal-200">Before you travel</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">What to consider when planning treatment abroad</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {guide.sections.map((section, i) => (
            <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#1a2c35]">
              <span className="text-sm font-semibold text-teal-700 dark:text-teal-200">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{section.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{section.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-teal-100 bg-teal-50 p-5 text-sm leading-6 text-teal-950 dark:border-slate-700 dark:bg-[#173c3b] dark:text-teal-50"><strong>Budgeting reference:</strong> {guide.currency}. Providers determine their own billing currency and quote; CareBridge does not set or guarantee treatment prices.</p>
      </section>
      <section className="border-y border-slate-200 bg-white dark:border-slate-700 dark:bg-[#17272f]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-semibold tracking-tight">Explore treatment options in Turkey</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => <Link key={item.href} href={item.href} className="rounded-xl border border-slate-200 p-4 text-sm font-semibold text-teal-800 underline-offset-4 hover:underline dark:border-slate-700 dark:text-teal-200">{item.label} →</Link>)}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">Compare <Link href="/treatment-in-istanbul" className="font-semibold underline underline-offset-4">Istanbul</Link> and <Link href="/treatment-in-antalya" className="font-semibold underline underline-offset-4">Antalya</Link>, or view our <Link href="/treatment-in-turkey" className="font-semibold underline underline-offset-4">treatment overview</Link>.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {guide.questions.map((faq) => <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-[#1a2c35]"><h3 className="font-semibold">{faq.question}</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p></div>)}
            </div>
          </div>
          <aside>
            <h2 className="text-2xl font-semibold tracking-tight">Travelling from another country?</h2>
            <div className="mt-5 grid gap-2">
              {Object.entries(internationalGuides).filter(([key]) => key !== region).map(([, item]) => <Link key={item.path} href={item.path} className="rounded-xl border border-teal-100 bg-white px-4 py-3 text-sm font-semibold text-teal-800 hover:border-teal-500 dark:border-slate-700 dark:bg-[#1a2c35] dark:text-teal-200">{item.label} guide →</Link>)}
            </div>
            {guide.resources.length > 0 && <div className="mt-8"><h3 className="text-sm font-semibold">Official travel and health resources</h3><ul className="mt-3 space-y-3 text-sm">{guide.resources.map((resource) => <li key={resource.url}><a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-teal-800 underline underline-offset-4 dark:text-teal-200">{resource.label}</a></li>)}</ul></div>}
          </aside>
        </div>
        <div className="mt-12 rounded-3xl bg-[#075f63] p-8 text-white md:p-10">
          <h2 className="text-2xl font-semibold">Ready to ask about treatment in Turkey?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">Tell us where you are based and what treatment you are interested in. It's free to enquire, and there is no obligation to proceed. Please do not share medical records in the enquiry form.</p>
          <Link href="/#form" className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-950">Start your enquiry</Link>
        </div>
      </section>
    </article>
  );
}
