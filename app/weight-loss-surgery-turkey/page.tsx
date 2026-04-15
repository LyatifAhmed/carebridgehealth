import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Weight Loss Surgery Turkey | UK-Based Coordination",
  description:
    "Explore weight loss surgery in Turkey with UK-based coordination. Get support understanding options, planning, and next-step considerations.",
  alternates: {
    canonical: "/weight-loss-surgery-turkey",
  },
};

export default function WeightLossSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Weight loss surgery Turkey"
      title="Weight loss surgery in Turkey with a more considered patient journey"
      intro="Weight loss surgery is a major decision that can affect long-term health, lifestyle, and follow-up needs. CareBridge Health helps patients understand the pathway more clearly before taking the next step."
      heroNote="Bariatric treatment should never be approached as a quick purchase. Proper assessment, expectations, and post-treatment planning are essential."
      suitableFor={[
        "Patients researching bariatric options abroad.",
        "People looking for a more organised path through a complex decision.",
        "Patients who want support understanding what to ask before committing.",
      ]}
      whyTurkey={[
        "Turkey is frequently considered for bariatric treatment because of access and pricing.",
        "Patients often explore options there when UK private treatment feels less accessible.",
        "The right decision depends on more than cost alone, especially for long-term follow-up.",
      ]}
      processSteps={[
        "You share your goals, background, and where you are in the decision-making process.",
        "We help you understand the planning issues that matter before moving forward.",
        "If suitable, we support the next stage of coordination with the relevant provider route.",
      ]}
      faq={[
        {
          question: "Is weight loss surgery a quick fix?",
          answer:
            "No. It is a significant medical intervention that requires appropriate assessment, commitment, and post-treatment follow-up.",
        },
        {
          question: "What should I think about before going abroad for bariatric treatment?",
          answer:
            "You should think about suitability, aftercare, follow-up planning, travel timing, and the seriousness of the recovery process.",
        },
        {
          question: "Can you give medical advice?",
          answer:
            "No. We can help coordinate and guide the journey, but individual medical advice must come from qualified clinicians and the treating team.",
        },
      ]}
    />
  );
}