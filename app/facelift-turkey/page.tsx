import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Facelift Turkey 2026: Cost, Recovery & Results",
  description: "Explore facelift surgery in Turkey, treatment costs, recovery expectations and practical guidance for UK patients.",
  alternates: {
    canonical: "/facelift-turkey",
  },
};

export default function FaceliftTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Facelift Turkey"
      title="Facelift surgery in Turkey with clearer planning before you travel"
      intro="Facelift surgery is a widely researched cosmetic procedure for patients looking to address visible signs of ageing. CareBridge Health helps patients approach treatment with clearer communication, realistic expectations, and structured coordination before making decisions."
      heroNote="Facial rejuvenation procedures should be approached carefully, taking into account facial anatomy, skin quality, recovery, expectations, and medical suitability."
      suitableFor={[
        "Patients researching facelift surgery abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients looking for a more structured route before choosing a provider.",
      ]}
      whyTurkey={[
        "Turkey is a recognised destination for cosmetic surgery procedures.",
        "Many patients explore Turkey because of private healthcare access and overall value.",
        "A large provider market makes careful selection and planning especially important.",
      ]}
      processSteps={[
        "You share your goals, concerns, and relevant background information.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and planning.",
      ]}
      faq={[
        {
          question: "What can a facelift address?",
          answer:
            "A facelift may be considered for concerns related to facial ageing, skin laxity, and facial contour changes. Suitability must be assessed by qualified medical professionals.",
        },
        {
          question: "Are there different types of facelift procedures?",
          answer:
            "Yes. Providers may use different techniques depending on anatomy, goals, and medical assessment.",
        },
        {
          question: "How long is recovery after facelift surgery?",
          answer:
            "Recovery varies depending on the procedure and individual circumstances. The treating provider will explain expected recovery and aftercare requirements.",
        },
      ]}
    />
  );
}
