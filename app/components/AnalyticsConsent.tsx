"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "carebridge_analytics_consent_v1";
const MEASUREMENT_ID = "G-1D75Y4DC5H";
const ALLOWED_EVENTS = new Set([
  "consultation_form_viewed",
  "consultation_form_started",
  "consultation_form_submitted",
  "consultation_cta_clicked",
]);

type Consent = "accepted" | "rejected" | null;
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    clarity?: (...args: unknown[]) => void;
  }
}

export function recordCareBridgeEvent(name: string) {
  if (typeof window === "undefined" || !ALLOWED_EVENTS.has(name)) return;
  window.dispatchEvent(new CustomEvent("carebridge-analytics-event", { detail: name }));
}

export default function AnalyticsConsent() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    setConsent(saved === "accepted" || saved === "rejected" ? saved : null);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || consent !== "accepted") return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    if (!document.querySelector('script[data-carebridge-ga4]')) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.carebridgeGa4 = "true";
      script.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
      document.head.appendChild(script);
    }

    if (!document.querySelector('script[data-carebridge-clarity]')) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.carebridgeClarity = "true";
      script.src = "https://www.clarity.ms/tag/w3ih7va589";
      window.clarity = window.clarity || function (...args: unknown[]) {
        const fn = window.clarity as ((...args: unknown[]) => void) & { q?: unknown[][] };
        (fn.q = fn.q || []).push(args);
      };
      document.head.appendChild(script);
    }
    const listener = (event: Event) => {
      const name = (event as CustomEvent<string>).detail;
      if (ALLOWED_EVENTS.has(name)) window.gtag?.("event", name);
    };
    window.addEventListener("carebridge-analytics-event", listener);
    return () => window.removeEventListener("carebridge-analytics-event", listener);
  }, [ready, consent]);

  useEffect(() => {
    if (consent !== "accepted" || !ready) return;
    window.gtag?.("event", "page_view", {
      page_location: window.location.origin + pathname,
      page_title: document.title,
    });
  }, [pathname, ready, consent]);

  function saveConsent(next: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, next);
    if (next === "rejected" && consent === "accepted") {
      // Existing third-party scripts cannot be reliably unloaded: reload to stop tracking.
      window.location.reload();
      return;
    }
    setConsent(next);
    setSettingsOpen(false);
  }

  if (!ready) return null;
  return (
    <>
      {consent === null && (
        <div role="dialog" aria-label="Analytics cookie choice" className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl sm:bottom-5">
          <p className="text-base font-semibold">Your privacy matters</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            With your permission, we use Google Analytics and Microsoft Clarity to understand website usage and improve our service. They are optional and are not used to send the information you enter in consultation forms. Read our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => saveConsent("accepted")} className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">Accept analytics</button>
            <button type="button" onClick={() => saveConsent("rejected")} className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900">Reject analytics</button>
          </div>
        </div>
      )}
      {consent !== null && (
        <button type="button" onClick={() => setSettingsOpen(true)} className="fixed bottom-3 left-3 z-[90] rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 shadow-md" aria-label="Cookie settings">Cookie settings</button>
      )}
      {settingsOpen && consent !== null && (
        <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-14 z-[100] mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl">
          <p className="font-semibold">Analytics preferences</p>
          <p className="mt-2 text-sm text-slate-700">You can change your optional analytics choice at any time.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => saveConsent("accepted")} className="rounded-full bg-slate-950 px-4 py-2 text-sm text-white">Accept</button>
            <button type="button" onClick={() => saveConsent("rejected")} className="rounded-full border px-4 py-2 text-sm">Reject</button>
            <button type="button" onClick={() => setSettingsOpen(false)} className="rounded-full border px-4 py-2 text-sm">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
