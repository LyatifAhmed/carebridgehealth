import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "FUE Hair Transplant Turkey 2026: Cost, FUE Clinics & Recovery",
  description: "Learn how FUE hair transplants work in Turkey, expected recovery, costs, results and what to compare before choosing a clinic.",
};

export default function FueHairTransplantTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="FUE hair transplant Turkey"
      title="FUE hair transplant in Turkey with structured planning"
      intro="FUE (Follicular Unit Extraction) is one of the most widely discussed hair transplant techniques in Turkey. Many UK patients explore FUE treatment because it can offer natural-looking results when properly planned and performed."
      heroNote="The quality of a hair transplant depends on much more than the number of grafts. Hairline design, donor management, surgeon involvement, and long-term planning all matter."
      suitableFor={[
        "Patients researching FUE hair transplant treatment.",
        "People comparing private UK and Turkey options.",
        "Patients seeking more information before travelling.",
      ]}
      whyTurkey={[
        "Turkey is internationally recognised for hair transplant treatment.",
        "Many clinics specialise in FUE procedures.",
        "Patients often compare expertise, outcomes, and value rather than price alone.",
      ]}
      processSteps={[
        "You tell us about your hair loss concerns and goals.",
        "We help explain key planning considerations and treatment questions.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      faq={[
        {
          question: "What is FUE?",
          answer:
            "FUE stands for Follicular Unit Extraction, a technique where individual hair follicles are extracted and transplanted to areas affected by hair loss.",
        },
        {
          question: "Will I have visible scarring?",
          answer:
            "FUE is generally associated with minimal visible scarring, but outcomes vary depending on the individual and treatment approach.",
        },
        {
          question: "How long does recovery take?",
          answer:
            "Recovery timelines vary, but patients are usually able to resume many normal activities within a relatively short period. Clinics provide individual guidance.",
        },
      ]}
    />
  );
}
