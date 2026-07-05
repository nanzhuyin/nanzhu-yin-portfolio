"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import type { LocalizedText } from "@/data/types";
import { t, tl } from "@/lib/i18n";
import { useSite } from "./site-provider";

const caption = {
  zh: "个人档案",
  en: "Profile Card",
  zhHant: "個人檔案"
} satisfies LocalizedText;

const contactLabel = {
  zh: "联系",
  en: "Contact",
  zhHant: "聯絡"
} satisfies LocalizedText;

export function HeroSystemVisual() {
  const { locale } = useSite();

  return (
    <motion.aside
      className="panel relative overflow-hidden rounded-lg p-5 md:p-6"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
      aria-label={t(caption, locale)}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[length:34px_34px]" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase text-cyan-200 light:text-cyan-800">{t(caption, locale)}</p>
          <h2 className="mt-4 text-4xl font-black leading-none text-white light:text-slate-950 md:text-5xl">
            {t(profile.name, locale)}
          </h2>
          <p className="mono mt-2 text-sm text-slate-500 light:text-slate-600">{profile.romanName}</p>
        </div>
        <div className="grid h-16 w-16 shrink-0 place-items-center border border-cyan-300/45 bg-cyan-300/10 text-3xl font-black text-cyan-100 shadow-glow light:text-cyan-900">
          {t(profile.name, locale).slice(0, 1)}
        </div>
      </div>

      <div className="relative z-10 mt-6 border-y border-cyan-300/15 py-5">
        <p className="text-sm leading-7 text-slate-300 light:text-slate-700">{t(profile.target, locale)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tl(profile.keywords, locale).map((keyword) => (
            <span key={keyword} className="tag">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-5 grid gap-3 border border-cyan-300/15 bg-slate-950/25 p-4 light:bg-white/70">
        {tl(profile.facts, locale).map((fact, index) => (
          <motion.div
            key={fact}
            className="grid grid-cols-[28px_1fr] items-start gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + index * 0.06, duration: 0.32 }}
          >
            <span className="mono text-xs text-cyan-200 light:text-cyan-800">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-sm leading-6 text-slate-200 light:text-slate-700">{fact}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mt-5 grid gap-3 border-t border-cyan-300/15 pt-5 sm:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mono text-[10px] uppercase text-cyan-200 light:text-cyan-800">{t(contactLabel, locale)}</p>
          <p className="mt-2 break-all text-sm text-slate-300 light:text-slate-700">{profile.email}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {profile.githubLinks.map((link, index) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="mono border border-cyan-300/20 bg-cyan-300/5 px-2.5 py-1.5 text-xs text-cyan-100 transition hover:border-cyan-300/60 light:text-cyan-900"
            >
              GitHub {index + 1}
            </a>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
