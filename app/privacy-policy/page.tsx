export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          Privacy Policy
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
          Privacy Policy
        </h1>

        <p className="mt-6 text-sm text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <p>
            CareBridge Health (“we”, “us”, “our”) is committed to protecting
            your personal data and respecting your privacy. This policy explains
            how we collect, use, and handle your information when you use our
            website or submit a consultation request.
          </p>

          {/* 1 */}
          <div>
            <h2 className="font-medium text-slate-900">
              1. Who we are
            </h2>
            <p className="mt-2">
              CareBridge Health is operated by Generation Beta Digital Ltd,
              registered in the United Kingdom.
            </p>
            <p className="mt-2">
              Address: 3rd Floor, 86–90 Paul Street, London EC2A 4NE, UK
            </p>
            <p>Company No: 16274319</p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-medium text-slate-900">
              2. What data we collect
            </h2>
            <p className="mt-2">
              When you submit a consultation request, we may collect:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>WhatsApp or contact number</li>
              <li>Treatment interest</li>
              <li>Location and timeframe</li>
              <li>Any additional information you choose to provide</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-medium text-slate-900">
              3. How we use your data
            </h2>
            <p className="mt-2">
              We use your information strictly to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Review your consultation request</li>
              <li>Respond to your enquiry</li>
              <li>Coordinate communication with relevant clinics</li>
              <li>Provide support before and during your treatment journey</li>
            </ul>
            <p className="mt-2">
              We do not sell or share your data for marketing purposes.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-medium text-slate-900">
              4. Sharing your data
            </h2>
            <p className="mt-2">
              Where necessary, we may share relevant information with selected
              third-party clinics in order to assess your case and provide
              appropriate treatment options.
            </p>
            <p className="mt-2">
              These providers act independently and are responsible for their
              own medical assessments and services.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-medium text-slate-900">
              5. Data storage & security
            </h2>
            <p className="mt-2">
              We take reasonable technical and organisational measures to
              protect your personal data. Your information is stored securely
              and only accessed when necessary.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-medium text-slate-900">
              6. Your rights
            </h2>
            <p className="mt-2">
              Under UK data protection law, you have the right to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-medium text-slate-900">
              7. Cookies
            </h2>
            <p className="mt-2">
              Our website may use basic cookies for functionality and analytics.
              These do not collect sensitive personal information.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-medium text-slate-900">
              8. Contact
            </h2>
            <p className="mt-2">
              If you have any questions about this policy or your data, you can
              contact us at:
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