"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold text-white">
          CareBridge Health
        </div>

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

        <a
          href="#form"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          Get quote
        </a>
      </div>
    </header>
  );
}