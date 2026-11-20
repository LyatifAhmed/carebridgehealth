import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="founder-story-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-[#fbf8f3] p-7 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-14 md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
              The story behind CareBridge
            </p>
            <h2 id="founder-story-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Built from first-hand experience with patients and clinics.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              After years supporting patients and their families in a medical clinic, I saw how much clearer communication and thoughtful coordination could improve the experience on both sides. I created CareBridge Health to apply that experience, my healthcare relationships and my software development skills to the challenges patients face when exploring treatment abroad.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              I am not a medical provider. CareBridge helps coordinate introductions; independent clinicians remain responsible for assessment, treatment and aftercare.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-slate-950">
              Latif Ahmed <span className="block text-sm font-normal text-slate-500">Founder, CareBridge Health</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Read my full story
              </Link>
              <a href="https://www.linkedin.com/in/lyatif-ahmed-redzheb/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-600">
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
