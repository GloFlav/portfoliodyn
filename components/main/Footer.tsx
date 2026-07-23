"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { COLLAB_URL, Socials } from "@/constants";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-white">
              Got a project in mind?
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Let&apos;s talk over a coffee — remote or on the ground in Antananarivo.
            </p>
          </div>
          <a
            href={COLLAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_15px_40px_-15px_rgba(255,212,0,0.6)] transition hover:brightness-110"
          >
            Let&apos;s collaborate
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} Andry Sambatra Gloria Flavien
            Randriambololona · Portfolio v2
          </p>
          <div className="flex items-center gap-2">
            {Socials.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-yellow-400/60 hover:bg-yellow-400/10"
              >
                <Image src={s.src} alt="" width={16} height={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
