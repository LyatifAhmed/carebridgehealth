import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | CareBridge Health",
  description:
    "Read the CareBridge Health terms and conditions, including the nature of our coordination service, liability limitations, and your responsibilities.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          Terms & Conditions
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
          Terms & Conditions
        </h1>

        <p className="mt-6 text-sm text-slate-500">
          Last updated: 21 April 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <p>
            These Terms & Conditions (“Terms”) govern your use of the CareBridge
            Health website and services. By using our website or submitting a
            consultation request, you agree to these Terms.
          </p>

          {/* 1 */}
          <div>
            <h2 className="font-medium text-slate-900">1. Who we are</h2>
            <p className="mt-2">
              CareBridge Health is operated by{" "}
              <strong>Generation Beta Digital Ltd</strong>, a company registered
              in England and Wales.
            </p>
            <p className="mt-2">
              Registered address: 3rd Floor, 86–90 Paul Street, London EC2A 4NE
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-medium text-slate-900">
              2. Nature of our service
            </h2>

            <p className="mt-2 font-medium text-slate-900">
              CareBridge Health is not a clinic or medical provider.
            </p>

            <p className="mt-2">
              We provide an independent coordination and information service.
              We help connect patients with third-party clinics and medical
              providers, primarily in Turkey.
            </p>

            <p className="mt-2">
              We do not provide medical advice, diagnosis, or treatment, and we
              do not act as a healthcare provider.
            </p>

            <p className="mt-2">
              No doctor–patient relationship is created between you and
              CareBridge Health.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-medium text-slate-900">
              3. Third-party providers
            </h2>

            <p className="mt-2">
              Any clinic or medical provider introduced to you operates
              independently.
            </p>

            <p className="mt-2">
              Any treatment, agreement, pricing, or payment is strictly between
              you and the provider.
            </p>

            <p className="mt-2">
              We do not control and are not responsible for their services,
              decisions, or outcomes.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-medium text-slate-900">
              4. No medical liability
            </h2>

            <p className="mt-2">
              To the fullest extent permitted by law, CareBridge Health is not
              responsible for:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Medical advice or clinical decisions</li>
              <li>Diagnosis, treatment, or procedures</li>
              <li>Medical outcomes or results</li>
              <li>Complications, side effects, or dissatisfaction</li>
              <li>Aftercare or follow-up treatment</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-medium text-slate-900">
              5. No guarantees
            </h2>

            <p className="mt-2">We do not guarantee:</p>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Specific results or outcomes</li>
              <li>Availability of treatments or providers</li>
              <li>Pricing consistency</li>
              <li>Timelines or recovery expectations</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-medium text-slate-900">
              6. Travel and international risk
            </h2>

            <p className="mt-2">
              If you choose to travel abroad for treatment, you do so at your own
              risk.
            </p>

            <p className="mt-2">
              You are responsible for understanding travel requirements,
              insurance, medical risks, and local regulations.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-medium text-slate-900">
              7. Your responsibilities
            </h2>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Providing accurate and complete information</li>
              <li>Making informed decisions before treatment</li>
              <li>Following advice from your chosen provider</li>
              <li>Reviewing all agreements with clinics carefully</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-medium text-slate-900">8. Payments</h2>

            <p className="mt-2">
              CareBridge Health does not process payments for medical treatment
              unless explicitly stated.
            </p>

            <p className="mt-2">
              Payments for treatment are made directly to the provider.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-medium text-slate-900">
              9. Limitation of liability
            </h2>

            <p className="mt-2">
              To the fullest extent permitted by law, CareBridge Health shall
              not be liable for any direct, indirect, incidental, or
              consequential loss arising from:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your use of our website or services</li>
              <li>Reliance on information provided</li>
              <li>Any treatment received from third-party providers</li>
            </ul>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-medium text-slate-900">
              10. Indemnity
            </h2>

            <p className="mt-2">
              You agree to indemnify and hold harmless CareBridge Health and
              Generation Beta Digital Ltd from any claims, damages, or losses
              arising from your use of the service or decisions made based on
              introductions provided.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="font-medium text-slate-900">
              11. Data & privacy
            </h2>

            <p className="mt-2">
              Your use of our services is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-slate-900"
              >
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="font-medium text-slate-900">
              12. Governing law
            </h2>

            <p className="mt-2">
              These Terms are governed by the laws of England and Wales. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="font-medium text-slate-900">
              13. Changes to these terms
            </h2>

            <p className="mt-2">
              We may update these Terms from time to time. Continued use of the
              website means you accept any updated version.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="font-medium text-slate-900">14. Contact</h2>

            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:info@gebedi.com"
                className="underline underline-offset-2 hover:text-slate-900"
              >
                info@gebedi.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}