"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { profile } from "@/data/profile";
import { t, tl } from "@/lib/i18n";
import { withBasePath } from "@/lib/paths";
import { useSite } from "./site-provider";
import { KnowledgeBackground } from "./knowledge-background";
import { HeroSystemVisual } from "./hero-system-visual";

export function HeroSection() {
  const { locale } = useSite();
  const keywords = tl(profile.keywords, locale);
  const [activeKeyword, setActiveKeyword] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveKeyword((current) => (current + 1) % keywords.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [keywords.length]);

  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-36">
      <KnowledgeBackground />
      <div className="shell grid min-h-[calc(100svh-6rem)] items-center gap-8 pb-20 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mono mb-5 inline-flex border border-cyan-300/25 bg-cyan-300/5 px-3 py-2 text-xs text-cyan-100 light:text-cyan-900">
            AI + Web3 Security / LLM Agent / RAG Systems
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] text-white light:text-slate-950 sm:text-7xl lg:text-8xl">
            {t(profile.name, locale)}
          </h1>
          <p className="mono mt-4 text-sm text-slate-500 light:text-slate-600">{profile.romanName}</p>
          <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-slate-100 light:text-slate-900 md:text-4xl">
            {t(profile.role, locale)}
          </h2>
          <div className="mt-5 h-8 overflow-hidden">
            <motion.div
              key={`${locale}-${activeKeyword}`}
              className="mono text-sm text-cyan-200 light:text-cyan-800 md:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {keywords[activeKeyword]}
            </motion.div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 light:text-slate-600 md:text-lg">
            {t(profile.heroIntro, locale)}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 light:text-slate-500">{t(profile.target, locale)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href={withBasePath("/cv.pdf")} download>
              {t(i18n.actions.downloadCv, locale)}
            </a>
            <a className="button-secondary" href="#projects">
              {t(i18n.actions.viewProjects, locale)}
            </a>
            <a className="button-secondary" href={`mailto:${profile.email}`}>
              {t(i18n.actions.contactMe, locale)}
            </a>
          </div>
        </motion.div>
        <HeroSystemVisual />
      </div>
    </section>
  );
}
