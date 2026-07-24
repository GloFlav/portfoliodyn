"use client";

import React from "react";
import { COLLAB_URL } from "@/constants";

const SERVICES = [
  {
    n: "01",
    title: "Sites web sur mesure",
    desc: "Vitrines, e-commerce, portails institutionnels, apps métier. De la landing page 1 écran au site multilingue avec CMS. Livraison typique en 3 à 6 semaines.",
    stack: ["Next.js", "React", "Node", "Tailwind"],
  },
  {
    n: "02",
    title: "SaaS & plateformes",
    desc: "Marketplaces, dashboards, back-offices, outils IA. Architecture full-stack pensée pour scaler : auth, paiement, rôles, API.",
    stack: ["Next.js", "Node", "Springboot", "PostgreSQL"],
  },
  {
    n: "03",
    title: "Automatisations & scripts métier",
    desc: "Scrapers, tâches planifiées, intégrations d'API, workflows internes. Ce qui prend 3h/semaine à votre équipe passe à 0.",
    stack: ["Python", "Node", "n8n", "Cron"],
  },
  {
    n: "04",
    title: "Refontes & audits UX",
    desc: "Audit de l'existant, direction créative, prototype cliquable, refonte progressive. Cf. la démo APIQA dans les projets.",
    stack: ["Figma", "GSAP", "Next.js"],
  },
  {
    n: "05",
    title: "Apps mobiles",
    desc: "Cross-platform React Native ou Tauri desktop pour les usages hors navigateur. Interface native, une seule codebase.",
    stack: ["React Native", "Tauri", "Expo"],
  },
  {
    n: "06",
    title: "Event tech & registrations",
    desc: "Sites d'event, systèmes d'inscription, badges, live votes. Retour d'expérience réel : Hack-IT, Bachelor IT, Miray Tournament.",
    stack: ["Next.js", "Node", "Print API"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-12 flex flex-col gap-3 md:mb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-yellow-400">
          What I offer
        </p>
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          What I can{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            build for you
          </span>
          .
        </h2>
        <p className="max-w-xl text-base text-gray-400">
          Un partenaire technique unique — du site vitrine au SaaS complet.
          Chaque projet est chiffré au forfait ou en régie, sans surprise.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.n}
            className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:border-yellow-400/40 hover:bg-white/[0.04]"
          >
            <span className="font-mono text-[11px] tracking-widest text-yellow-400">
              {s.n}
            </span>
            <h3 className="text-xl font-semibold text-white">{s.title}</h3>
            <p className="text-sm leading-relaxed text-gray-400">{s.desc}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {s.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <p className="text-lg font-semibold text-white">
            Un projet qui ne rentre dans aucune case ?
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Racontez-moi le contexte — je vous dis en 24 h si je suis le bon
            partenaire.
          </p>
        </div>
        <a
          href={COLLAB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(255,212,0,0.6)] transition hover:brightness-110"
        >
          Discuter du projet
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Services;
