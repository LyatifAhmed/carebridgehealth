import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Hollywood Smile Turkey | UK-Based Coordination",
  description:
    "Explore Hollywood Smile treatment in Turkey with UK-based coordination. Learn about smile design, veneers, crowns, treatment planning, and next-step guidance before travelling.",
};

export default function HollywoodSmileTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Hollywood Smile Turkey"
      title="Hollywood Smile treatment in Turkey with careful planning"
      intro="Hollywood Smile is one of the most searched cosmetic dental treatments in Turkey. The term usually refers to a complete smile makeover using veneers, crowns, whitening, or a combination of treatments."
      heroNote="A Hollywood Smile is not a single procedure. The right approach depends on your dental health, facial features, bite, and long-term goals."
      suitableFor={[
        "Patients exploring a full smile makeover.",
        "People considering veneers, crowns, whitening, or cosmetic dental improvements.",
        "Patients comparing private cosmetic dental treatment options in Turkey.",
      ]}
      whyTurkey={[
        "Turkey is internationally known for cosmetic dentistry and smile design.",
        "Many patients travel from the UK to explore private treatment options.",
        "Clinics often provide digital smile planning and treatment simulations.",
      ]}
      processSteps={[
        "You explain your goals and share photos if available.",
        "We help you understand treatment possibilities, limitations, and planning considerations.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      faq={[
        {
          question: "What is a Hollywood Smile?",
          answer:
            "Hollywood Smile is a broad term used for cosmetic smile makeovers. Treatment may include veneers, crowns, whitening, gum contouring, or other procedures depending on the case.",
        },
        {
          question: "Will my teeth look natural?",
          answer:
            "The best cosmetic results usually balance aesthetics with natural proportions. Treatment design should be personalised rather than following a one-size-fits-all approach.",
        },
        {
          question: "Can everyone have a Hollywood Smile treatment?",
          answer:
            "Not always. Suitability depends on your dental health, tooth structure, bite, and overall clinical assessment by qualified dental professionals.",
        },
      ]}
    />
  );
}
