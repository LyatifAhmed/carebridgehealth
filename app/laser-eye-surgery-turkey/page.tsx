import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Laser Eye Surgery Turkey: Cost, LASIK & Clinic Guide",
  description:
    "Considering laser eye surgery in Turkey? Explore vision correction treatment pathways with clearer planning, private UK-based coordination, and careful provider communication.",
  alternates: {
    canonical: "/laser-eye-surgery-turkey",
  },
};

export default function LaserEyeSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Laser Eye Surgery Turkey"
      title="Laser eye surgery in Turkey with clearer planning before you travel"
      intro="Laser eye surgery is one of the most researched vision correction procedures in Turkey. CareBridge Health helps patients explore treatment pathways with clearer communication, structured coordination, and realistic expectations before travelling."
      heroNote="Vision correction procedures require careful assessment of eye health, prescription stability, corneal suitability, expectations, and long-term outcomes."
      suitableFor={[
        "Patients researching laser eye surgery abroad.",
        "People comparing private UK options with treatment in Turkey.",
        "Patients wanting a more structured route before choosing a provider.",
      ]}
      whyTurkey={[
        "Turkey offers access to specialist ophthalmology providers and modern treatment facilities.",
        "Many patients compare treatment abroad alongside private UK options.",
        "Provider experience, technology, and assessment standards are important considerations.",
      ]}
      processSteps={[
        "You share your vision concerns and treatment goals.",
        "We help clarify the information providers may require for an initial review.",
        "If suitable, we support the next stage of provider communication and treatment planning.",
      ]}
      faq={[
        {
          question: "Is laser eye surgery suitable for everyone?",
          answer:
            "No. Suitability depends on prescription stability, eye health, corneal measurements, age, and assessment by qualified ophthalmology professionals.",
        },
        {
          question: "Can suitability be assessed before travelling?",
          answer:
            "Providers may offer an initial review based on available information, but final suitability requires specialist assessment.",
        },
        {
          question: "How long is recovery after laser eye surgery?",
          answer:
            "Recovery varies depending on the procedure and the individual. The treating provider will explain expected recovery and aftercare guidance.",
        },
      ]}
    />
  );
}
