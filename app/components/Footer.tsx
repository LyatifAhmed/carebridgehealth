import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              CareBridge Health
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              UK-based medical treatment coordination for international
              patients. Focused on trusted clinics, clear communication, and
              carefully structured planning.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              London • Istanbul coordination
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">
              Navigation
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#services" className="transition hover:text-black">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#process" className="transition hover:text-black">
                  Process
                </a>
              </li>
              <li>
                <a href="#why" className="transition hover:text-black">
                  Why us
                </a>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <a href="#form" className="transition hover:text-black">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Trust */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">
              Company & trust
            </h4>

            <div className="mt-4 space-y-3 text-sm text-slate-600 leading-6">
              <p className="font-medium text-slate-900">
                Generation Beta Digital Ltd
              </p>

              <p>
                3rd Floor, 86–90 Paul Street <br />
                London EC2A 4NE, UK
              </p>

              <p>Company No: 16274319</p>
              <p>ICO No: ZB883806</p>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              CareBridge Health is operated by Generation Beta Digital Ltd.
            </p>
          </div>

          {/* Work with us (NEW) */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">
              Work with us
            </h4>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              We collaborate with a limited number of carefully selected
              clinics and specialists in Turkey.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              If you are a licensed clinic or medical provider interested in
              working with international patients, you can apply to join our
              network.
            </p>

            <div className="mt-5">
              <Link
                href="/partner-application"
                className="inline-flex rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950"
              >
                Apply as a clinic
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} CareBridge Health</p>
            <p className="text-xs text-slate-400">
              Independent coordination service. Not a medical provider.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="transition hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-black">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}