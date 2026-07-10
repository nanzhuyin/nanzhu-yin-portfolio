"use client";

import { motion, useReducedMotion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { profile } from "@/data/profile";
import { t, tl } from "@/lib/i18n";
import { sceneTransition } from "@/lib/motion";
import { withBasePath } from "@/lib/paths";
import { useSite } from "./site-provider";
import { KnowledgeBackground } from "./knowledge-background";
import { HeroSystemVisual } from "./hero-system-visual";

export function HeroSection() {
  const { locale } = useSite();
  const reduceMotion = useReducedMotion();
  const keywords = tl(profile.keywords, locale);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 md:pt-28">
      <KnowledgeBackground />
      <div className="shell grid min-h-[calc(100dvh-6rem)] content-center gap-12 pb-16 pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <motion.div
          className="relative z-10 self-center lg:col-span-7"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sceneTransition}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="mono text-xs text-[rgb(var(--faint))]">00</span>
            <span className="h-px w-12 bg-[rgb(var(--accent))]" aria-hidden="true" />
            <span className="eyebrow">Cinematic Intelligence / 2026</span>
          </div>

          <h1 className="display max-w-5xl text-[clamp(4.6rem,11vw,10rem)] leading-[0.76] text-[rgb(var(--text))]">
            {t(profile.name, locale)}
          </h1>
          <p className="mono mt-5 text-[10px] uppercase tracking-[0.24em] text-[rgb(var(--faint))]">{profile.romanName}</p>

          <h2 className="mt-9 max-w-3xl text-[clamp(1.45rem,3.1vw,2.8rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[rgb(var(--text))]">
            {t(profile.role, locale)}
          </h2>
          <p className="mt-7 max-w-[66ch] text-base leading-8 text-[rgb(var(--muted))] md:text-lg md:leading-9">
            {t(profile.heroIntro, locale)}
          </p>

          <div className="mt-7 grid max-w-3xl gap-x-8 gap-y-3 border-y border-[rgb(var(--line)/0.12)] py-5 sm:grid-cols-2">
            {keywords.map((keyword, index) => (
              <div key={keyword} className="flex items-start gap-3">
                <span className="mono mt-0.5 text-[10px] text-[rgb(var(--accent))]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-xs leading-5 text-[rgb(var(--muted))]">{keyword}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 hidden max-w-2xl text-sm leading-7 text-[rgb(var(--faint))] sm:block">{t(profile.target, locale)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#projects">
              {t(i18n.actions.viewProjects, locale)}
              <span aria-hidden="true">↓</span>
            </a>
            <a className="button-secondary" href={withBasePath("/cv.pdf")} download>
              {t(i18n.actions.downloadCv, locale)}
            </a>
            <a className="button-tertiary" href={`mailto:${profile.email}`}>
              {t(i18n.actions.contactMe, locale)}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>

        <div className="self-center lg:col-span-5 lg:pl-2">
          <HeroSystemVisual />
        </div>

        <div className="mono col-span-full mt-3 flex items-center justify-between border-t border-[rgb(var(--line)/0.12)] pt-4 text-[9px] uppercase tracking-[0.18em] text-[rgb(var(--faint))]">
          <span>Research in motion</span>
          <a href="#focus" className="transition-colors hover:text-[rgb(var(--accent))]">Scroll / Chapter 01</a>
        </div>
      </div>
    </section>
  );
}
