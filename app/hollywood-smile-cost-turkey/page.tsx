import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Hollywood Smile Cost Turkey: Prices & Treatment Guide",
  description:
    "Learn what influences Hollywood Smile costs in Turkey and explore treatment planning with UK-based coordination before travelling.",
};

export default function HollywoodSmileCostTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Hollywood Smile cost Turkey"
      title="Understanding Hollywood Smile costs in Turkey"
      intro="Many UK patients researching cosmetic dentistry compare Hollywood Smile treatment options in Turkey. Understanding what affects cost is an important part of making an informed decision."
      heroNote="A Hollywood Smile is not a single procedure. Costs can vary significantly depending on veneers, crowns, whitening, gum contouring, and the complexity of the case."
      suitableFor={[
        "Patients researching Hollywood Smile costs.",
        "People comparing cosmetic dentistry options in Turkey.",
        "Patients wanting a clearer understanding of treatment planning.",
      ]}
      whyTurkey={[
        "Turkey is internationally known for cosmetic dentistry.",
        "Many clinics focus on smile design and international patients.",
        "Patients often compare overall value rather than headline prices.",
      ]}
      processSteps={[
        "You tell us what you would like to improve about your smile.",
        "We help explain common treatment approaches and planning considerations.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      faq={[
        {
          question: "Why do Hollywood Smile prices vary?",
          answer:
            "Pricing depends on the number of teeth involved, materials used, treatment complexity, clinic standards, and overall treatment design.",
        },
        {
          question: "Does every Hollywood Smile use veneers?",
          answer:
            "No. Some cases involve veneers, while others may include crowns, whitening, orthodontics, or a combination of treatments.",
        },
        {
          question: "Can I get an estimate before travelling?",
          answer:
            "Many clinics can provide an initial estimate based on photos and information, although final planning may require further assessment.",
        },
      ]}
    />
  );
}
