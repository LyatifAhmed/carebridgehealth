"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does CareBridge arrange doctor appointments or treatment?",
    answer: "No. CareBridge provides marketing, introductions and referrals only. Our independent Turkish medical tourism partner alone arranges appointments, treatment and optional travel. Licensed clinicians provide clinical care and aftercare.",
  },
  {
    question: "Why use CareBridge instead of contacting a clinic directly?",
    answer: "You can always contact a clinic directly. Our value is a personal introduction through our doctor-led local medical tourism partner’s established network in Istanbul, with a UK-based point of contact and optional travel arranged by the independent Turkish partner. We do not independently verify unrelated clinics or guarantee outcomes.",
  },
  {
    question: "Who arranges flights, accommodation and airport transfers?",
    answer: "Our authorised Turkish medical tourism partner, not CareBridge, can arrange these optional services on request, subject to availability and a separate quote. Travel is not included in the free enquiry, and you can book independently.",
  },
  {
    question: "Is treatment in Turkey safe?",
    answer:
      "Safety depends on the clinic, medical team, treatment type, and your individual circumstances. CareBridge Health helps patients approach treatment more carefully by providing general information and referral and helping them understand important considerations before travelling.",
  },
  {
    question: "Do I pay CareBridge Health or the clinic?",
    answer:
      "Our introduction is free. We receive a referral commission from our independent Turkish partner based on purchased services. Patients pay and contract directly with the relevant independent provider, never CareBridge.",
  },
  {
    question: "Are you a clinic?",
    answer:
      "No. CareBridge Health is not a hospital, clinic, or medical provider. We help patients navigate treatment options and introduce patients to our authorised Turkish partner, which coordinates access to its own network.",
  },
  {
    question: "Can I speak to a doctor before travelling?",
    answer:
      "In many cases, treatment providers can review information and arrange an initial consultation. Final decisions regarding suitability, diagnosis, and treatment plans are always made by qualified medical professionals.",
  },
  {
    question: "Can I enquire if I live in the USA, Canada or another country?",
    answer:
      "Yes. CareBridge Health is based in the UK but supports enquiries from international patients. You don't need to live in the UK. The independent provider will assess suitability, while you can discuss travel logistics, communication and follow-up before deciding whether to proceed.",
  },
  {
    question: "How long does the planning process take?",
    answer:
      "Simple enquiries can often be reviewed quickly, while more complex cases may require additional information before appropriate next steps can be discussed.",
  },
  {
    question: "Can you help with dental, hair transplant, cosmetic and bariatric procedures?",
    answer:
      "Yes. CareBridge Health currently supports enquiries relating to dental treatment, hair restoration, cosmetic procedures, bariatric surgery, eye treatments, women's health procedures, and selected specialist treatment pathways.",
  },
  {
    question: "Do you guarantee treatment outcomes?",
    answer:
      "No. No treatment outcome can ever be guaranteed. Medical suitability, risks, benefits, and expected outcomes can only be discussed by the treating medical professionals.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Questions patients often ask before treatment abroad
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
            Exploring treatment in another country naturally comes with
            questions. Here are some of the most common topics patients ask
            before making any decisions.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-lg font-medium text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-7 py-6 text-sm leading-8 text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-[28px] border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">
            Still have questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Every patient journey is different. If you are exploring treatment
            in Turkey and would like a more structured starting point, submit an
            enquiry and we will review your situation individually.
          </p>

          <a
            href="#form"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Request a free introduction
          </a>
        </div>
      </div>
    </section>
  );
}
