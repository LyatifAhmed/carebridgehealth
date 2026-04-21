import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CareBridge Health",
  description:
    "Read the CareBridge Health privacy policy, including how we collect, use, store, share, and protect personal data.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
          Last updated: 21 April 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <p>
            CareBridge Health is committed to protecting your personal data and
            respecting your privacy. This Privacy Policy explains how we collect,
            use, store, and share personal data when you use our website,
            contact us, or submit a consultation request.
          </p>

          <div>
            <h2 className="font-medium text-slate-900">1. Who we are</h2>
            <p className="mt-2">
              CareBridge Health is operated by <strong>Generation Beta Digital Ltd</strong>,
              a company registered in England and Wales.
            </p>
            <p className="mt-2">
              Registered address: 3rd Floor, 86–90 Paul Street, London EC2A 4NE, United Kingdom
            </p>
            <p className="mt-2">Company number: 16274319</p>
            <p className="mt-2">
              For privacy-related questions, you can contact us at:{" "}
              <a
                href="mailto:info@gebedi.com"
                className="underline underline-offset-2 hover:text-slate-900"
              >
                info@gebedi.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">2. What data we collect</h2>
            <p className="mt-2">
              When you submit a consultation request or otherwise contact us, we may
              collect:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Full name</li>
              <li>Email address</li>
              <li>WhatsApp number or other contact number</li>
              <li>Treatment interest or enquiry category</li>
              <li>Preferred destination, location, and timeframe</li>
              <li>Any notes or additional information you choose to provide</li>
              <li>Technical data connected with your submission, such as date/time of submission, IP address, and browser information</li>
            </ul>
            <p className="mt-2">
              Some information you provide may relate to your health or medical circumstances.
              Where that happens, we treat it as sensitive personal data.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">3. How we use your data</h2>
            <p className="mt-2">We use personal data to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Review and respond to your enquiry</li>
              <li>Understand the type of treatment support you are seeking</li>
              <li>Help coordinate an introduction to a relevant third-party clinic or medical provider where appropriate</li>
              <li>Communicate with you about your enquiry and next steps</li>
              <li>Maintain internal records of enquiries and consent</li>
              <li>Protect our website, business, and users against misuse or abuse</li>
            </ul>
            <p className="mt-2">
              We do not sell your personal data, and we do not share it for unrelated
              advertising purposes.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">4. Our lawful bases</h2>
            <p className="mt-2">
              For ordinary personal data, we generally rely on one or more of the following:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your consent</li>
              <li>Our legitimate interests in operating and improving our enquiry and coordination service</li>
              <li>Taking steps at your request before entering into a service relationship, where relevant</li>
            </ul>
            <p className="mt-2">
              Where you provide health-related or other sensitive information, we
              process that information on the basis of your explicit consent for the
              purposes of reviewing your enquiry and, where appropriate, coordinating
              an introduction to a suitable clinic or medical provider.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">5. Sharing your data</h2>
            <p className="mt-2">
              We may share relevant personal data with carefully selected third parties
              where reasonably necessary for the purposes described in this policy,
              including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Partner clinics</li>
              <li>Turkey-licensed doctors or medical providers</li>
              <li>Email and communications service providers</li>
              <li>Website, hosting, and technical service providers</li>
              <li>Professional advisers where necessary</li>
            </ul>
            <p className="mt-2">
              We only share information that is reasonably necessary for the relevant
              purpose. Medical assessment, diagnosis, treatment planning, suitability
              decisions, and treatment outcomes remain the responsibility of the
              relevant provider, not CareBridge Health.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">6. International transfers</h2>
            <p className="mt-2">
              Because CareBridge Health helps coordinate treatment pathways involving
              providers in Turkey, your personal data may be transferred to or accessed
              by organisations located outside the United Kingdom.
            </p>
            <p className="mt-2">
              Where we make such transfers, we aim to do so only where reasonably
              necessary for your enquiry and with appropriate safeguards and contractual
              protections where required.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">7. Data minimisation</h2>
            <p className="mt-2">
              We ask that you only provide information you are comfortable sharing at
              the initial enquiry stage. Please do not send extensive medical records or
              unnecessary sensitive details unless specifically requested through an
              appropriate next step.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">8. Retention</h2>
            <p className="mt-2">
              We keep personal data only for as long as reasonably necessary for the
              purposes described in this policy, including responding to your enquiry,
              maintaining business records, handling any follow-up, and demonstrating
              consent and compliance where needed.
            </p>
            <p className="mt-2">
              If your enquiry does not proceed, we will generally aim not to retain your
              information for longer than reasonably necessary for internal recordkeeping,
              compliance, and service administration.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">9. Data security</h2>
            <p className="mt-2">
              We use reasonable technical and organisational measures designed to protect
              personal data against unauthorised access, loss, misuse, alteration, or
              disclosure. However, no internet-based transmission or storage system can
              be guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">10. Your rights</h2>
            <p className="mt-2">
              Subject to applicable law, you may have the right to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request erasure of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Object to certain processing</li>
              <li>Request transfer of your data in certain circumstances</li>
              <li>Withdraw consent where we rely on consent</li>
              <li>Lodge a complaint with the Information Commissioner’s Office (ICO)</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, please contact{" "}
              <a
                href="mailto:info@gebedi.com"
                className="underline underline-offset-2 hover:text-slate-900"
              >
                info@gebedi.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">11. Withdraw consent</h2>
            <p className="mt-2">
              Where we rely on your consent, including explicit consent for
              health-related information, you may withdraw that consent at any time by
              contacting us at{" "}
              <a
                href="mailto:info@gebedi.com"
                className="underline underline-offset-2 hover:text-slate-900"
              >
                info@gebedi.com
              </a>.
            </p>
            <p className="mt-2">
              Withdrawal of consent does not affect the lawfulness of processing carried
              out before that withdrawal.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">12. Cookies and analytics</h2>
            <p className="mt-2">
              Our website may use essential website technologies and limited analytics
              tools to support functionality, performance, and service improvement. We
              do not intentionally use these to collect special category data.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">13. Changes to this policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page together with the updated effective date.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-slate-900">14. Contact</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy or how we handle
              personal data, please contact:
            </p>
            <p className="mt-2">
              <strong>Generation Beta Digital Ltd</strong>
            </p>
            <p>3rd Floor, 86–90 Paul Street, London EC2A 4NE, United Kingdom</p>
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

          <div className="rounded-[24px] border border-slate-200 bg-white p-5 text-slate-600">
            <p className="text-sm">
              You may also wish to read our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-2 hover:text-slate-900"
              >
                Terms
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}