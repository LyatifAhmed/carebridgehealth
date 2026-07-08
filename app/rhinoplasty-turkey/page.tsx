import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Rhinoplasty Turkey 2026: Cost, Recovery & Surgeon Guide",
  description: "Learn about rhinoplasty in Turkey including costs, recovery, surgeon selection and what UK patients should consider before booking.",
  alternates: {
    canonical: "/rhinoplasty-turkey",
  },
};

export default function RhinoplastyTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Rhinoplasty Turkey"
      title="Rhinoplasty in Turkey with clearer planning before you travel"
      intro="Rhinoplasty is one of the most researched cosmetic surgery procedures in Turkey. CareBridge Health helps patients approach the process more carefully, with clearer communication, realistic expectations, and structured coordination before making any commitment."
      heroNote="Nose surgery is highly individual. A good plan should consider breathing, facial balance, previous surgery, skin thickness, expectations, and recovery — not just before-and-after photos."
      suitableFor={[
        "Patients researching nose surgery in Turkey.",
        "People comparing private UK options with treatment abroad.",
        "Patients who want help understanding questions to ask before choosing a provider.",
      ]}
      whyTurkey={[
        "Turkey is widely known for cosmetic surgery and rhinoplasty treatment.",
        "Many patients compare Turkey because of private healthcare access and overall value.",
        "The number of providers is large, so careful filtering and communication are important.",
      ]}
      processSteps={[
        "You share what you are considering, your main concerns, and whether this is a first rhinoplasty or revision case.",
        "We help clarify what information and questions matter before moving forward.",
        "If suitable, we support the next stage of communication with an appropriate provider route.",
      ]}
      faq={[
        {
          question: "Is rhinoplasty in Turkey suitable for everyone?",
          answer:
            "No. Suitability depends on your health, anatomy, expectations, breathing concerns, previous surgery history, and medical assessment by the treating provider.",
        },
        {
          question: "Is revision rhinoplasty different from first-time rhinoplasty?",
          answer:
            "Yes. Revision rhinoplasty is usually more complex and requires careful assessment. Patients with previous nose surgery should make this clear from the beginning.",
        },
        {
          question: "Can I get a treatment plan before travelling?",
          answer:
            "Providers may be able to give an initial view after reviewing photos and background information, but final suitability and treatment planning must come from qualified medical professionals.",
        },
      ]}
    />
  );
}
