import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Breast Lift Turkey: Cost, Recovery & Clinic Guide",
  description:
    "Considering a breast lift in Turkey? Explore mastopexy options with clearer planning, realistic expectations, and private UK-based coordination.",
  alternates: {
    canonical: "/breast-lift-turkey",
  },
};

export default function BreastLiftTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Breast Lift Turkey"
      title="Breast lift in Turkey with clearer planning before you travel"
      intro="A breast lift, also known as mastopexy, is a commonly researched cosmetic surgery procedure in Turkey. CareBridge Health helps patients approach the process with clearer communication, realistic expectations, and structured coordination before making decisions."
      heroNote="Breast lift planning should consider skin laxity, breast shape, nipple position, implant preference, scarring, recovery, and individual medical suitability."
      suitableFor={[
        "Patients researching breast lift or mastopexy surgery abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients who want a clearer route before choosing a provider.",
      ]}
      whyTurkey={[
        "Turkey is a recognised destination for cosmetic surgery procedures.",
        "Many patients explore Turkey because of private healthcare access and overall value.",
        "Careful provider selection matters because breast surgery plans can vary significantly.",
      ]}
      processSteps={[
        "You share your goals, concerns, and relevant background information.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and planning.",
      ]}
      faq={[
        {
          question: "Is a breast lift the same as breast augmentation?",
          answer:
            "No. Breast augmentation usually involves implants to increase volume, while a breast lift focuses on lifting and reshaping the breast. Some patients may consider both, depending on suitability.",
        },
        {
          question: "Will a breast lift leave scars?",
          answer:
            "Breast lift surgery usually involves incisions and scarring. The pattern and visibility depend on the technique, healing, and individual circumstances.",
        },
        {
          question: "How long is recovery after a breast lift?",
          answer:
            "Recovery varies between patients. The treating provider will explain expected recovery, aftercare, travel guidance, and activity restrictions.",
        },
      ]}
    />
  );
}
