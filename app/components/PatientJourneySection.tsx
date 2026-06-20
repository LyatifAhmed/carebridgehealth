export default function PatientJourneySection() {
  const steps = [
    {
      step: "01",
      title: "Submit a private enquiry",
      description:
        "Tell us what treatment you are exploring and any questions or concerns you may have.",
    },
    {
      step: "02",
      title: "Initial review",
      description:
        "We review the information provided and help clarify possible next steps before any commitments are made.",
    },
    {
      step: "03",
      title: "Provider coordination",
      description:
        "If appropriate, we help coordinate communication with suitable independent providers.",
    },
    {
      step: "04",
      title: "Medical assessment",
      description:
        "Any treatment suitability, diagnosis, recommendations, and treatment plans are determined by qualified medical professionals.",
    },
    {
      step: "05",
      title: "Travel only if comfortable",
      description:
        "You remain in control throughout the process and can decide whether to proceed at every stage.",
    },
  ];

  return (
    <section className="bg-[#fcfaf7] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            A structured process designed to reduce uncertainty
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            CareBridge Health is designed to help patients approach treatment
            abroad more carefully, with clearer communication and a more
            structured starting point.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.step}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1"
            >
              <div className="text-4xl font-semibold tracking-[-0.04em] text-slate-200 transition group-hover:text-slate-300">
                {step.step}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
          <h3 className="text-2xl font-semibold text-slate-900">
            No pressure. No obligation.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            CareBridge Health is not a clinic and does not provide medical
            treatment. Our role is to help patients navigate the process more
            clearly before speaking directly with treatment providers.
          </p>
        </div>
      </div>
    </section>
  );
}