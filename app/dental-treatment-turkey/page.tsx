import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Dental Treatment Turkey | UK-Based Coordination",
  description:
    "Explore dental treatment in Turkey with private UK-based coordination. Get support with planning, clinic matching, and next-step guidance.",
};

export default function DentalTreatmentTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Dental treatment Turkey"
      title="Dental treatment in Turkey with a more careful planning process"
      intro="Many patients look to Turkey for dental treatment because of accessibility, pricing, and the availability of private clinics. CareBridge Health helps bring more clarity to the process before you make any major decisions."
      heroNote="Dental treatment can range from straightforward work to complex restorative plans. Good planning matters, especially when treatment may involve multiple visits or irreversible changes."
      suitableFor={[
        "Patients considering implants, crowns, veneers, or broader restorative work.",
        "People comparing private dental options in Turkey with UK pricing.",
        "Patients who want more confidence before starting treatment abroad.",
      ]}
      whyTurkey={[
        "Turkey is a widely discussed destination for private dental care.",
        "Many patients see a significant cost difference versus local private treatment.",
        "There is strong interest in combining treatment with a short stay abroad.",
      ]}
      processSteps={[
        "You tell us what treatment you are exploring and what concerns or priorities you have.",
        "We help clarify the planning stage, what questions matter, and what to consider before proceeding.",
        "If suitable, we help coordinate the next stage with the appropriate provider route.",
      ]}
      faq={[
        {
          question: "Can all dental work be done in one trip?",
          answer:
            "Not always. Some dental cases require staged treatment, healing periods, or follow-up visits. The correct timeline depends on the procedure and your dental condition.",
        },
        {
          question: "Are veneers or crowns always the right answer?",
          answer:
            "No. Treatment should be based on a proper clinical assessment rather than aesthetics alone. The most aggressive option is not always the best option.",
        },
        {
          question: "Can you help with complex cases?",
          answer:
            "We can help you start the coordination process, but the final medical suitability and treatment design must come from the treating dental professionals.",
        },
      ]}
    />
  );
}