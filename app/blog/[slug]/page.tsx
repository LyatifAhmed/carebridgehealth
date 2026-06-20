import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "./posts";
import type { BlogSection } from "./types";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.carebridgehealth.co/blog/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="pt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-900 md:text-3xl"
        >
          {section.content}
        </h2>
      );

    case "paragraph":
      return (
        <p key={index} className="text-base leading-8 text-slate-700">
          {section.content}
        </p>
      );

    case "linkParagraph":
      return (
        <p key={index} className="text-base leading-8 text-slate-700">
          {section.contentBefore}
          <Link
            href={section.href}
            className="font-medium text-slate-900 underline underline-offset-4 transition hover:opacity-70"
          >
            {section.linkText}
          </Link>
          {section.contentAfter}
        </p>
      );

    case "bulletList":
      return (
        <ul
          key={index}
          className="space-y-3 pl-1 text-base leading-8 text-slate-700"
        >
          {section.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "CareBridge Health",
    },
    publisher: {
      "@type": "Organization",
      name: "CareBridge Health",
      logo: {
        "@type": "ImageObject",
        url: "https://www.carebridgehealth.co/logo.png",
      },
    },
    mainEntityOfPage: `https://www.carebridgehealth.co/blog/${post.slug}`,
    datePublished: "2026-06-19",
    dateModified: new Date().toISOString(),
    image: "https://www.carebridgehealth.co/og-image.jpg",
  };

  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-6 py-24 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          CareBridge Insights
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-600">
          {post.description}
        </p>

        <div className="mt-10 space-y-6">
          {post.sections.map((section, index) => renderSection(section, index))}
        </div>

        <div className="mt-14 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">{post.ctaTitle}</h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {post.ctaText}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {post.ctaLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={
                  link.variant === "primary"
                    ? "rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                    : "rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}