"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import type { LocalizedText } from "@/data/types";
import { t, tl } from "@/lib/i18n";
import { motionTokens, revealTransition } from "@/lib/motion";
import { useSite } from "./site-provider";

const caption = {
  zh: "研究档案",
  en: "Research ledger",
  zhHant: "研究檔案"
} satisfies LocalizedText;

const currentLabel = {
  zh: "当前坐标",
  en: "Current coordinates",
  zhHant: "當前座標"
} satisfies LocalizedText;

export function HeroSystemVisual() {
  const { locale } = useSite();
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      className="panel panel-rule overflow-hidden"
      initial={reduceMotion ? false : { opacity: 0, x: 26 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...revealTransition(0.08), duration: motionTokens.scene }}
      aria-label={t(caption, locale)}
    >
      <div className="relative border-b border-[rgb(var(--line)/0.12)] px-6 py-5 md:px-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">{t(caption, locale)}</p>
            <p className="mono mt-2 text-[9px] uppercase tracking-[0.18em] text-[rgb(var(--faint))]">Frame 00 / Profile</p>
          </div>
          <span className="mono text-5xl font-light leading-none text-[rgb(var(--accent))]" aria-hidden="true">⌁</span>
        </div>
      </div>

      <div className="relative px-6 py-7 md:px-7">
        <p className="mono text-[10px] uppercase tracking-[0.18em] text-[rgb(var(--faint))]">{t(currentLabel, locale)}</p>
        <p className="mt-4 text-xl font-medium leading-snug text-[rgb(var(--text))]">{t(profile.target, locale)}</p>

        <ol className="mt-8 border-y border-[rgb(var(--line)/0.12)]">
          {tl(profile.facts, locale).map((fact, index) => (
            <li key={fact} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-[rgb(var(--line)/0.1)] py-4 last:border-b-0">
              <span className="mono text-[10px] text-[rgb(var(--accent))]">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm leading-6 text-[rgb(var(--muted))]">{fact}</span>
            </li>
          ))}
        </ol>

        <div className="mt-7 grid grid-cols-2 gap-5">
          <div>
            <p className="mono text-[9px] uppercase tracking-[0.16em] text-[rgb(var(--faint))]">Email</p>
            <a href={`mailto:${profile.email}`} className="editorial-link mt-2 block break-all text-xs leading-5">{profile.email}</a>
          </div>
          <div>
            <p className="mono text-[9px] uppercase tracking-[0.16em] text-[rgb(var(--faint))]">Repository</p>
            <div className="mt-2 flex gap-3">
              {profile.githubLinks.map((link, index) => (
                <a key={link} href={link} target="_blank" rel="noreferrer" className="editorial-link mono text-xs" aria-label={`GitHub ${index + 1} (external link)`}>
                  0{index + 1} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mono flex items-center justify-between border-t border-[rgb(var(--line)/0.12)] px-6 py-4 text-[9px] uppercase tracking-[0.16em] text-[rgb(var(--faint))] md:px-7">
        <span>Lingnan / AI Research</span>
        <span>Vol. 01</span>
      </div>
    </motion.aside>
  );
}
