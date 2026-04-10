"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
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

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileTreatmentsOpen(false);
  }

  function closeDesktopDropdown() {
    setTreatmentsOpen(false);
  }

  const solidNavbar = !isHome || scrolled;

  const shellClasses = solidNavbar
    ? "border border-black/5 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
    : "bg-transparent";

  const brandTextClasses = solidNavbar
    ? "text-slate-900 group-hover:text-slate-700"
    : "text-white group-hover:text-white/90";

  const navTextClasses = solidNavbar
    ? "text-slate-600 hover:text-slate-900"
    : "text-white/80 hover:text-white";

  const mobileButtonClasses = solidNavbar
    ? "border-black/10 bg-white/70 text-slate-900 hover:bg-white"
    : "border-white/15 bg-white/10 text-white hover:bg-white/15";

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
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

              <a
                href={isHome ? "#why" : "/#why"}
                onClick={closeDesktopDropdown}
                className={`text-sm transition ${navTextClasses}`}
              >
                Why us
              </a>

              <a
                href={isHome ? "#process" : "/#process"}
                onClick={closeDesktopDropdown}
                className={`text-sm transition ${navTextClasses}`}
              >
                Process
              </a>

              <Link
                href="/blog"
                onClick={closeDesktopDropdown}
                className={`text-sm transition ${navTextClasses}`}
              >
                Insights
              </Link>

              <a
                href="/#form"
                onClick={closeDesktopDropdown}
                className={`text-sm transition ${navTextClasses}`}
              >
                Contact
              </a>
            </nav>
          )}

          <div className="flex items-center gap-3">
            <a
              href="/#form"
              onClick={closeDesktopDropdown}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
            >
              Get quote
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

              <a
                href={isHome ? "#why" : "/#why"}
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Why us
              </a>

              <a
                href={isHome ? "#process" : "/#process"}
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Process
              </a>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Insights
              </Link>

              <a
                href="/#form"
                onClick={closeMobileMenu}
                className="block rounded-2xl px-4 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}