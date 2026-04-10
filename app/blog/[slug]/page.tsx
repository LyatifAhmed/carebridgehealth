import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogSection =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "heading";
      content: string;
    }
  | {
      type: "linkParagraph";
      contentBefore?: string;
      linkText: string;
      href: string;
      contentAfter?: string;
    }
  | {
      type: "bulletList";
      items: string[];
    };

type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  sections: BlogSection[];
  ctaTitle: string;
  ctaText: string;
  ctaLinks: CtaLink[];
};

const posts: BlogPost[] = [
  {
    slug: "is-treatment-in-turkey-safe-for-uk-patients",
    title: "Is treatment in Turkey safe for UK patients?",
    description:
      "What UK-based patients should consider beyond price when evaluating treatment in Turkey, including clinic selection, planning, and risk factors.",
    sections: [
      {
        type: "paragraph",
        content:
          "Treatment in Turkey has become a serious consideration for many UK-based patients looking for faster access to care, private treatment options, or a more flexible treatment journey. However, one question consistently comes up at the beginning of that research process: is it actually safe?",
      },
      {
        type: "paragraph",
        content:
          "The reality is that safety is not determined by the country alone. Turkey has a large and diverse private healthcare sector. Within that, there are highly reputable hospitals and experienced specialists, but also providers that operate with less structure. Because of this, the outcome depends far more on how the decision is made than the destination itself.",
      },
      {
        type: "heading",
        content: "Why safety depends on structure, not just destination",
      },
      {
        type: "paragraph",
        content:
          "For patients based in the UK, the biggest risk is not necessarily the treatment itself, but the lack of structure in how the decision is approached. Many patients start by comparing prices or reacting to what they see on social media. While cost differences can be significant compared to private treatment in the UK, price alone should never be the deciding factor.",
      },
      {
        type: "paragraph",
        content:
          "A safer approach begins with understanding how your case is assessed before any commitment is made. Responsible providers will want to understand your medical background, your expectations, and whether the treatment is actually suitable for you. If a clinic offers immediate confirmation without proper review, that is usually a sign that the process is too simplified.",
      },
      {
        type: "heading",
        content: "Questions patients should ask early",
      },
      {
        type: "bulletList",
        items: [
          "Who will actually perform the procedure?",
          "How is medical suitability assessed before travel?",
          "What does the recovery and aftercare pathway look like?",
          "What happens if questions or issues arise after returning to the UK?",
        ],
      },
      {
        type: "paragraph",
        content:
          "Another important factor is who will actually perform the procedure. In many cases, patients communicate with coordinators or sales teams rather than the medical professionals themselves. It is important to clarify the role of the surgeon, their experience, and how involved they will be in your treatment.",
      },
      {
        type: "paragraph",
        content:
          "Aftercare is one of the most overlooked parts of treatment abroad. A procedure does not end when you leave the clinic. Recovery, follow-up communication, and what happens once you return to the UK are all part of the overall outcome. A well-structured treatment pathway should make these stages clear in advance.",
      },
      {
        type: "heading",
        content: "Why UK patients often want clearer coordination",
      },
      {
        type: "paragraph",
        content:
          "For UK-based patients, communication and clarity before travel can significantly affect confidence. This is where a more structured coordination approach can help. Instead of navigating multiple clinics individually, having a clearer process and a more organised starting point can reduce uncertainty.",
      },
      {
        type: "paragraph",
        content:
          "It is also important to consider whether the treatment environment matches your needs. Some procedures may be better suited to specialist-heavy environments such as those found in larger cities. Others may benefit from a more recovery-focused setting.",
      },
      {
        type: "linkParagraph",
        contentBefore:
          "Patients who are still deciding between destinations may also want to compare ",
        linkText: "treatment in Istanbul",
        href: "/treatment-in-istanbul",
        contentAfter:
          " with Antalya before making a decision about the best overall fit.",
      },
      {
        type: "paragraph",
        content:
          "Ultimately, treatment in Turkey can be a viable and positive option for some patients, but only when approached with care. The safest outcomes tend to come from structured planning, realistic expectations, and choosing providers based on suitability rather than visibility or price alone.",
      },
      {
        type: "linkParagraph",
        contentBefore:
          "If you are still exploring your options, it may help to start with a broader overview of treatment pathways before narrowing down specific clinics. You can learn more here: ",
        linkText: "Treatment in Turkey",
        href: "/treatment-in-turkey",
        contentAfter: ".",
      },
    ],
    ctaTitle: "Considering treatment in Turkey?",
    ctaText:
      "If you are exploring options, you can request a private consultation to better understand your situation, possible next steps, and whether Istanbul or Antalya may be a better fit.",
    ctaLinks: [
      {
        label: "Request consultation",
        href: "/#form",
        variant: "primary",
      },
      {
        label: "Explore treatment in Turkey",
        href: "/treatment-in-turkey",
      },
      {
        label: "View Istanbul treatments",
        href: "/treatment-in-istanbul",
      },
    ],
  },
  {
    slug: "istanbul-or-antalya-for-treatment-in-turkey",
    title: "Istanbul or Antalya: which is better for treatment in Turkey?",
    description:
      "A clearer comparison of Istanbul vs Antalya for patients considering treatment in Turkey, including specialist access, recovery environment, and experience.",
    sections: [
      {
        type: "paragraph",
        content:
          "When researching treatment in Turkey, most UK-based patients quickly come across two main destinations: Istanbul and Antalya. While both are well-known and widely used for private treatment, they offer very different experiences. Choosing the right one is less about which is better and more about which is more suitable for your specific situation.",
      },
      {
        type: "heading",
        content: "Why Istanbul may suit more complex treatment pathways",
      },
      {
        type: "paragraph",
        content:
          "Istanbul is generally associated with a more complex and specialist-led healthcare environment. As one of the largest cities in the region, it has access to a wider range of hospitals, advanced facilities, and specialist doctors. This often makes it a stronger choice for patients considering more complex procedures or cases that require a higher level of clinical infrastructure.",
      },
      {
        type: "paragraph",
        content:
          "Patients who need access to multiple specialists, more advanced diagnostics, or highly structured clinical pathways often feel more aligned with what Istanbul offers. The scale of the city allows for a broader range of treatment options, but it can also make the process feel more overwhelming without guidance.",
      },
      {
        type: "heading",
        content: "Why Antalya appeals to many recovery-focused patients",
      },
      {
        type: "paragraph",
        content:
          "Antalya, on the other hand, is often chosen for a different reason. It is typically associated with a calmer, more recovery-focused environment. Many patients prefer Antalya because of its coastal setting, more relaxed atmosphere, and the feeling that it is better suited for rest and recovery after treatment.",
      },
      {
        type: "paragraph",
        content:
          "This can be particularly relevant for procedures where the recovery experience plays a significant role. A quieter setting can sometimes make the overall journey feel more comfortable, especially for patients who value privacy and a slower pace during recovery.",
      },
      {
        type: "heading",
        content: "How to decide between the two",
      },
      {
        type: "bulletList",
        items: [
          "Choose based on treatment type, not just destination image.",
          "Think about whether you need broad specialist access.",
          "Consider how important a calm recovery environment is to you.",
          "Decide how much structure and guidance you want during the journey.",
        ],
      },
      {
        type: "paragraph",
        content:
          "However, the decision should not be based purely on lifestyle preference. The type of treatment you are considering is one of the most important factors. Some procedures benefit from a highly specialised environment, while others can be carried out effectively in a more streamlined setting.",
      },
      {
        type: "linkParagraph",
        contentBefore:
          "If you already know that specialist access matters most, you may want to explore ",
        linkText: "medical treatment in Istanbul",
        href: "/treatment-in-istanbul",
        contentAfter:
          " in more detail before narrowing down providers.",
      },
      {
        type: "paragraph",
        content:
          "Another important factor is how the treatment pathway is structured. In larger cities like Istanbul, the number of options can create complexity. Without a clear plan, patients may feel like they are comparing too many variables at once. Antalya can sometimes feel more straightforward, but this depends heavily on the provider and the way the process is coordinated.",
      },
      {
        type: "linkParagraph",
        contentBefore:
          "Patients prioritising recovery environment and a more comfort-led experience may prefer to review ",
        linkText: "medical treatment in Antalya",
        href: "/treatment-in-antalya",
        contentAfter: " before making a final decision.",
      },
      {
        type: "paragraph",
        content:
          "In practice, there is no single answer that applies to everyone. The right destination depends on the treatment type, its complexity, your expectations around recovery, and how you want the overall experience to feel.",
      },
      {
        type: "linkParagraph",
        contentBefore:
          "If you want a broader overview before deciding between destinations, start here: ",
        linkText: "Treatment in Turkey",
        href: "/treatment-in-turkey",
        contentAfter:
          ". You can also compare destination-specific pages for a more detailed view.",
      },
    ],
    ctaTitle: "Still deciding between Istanbul and Antalya?",
    ctaText:
      "The right destination depends on your treatment type, the complexity of your case, and the kind of experience you want before and after travel.",
    ctaLinks: [
      {
        label: "Explore Istanbul",
        href: "/treatment-in-istanbul",
        variant: "primary",
      },
      {
        label: "Explore Antalya",
        href: "/treatment-in-antalya",
      },
      {
        label: "Request consultation",
        href: "/#form",
      },
    ],
  },
  {
    slug: "how-to-choose-a-clinic-in-turkey",
    title: "How to choose a clinic in Turkey more carefully",
    description:
      "A practical guide for patients on how to evaluate clinics in Turkey beyond marketing, focusing on quality, planning, and realistic expectations.",
    sections: [
      {
        type: "paragraph",
        content:
          "Choosing a clinic in Turkey can feel overwhelming, especially for UK-based patients who are researching remotely and encountering a large number of options online. At first glance, many clinics appear similar. However, the differences between them can be significant, and making the right choice requires a more careful approach.",
      },
      {
        type: "heading",
        content: "Why marketing should not be your main filter",
      },
      {
        type: "paragraph",
        content:
          "One of the biggest challenges is that marketing often simplifies what is actually a complex medical decision. Social media content, before-and-after images, and promotional pricing can create a strong first impression, but they rarely tell the full story.",
      },
      {
        type: "paragraph",
        content:
          "A more reliable starting point is to look at how the clinic approaches patient assessment. Responsible providers will not immediately confirm treatment without understanding your situation. They will ask questions, review your background, and explain whether the procedure is suitable for you.",
      },
      {
        type: "heading",
        content: "What to look for in a clinic",
      },
      {
        type: "bulletList",
        items: [
          "A clear and personalised assessment process.",
          "Transparency around who performs the procedure.",
          "Realistic communication about risks and recovery.",
          "A visible aftercare and follow-up pathway.",
          "A treatment plan that feels structured rather than rushed.",
        ],
      },
      {
        type: "paragraph",
        content:
          "If the process feels rushed or overly simplified, that is often a sign that the clinic is focused more on conversion than on proper planning. A structured assessment process is one of the strongest indicators of quality.",
      },
      {
        type: "paragraph",
        content:
          "Another important factor is understanding who will actually perform the procedure. Many patients initially communicate with coordinators or sales teams. While this is normal, it is important to clarify the role of the medical team. Knowing the experience of the surgeon and their level of involvement in your case is essential.",
      },
      {
        type: "paragraph",
        content:
          "Transparency is another key signal. Clinics that clearly explain the procedure, potential risks, recovery expectations, and limitations tend to offer a more reliable experience. If communication feels vague, inconsistent, or overly focused on closing the booking, it is worth taking a step back.",
      },
      {
        type: "heading",
        content: "Think beyond the procedure itself",
      },
      {
        type: "paragraph",
        content:
          "Patients should also consider the full treatment journey, not just the procedure itself. This includes pre-treatment planning, the experience during treatment, and what happens after you leave the clinic. Aftercare is particularly important for patients returning to the UK, as follow-up support may need to be managed remotely.",
      },
      {
        type: "linkParagraph",
        contentBefore:
          "Many patients find it helpful to first understand the wider pathway around ",
        linkText: "treatment in Turkey",
        href: "/treatment-in-turkey",
        contentAfter:
          " before narrowing down specific providers and destinations.",
      },
      {
        type: "paragraph",
        content:
          "Another common mistake is focusing too heavily on price comparison. While cost is naturally part of the decision, the lowest option is not always the most appropriate. A more balanced approach considers quality, structure, communication, and how well the clinic aligns with your specific needs.",
      },
      {
        type: "paragraph",
        content:
          "Ultimately, choosing a clinic is about finding the right fit. The best choice is not the one that looks the most appealing online, but the one that approaches your case carefully, communicates clearly, and provides a treatment pathway that makes sense for your situation.",
      },
      {
        type: "linkParagraph",
        contentBefore:
          "If you are still at the early research stage, it may help to first understand the wider pathway before narrowing down clinics. Start here: ",
        linkText: "Treatment in Turkey",
        href: "/treatment-in-turkey",
        contentAfter: ".",
      },
    ],
    ctaTitle: "Need a more structured starting point?",
    ctaText:
      "If you are still comparing clinics, it may help to first understand the treatment pathway, the likely destination fit, and what questions matter most before you commit.",
    ctaLinks: [
      {
        label: "Explore treatment in Turkey",
        href: "/treatment-in-turkey",
        variant: "primary",
      },
      {
        label: "Start your enquiry",
        href: "/#form",
      },
      {
        label: "Compare Istanbul and Antalya",
        href: "/blog/istanbul-or-antalya-for-treatment-in-turkey",
      },
    ],
  },
];

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
    title: `${post.title} | CareBridge Health`,
    description: post.description,
    alternates: {
      canonical: `https://www.carebridgehealth.co/blog/${post.slug}`,
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