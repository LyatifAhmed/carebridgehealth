import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Gastric Sleeve Cost Turkey | UK-Based Coordination",
  description:
    "Learn what influences gastric sleeve surgery costs in Turkey and how UK-based patients can explore treatment pathways with structured support.",
};

export default function GastricSleeveCostTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Gastric sleeve cost Turkey"
      title="Understanding gastric sleeve surgery costs in Turkey"
      intro="Many UK patients researching weight loss surgery compare treatment options in Turkey. Understanding cost factors is an important part of making an informed decision."
      heroNote="Pricing may vary depending on hospital facilities, surgeon experience, pre-operative testing, accommodation arrangements, and aftercare support."
      suitableFor={[
        "Patients researching gastric sleeve surgery costs.",
        "People comparing UK and Turkey weight loss surgery options.",
        "Patients wanting a better understanding of treatment planning.",
      ]}
      whyTurkey={[
        "Turkey is a well-known destination for bariatric surgery.",
        "Many hospitals regularly support international patients.",
        "Patients often compare overall treatment packages and support services.",
      ]}
      processSteps={[
        "You explain your goals and current situation.",
        "We help clarify common planning questions and treatment considerations.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      faq={[
        {
          question: "Why do gastric sleeve prices vary?",
          answer:
            "Pricing may differ due to hospital facilities, surgeon experience, package inclusions, testing requirements, and aftercare arrangements.",
        },
        {
          question: "Is the lowest price always best?",
          answer:
            "Not necessarily. Patients should consider clinical standards, communication quality, aftercare support, and overall suitability.",
        },
        {
          question: "Can suitability be confirmed remotely?",
          answer:
            "An initial review may be possible remotely, but final suitability decisions must come from qualified healthcare professionals.",
        },
      ]}
    />
  );
}
