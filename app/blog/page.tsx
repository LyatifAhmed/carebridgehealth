import EditorialImage from "../components/EditorialImage";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | CareBridge Health",
  description: "Explore CareBridge Health guides to treatment in Turkey, including costs, clinic selection, recovery, and practical advice for UK patients.",
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

const articleImages = {
  dental: "/carebridge-dental-consultation.png",
  eye: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=75",
  surgery: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=75",
  care: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=75",
} as const;

function articleImage(href: string) {
  if (/dental|veneers|hollywood-smile/.test(href)) return articleImages.dental;
  if (/lasik|cataract|eye/.test(href)) return articleImages.eye;
  if (/rhinoplasty|breast|facelift|liposuction|labiaplasty/.test(href)) return articleImages.surgery;
  return articleImages.care;
}

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

        <section aria-labelledby="featured-guides" className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Start here</p>
              <h2 id="featured-guides" className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Featured patient guides</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">Practical comparisons covering clinical assessment, treatment planning and aftercare.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              posts.find((post) => post.href.endsWith("lasik-eye-surgery-turkey-vs-uk")),
              posts.find((post) => post.href.endsWith("gastric-sleeve-turkey-vs-uk-cost")),
              posts.find((post) => post.href.endsWith("veneers-turkey-vs-uk-cost")),
            ].filter((post): post is (typeof posts)[number] => Boolean(post)).map((post) => (
              <Link key={post.href} href={post.href} className="group overflow-hidden rounded-[24px] border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <EditorialImage src={articleImage(post.href)} alt="Illustrative healthcare photography" className="aspect-[16/10] w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Featured guide</p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.description}</p>
                  <p className="mt-5 text-sm font-semibold">Explore guide <span aria-hidden="true">→</span></p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <h2 className="mt-16 text-2xl font-semibold tracking-tight">All patient guides</h2>
        <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                {/* Illustrative stock photography, not CareBridge partner facilities. */}
                <EditorialImage
                  src={articleImage(post.href)}
                  alt="Illustrative healthcare photography for this article"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Patient guide
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.025em]">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {post.description}
                </p>
                <p className="mt-auto pt-6 text-sm font-semibold text-slate-900">
                  Read article <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}