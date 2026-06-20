import Link from "next/link";

const featuredInsights = [
  {
    title: "Rhinoplasty Turkey vs UK Cost",
    description:
      "What UK patients should compare beyond price when researching nose surgery in Turkey.",
    href: "/blog/rhinoplasty-turkey-vs-uk-cost",
    category: "Cosmetic Surgery",
  },
  {
    title: "LASIK Eye Surgery Turkey vs UK",
    description:
      "A practical guide to assessment quality, technology, and recovery planning before choosing LASIK abroad.",
    href: "/blog/lasik-eye-surgery-turkey-vs-uk",
    category: "Eye Treatment",
  },
  {
    title: "Labiaplasty Turkey Guide",
    description:
      "A discreet patient guide covering suitability, privacy, recovery, and questions to ask before treatment.",
    href: "/blog/labiaplasty-turkey-guide",
    category: "Women’s Health",
  },
];

export default function InsightsPreview() {
  return (
    <section className="bg-[#fcfaf7] py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Insights
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Guidance for patients still researching treatment in Turkey
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Explore practical, patient-friendly articles designed to help you
              compare destinations, think more carefully about clinic selection,
              and approach treatment planning with more clarity before making any
              major decisions.
            </p>
          </div>

          <div>
            <Link
              href="/blog"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
            >
              Visit the insights hub
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredInsights.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
            >
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                {post.category}
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                {post.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {post.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">
                  Read article
                </span>
                <span className="text-sm text-slate-500 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}