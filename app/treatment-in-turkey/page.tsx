import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Treatment in Turkey | Private Medical Coordination from the UK",
  description:
    "Explore treatment in Turkey with private UK-based coordination. Compare Istanbul and Antalya, understand treatment pathways, and plan your next step with more clarity.",
  alternates: {
    canonical: "/treatment-in-turkey",
  },
};

export default function TreatmentInTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Treatment in Turkey"
      title="Treatment in Turkey with clearer guidance before you commit"
      intro="Turkey has become a popular option for UK-based patients seeking private treatment, shorter waiting times, and access to a wider range of clinics and specialists. CareBridge Health helps patients approach that journey more carefully, with clearer communication, better destination guidance, and a more structured starting point."
      heroNote="Our role is not to replace a clinic or a doctor. We help you understand the pathway, compare destinations more clearly, and move towards the next step with greater confidence before making any major decisions."
      extraLinks={[
        {
          textBefore: "Patients prioritising specialist-led pathways may want to explore ",
          linkText: "treatment in Istanbul",
          href: "/treatment-in-istanbul",
          textAfter: " in more detail.",
        },
        {
          textBefore: "Those looking for a calmer and more recovery-focused experience may also consider ",
          linkText: "treatment in Antalya",
          href: "/treatment-in-antalya",
          textAfter: ".",
        },
      ]}
      suitableFor={[
        "Patients comparing treatment in Turkey with private treatment in the UK or elsewhere.",
        "People looking for better value but wanting a more structured route than contacting clinics at random.",
        "Patients who want help thinking through destination, timing, recovery, and treatment planning before making decisions.",
      ]}
      whyTurkey={[
        "A broad private healthcare landscape with clinics and hospitals across multiple specialties.",
        "Competitive pricing compared with many Western private markets.",
        "Destinations such as Istanbul and Antalya can offer different strengths depending on treatment type and recovery priorities.",
      ]}
      processSteps={[
        "You tell us what treatment you are considering, your priorities, and your approximate timeframe.",
        "We review your situation and help you think more clearly about destination fit, likely next steps, and what type of pathway may suit you best.",
        "If appropriate, we guide you towards the consultation stage and help you prepare for treatment and travel planning.",
      ]}
      faq={[
        {
          question: "Is treatment in Turkey safe?",
          answer:
            "Safety depends on the clinic, doctor, facility standards, your personal medical situation, and how well the case is assessed in advance. That is why careful selection and proper review matter more than destination alone.",
        },
        {
          question: "Can you recommend one city over another?",
          answer:
            "That depends on the treatment type, complexity, recovery preferences, and budget. Istanbul often offers broader specialist access, while Antalya may appeal to patients prioritising a calmer recovery environment.",
        },
        {
          question: "Do you provide treatment directly?",
          answer:
            "No. We provide coordination and guidance around the treatment journey. Medical decisions and treatment delivery remain with the licensed clinic and doctors.",
        },
      ]}
      ctaTitle="Ready to discuss your treatment plans?"
      ctaText="If you already have a treatment in mind, the best next step is to send an enquiry. We can review your situation, understand what you are looking for, and help you decide whether Istanbul, Antalya, or another route may be more appropriate."
      primaryCtaHref="/#form"
      primaryCtaLabel="Request private consultation"
      secondaryCtaLabel="Ask a few questions first"
      tertiaryCtaHref="/blog"
      tertiaryCtaLabel="Read patient insights"
    />
  );
}