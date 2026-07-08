import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Dental Veneers Turkey: Cost, Smile Design & Clinics",
  description:
    "Explore dental veneers in Turkey with UK-based coordination. Get support with planning, clinic matching, treatment questions, and next-step guidance before travelling.",
};

export default function VeneersTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Dental veneers Turkey"
      title="Dental veneers in Turkey with a more informed planning process"
      intro="Dental veneers are one of the most popular cosmetic dental treatments for patients seeking smile improvements. CareBridge Health helps you better understand the planning process before making any major treatment decisions."
      heroNote="Veneers often involve permanent changes to natural teeth. Understanding the long-term implications, maintenance requirements, and treatment alternatives is important before proceeding."
      suitableFor={[
        "Patients considering porcelain or composite veneers.",
        "People looking to improve the appearance of stained, worn, or uneven teeth.",
        "Patients comparing private veneer treatment options in Turkey with UK pricing.",
      ]}
      whyTurkey={[
        "Turkey is a popular destination for cosmetic dental treatments.",
        "Many patients explore veneers abroad due to private treatment costs in the UK.",
        "Specialist clinics often offer comprehensive smile design planning.",
      ]}
      processSteps={[
        "You tell us about your goals, concerns, and what you would like to improve about your smile.",
        "We help explain important considerations, treatment alternatives, and planning questions before travelling.",
        "If suitable, we help coordinate the next stage with the appropriate dental provider route.",
      ]}
      faq={[
        {
          question: "Do veneers last forever?",
          answer:
            "No. Veneers can last many years with proper care, but they may eventually require maintenance or replacement depending on the material used and individual circumstances.",
        },
        {
          question: "Are veneers reversible?",
          answer:
            "In many cases, veneers involve preparation of the natural teeth, which may make the treatment irreversible. A dental professional should explain this clearly before treatment.",
        },
        {
          question: "Are veneers better than crowns?",
          answer:
            "Not necessarily. The most appropriate option depends on your dental condition, tooth structure, and treatment goals. A proper clinical assessment is required.",
        },
      ]}
    />
  );
}
