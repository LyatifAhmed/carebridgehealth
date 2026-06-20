export type BlogSection =
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

export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  sections: BlogSection[];
  ctaTitle: string;
  ctaText: string;
  ctaLinks: CtaLink[];
};