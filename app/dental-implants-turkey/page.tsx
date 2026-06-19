import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Dental Implants Turkey | UK-Based Coordination",
  description:
    "Explore dental implants in Turkey with UK-based coordination. Get support with planning, clinic matching, treatment questions, and next-step guidance before travelling.",
};

export default function DentalImplantsTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Dental implants Turkey"
      title="Dental implants in Turkey with careful planning before you travel"
      intro="Dental implants are one of the most searched dental treatments in Turkey, especially for patients comparing private costs with UK options. CareBridge Health helps you understand the planning process before you make a major decision."
      heroNote="Implant treatment is not usually a quick cosmetic decision. It may involve scans, bone assessment, healing time, temporary teeth, and staged visits depending on your case."
      suitableFor={[
        "Patients with missing teeth who are exploring implant-based replacement options.",
        "People comparing private dental implant costs in Turkey with UK pricing.",
        "Patients who want a clearer treatment plan before committing to travel.",
      ]}
      whyTurkey={[
        "Turkey is a popular destination for private dental implant treatment.",
        "Many patients explore Turkey because implant treatment can be costly privately in the UK.",
        "Clinics may offer combined planning, treatment, accommodation, and transfer support.",
      ]}
      processSteps={[
        "You share your dental concerns, photos, X-rays if available, and what outcome you are hoping for.",
        "We help clarify what questions to ask, what scans may be needed, and whether the case may require staged treatment.",
        "If suitable, we help coordinate the next step with the relevant dental provider route in Turkey.",
      ]}
      faq={[
        {
          question: "Can dental implants be completed in one trip?",
          answer:
            "Sometimes the first stage can be started in one trip, but many implant cases need healing time before final teeth are fitted. The timeline depends on your bone condition, treatment plan, and clinical assessment.",
        },
        {
          question: "Are implants suitable for everyone?",
          answer:
            "No. Suitability depends on gum health, bone levels, medical history, smoking status, and other clinical factors. A dentist or implant specialist must assess this properly.",
        },
        {
          question: "Do I need X-rays before travelling?",
          answer:
            "In many cases, X-rays or a 3D scan are important for planning. If you already have recent dental images, they may help the clinic understand your case earlier.",
        },
      ]}
    />
  );
}
