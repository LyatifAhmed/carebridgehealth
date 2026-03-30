"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center px-6 py-4 transition-all duration-300 ${
          scrolled ? "justify-end" : "justify-between"
        }`}
      >
        {/* LEFT SIDE (logo + nav sadece scroll yokken) */}
        {!scrolled && (
          <>
            <Link
              href="/"
              className="group flex items-center gap-3 transition-all duration-300"
            >
              <Image
                src="/logo.png"
                alt="CareBridge Health"
                width={32}
                height={32}
                className="h-8 w-8 object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                priority
              />

              <span className="text-sm font-semibold text-white transition-all duration-300 group-hover:text-white/90">
                CareBridge Health
              </span>
            </Link>

            <nav className="hidden gap-6 text-sm text-white/80 md:flex">
              <a href="#services" className="hover:text-white">
                Treatments
              </a>
              <a href="#why" className="hover:text-white">
                Why us
              </a>
              <a href="#process" className="hover:text-white">
                Process
              </a>
              <a href="#form" className="hover:text-white">
                Contact
              </a>
            </nav>
          </>
        )}

        {/* CTA her zaman var */}
        <a
          href="#form"
          className={`rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:opacity-90 ${
            scrolled ? "ml-auto scale-105 shadow-lg" : ""
          }`}
        >
          Get quote
        </a>
      </div>
    </header>
  );
}