import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  title: "Dental Veneers Cost Turkey 2026: Prices, Materials & Packages",
  description: "Find out how much dental veneers cost in Turkey, what affects pricing and how UK patients can compare treatment options.",
};

export default function DentalVeneersCostTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="Dental veneers cost Turkey"
      title="Dental veneers cost in Turkey: prices, materials and planning"
      intro="Comparing dental veneer costs in Turkey? The final price depends on the veneer material, number of teeth, clinical assessment and what is included in the proposed treatment plan. Understand the differences before requesting a personalised estimate."
      heroNote="Ask for an itemised estimate covering the planned number of teeth, material, examinations, temporary restorations where needed, aftercare and any additional procedures. Travel and accommodation may add to the overall cost."
      suitableFor={[
        "Patients researching veneer costs in Turkey.",
        "People comparing cosmetic dental treatment options.",
        "Patients wanting a clearer understanding of smile makeover planning.",
      ]}
      whyTurkey={[
        "Turkey is a popular destination for cosmetic dentistry.",
        "Many clinics specialise in smile design treatments.",
        "Patients often compare quality, planning, and overall value.",
      ]}
      processSteps={[
        "You explain your goals and what you would like to improve.",
        "We help clarify treatment options, planning considerations, and common questions.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      ctaTitle="Request a personalised dental veneer estimate"
      ctaText="Tell us what you are considering. CareBridge can help pass your enquiry to a relevant provider for assessment and an initial estimate. A dentist must determine suitability and the final treatment plan."
      primaryCtaLabel="Enquire about dental veneers"
      extraLinks={[
        {
          textBefore: "Compare treatment planning: ",
          linkText: "dental treatment in Turkey",
          href: "/dental-treatment-turkey",
        },
        {
          textBefore: "Read our UK–Turkey comparison: ",
          linkText: "veneers cost guide",
          href: "/blog/veneers-turkey-vs-uk-cost",
        },
      ]}
      faq={[
        {
          question: "Why do veneer prices vary?",
          answer:
            "Costs may differ depending on the number of veneers, material selection, clinic standards, smile design complexity, and treatment planning requirements.",
        },
        {
          question: "Are porcelain veneers more expensive?",
          answer:
            "In many cases porcelain veneers cost more than composite alternatives, although suitability depends on individual circumstances.",
        },
        {
          question: "Can I receive a quote before travelling?",
          answer:
            "A provider may offer a preliminary estimate from the information you share. A dentist must assess your teeth and oral health before confirming whether veneers are suitable and what treatment is required.",
        },
        {
          question: "What is the difference between composite and porcelain veneers?",
          answer:
            "Composite veneers use tooth-coloured resin, while porcelain veneers are manufactured restorations bonded to the teeth. They differ in preparation, repair options, appearance, durability and cost. A qualified dentist can explain the trade-offs for your circumstances.",
        },
        {
          question: "Are veneers the same as dental crowns?",
          answer:
            "No. Veneers usually cover the visible front surface of a tooth, while crowns cover more of the tooth. Some cosmetic treatments marketed as veneers may involve extensive tooth preparation. Ask the dentist exactly what is proposed and whether healthy tooth structure will be removed.",
        },
        {
          question: "What other costs should I consider?",
          answer:
            "Consider examinations, any necessary treatment before veneers, temporary restorations, travel, accommodation, follow-up appointments and potential repairs. Confirm what is included in writing before booking.",
        },
        {
          question: "Are veneers reversible?",
          answer:
            "Some veneer treatments require removal of natural enamel and are not reversible. All veneers can need maintenance or replacement. Discuss alternatives, risks and long-term care with your dentist before deciding.",
        },
      ]}
    />
  );
}
