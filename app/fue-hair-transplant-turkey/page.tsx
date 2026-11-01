import type { Metadata } from "next";
import TreatmentLanding from "../components/TreatmentLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/fue-hair-transplant-turkey" },
  title: "FUE Hair Transplant Turkey 2026: Cost, FUE Clinics & Recovery",
  description: "FUE hair transplant in Turkey for UK patients: understand graft planning, donor-area risks, clinician involvement, recovery, costs and follow-up care.",
};

export default function FueHairTransplantTurkeyPage() {
  return (
    <TreatmentLanding
      eyebrow="FUE hair transplant Turkey"
      title="FUE hair transplant in Turkey: procedure, costs and recovery"
      intro="Considering an FUE hair transplant in Turkey? Learn how follicular unit extraction works, what affects the cost, how recovery progresses and what to check about surgeon involvement, donor hair and follow-up care before making a decision."
      heroNote="Ask who will assess your suitability, design the hairline, extract and implant grafts, and manage complications. Confirm the clinician’s qualifications, donor-area assessment, aftercare plan and what is included in the quoted package."
      suitableFor={[
        "Patients researching FUE hair transplant treatment.",
        "People comparing private UK and Turkey options.",
        "Patients seeking more information before travelling.",
      ]}
      whyTurkey={[
        "Turkey is internationally recognised for hair transplant treatment.",
        "Many clinics specialise in FUE procedures.",
        "Patients often compare expertise, outcomes, and value rather than price alone.",
      ]}
      processSteps={[
        "You tell us about your hair loss concerns and goals.",
        "We help explain key planning considerations and treatment questions.",
        "If suitable, we help coordinate the next stage with the relevant provider route.",
      ]}
      ctaTitle="Request an FUE hair transplant assessment"
      ctaText="Tell us what you are considering. CareBridge can help connect your enquiry with a relevant medical provider for an initial review. Only an appropriately qualified clinician can assess suitability and recommend treatment."
      primaryCtaLabel="Enquire about FUE treatment"
      extraLinks={[
        { linkText: "Compare hair transplant treatment approaches", href: "/hair-transplant-turkey" },
        { linkText: "Read the UK–Turkey hair transplant cost comparison", href: "/blog/hair-transplant-turkey-vs-uk-cost" },
        {
          textBefore: "Explore pricing considerations: ",
          linkText: "hair transplant cost in Turkey",
          href: "/hair-transplant-cost-turkey",
        },
        {
          textBefore: "Understand the wider treatment journey: ",
          linkText: "how treatment in Turkey works",
          href: "/how-treatment-in-turkey-works",
        },
      ]}
      faq={[
        { question: "How should I compare FUE clinic quotes?", answer: "Ask for the proposed graft range and how it was determined, who performs each stage, what happens if the procedure plan changes, and whether medication, aftercare, follow-up and complication management are included." },
        { question: "What should I consider before flying home after FUE?", answer: "Ask the treating clinician when travel is appropriate, how to protect the treated area, what symptoms need urgent review and how follow-up will work from the UK. Recovery and travel advice should be personalised." },
        {
          question: "What is FUE?",
          answer:
            "FUE stands for Follicular Unit Extraction, a technique where individual hair follicles are extracted and transplanted to areas affected by hair loss.",
        },
        {
          question: "Will I have visible scarring?",
          answer:
            "FUE is generally associated with minimal visible scarring, but outcomes vary depending on the individual and treatment approach.",
        },
        {
          question: "How long does recovery take?",
          answer:
            "Initial healing often takes days to weeks, while hair growth and cosmetic results develop over several months. Recovery varies, and your treating clinician should provide personalised aftercare and activity guidance.",
        },
        {
          question: "Who performs the different stages of an FUE procedure?",
          answer:
            "Responsibilities vary between providers. Before booking, ask which qualified professionals perform the consultation, hairline design, local anaesthesia, graft extraction and implantation, and who supervises the procedure.",
        },
        {
          question: "Why does donor-area management matter?",
          answer:
            "The donor area contains a limited supply of transplantable hair. Excessive extraction can affect its appearance and limit future treatment options. A clinician should assess donor density and long-term hair loss before recommending graft numbers.",
        },
        {
          question: "Are FUE results guaranteed?",
          answer:
            "No. Growth and appearance depend on individual factors, graft survival, hair characteristics, existing hair loss and the treatment performed. Discuss realistic expectations, risks and alternatives with a qualified clinician.",
        },
        {
          question: "What aftercare should I confirm before travelling?",
          answer:
            "Ask for written instructions, information about possible complications, follow-up arrangements after returning home and a clear contact route if problems arise. Also clarify whether any additional treatment or review would incur extra costs.",
        },
      ]}
    />
  );
}
