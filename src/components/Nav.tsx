"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/layanan", label: "Layanan" },
  { href: "/booking", label: "Booking" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="focus-ring rounded font-display text-lg italic tracking-tight text-paper"
        >
          Shika Creative
        </Link>

        <nav className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="focus-ring rounded p-2 text-paper sm:hidden"
          aria-expanded={open}
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-paper" />
          <span className="mt-1.5 block h-px w-6 bg-paper" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-3 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded px-1 py-2 text-sm text-paper-dim hover:text-paper"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
