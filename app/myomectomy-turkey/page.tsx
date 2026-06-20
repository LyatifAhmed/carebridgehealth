import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Myomectomy Turkey | UK-Based Coordination",
  description:
    "Considering myomectomy in Turkey? Explore fibroid surgery pathways with clearer planning, private UK-based coordination, and careful provider communication.",
  alternates: {
    canonical: "/myomectomy-turkey",
  },
};

export default function MyomectomyTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Myomectomy Turkey"
      title="Myomectomy in Turkey with clearer planning before you travel"
      intro="Myomectomy is a procedure used to remove fibroids while preserving the uterus where clinically appropriate. CareBridge Health helps patients explore specialist-led pathways in Turkey with clearer communication and structured coordination."
      heroNote="Fibroid treatment should be reviewed carefully. Suitability, surgical approach, fertility considerations, risks, and recovery must always be assessed by qualified medical professionals."
      suitableFor={[
        "Patients researching fibroid surgery or myomectomy abroad.",
        "Women seeking specialist-led gynaecology pathways in Turkey.",
        "Patients wanting clearer guidance before speaking directly with providers.",
      ]}
      whyTurkey={[
        "Turkey offers access to experienced gynaecological providers and advanced hospital environments.",
        "Many patients compare treatment abroad with private UK options.",
        "Specialist-led pathways may help patients explore treatment routes more clearly.",
      ]}
      processSteps={[
        "You share your situation, diagnosis if known, symptoms, and treatment goals.",
        "We help clarify what information providers may need for an initial review.",
        "If suitable, we support the next stage of communication and provider coordination.",
      ]}
      faq={[
        {
          question: "Is myomectomy the same as hysterectomy?",
          answer:
            "No. Myomectomy removes fibroids while aiming to preserve the uterus where appropriate, while hysterectomy involves removal of the uterus. Suitability depends on clinical assessment.",
        },
        {
          question: "Can fibroid surgery be planned before travelling?",
          answer:
            "Providers may offer an initial review based on medical history and available reports, but final recommendations require assessment by qualified professionals.",
        },
        {
          question: "How long is recovery after myomectomy?",
          answer:
            "Recovery depends on the surgical approach, individual health, and procedure complexity. The treating provider will explain recovery and aftercare guidance.",
        },
      ]}
    />
  );
}
