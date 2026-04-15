import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Hair Transplant Turkey | UK-Based Coordination",
  description:
    "Considering a hair transplant in Turkey? Explore a more informed and supported route with private UK-based coordination through CareBridge Health.",
  alternates: {
    canonical: "/hair-transplant-turkey",
  },
};

export default function HairTransplantTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Hair transplant Turkey"
      title="Hair transplant in Turkey with clearer guidance from the start"
      intro="Turkey is one of the most searched destinations for hair transplant treatment. CareBridge Health helps patients approach that decision more carefully, with better coordination, realistic expectations, and support before they commit."
      heroNote="Hair restoration is not one-size-fits-all. The right approach depends on hair loss pattern, donor area quality, age, expectations, and long-term planning."
      suitableFor={[
        "Men or women researching hair transplant options abroad.",
        "Patients who want a more structured route instead of messaging random clinics directly.",
        "People who want help comparing quality, approach, and suitability rather than price alone.",
      ]}
      whyTurkey={[
        "Turkey is internationally known for high patient volume in hair restoration.",
        "Many patients are drawn by value compared with UK private options.",
        "The market is broad, which makes careful filtering especially important.",
      ]}
      processSteps={[
        "You share your current concerns, goals, and any available photos or background information.",
        "We help you understand the kind of assessment that matters before moving forward.",
        "If suitable, we support the next stage of clinic coordination and treatment planning.",
      ]}
      faq={[
        {
          question: "Am I a good candidate for a hair transplant?",
          answer:
            "That depends on your donor area, hair loss pattern, age, and long-term expectations. A proper medical assessment is needed before any responsible decision is made.",
        },
        {
          question: "Is the cheapest clinic the best option?",
          answer:
            "Not necessarily. Low price alone should never be the main reason for choosing a provider. Technique, surgeon involvement, planning, and aftercare all matter.",
        },
        {
          question: "How long should I stay in Turkey?",
          answer:
            "That depends on the treatment plan and clinic instructions, but many patients typically plan a short stay around the procedure and early recovery period.",
        },
      ]}
    />
  );
}