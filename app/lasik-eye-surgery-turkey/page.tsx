import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "LASIK Eye Surgery Turkey 2026: Cost, Recovery & Clinics",
  description: "Learn about LASIK eye surgery in Turkey including prices, recovery, clinic comparison and suitability for UK patients.",
  alternates: {
    canonical: "/lasik-eye-surgery-turkey",
  },
};

export default function LasikEyeSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="LASIK Eye Surgery Turkey"
      title="LASIK eye surgery in Turkey with clearer planning before you travel"
      intro="LASIK is one of the most recognised vision correction procedures. CareBridge Health helps patients explore LASIK treatment pathways in Turkey with clearer communication, structured coordination, and realistic expectations before making decisions."
      heroNote="LASIK suitability depends on prescription stability, corneal thickness, eye health, age, lifestyle, and specialist ophthalmology assessment."
      suitableFor={[
        "Patients researching LASIK or vision correction abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients who want a clearer route before choosing a provider.",
      ]}
      whyTurkey={[
        "Turkey offers access to specialist ophthalmology providers and modern treatment facilities.",
        "Many patients compare treatment abroad alongside private UK options.",
        "Technology, assessment standards, and provider experience are important considerations.",
      ]}
      processSteps={[
        "You share your vision concerns, prescription background, and treatment goals.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of provider communication and treatment planning.",
      ]}
      faq={[
        {
          question: "Is LASIK suitable for everyone?",
          answer:
            "No. Suitability depends on prescription stability, age, eye health, corneal thickness, and assessment by qualified ophthalmology professionals.",
        },
        {
          question: "Can suitability be assessed before travelling?",
          answer:
            "An initial review may be possible based on available information, but final suitability requires specialist eye assessment.",
        },
        {
          question: "How long is recovery after LASIK eye surgery?",
          answer:
            "Recovery is often relatively quick, but healing and visual stability vary between patients. The treating provider will explain expected recovery and aftercare.",
        },
      ]}
    />
  );
}
