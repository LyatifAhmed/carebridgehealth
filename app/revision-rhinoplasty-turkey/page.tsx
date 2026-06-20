import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Revision Rhinoplasty Turkey | UK-Based Coordination",
  description:
    "Considering revision rhinoplasty in Turkey? Explore a more careful and structured route with private UK-based coordination through CareBridge Health.",
  alternates: {
    canonical: "/revision-rhinoplasty-turkey",
  },
};

export default function RevisionRhinoplastyTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Revision Rhinoplasty Turkey"
      title="Revision rhinoplasty in Turkey with careful planning from the beginning"
      intro="Revision rhinoplasty is often more complex than first-time nose surgery. CareBridge Health helps patients approach revision procedures with clearer communication, realistic expectations, and structured coordination before travelling."
      heroNote="Patients considering revision rhinoplasty should focus on surgeon experience, planning, breathing function, scar tissue, and realistic outcomes rather than marketing alone."
      suitableFor={[
        "Patients unhappy with the results of previous nose surgery.",
        "People experiencing cosmetic or functional concerns after rhinoplasty.",
        "Patients seeking a more structured route before considering revision treatment abroad.",
      ]}
      whyTurkey={[
        "Turkey is a recognised destination for cosmetic and reconstructive nose surgery.",
        "Many patients explore revision rhinoplasty options alongside private UK providers.",
        "A large provider market makes careful selection especially important.",
      ]}
      processSteps={[
        "You explain your previous surgery history and current concerns.",
        "We help clarify what information providers typically require for an initial review.",
        "If suitable, we assist with the next stage of communication and provider coordination.",
      ]}
      faq={[
        {
          question: "Is revision rhinoplasty more difficult than primary rhinoplasty?",
          answer:
            "In many cases, yes. Previous surgery can create additional complexity involving scar tissue, structural support, and healing considerations.",
        },
        {
          question: "Can breathing problems be assessed during revision planning?",
          answer:
            "Potential functional concerns can be discussed, but medical suitability and treatment recommendations must come from the treating provider.",
        },
        {
          question: "Will revision surgery always achieve the desired result?",
          answer:
            "No procedure can guarantee a specific outcome. Patients should discuss expectations carefully with qualified medical professionals before making decisions.",
        },
      ]}
    />
  );
}
