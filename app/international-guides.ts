import type { Metadata } from "next";

const site = "https://www.carebridgehealth.co";

type Guide = {
  path: string;
  label: string;
  title: string;
  heading: string;
  description: string;
  intro: string;
  currency: string;
  sections: { title: string; text: string }[];
  questions: { question: string; answer: string }[];
  resources: { label: string; url: string }[];
};

export const internationalGuides = {
  global: {
    path: "/medical-tourism-turkey",
    label: "International patients",
    title: "Medical Tourism in Turkey | International Patient Guide",
    heading: "Medical tourism in Turkey for international patients",
    description: "Planning treatment in Turkey from abroad? Explore travel, treatment quotes, independent clinics and follow-up with UK-based CareBridge Health coordination.",
    intro: "CareBridge Health is based in the UK, but our enquiries are open to patients from the United States, United Kingdom, Canada, Europe and beyond. Start by exploring independent treatment providers in Istanbul, then decide whether travelling for care is right for you.",
    currency: "Your preferred currency",
    sections: [
      { title: "Connect with a medical professional", text: "We introduce patients to our authorised Turkish medical tourism partner in Istanbul, which coordinates appointments within its own healthcare network. Ask who will assess you, who will provide your treatment and what the proposed appointment schedule includes." },
      { title: "Compare the whole journey", text: "Request an itemised quote with its currency, validity period, inclusions and exclusions. Consider transport, accommodation, time away from home, and what additional costs could arise. Do not book non-refundable travel before the provider confirms the plan." },
      { title: "Prepare for travel and follow-up", text: "Review your home country's travel advice and entry requirements for your passport. Ask your own healthcare professional and the treating provider about suitability, travel timing, risks, records and arrangements for follow-up and complications after you return." },
    ],
    questions: [
      { question: "Do I need to live in the UK to contact CareBridge Health?", answer: "No. Our coordination is UK-based, but patients can enquire from the USA, UK, Canada, Europe and other countries. An independent healthcare provider determines clinical suitability." },
      { question: "Can CareBridge Health provide medical treatment?", answer: "No. CareBridge is an independent coordination and referral service, not a clinic. We do not provide diagnosis, medical advice, treatment or outcome guarantees." },
    ],
    resources: [],
  },
  usa: {
    path: "/medical-tourism-turkey-from-usa",
    label: "United States",
    title: "Medical Tourism in Turkey from the USA | Patient Guide",
    heading: "Medical tourism in Turkey from the USA",
    description: "A guide for US patients considering treatment in Turkey: long-haul travel, USD cost comparisons, independent clinics, insurance and follow-up planning.",
    intro: "Live in the United States and considering dental treatment, hair restoration, cosmetic surgery or another treatment in Turkey? You do not need a UK address or UK residency to contact CareBridge Health. Our UK-based team can introduce you to our authorised Turkish medical tourism partner in Istanbul.",
    currency: "US dollars (USD)",
    sections: [
      { title: "Plan your transatlantic journey", text: "Compare flights from your nearest US airport, connection times and arrival city. Ask the provider to confirm consultation dates, expected length of stay and when it is medically appropriate to take a long-haul flight home. Allow for a flexible return booking rather than assuming a fixed recovery period." },
      { title: "Compare quotes in US dollars", text: "Compare equivalent treatment plans, not just advertised package prices. Ask which currency the clinic charges, whether the quote includes assessment, treatment, accommodation or transfers, and how exchange rates and card fees affect your total in USD. Check coverage and exclusions directly with your US insurer, including treatment-related complications abroad." },
      { title: "Arrange continuity of care in the US", text: "Speak with your own healthcare professional before travel. Ask for a named clinical contact and written treatment records, a follow-up plan for your return to the US, and clarification of what happens if you need unplanned care or a return visit." },
    ],
    questions: [
      { question: "Can American patients enquire directly?", answer: "Yes. Start with a free enquiry from any US state. We can coordinate communication across time zones; medical assessment and treatment decisions remain with the independent provider." },
      { question: "Does US health insurance cover treatment in Turkey?", answer: "Coverage depends on your individual policy and the treatment. Ask your insurer in writing about overseas planned care, emergency care, exclusions and reimbursement. CareBridge does not guarantee insurance coverage." },
      { question: "Will I need to return to Turkey for follow-up?", answer: "That depends on your treatment and your provider's plan. Discuss follow-up, records and who will provide local care before committing to travel." },
    ],
    resources: [
      { label: "CDC: Medical tourism and travel health", url: "https://wwwnc.cdc.gov/travel/page/medical-tourism" },
      { label: "US Department of State: Turkey travel advisory", url: "https://travel.state.gov/en/international-travel/travel-advisories/turkey.html" },
    ],
  },
  uk: {
    path: "/medical-tourism-turkey-from-uk",
    label: "United Kingdom",
    title: "Medical Tourism in Turkey from the UK | Patient Guide",
    heading: "Medical tourism in Turkey from the UK",
    description: "A UK patient guide to treatment in Turkey, comparing GBP costs, independent providers, travel arrangements and follow-up after returning home.",
    intro: "If you live in the UK and are researching treatment in Turkey, CareBridge Health offers a UK-based point of contact for introductions to independent clinics in Istanbul. Compare the full treatment pathway rather than choosing on price alone.",
    currency: "Pounds sterling (GBP)",
    sections: [
      { title: "Understand the total cost in pounds", text: "Ask providers to specify the billing currency, the quote validity and what is included. Compare it with a like-for-like treatment estimate in the UK, including flights, accommodation, time off work and arrangements for follow-up or unexpected expenses." },
      { title: "Plan travel from the UK", text: "Check current Foreign, Commonwealth & Development Office advice before booking. Entry requirements depend on your passport and circumstances. Confirm appointment timing and the appropriate return date with your treating clinician rather than relying on a package itinerary." },
      { title: "Discuss care after your return", text: "Speak to your local healthcare professional about the proposed treatment and follow-up arrangements. Ask the provider for written records and a clear plan for concerns after you return to the UK. Establish what your travel or medical insurance covers before departure." },
    ],
    questions: [
      { question: "Is CareBridge Health a UK clinic?", answer: "No. CareBridge is a UK-based independent coordination service. Treatment is provided directly by independent healthcare professionals and clinics in Turkey." },
      { question: "Can I get a quote before travelling?", answer: "You can ask the provider for an itemised estimate, subject to their assessment and any required examination. Final pricing and suitability are determined by the treating provider." },
    ],
    resources: [
      { label: "GOV.UK: Turkey travel advice", url: "https://www.gov.uk/foreign-travel-advice/turkey" },
      { label: "GOV.UK: Health and medical tourism guidance", url: "https://www.gov.uk/foreign-travel-advice/turkey/health" },
    ],
  },
  canada: {
    path: "/medical-tourism-turkey-from-canada",
    label: "Canada",
    title: "Medical Tourism in Turkey from Canada | Patient Guide",
    heading: "Medical tourism in Turkey from Canada",
    description: "Explore treatment in Turkey from Canada with guidance on Canadian dollar quotes, long-haul travel, insurance, independent providers and follow-up.",
    intro: "Canadian residents can contact CareBridge Health directly about independent treatment providers in Turkey. Our coordination is based in the UK, with introductions to providers in Istanbul where appropriate; you do not need to travel through or live in the UK.",
    currency: "Canadian dollars (CAD)",
    sections: [
      { title: "Budget in Canadian dollars", text: "Check the currency of the provider's invoice, conversion costs and which services are included. Consider flights from Canada, travel time, accommodation, companion costs if relevant, and expenses if a longer stay is required. Ask your provincial or territorial plan and private insurer what is covered outside Canada; do not assume reimbursement." },
      { title: "Check your travel arrangements", text: "Refer to the Government of Canada's Türkiye travel advisory and entry guidance for your passport. Discuss arrival dates, the length of the trip and the return flight with the provider before booking, particularly if you have flight connections across multiple time zones." },
      { title: "Plan follow-up in your province", text: "Talk to your healthcare professional in Canada about your plans before travelling. Ask the overseas provider how your records will be shared, what follow-up is expected and whom to contact if you need medical review after returning." },
    ],
    questions: [
      { question: "Can I contact CareBridge from Canada?", answer: "Yes. You can send a free enquiry from Canada and discuss the next steps remotely. The independent provider decides whether a consultation and treatment are appropriate." },
      { question: "Is planned treatment abroad covered by Canadian healthcare?", answer: "It depends on your province or territory, treatment and policy. Contact the relevant health plan and insurer directly before making a financial commitment." },
    ],
    resources: [
      { label: "Government of Canada: Medical care outside Canada", url: "https://travel.gc.ca/travelling/health-safety/medical-care-outside-canada" },
      { label: "Government of Canada: Türkiye travel advice", url: "https://travel.gc.ca/destinations/turkiye" },
    ],
  },
  europe: {
    path: "/medical-tourism-turkey-from-europe",
    label: "Europe",
    title: "Medical Tourism in Turkey from Europe | Patient Guide",
    heading: "Medical tourism in Turkey from Europe",
    description: "International patient coordination for people in Europe exploring treatment in Turkey, with travel logistics, currency, language and follow-up planning.",
    intro: "Patients based in European countries can enquire about treatment in Turkey through CareBridge Health. Our UK-based coordination is independent of your country of residence; we introduce you to our authorised Turkish medical tourism partner in Istanbul where appropriate.",
    currency: "Euros (EUR) or local currency",
    sections: [
      { title: "Plan from your country of residence", text: "European countries have different travel requirements, insurance arrangements and possible flight routes. Check the official advice of your national authorities and the entry rules applicable to your passport. Ask the provider about arrival and appointment schedules." },
      { title: "Compare quotes and translations", text: "Request an itemised quote in the provider's billing currency and compare the cost in EUR or your local currency. Ask whether consultation and treatment records can be provided in a language you understand, and clarify interpretation arrangements before consenting to treatment." },
      { title: "Organise follow-up at home", text: "Check coverage with your national health system or insurer before travel, including planned treatment abroad and complications. Discuss the proposed treatment with a local healthcare professional and arrange how your provider in Turkey will share records and coordinate follow-up." },
    ],
    questions: [
      { question: "Do I need UK or EU citizenship to enquire?", answer: "No. You can enquire regardless of your citizenship or country of residence. Passport, travel and medical requirements will depend on your circumstances and the provider's assessment." },
      { question: "Will my treatment quote be in euros?", answer: "The independent clinic determines its quotation and billing currency. Ask for the currency and all inclusions in writing before committing." },
    ],
    resources: [],
  },
} satisfies Record<string, Guide>;

export type InternationalGuideKey = keyof typeof internationalGuides;

export function internationalGuideMetadata(key: InternationalGuideKey): Metadata {
  const guide = internationalGuides[key];
  const url = `${site}${guide.path}`;
  // These English regional guides are equivalent entry points. Europe is a
  // multi-country guide, not a single hreflang country code.
  const languages = {
    "x-default": `${site}${internationalGuides.global.path}`,
    en: `${site}${internationalGuides.global.path}`,
    "en-US": `${site}${internationalGuides.usa.path}`,
    "en-GB": `${site}${internationalGuides.uk.path}`,
    "en-CA": `${site}${internationalGuides.canada.path}`,
  };
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url, ...(key === "europe" ? {} : { languages }) },
    openGraph: {
      title: guide.title, description: guide.description, url, type: "website",
      siteName: "CareBridge Health", images: [`${site}/og-image.jpg`],
      locale: key === "usa" ? "en_US" : key === "canada" ? "en_CA" : "en_GB",
    },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [`${site}/og-image.jpg`] },
  };
}
