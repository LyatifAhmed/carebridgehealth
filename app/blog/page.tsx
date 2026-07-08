import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | CareBridge Health",
  description: "Learn about labiaplasty in Turkey including expected costs, recovery, privacy and treatment planning guidance.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    title: "Hair Transplant Turkey vs UK Cost",
    href: "/blog/hair-transplant-turkey-vs-uk-cost",
    description:
      "A practical comparison of hair transplant costs in Turkey and the UK, including what affects price and what patients should consider.",
  },
  {
    title: "Dental Implants Turkey vs UK Cost",
    href: "/blog/dental-implants-turkey-vs-uk-cost",
    description:
      "Compare dental implant costs in Turkey and the UK, including treatment planning, materials, clinic standards, and hidden costs.",
  },
  {
    title: "Veneers Turkey vs UK Cost",
    href: "/blog/veneers-turkey-vs-uk-cost",
    description:
      "A clear guide to veneer costs in Turkey vs the UK, including smile design, materials, and planning considerations.",
  },
  {
    title: "Hollywood Smile Turkey Guide",
    href: "/blog/hollywood-smile-turkey-guide",
    description:
      "What UK patients should understand before considering a Hollywood Smile in Turkey.",
  },
  {
    title: "Gastric Sleeve Turkey vs UK Cost",
    href: "/blog/gastric-sleeve-turkey-vs-uk-cost",
    description:
      "A practical comparison of gastric sleeve costs in Turkey and the UK, including package differences and safety considerations.",
  },
  {
    title: "Is treatment in Turkey safe for UK patients?",
    href: "/blog/is-treatment-in-turkey-safe-for-uk-patients",
    description:
      "What patients should consider beyond price when evaluating treatment abroad.",
  },
  {
    title: "How much does treatment in Turkey cost for UK patients?",
    href: "/blog/cost-of-treatment-in-turkey-for-uk-patients",
    description:
      "A realistic breakdown of treatment costs, hidden expenses, and what UK patients should expect.",
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
  {
    title: "What UK patients should know before planning treatment in Turkey",
    href: "/blog/what-uk-patients-should-know-before-treatment-in-turkey",
    description:
      "A clearer overview of what UK-based patients should understand before choosing clinics, destinations, and treatment pathways in Turkey.",
  },
  {
    title: "Rhinoplasty Turkey vs UK Cost",
    href: "/blog/rhinoplasty-turkey-vs-uk-cost",
    description:
      "A practical comparison of rhinoplasty costs in Turkey and the UK, including consultation, recovery, and treatment planning considerations.",
  },
  {
    title: "LASIK Eye Surgery Turkey vs UK",
    href: "/blog/lasik-eye-surgery-turkey-vs-uk",
    description:
      "Compare LASIK eye surgery options in Turkey and the UK, including assessment quality, technology, and recovery planning.",
  },
  {
    title: "Labiaplasty Turkey Guide",
    href: "/blog/labiaplasty-turkey-guide",
    description:
      "What UK patients should know about labiaplasty in Turkey, including suitability, recovery, and treatment planning.",
  },
  {
    title: "Revision Rhinoplasty Turkey Guide",
    href: "/blog/revision-rhinoplasty-turkey-guide",
    description:
      "A practical guide for patients considering secondary nose surgery in Turkey.",
  },
  {
    title: "Cataract Surgery Turkey Guide",
    href: "/blog/cataract-surgery-turkey-guide",
    description:
      "What UK patients should know about cataract surgery in Turkey, lens options, and recovery considerations.",
  },
  {
    title: "Breast Augmentation Turkey Guide",
    href: "/blog/breast-augmentation-turkey-guide",
    description:
      "A practical guide to breast augmentation in Turkey, including implant choices and recovery planning.",
  },
  {
    title: "Liposuction Turkey Guide",
    href: "/blog/liposuction-turkey-guide",
    description:
      "Learn what UK patients should know before considering liposuction in Turkey.",
  },
  {
    title: "Facelift Turkey Guide",
    href: "/blog/facelift-turkey-guide",
    description:
      "A patient-friendly guide to facelift surgery in Turkey, including recovery and provider selection.",
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