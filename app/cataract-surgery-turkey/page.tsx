import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Cataract Surgery Turkey 2026: Cost, Lenses & Recovery",
  description: "Compare cataract surgery in Turkey, lens options, treatment costs and recovery guidance for international patients.",
  alternates: {
    canonical: "/cataract-surgery-turkey",
  },
};

export default function CataractSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Cataract Surgery Turkey"
      title="Cataract surgery in Turkey with clearer planning before you travel"
      intro="Cataract surgery is a common eye procedure, but choosing treatment abroad still requires careful planning. CareBridge Health helps patients explore cataract treatment pathways in Turkey with clearer communication and structured coordination before making decisions."
      heroNote="Cataract treatment should consider eye health, lens options, medical history, vision goals, recovery, and specialist ophthalmology assessment."
      suitableFor={[
        "Patients researching cataract surgery abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients who want clearer guidance before choosing an eye treatment provider.",
      ]}
      whyTurkey={[
        "Turkey offers access to specialist ophthalmology providers and modern eye treatment facilities.",
        "Many patients compare treatment abroad alongside private UK options.",
        "Lens choice, assessment quality, and provider experience are important considerations.",
      ]}
      processSteps={[
        "You share your eye health background, current diagnosis if available, and treatment goals.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and treatment planning.",
      ]}
      faq={[
        {
          question: "Is cataract surgery suitable for everyone?",
          answer:
            "Suitability depends on eye health, cataract severity, medical history, vision goals, and assessment by qualified ophthalmology professionals.",
        },
        {
          question: "Can lens options be discussed before travelling?",
          answer:
            "Providers may explain potential lens options after reviewing your situation, but final recommendations require specialist eye assessment.",
        },
        {
          question: "How long is recovery after cataract surgery?",
          answer:
            "Recovery varies between patients. The treating provider will explain expected healing, aftercare, and travel guidance.",
        },
      ]}
    />
  );
}
