import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | CareBridge Health",
  description:
    "Patient-friendly guidance on treatment in Turkey, destination choice, clinic selection, and planning your treatment journey from the UK.",
  alternates: {
    canonical: "https://carebridgehealth.co/blog",
  },
};

const posts = [
  {
    title: "Is treatment in Turkey safe for UK patients?",
    href: "/blog/is-treatment-in-turkey-safe-for-uk-patients",
    description:
      "What patients should consider beyond price when evaluating treatment abroad.",
  },
  {
    title: "Istanbul or Antalya: which is better for treatment in Turkey?",
    href: "/blog/istanbul-or-antalya-for-treatment-in-turkey",
    description:
      "A clearer look at destination fit, recovery environment, and specialist access.",
  },
  {
    title: "How to choose a clinic in Turkey more carefully",
    href: "/blog/how-to-choose-a-clinic-in-turkey",
    description:
      "Questions and signals that matter before committing to treatment.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          CareBridge Insights
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
          Guidance for patients considering treatment in Turkey
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
          Explore practical articles designed to help UK-based patients approach
          treatment in Turkey with more clarity, better questions, and a more
          informed starting point.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {post.description}
              </p>
              <p className="mt-6 text-sm font-medium text-slate-900">
                Read article →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}