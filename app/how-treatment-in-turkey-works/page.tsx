import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Treatment in Turkey Works | CareBridge Health",
  description:
    "Learn how CareBridge Health supports UK-based patients exploring treatment in Turkey through independent clinics and authorised local healthcare partners.",
};

export default function HealthTourismAuthorisationPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Patient guidance & coordination
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            How treatment in Turkey works with CareBridge Health
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            CareBridge Health is a UK-based coordination and information
            service. We do not operate clinics, provide medical treatment, or
            present ourselves as a healthcare provider.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Where appropriate, we may introduce patients to independent clinics,
            doctors, and authorised healthcare coordination partners in Turkey.
            Treatment decisions, clinical assessments, licences, authorisations,
            and medical responsibilities belong to the relevant healthcare
            providers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/treatment-in-turkey"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore treatment in Turkey
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              About CareBridge Health
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "UK-based guidance",
              text: "We help patients understand the process, prepare better questions, and avoid making rushed decisions before travelling abroad.",
            },
            {
              title: "Independent providers",
              text: "Medical treatment is provided by independent healthcare professionals and clinics in Turkey, not by CareBridge Health.",
            },
            {
              title: "Clearer planning",
              text: "We support communication, next-step coordination, document preparation, travel planning, and general treatment pathway guidance.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              Our role in the process
            </h2>

            <div className="mt-6 space-y-5 text-slate-700">
              <p>
                CareBridge Health helps patients explore treatment options,
                understand what questions to ask, and coordinate next steps with
                relevant provider routes in Turkey.
              </p>

              <p>
                We may help with communication, initial enquiry handling,
                appointment coordination, travel preparation, and general
                guidance. We do not diagnose, prescribe, perform procedures, or
                guarantee treatment outcomes.
              </p>

              <p>
                Patients should always make final medical decisions directly
                with qualified healthcare professionals after proper assessment,
                informed consent, and review of the relevant risks.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">
              Treatments currently supported
            </h2>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
              <li><Link href="/hair-transplant-turkey" className="hover:underline">Hair transplant in Turkey</Link></li>
              <li><Link href="/dental-treatment-turkey" className="hover:underline">Dental treatment in Turkey</Link></li>
              <li><Link href="/dental-implants-turkey" className="hover:underline">Dental implants in Turkey</Link></li>
              <li><Link href="/veneers-turkey" className="hover:underline">Dental veneers in Turkey</Link></li>
              <li><Link href="/hollywood-smile-turkey" className="hover:underline">Hollywood Smile in Turkey</Link></li>
              <li><Link href="/cosmetic-surgery-turkey" className="hover:underline">Cosmetic surgery in Turkey</Link></li>
              <li><Link href="/weight-loss-surgery-turkey" className="hover:underline">Weight loss surgery in Turkey</Link></li>
              <li><Link href="/eye-treatment-turkey" className="hover:underline">Eye treatment in Turkey</Link></li>
              <li>
                <Link href="/treatment-in-istanbul/womens-health" className="hover:underline">
                  Women&apos;s health treatment in Istanbul
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Important disclaimer
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
            CareBridge Health is a coordination and information service only. We
            are not a hospital, clinic, medical practice, or emergency medical
            provider. Any treatment is provided by independent healthcare
            providers in Turkey. Clinical licences, health tourism
            authorisations, medical advice, consent, and treatment outcomes are
            the responsibility of the relevant provider.
          </p>
        </section>
      </section>
    </main>
  );
}
