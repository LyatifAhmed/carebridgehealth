import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Treatment in Turkey for International Patients | UK-Based Coordination",
  description:
    "Explore medical treatment in Turkey from the USA, UK, Canada, Europe and beyond. Explore Istanbul with independent UK-based patient coordination.",
  alternates: {
    canonical: "/treatment-in-turkey",
  },
};

export default function TreatmentInTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Treatment in Turkey"
      title="Treatment in Turkey with clearer guidance before you commit"
      intro="For international patients exploring private medical treatment in Turkey, CareBridge Health provides independent coordination from the UK. Whether you are based in the USA, UK, Canada, Europe or elsewhere, we connect you with healthcare professionals through our doctor-led medical tourism partner’s existing network in Istanbul."
      heroNote="Our role is not to replace a clinic or a doctor. We arrange introductions and help you understand the next steps. Our local partner can also arrange flights, accommodation and airport transfers on request, subject to a separate quote."
      extraLinks={[
        {
          textBefore: "Planning to travel from another country? Explore our ",
          linkText: "international medical tourism guide",
          href: "/medical-tourism-turkey",
          textAfter: " for country-specific planning guidance.",
        },
        {
          textBefore: "Patients prioritising specialist-led pathways may want to explore ",
          linkText: "treatment in Istanbul",
          href: "/treatment-in-istanbul",
          textAfter: " in more detail.",
        },
      ]}
      suitableFor={[
        "Patients comparing treatment in Turkey with treatment options in their home country.",
        "People looking for better value but wanting a more structured route than contacting clinics at random.",
        "Patients who want help thinking through destination, timing, recovery, and treatment planning before making decisions.",
      ]}
      whyTurkey={[
        "A broad private healthcare landscape with clinics and hospitals across multiple specialties.",
        "Competitive pricing compared with many Western private markets.",
        "Istanbul offers a range of specialist pathways depending on treatment type and recovery priorities.",
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
            "Our coordination currently focuses on Istanbul. We can help you understand available options based on your treatment type, recovery preferences and budget.",
        },
        {
          question: "Do you provide treatment directly?",
          answer:
            "No. We provide coordination and guidance around the treatment journey. Medical decisions and treatment delivery remain with the licensed clinic and doctors.",
        },
      ]}
      ctaTitle="Ready to discuss your treatment plans?"
      ctaText="If you already have a treatment in mind, the best next step is to send an enquiry. We can review your situation, understand what you are looking for, and help you decide whether an Istanbul treatment pathway may be appropriate."
      primaryCtaHref="/#form"
      primaryCtaLabel="Request private consultation"
      secondaryCtaLabel="Ask a few questions first"
      tertiaryCtaHref="/blog"
      tertiaryCtaLabel="Read patient insights"
    />
  );
}
