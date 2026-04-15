import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Eye Treatment Turkey | UK-Based Coordination",
  description:
    "Considering eye treatment in Turkey? Explore a more informed route with UK-based coordination and private treatment planning support.",
  alternates: {
    canonical: "/eye-treatment-turkey",
  },
};

export default function EyeTreatmentTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Eye treatment Turkey"
      title="Eye treatment in Turkey with more confidence in the planning stage"
      intro="Patients exploring eye treatment in Turkey often want a balance of quality, efficiency, and value. CareBridge Health helps you approach that journey more carefully, with clearer coordination before you proceed."
      heroNote="Eye treatment decisions should be made carefully and only after proper medical review. The right route depends on your diagnosis, treatment goals, and specialist opinion."
      suitableFor={[
        "Patients looking into private eye treatment abroad.",
        "People who want help understanding the treatment pathway before choosing a clinic.",
        "Patients who value a more guided and discreet coordination process.",
      ]}
      whyTurkey={[
        "Turkey has a strong private healthcare sector with broad patient interest.",
        "Some patients seek shorter access times or better value than at home.",
        "The treatment pathway can still vary a lot depending on condition and complexity.",
      ]}
      processSteps={[
        "You tell us what type of eye treatment you are considering and any relevant context.",
        "We help clarify what questions and planning points matter before you move ahead.",
        "If suitable, we support the next coordination stage for treatment planning.",
      ]}
      faq={[
        {
          question: "Can you help with laser eye treatment and other eye procedures?",
          answer:
            "We can help at a coordination level, but final suitability depends entirely on medical review by the treating specialists.",
        },
        {
          question: "Should I choose based on price alone?",
          answer:
            "No. Eye treatment should be approached very carefully. Quality of review, specialist suitability, and treatment appropriateness matter far more than headline pricing.",
        },
        {
          question: "Do you provide the treatment yourselves?",
          answer:
            "No. We provide coordination support. The medical evaluation and treatment remain with licensed providers and clinicians.",
        },
      ]}
    />
  );
}