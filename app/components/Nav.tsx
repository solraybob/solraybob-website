"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "The Canon", href: "#canon" },
  { label: "Clothing", href: "#clothing" },
  { label: "Tools", href: "#tools" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#faf6f0", borderBottom: "1px solid #e8d5b8" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + wordmark */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/solraybob-logo.jpg"
              alt="Sol-Ray Bob sun logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span
            className="font-sans font-semibold tracking-widest text-sm uppercase"
            style={{ color: "#1a1008", letterSpacing: "0.15em" }}
          >
            SOL-RAY BOB
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans transition-colors duration-150"
              style={{ color: "#7a6a5a" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#e8821a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#7a6a5a")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all"
            style={{ backgroundColor: "#1a1008" }}
          />
          <span
            className="block w-6 h-0.5 transition-all"
            style={{ backgroundColor: "#1a1008" }}
          />
          <span
            className="block w-4 h-0.5 transition-all"
            style={{ backgroundColor: "#1a1008" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "#faf6f0",
            borderColor: "#e8d5b8",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans"
                style={{ color: "#7a6a5a" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
