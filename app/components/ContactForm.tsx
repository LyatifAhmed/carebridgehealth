"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send message.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send message.");
      setStatus("error");
    }
  }
  const field = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 focus:border-slate-600 dark:focus:border-sky-400 focus:outline-none";
  return (
    <form onSubmit={submit} className="mt-10 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:p-9">
      <div className="hidden" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div><label htmlFor="contact-name" className="font-medium">Your name</label><input id="contact-name" name="name" required maxLength={120} className={field} /></div>
      <div><label htmlFor="contact-email" className="font-medium">Email address</label><input id="contact-email" name="email" type="email" required maxLength={254} className={field} /></div>
      <div><label htmlFor="contact-topic" className="font-medium">Topic</label><select id="contact-topic" name="topic" required className={field}><option>General enquiry</option><option>Privacy / data request</option><option>Website feedback</option><option>Other</option></select></div>
      <div><label htmlFor="contact-message" className="font-medium">Message</label><textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} className={field} /></div>
      <p className="text-sm text-slate-600 dark:text-slate-300">We use your details to respond to your message. Read our <a className="underline" href="/privacy-policy">Privacy Policy</a>.</p>
      <button type="submit" disabled={status === "sending"} className="rounded-full bg-slate-900 px-7 py-3 text-white dark:bg-sky-400 dark:text-slate-950 disabled:opacity-60">{status === "sending" ? "Sending…" : "Send message"}</button>
      {status === "sent" && <p role="status" className="text-sm text-green-700 dark:text-green-400">Thank you. Your message has been sent.</p>}
      {status === "error" && <p role="alert" className="text-sm text-red-700 dark:text-red-400">{error}</p>}
    </form>
  );
}
