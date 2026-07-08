import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Breast Augmentation Turkey 2026: Cost, Implants & Recovery",
  description: "Compare breast augmentation surgery in Turkey, implant options, expected costs, recovery and treatment planning.",
  alternates: {
    canonical: "/breast-augmentation-turkey",
  },
};

export default function BreastAugmentationTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Breast Augmentation Turkey"
      title="Breast augmentation in Turkey with clearer planning before you travel"
      intro="Breast augmentation is one of the most researched cosmetic surgery procedures in Turkey. CareBridge Health helps patients approach the process more carefully, with structured coordination and clearer communication before making decisions."
      heroNote="Breast augmentation planning should consider implant type, size, placement, body proportions, medical suitability, recovery, and realistic expectations."
      suitableFor={[
        "Patients researching breast augmentation surgery abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients who want a clearer route before choosing a provider.",
      ]}
      whyTurkey={[
        "Turkey is a recognised destination for cosmetic surgery procedures.",
        "Many patients explore Turkey because of private healthcare access and overall value.",
        "The large provider market makes careful selection and communication important.",
      ]}
      processSteps={[
        "You share your goals, concerns, and relevant background information.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and planning.",
      ]}
      faq={[
        {
          question: "Is breast augmentation suitable for everyone?",
          answer:
            "No. Suitability depends on health, anatomy, expectations, previous surgery history, and assessment by qualified medical professionals.",
        },
        {
          question: "Can implant size be decided before travelling?",
          answer:
            "An initial discussion may be possible, but final decisions about implant size, placement, and suitability must be made with the treating provider.",
        },
        {
          question: "How long is recovery after breast augmentation?",
          answer:
            "Recovery varies depending on the individual and treatment plan. The treating provider will explain expected recovery, aftercare, and travel guidance.",
        },
      ]}
    />
  );
}
