import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Genital Aesthetic Surgery Turkey: Cost & Clinic Guide",
  description:
    "Considering genital aesthetic surgery in Turkey? Explore discreet treatment pathways with clearer planning, private UK-based coordination, and careful provider communication.",
  alternates: {
    canonical: "/genital-aesthetic-surgery-turkey",
  },
};

export default function GenitalAestheticSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Genital Aesthetic Surgery Turkey"
      title="Genital aesthetic surgery in Turkey with privacy and clearer guidance"
      intro="Genital aesthetic procedures are highly personal decisions. CareBridge Health helps patients explore treatment pathways in Turkey through structured coordination, discreet communication, and a more informed approach before travelling."
      heroNote="Every procedure should begin with realistic expectations, appropriate medical assessment, and careful discussion of risks, recovery, and suitability."
      suitableFor={[
        "Patients researching genital aesthetic procedures abroad.",
        "Women seeking a more private and discreet route before speaking directly with providers.",
        "Patients who want clearer communication before making treatment decisions.",
      ]}
      whyTurkey={[
        "Turkey offers access to experienced providers across a range of specialist procedures.",
        "Many patients explore Turkey because of private healthcare access and overall value.",
        "Provider selection, communication, and privacy are especially important in sensitive treatment categories.",
      ]}
      processSteps={[
        "You share your concerns and treatment goals privately.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and treatment planning.",
      ]}
      faq={[
        {
          question: "What procedures are included under genital aesthetic surgery?",
          answer:
            "The category may include different procedures depending on the patient's goals and medical assessment. Providers will explain appropriate options after reviewing individual circumstances.",
        },
        {
          question: "Can the process be handled discreetly?",
          answer:
            "Yes. CareBridge Health treats sensitive enquiries with privacy and discretion, while medical assessment and treatment decisions remain with the provider.",
        },
        {
          question: "How long is recovery after genital aesthetic surgery?",
          answer:
            "Recovery varies depending on the procedure and individual circumstances. The treating provider will explain expected recovery and aftercare requirements.",
        },
      ]}
    />
  );
}
