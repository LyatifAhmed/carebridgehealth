import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Hair Transplant Cost Turkey: Prices, Grafts & UK Guide",
  description:
    "Learn about hair transplant costs in Turkey, what affects pricing, and how UK-based patients can explore treatment options with structured coordination and planning support.",
};

export default function HairTransplantCostTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Hair transplant cost Turkey"
      title="Understanding hair transplant costs in Turkey"
      intro="Many UK patients explore hair transplant treatment in Turkey because of the large number of specialist clinics and the potential cost difference compared with private treatment in the UK. Understanding what influences pricing is often more important than focusing on the lowest quote."
      heroNote="The cheapest option is not always the best option. Experience, technique, clinic standards, aftercare, and the complexity of the case can all influence both cost and outcome."
      suitableFor={[
        "Patients researching hair transplant costs before travelling.",
        "People comparing private UK and Turkey treatment options.",
        "Patients who want a better understanding of what affects pricing.",
      ]}
      whyTurkey={[
        "Turkey is one of the most recognised destinations for hair transplant treatment.",
        "Many clinics focus heavily on international patients.",
        "Patients often compare overall value rather than headline prices alone.",
      ]}
      processSteps={[
        "You tell us about your hair loss concerns and goals.",
        "We help explain common treatment approaches, planning considerations, and what factors influence pricing.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      faq={[
        {
          question: "Why do hair transplant prices vary so much?",
          answer:
            "Pricing can vary depending on the clinic, surgeon involvement, treatment technique, graft requirements, aftercare support, and the complexity of the case.",
        },
        {
          question: "Does a higher price guarantee a better result?",
          answer:
            "No. Price alone does not determine quality. Patients should consider experience, reputation, treatment planning, communication, and clinical standards.",
        },
        {
          question: "Can I get an accurate quote before travelling?",
          answer:
            "Many clinics can provide an initial estimate based on photos and information provided, although a final assessment may require an in-person consultation.",
        },
      ]}
    />
  );
}
