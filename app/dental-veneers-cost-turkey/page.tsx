import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Dental Veneers Cost Turkey 2026: Prices, Materials & Packages",
  description: "Find out how much dental veneers cost in Turkey, what affects pricing and how UK patients can compare treatment options.",
};

export default function DentalVeneersCostTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Dental veneers cost Turkey"
      title="Understanding dental veneers costs in Turkey"
      intro="Many UK patients explore veneers in Turkey when comparing cosmetic dentistry options. Understanding what affects cost is important before making treatment decisions."
      heroNote="Veneer pricing can vary depending on the number of teeth treated, materials used, smile design requirements, and the complexity of the case."
      suitableFor={[
        "Patients researching veneer costs in Turkey.",
        "People comparing cosmetic dental treatment options.",
        "Patients wanting a clearer understanding of smile makeover planning.",
      ]}
      whyTurkey={[
        "Turkey is a popular destination for cosmetic dentistry.",
        "Many clinics specialise in smile design treatments.",
        "Patients often compare quality, planning, and overall value.",
      ]}
      processSteps={[
        "You explain your goals and what you would like to improve.",
        "We help clarify treatment options, planning considerations, and common questions.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      faq={[
        {
          question: "Why do veneer prices vary?",
          answer:
            "Costs may differ depending on the number of veneers, material selection, clinic standards, smile design complexity, and treatment planning requirements.",
        },
        {
          question: "Are porcelain veneers more expensive?",
          answer:
            "In many cases porcelain veneers cost more than composite alternatives, although suitability depends on individual circumstances.",
        },
        {
          question: "Can I receive a quote before travelling?",
          answer:
            "Many clinics can provide an initial estimate based on photos and information, although a detailed assessment may still be required.",
        },
      ]}
    />
  );
}
