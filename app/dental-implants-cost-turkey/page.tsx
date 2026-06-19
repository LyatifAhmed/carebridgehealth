import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Dental Implants Cost Turkey | UK-Based Coordination",
  description:
    "Learn what influences dental implant costs in Turkey and how UK-based patients can explore treatment options with clearer planning and coordination.",
};

export default function DentalImplantsCostTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Dental implants cost Turkey"
      title="Understanding dental implant costs in Turkey"
      intro="Dental implant treatment is one of the most common reasons UK patients explore treatment in Turkey. Understanding what affects cost can help you make a more informed decision."
      heroNote="Implant pricing can vary significantly depending on implant systems, bone condition, scans, grafting requirements, clinic standards, and treatment complexity."
      suitableFor={[
        "Patients researching implant costs before travelling.",
        "People comparing UK and Turkey private treatment options.",
        "Patients wanting a clearer understanding of implant planning.",
      ]}
      whyTurkey={[
        "Turkey is a major destination for dental implant treatment.",
        "Many clinics regularly treat international patients.",
        "Patients often compare overall value rather than price alone.",
      ]}
      processSteps={[
        "You tell us about your treatment goals and concerns.",
        "We explain the main factors that influence pricing and planning.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      faq={[
        {
          question: "Why do implant costs vary?",
          answer:
            "Costs can differ based on implant brand, number of implants, bone grafting requirements, scans, clinic standards, and overall treatment complexity.",
        },
        {
          question: "Do all implants use the same systems?",
          answer:
            "No. Different clinics may use different implant manufacturers and treatment protocols.",
        },
        {
          question: "Can I receive a quote before travelling?",
          answer:
            "Many clinics can provide an initial estimate based on photos, X-rays, or scans, although a final assessment may require further review.",
        },
      ]}
    />
  );
}
