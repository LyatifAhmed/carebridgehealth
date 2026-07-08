import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Hysterectomy Turkey 2026: Cost, Clinics & Recovery",
  description: "Learn about hysterectomy treatment in Turkey, expected costs, recovery and what patients should know before surgery.",
  alternates: {
    canonical: "/hysterectomy-turkey",
  },
};

export default function HysterectomyTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Hysterectomy Turkey"
      title="Hysterectomy treatment in Turkey with clearer guidance from the start"
      intro="Some women considering hysterectomy treatment abroad want greater clarity before speaking directly with providers. CareBridge Health helps patients explore treatment pathways more carefully through structured coordination and communication."
      heroNote="Hysterectomy is a significant procedure. Treatment suitability, surgical approach, risks, and recovery must always be assessed by qualified medical professionals."
      suitableFor={[
        "Patients researching hysterectomy treatment options abroad.",
        "Women seeking specialist-led pathways in Turkey.",
        "Patients wanting clearer communication before moving forward.",
      ]}
      whyTurkey={[
        "Turkey offers access to experienced gynaecological providers and advanced hospital environments.",
        "Many patients explore treatment abroad alongside private UK options.",
        "Specialist-led pathways may provide access to broader provider choice.",
      ]}
      processSteps={[
        "You share your situation, concerns, and treatment goals.",
        "We help clarify the information providers typically require for review.",
        "If suitable, we support the next stage of communication and treatment planning.",
      ]}
      faq={[
        {
          question: "Is a hysterectomy suitable for everyone?",
          answer:
            "No. Suitability depends on diagnosis, symptoms, health status, treatment history, and medical assessment by qualified professionals.",
        },
        {
          question: "Can treatment options be discussed before travelling?",
          answer:
            "Providers may offer an initial review, but final recommendations and suitability assessments require medical evaluation.",
        },
        {
          question: "How long is recovery after hysterectomy surgery?",
          answer:
            "Recovery varies depending on the procedure and individual circumstances. The treating provider will explain recovery expectations and aftercare requirements.",
        },
      ]}
    />
  );
}
