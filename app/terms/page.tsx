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
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <p>
            These Terms & Conditions (“Terms”) govern your use of the
            CareBridge Health website and services. By using our website or
            submitting a consultation request, you agree to these Terms.
          </p>

          {/* 1 */}
          <div>
            <h2 className="font-medium text-slate-900">
              1. Who we are
            </h2>
            <p className="mt-2">
              CareBridge Health is operated by Generation Beta Digital Ltd,
              a company registered in the United Kingdom.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-medium text-slate-900">
              2. Nature of our service
            </h2>
            <p className="mt-2">
              CareBridge Health provides a coordination and information service.
              We help connect patients with third-party clinics in Turkey.
            </p>

            <p className="mt-2 font-medium text-slate-900">
              We are not a medical provider.
            </p>

            <p className="mt-2">
              We do not provide medical advice, diagnosis, or treatment.
              All medical services are provided by independent clinics.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-medium text-slate-900">
              3. No medical liability
            </h2>
            <p className="mt-2">
              Any treatment you choose to undergo is your own decision.
            </p>

            <p className="mt-2">
              CareBridge Health is not responsible for:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Medical outcomes or results</li>
              <li>Clinical decisions made by third-party providers</li>
              <li>Complications, side effects, or dissatisfaction</li>
              <li>Post-treatment care or follow-up provided by clinics</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-medium text-slate-900">
              4. Third-party clinics
            </h2>
            <p className="mt-2">
              Clinics introduced through CareBridge Health operate independently.
            </p>

            <p className="mt-2">
              Any agreement, treatment plan, or payment you make is directly
              between you and the clinic.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-medium text-slate-900">
              5. No guarantees
            </h2>
            <p className="mt-2">
              We do not guarantee:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Specific medical results or outcomes</li>
              <li>Availability of treatments</li>
              <li>Pricing consistency between providers</li>
              <li>Timelines or recovery expectations</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-medium text-slate-900">
              6. Your responsibility
            </h2>
            <p className="mt-2">
              You are responsible for:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Providing accurate information</li>
              <li>Reviewing treatment details carefully</li>
              <li>Making informed decisions before proceeding</li>
              <li>Following medical advice from your chosen provider</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-medium text-slate-900">
              7. Payments
            </h2>
            <p className="mt-2">
              CareBridge Health does not process payments for medical treatment
              unless explicitly stated.
            </p>

            <p className="mt-2">
              Any payment for treatment is made directly to the clinic or
              provider.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-medium text-slate-900">
              8. Limitation of liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by law, CareBridge Health shall not
              be liable for any direct, indirect, or consequential loss arising
              from:
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use of our website or services</li>
              <li>Decisions made based on information provided</li>
              <li>Medical treatments received from third parties</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-medium text-slate-900">
              9. Data & privacy
            </h2>
            <p className="mt-2">
              Your use of our services is also governed by our Privacy Policy.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-medium text-slate-900">
              10. Governing law
            </h2>
            <p className="mt-2">
              These Terms are governed by the laws of England and Wales.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="font-medium text-slate-900">
              11. Contact
            </h2>
            <p className="mt-2">
              For any questions regarding these Terms, contact:
            </p>
            <p className="mt-2">
              Email: info@gebedi.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}