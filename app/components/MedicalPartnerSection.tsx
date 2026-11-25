import Link from "next/link";
import { ShieldCheck, UserRound } from "lucide-react";

export default function MedicalPartnerSection() {
  return (
    <section id="medical-partner" className="border-y border-slate-200 bg-white py-20 md:py-24" aria-labelledby="medical-partner-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Our independent Turkish partner</p>
          <h2 id="medical-partner-title" className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
            An authorised medical tourism partner in Istanbul
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Our independent Turkish medical tourism partner is authorised in Turkey, led by a specialist doctor and works with an established network of healthcare professionals. CareBridge introduces patients to that company; the company coordinates doctor appointments. Medical decisions remain with the treating clinician.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-[30px] border border-slate-200 bg-[#fbfaf7] shadow-sm md:grid-cols-[0.85fr_1.5fr]">
          <div className="flex min-h-[290px] flex-col items-center justify-center gap-3 border-b border-slate-200 bg-gradient-to-br from-slate-100 via-stone-100 to-emerald-50 p-8 text-slate-500 md:min-h-[380px] md:border-b-0 md:border-r">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-white/70">
              <UserRound className="h-14 w-14" strokeWidth={1.1} aria-hidden="true" />
            </div>
            <p className="text-center text-xs font-medium tracking-wide">Provider details available during enquiry</p>
          </div>
          <div className="flex flex-col justify-center p-7 md:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">Independent healthcare partner · Istanbul</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">A doctor-led local network</h3>
            <p className="mt-2 text-base font-medium text-slate-700">Obstetrics &amp; Gynaecology Specialist</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Our partner company is led by a specialist in obstetrics and gynaecology, who provides care in that specialty independently of CareBridge. The company coordinates other specialties through its own network. Patients should request the treating clinician's identity, credentials and provider details from the partner before proceeding. Clinical assessment, suitability, procedures and aftercare are the responsibility of the healthcare provider.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              CareBridge is a referral and coordination business, not a clinic or an independent credential verification service. Patients should check the treating provider’s credentials and authorisations before committing. Our introduction service is free to patients. We receive a referral commission from our authorised Turkish medical tourism partner based on the value of services purchased by referred patients. We do not collect patient payments.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/#form" className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Request a private enquiry
              </Link>
            </div>
            <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"/>
              Partner information is not a medical recommendation or a guarantee of treatment outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
