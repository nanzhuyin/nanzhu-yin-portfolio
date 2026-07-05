"use client";

import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { profile } from "@/data/profile";
import type { LocalizedText } from "@/data/types";
import { t, tl } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

const profileKind = {
  zh: "研究型工程师",
  en: "Research Engineer",
  zhHant: "研究型工程師"
} satisfies LocalizedText;

export function AboutSection() {
  const { locale } = useSite();
  return (
    <section id="about" className="shell section-band py-20 md:py-28">
      <SectionHeading eyebrow={t(i18n.sections.about.eyebrow, locale)} title={t(i18n.sections.about.title, locale)} />
      <div className="grid items-start gap-6 lg:grid-cols-[0.42fr_1fr]">
        <motion.div
          className="panel relative overflow-hidden rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.024)_1px,transparent_1px)] bg-[length:32px_32px]" />
          <p className="mono relative text-xs uppercase text-cyan-200 light:text-cyan-800">{t(profileKind, locale)}</p>
          <p className="relative mt-4 text-2xl font-semibold leading-tight text-white light:text-slate-950">
            AI + Web3 Security / LLM Agent / RAG
          </p>
          <div className="relative mt-6 h-px bg-gradient-to-r from-cyan-300/50 via-white/10 to-transparent" />
          <p className="relative mt-5 text-sm leading-7 text-slate-400 light:text-slate-600">{t(profile.heroIntro, locale)}</p>
        </motion.div>
        <div className="panel rounded-lg p-6 md:p-8">
          {tl(profile.about, locale).map((paragraph, index) => (
            <motion.p
              key={paragraph}
              className="border-t border-white/10 py-5 text-base leading-8 text-slate-300 first:border-t-0 first:pt-0 last:pb-0 light:border-slate-200 light:text-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
