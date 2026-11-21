"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const treatmentLinks = [
  {
    title: "Treatment in Turkey",
    href: "/treatment-in-turkey",
    desc: "Overview and planning guidance",
  },
  {
    title: "Treatment in Istanbul",
    href: "/treatment-in-istanbul",
    desc: "For specialist-led pathways",
  },
  {
    title: "Treatment in Antalya",
    href: "/treatment-in-antalya",
    desc: "For comfort and recovery",
  },
  {
    title: "Hair transplant",
    href: "/hair-transplant-turkey",
    desc: "Hair restoration planning",
  },
  {
    title: "Dental treatment",
    href: "/dental-treatment-turkey",
    desc: "Implants, veneers, crowns",
  },
  {
    title: "Cosmetic surgery",
    href: "/cosmetic-surgery-turkey",
    desc: "Structured aesthetic pathways",
  },
  {
    title: "Eye treatment",
    href: "/eye-treatment-turkey",
    desc: "Vision-focused procedures",
  },
  {
    title: "Weight loss surgery",
    href: "/weight-loss-surgery-turkey",
    desc: "Selected bariatric routes",
  },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);

      if (isScrolled) {
        setTreatmentsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileTreatmentsOpen(false);
      document.body.style.overflow = "";
      return;
    }

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!contactOpen) return;
    const onEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setContactOpen(false); };
    window.addEventListener("keydown", onEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [contactOpen]);

  function openContact() {
    closeMobileMenu();
    closeDesktopDropdown();
    setContactOpen(true);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileTreatmentsOpen(false);
  }

  function closeDesktopDropdown() {
    setTreatmentsOpen(false);
  }

  // The home hero now uses a light background; retain readable dark navigation at every scroll position.
  const solidNavbar = true;

  const shellClasses = solidNavbar
    ? "border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(252,250,247,0.94)_100%)] shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
    : "border border-white/10 bg-[rgba(255,255,255,0.06)] shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl";

  const brandTextClasses = solidNavbar
    ? "text-slate-900 group-hover:text-slate-700"
    : "text-white group-hover:text-white/90";

  const navTextClasses = solidNavbar
    ? "text-slate-600 hover:text-slate-900"
    : "text-white/80 hover:text-white";

  const mobileButtonClasses = solidNavbar
    ? "border-slate-200 bg-white/70 text-slate-900 hover:bg-white"
    : "border-white/15 bg-white/10 text-white hover:bg-white/15";

  const quoteButtonClasses = solidNavbar
    ? "border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f2_100%)] text-slate-900 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]"
    : "border border-white/15 bg-white/12 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/16";

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${shellClasses}`}
        >
          <Link
            href="/"
            onClick={() => {
              closeMobileMenu();
              closeDesktopDropdown();
            }}
            className="group flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="CareBridge Health"
              width={32}
              height={32}
              className="h-8 w-8 object-contain transition duration-300 group-hover:scale-105"
              priority
            />
            <span
              className={`text-sm font-semibold transition duration-300 ${brandTextClasses}`}
            >
              CareBridge Health
            </span>
          </Link>

          {!scrolled && (
            <nav className="hidden items-center gap-6 md:flex">
              <div
                className="relative pb-2"
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={treatmentsOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-2 text-sm transition ${navTextClasses}`}
                >
                  Treatments
                  <span
                    className={`text-[10px] transition-transform duration-200 ${
                      treatmentsOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                    treatmentsOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(15,23,42,0.88)] p-3 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                    <div className="grid gap-2 md:grid-cols-2">
                      {treatmentLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeDesktopDropdown}
                          className="rounded-[20px] border border-transparent px-4 py-4 transition hover:border-white/10 hover:bg-white/5"
                        >
                          <div className="text-sm font-medium text-white">
                            {item.title}
                          </div>
                          <div className="mt-1 text-xs leading-6 text-white/60">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                onClick={closeDesktopDropdown}
                className={`text-sm transition ${navTextClasses}`}
              >
                About
              </Link>

              <Link
                href="/blog"
                onClick={closeDesktopDropdown}
                className={`text-sm transition ${navTextClasses}`}
              >
                Insights
              </Link>

              <button
                type="button"
                onClick={openContact}
                className={`text-sm transition ${navTextClasses}`}
              >
                Contact
              </button>
            </nav>
          )}

          <div className="flex items-center gap-3">
            <a
              href="/#form"
              onClick={closeDesktopDropdown}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${quoteButtonClasses}`}
            >
              Start enquiry
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-md transition md:hidden ${mobileButtonClasses}`}
            >
              <span className="text-lg">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 bg-slate-950/55 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`fixed inset-x-4 top-24 transition-all duration-300 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="max-h-[calc(100svh-7rem)] overflow-y-auto overscroll-contain rounded-[28px] border border-white/10 bg-[rgba(15,23,42,0.92)] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-sm font-medium text-white transition hover:bg-white/5"
              >
                <span>Treatments</span>
                <span
                  className={`text-[10px] transition-transform duration-200 ${
                    mobileTreatmentsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileTreatmentsOpen
                    ? "max-h-[1200px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid gap-2 px-2 pb-2 pt-1">
                  {treatmentLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 transition hover:bg-white/5"
                    >
                      <div className="text-sm font-medium text-white">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs leading-6 text-white/60">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                About
              </Link>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Insights
              </Link>

              <button
                type="button"
                onClick={openContact}
                className="block w-full rounded-2xl px-4 py-4 text-left text-sm font-medium text-white transition hover:bg-white/5"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {contactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(e) => { if (e.target === e.currentTarget) setContactOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto overscroll-contain rounded-3xl bg-[#fcfaf7] p-5 text-slate-900 shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:p-7">
            <button type="button" aria-label="Close contact form" onClick={() => setContactOpen(false)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 hover:bg-slate-100">×</button>
            <p className="pr-12 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">CareBridge Health</p>
            <h2 id="contact-dialog-title" className="mt-2 pr-12 text-2xl font-semibold tracking-tight">Just have a question?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">You don’t need to make a treatment enquiry to get in touch. Send us a general question, privacy request or feedback. Please don’t include medical records or sensitive health information.</p>
            <ContactForm />
            <p className="mt-3 text-center text-xs text-slate-500">Considering treatment instead? <a href="/#form" onClick={() => setContactOpen(false)} className="font-semibold text-teal-800 underline underline-offset-2">Start a free enquiry</a></p>
          </div>
        </div>
      )}
    </header>
  );
}