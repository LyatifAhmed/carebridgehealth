import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Labiaplasty Turkey: Cost, Recovery & Clinic Guide",
  description:
    "Considering labiaplasty in Turkey? Explore discreet treatment pathways with clearer planning, private UK-based coordination, and careful provider communication.",
  alternates: {
    canonical: "/labiaplasty-turkey",
  },
};

export default function LabiaplastyTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Labiaplasty Turkey"
      title="Labiaplasty in Turkey with discreet coordination before you travel"
      intro="Labiaplasty is a personal and sensitive procedure. CareBridge Health helps patients explore treatment pathways in Turkey with privacy, clearer communication, and structured coordination before making any commitment."
      heroNote="Labiaplasty suitability, surgical approach, risks, recovery, and expected outcomes must always be discussed with qualified medical professionals."
      suitableFor={[
        "Patients researching labiaplasty or intimate aesthetic surgery abroad.",
        "Women seeking a private and discreet route before speaking directly with providers.",
        "Patients who want clearer guidance before choosing a treatment pathway.",
      ]}
      whyTurkey={[
        "Turkey offers access to experienced gynaecological and aesthetic providers.",
        "Many patients explore Turkey because of private healthcare access and overall value.",
        "Privacy, provider selection, and communication are especially important for sensitive procedures.",
      ]}
      processSteps={[
        "You share your concerns and treatment goals privately.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of discreet provider communication and planning.",
      ]}
      faq={[
        {
          question: "Is labiaplasty suitable for everyone?",
          answer:
            "No. Suitability depends on individual anatomy, symptoms, expectations, health status, and assessment by qualified medical professionals.",
        },
        {
          question: "Can the process be handled discreetly?",
          answer:
            "Yes. CareBridge Health approaches sensitive enquiries with privacy and discretion, but medical assessment and treatment decisions remain with the provider.",
        },
        {
          question: "How long is recovery after labiaplasty?",
          answer:
            "Recovery varies between patients. The treating provider will explain expected healing, aftercare, activity restrictions, and travel guidance.",
        },
      ]}
    />
  );
}
