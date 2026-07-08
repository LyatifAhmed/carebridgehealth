import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Liposuction Turkey: Cost, Recovery & Clinic Guide",
  description:
    "Considering liposuction in Turkey? Explore treatment options with clearer planning, realistic expectations, and private UK-based coordination.",
  alternates: {
    canonical: "/liposuction-turkey",
  },
};

export default function LiposuctionTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Liposuction Turkey"
      title="Liposuction in Turkey with clearer guidance before you travel"
      intro="Liposuction is one of the most requested cosmetic procedures in Turkey. CareBridge Health helps patients approach treatment more carefully, with realistic expectations, structured planning, and clearer communication before making decisions."
      heroNote="Liposuction is a body contouring procedure, not a weight-loss solution. Suitability depends on overall health, body composition, goals, and professional medical assessment."
      suitableFor={[
        "Patients researching body contouring procedures abroad.",
        "People seeking clearer information before choosing a provider.",
        "Individuals comparing private UK options with treatment in Turkey.",
      ]}
      whyTurkey={[
        "Turkey is a popular destination for cosmetic surgery procedures.",
        "Many patients explore treatment options because of private healthcare access and value.",
        "The large number of providers makes careful selection important.",
      ]}
      processSteps={[
        "You share your goals, concerns, and relevant background information.",
        "We help explain the information providers typically need for assessment.",
        "If suitable, we support the next stage of provider communication and planning.",
      ]}
      faq={[
        {
          question: "Is liposuction a weight-loss procedure?",
          answer:
            "No. Liposuction is generally considered a body contouring procedure rather than a treatment for significant weight loss.",
        },
        {
          question: "Which areas can be treated?",
          answer:
            "This depends on the individual case and medical assessment. Providers will determine suitability after reviewing your situation.",
        },
        {
          question: "How long is recovery after liposuction?",
          answer:
            "Recovery varies between patients and treatment plans. The treating provider will explain expected recovery and aftercare requirements.",
        },
      ]}
    />
  );
}
