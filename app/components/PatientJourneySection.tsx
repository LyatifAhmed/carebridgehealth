import Link from "next/link";
import { ArrowRight, CalendarCheck2, ClipboardList, MessagesSquare, Stethoscope } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Send a private enquiry",
    description: "Tell CareBridge what you are considering and how we can contact you. There is no obligation to proceed.",
    Icon: ClipboardList,
  },
  {
    number: "02",
    title: "We coordinate the next step",
    description: "We review your request, clarify practical questions and, where appropriate, arrange an introduction to an independent medical professional.",
    Icon: MessagesSquare,
  },
  {
    number: "03",
    title: "Speak with the doctor",
    description: "For suitable enquiries, we can help arrange an online conversation with the relevant doctor. You receive the doctor's identity and credentials before the consultation. The doctor handles clinical questions and suitability.",
    Icon: Stethoscope,
  },
  {
    number: "04",
    title: "Decide in your own time",
    description: "If you wish to continue, treatment, pricing, risks and aftercare are discussed with the provider. You decide whether to proceed, with no commitment from the initial enquiry.",
    Icon: CalendarCheck2,
  },
];

export default function PatientJourneySection() {
  return (
    <section id="process" aria-labelledby="contact-process-title" className="scroll-mt-24 bg-[#fcfaf7] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Your enquiry, explained</p>
          <h2 id="contact-process-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            What happens after you contact us?
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            You have a real point of contact at CareBridge. We help you reach the right conversation, while the medical professional remains responsible for all clinical decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ number, title, description, Icon }) => (
            <article key={number} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-slate-400">{number}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-5 rounded-[28px] border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-2xl">
            <p className="font-semibold text-slate-950">Independent coordination. Informed choice.</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              CareBridge is not a clinic and does not provide medical advice or treatment. We may receive a referral commission from a provider if you proceed with treatment. You can ask who the provider is and verify their credentials before deciding.
            </p>
          </div>
          <Link href="/#form" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Start a private enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
