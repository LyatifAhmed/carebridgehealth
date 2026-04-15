import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Cosmetic Surgery Turkey | UK-Based Coordination",
  description:
    "Considering cosmetic surgery in Turkey? Explore a more structured route with UK-based coordination and clearer pre-treatment guidance.",
  alternates: {
    canonical: "/cosmetic-surgery-turkey",
  },
};

export default function CosmeticSurgeryTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Cosmetic surgery Turkey"
      title="Cosmetic surgery in Turkey with better pre-treatment clarity"
      intro="Turkey attracts international interest for cosmetic surgery across a wide range of procedures. CareBridge Health helps patients approach cosmetic treatment more carefully, with better coordination and a stronger focus on suitability and planning."
      heroNote="Cosmetic surgery is a serious decision. Good coordination starts with realistic expectations, appropriate screening, and careful provider selection rather than impulse booking."
      suitableFor={[
        "Patients considering cosmetic procedures abroad for the first time.",
        "People who want support navigating options with more care and discretion.",
        "Patients comparing destination, recovery, and treatment planning factors.",
      ]}
      whyTurkey={[
        "Private cosmetic surgery options are widely available across multiple cities.",
        "Many patients look for better value than domestic private treatment.",
        "Turkey remains one of the most talked-about destinations in this category.",
      ]}
      processSteps={[
        "You tell us what procedure you are considering and any concerns around timing, recovery, and expectations.",
        "We help you think through key decision points before moving ahead.",
        "If appropriate, we support the next stage of treatment coordination and destination planning.",
      ]}
      faq={[
        {
          question: "Is cosmetic surgery abroad right for everyone?",
          answer:
            "No. Suitability depends on your health, expectations, treatment type, recovery needs, and whether travelling for surgery makes sense in your case.",
        },
        {
          question: "Can I combine surgery with a holiday?",
          answer:
            "Recovery should come first. While some destinations are attractive, post-operative care and sensible recovery planning are more important than treating the trip like a holiday.",
        },
        {
          question: "Do you help choose between Antalya and Istanbul?",
          answer:
            "Yes, at a coordination level. The better city depends on the procedure, provider access, and your preferred recovery setting.",
        },
      ]}
    />
  );
}