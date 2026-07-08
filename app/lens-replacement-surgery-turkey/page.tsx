import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Lens Replacement Surgery Turkey 2026: Cost, Lenses & Recovery",
  description: "Learn about lens replacement surgery in Turkey, expected costs, recovery and available treatment options.",
  alternates: {
    canonical: "/lens-replacement-surgery-turkey",
  },
};

export default function LensReplacementSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Lens Replacement Surgery Turkey"
      title="Lens replacement surgery in Turkey with clearer planning before you travel"
      intro="Lens replacement surgery is increasingly considered by patients seeking greater visual independence or exploring alternatives to glasses and contact lenses. CareBridge Health helps patients explore treatment pathways in Turkey with structured coordination and clearer communication."
      heroNote="Lens replacement surgery requires careful assessment of eye health, age, prescription, lifestyle, expectations, and suitability by qualified ophthalmology professionals."
      suitableFor={[
        "Patients researching lens replacement surgery abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients seeking a clearer route before choosing an eye treatment provider.",
      ]}
      whyTurkey={[
        "Turkey offers access to specialist ophthalmology providers and modern eye treatment facilities.",
        "Many patients compare treatment abroad alongside private UK options.",
        "Provider experience, technology, and lens selection are important considerations.",
      ]}
      processSteps={[
        "You share your vision concerns, treatment goals, and any relevant eye health information.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and treatment planning.",
      ]}
      faq={[
        {
          question: "What is lens replacement surgery?",
          answer:
            "Lens replacement surgery involves replacing the eye's natural lens with an artificial lens. Suitability depends on individual circumstances and specialist assessment.",
        },
        {
          question: "Can lens options be discussed before travelling?",
          answer:
            "Providers may explain potential lens options after reviewing your information, but final recommendations require specialist eye assessment.",
        },
        {
          question: "How long is recovery after lens replacement surgery?",
          answer:
            "Recovery varies between patients. The treating provider will explain expected healing, aftercare requirements, and travel guidance.",
        },
      ]}
    />
  );
}
