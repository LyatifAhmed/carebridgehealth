import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Tummy Tuck Turkey: Cost, Recovery & UK Guide",
  description:
    "Considering a tummy tuck in Turkey? Explore abdominoplasty options with clearer planning, realistic expectations, and private UK-based coordination.",
  alternates: {
    canonical: "/tummy-tuck-turkey",
  },
};

export default function TummyTuckTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Tummy Tuck Turkey"
      title="Tummy tuck in Turkey with clearer planning before you travel"
      intro="A tummy tuck, also known as abdominoplasty, is a commonly researched cosmetic surgery procedure in Turkey. CareBridge Health helps patients approach the process with clearer communication, realistic expectations, and structured coordination before making decisions."
      heroNote="A tummy tuck is not the same as liposuction. It may involve skin removal, abdominal wall repair, and body contouring depending on individual suitability and medical assessment."
      suitableFor={[
        "Patients researching abdominoplasty or tummy tuck surgery abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients who want help understanding the questions to ask before choosing a provider.",
      ]}
      whyTurkey={[
        "Turkey is a recognised destination for cosmetic surgery procedures.",
        "Many patients explore Turkey because of private healthcare access and overall value.",
        "Careful provider selection matters because treatment plans can vary significantly.",
      ]}
      processSteps={[
        "You share your goals, concerns, and relevant background information.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and planning.",
      ]}
      faq={[
        {
          question: "Is a tummy tuck the same as liposuction?",
          answer:
            "No. Liposuction focuses on fat removal and contouring, while a tummy tuck may involve removing excess skin and repairing abdominal muscles depending on the case.",
        },
        {
          question: "Who may consider tummy tuck surgery?",
          answer:
            "Suitability depends on individual health, body changes, skin laxity, previous surgery, pregnancy history, and assessment by qualified medical professionals.",
        },
        {
          question: "How long is recovery after a tummy tuck?",
          answer:
            "Recovery varies depending on the procedure and the patient. The treating provider will explain expected recovery, aftercare, and travel guidance.",
        },
      ]}
    />
  );
}
