import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Urinary Incontinence Surgery Turkey | UK-Based Coordination",
  description:
    "Considering urinary incontinence surgery in Turkey? Explore specialist-led treatment pathways with clearer planning, private UK-based coordination, and structured communication.",
  alternates: {
    canonical: "/urinary-incontinence-surgery-turkey",
  },
};

export default function UrinaryIncontinenceSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Urinary Incontinence Surgery Turkey"
      title="Urinary incontinence surgery in Turkey with clearer guidance from the start"
      intro="Urinary incontinence can have a significant impact on daily life and confidence. CareBridge Health helps patients explore specialist-led treatment pathways in Turkey through structured coordination and clearer communication before travelling."
      heroNote="Treatment options vary depending on symptoms, diagnosis, previous treatments, and individual circumstances. Medical suitability must always be assessed by qualified healthcare professionals."
      suitableFor={[
        "Patients researching urinary incontinence treatment abroad.",
        "Women seeking specialist-led pelvic health pathways.",
        "Patients wanting clearer information before speaking directly with providers.",
      ]}
      whyTurkey={[
        "Turkey offers access to specialist gynaecological and pelvic health providers.",
        "Many patients explore treatment abroad alongside private UK options.",
        "Specialist hospital environments may provide broader treatment pathways.",
      ]}
      processSteps={[
        "You share your symptoms, concerns, and relevant medical history.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of communication and treatment planning.",
      ]}
      faq={[
        {
          question: "Is surgery always required for urinary incontinence?",
          answer:
            "No. Treatment options vary depending on the type and severity of symptoms. Providers may discuss both surgical and non-surgical approaches where appropriate.",
        },
        {
          question: "Can my suitability be assessed before travelling?",
          answer:
            "An initial review may be possible based on your history and available information, but treatment recommendations require assessment by qualified medical professionals.",
        },
        {
          question: "How long is recovery after urinary incontinence surgery?",
          answer:
            "Recovery depends on the procedure performed and individual circumstances. The treating provider will explain expected recovery and aftercare requirements.",
        },
      ]}
    />
  );
}
