import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact CareBridge Health",
  description: "Contact CareBridge Health about general enquiries, privacy requests or website feedback.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-slate-500">CareBridge Health</p>
      <h1 className="mt-4 text-4xl font-semibold">Contact us</h1>
      <p className="mt-5 text-slate-600 leading-7">For general questions, privacy and data requests, or website feedback, use the form below. For a treatment enquiry, please use our <a className="underline" href="/#form">private consultation form</a>.</p>
      <ContactForm />
      <p className="mt-8 text-sm leading-6 text-slate-500">CareBridge Health is operated by BetaOffice Ltd, 66 Paul Street, London EC2A 4NA, United Kingdom. We are an independent coordination service, not a medical provider. Please do not include sensitive medical information in this general contact form.</p>
    </main>
  );
}
