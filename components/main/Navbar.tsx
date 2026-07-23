"use client";

import { COLLAB_URL, Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about-me", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#skills", label: "Skills" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-black/70 backdrop-blur-xl"
          : "border-b border-transparent bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[64px] w-full max-w-7xl items-center justify-between gap-4 px-6 md:px-10">
        {/* Logo */}
        <Link
          href="#about-me"
          className="flex items-center gap-3"
          aria-label="Home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="https://raw.githubusercontent.com/GloFlav/portfoliodyn/main/public/logo.png"
            alt="Flavien"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-gray-400 md:block">
            Flavien
          </span>
        </Link>

        {/* Nav links — desktop */}
        <nav
          className="hidden items-center gap-8 text-sm text-gray-300 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-yellow-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Socials — compact icons */}
          <div className="hidden items-center gap-2 sm:flex">
            {Socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-yellow-400/60 hover:bg-yellow-400/10"
              >
                <Image src={s.src} alt="" width={16} height={16} />
              </a>
            ))}
          </div>

          {/* CTA collaborate */}
          <a
            href={COLLAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(255,212,0,0.6)] transition hover:brightness-110"
          >
            Let&apos;s collaborate
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-[3px]">
              <span
                className={`block h-[2px] w-4 bg-current transition ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-4 bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-4 bg-current transition ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        } overflow-hidden border-t border-white/5 bg-black/80 backdrop-blur-xl transition-[max-height] duration-300`}
      >
        <nav
          className="flex flex-col gap-1 px-6 py-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-gray-200 transition hover:bg-white/5 hover:text-yellow-300"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 border-t border-white/5 px-3 pt-4 sm:hidden">
            {Socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03]"
              >
                <Image src={s.src} alt="" width={16} height={16} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
