"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { affiliations } from "@/data/affiliations";
import { i18n } from "@/data/i18n";
import type { LocalizedText } from "@/data/types";
import { t } from "@/lib/i18n";
import { AffiliationLogo } from "./affiliation-logo";
import { SectionHeading } from "./section-heading";
import { useSite } from "./site-provider";

const systemLabel = {
  zh: "履历节点",
  en: "Profile Nodes",
  zhHant: "履歷節點"
} satisfies LocalizedText;

const visualTitle = {
  zh: "从教育到工程实践",
  en: "From education to engineering practice",
  zhHant: "從教育到工程實踐"
} satisfies LocalizedText;

const visualDescription = {
  zh: "学校提供研究训练，公司实习沉淀系统部署、Linux 构建与 RAG 工程经验。",
  en: "Academic training anchors the research direction, while internships add system deployment, Linux build, and RAG engineering practice.",
  zhHant: "學校提供研究訓練，公司實習沉澱系統部署、Linux 構建與 RAG 工程經驗。"
} satisfies LocalizedText;

export function AffiliationsSection() {
  const { locale } = useSite();
  const reduceMotion = useReducedMotion();
  const tickerItems = [...affiliations, ...affiliations];

  return (
    <section id="affiliations" className="section-band py-16 md:py-20">
      <div className="shell">
        <SectionHeading
          eyebrow={i18n.sections.affiliations.eyebrow}
          title={i18n.sections.affiliations.title}
          description={i18n.sections.affiliations.description}
        />

        <div className="grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
          <motion.div
            className="panel self-start overflow-hidden rounded-lg p-5 md:p-6"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[length:42px_42px]" />
            <div className="relative z-10">
              <p className="mono text-xs uppercase text-cyan-200 light:text-cyan-800">{t(systemLabel, locale)}</p>
              <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white light:text-slate-950">
                {t(visualTitle, locale)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400 light:text-slate-600">{t(visualDescription, locale)}</p>
            </div>

            <div className="relative z-10 mt-7 overflow-hidden border-y border-cyan-300/15 py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex min-w-max gap-3"
                animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
                transition={reduceMotion ? undefined : { duration: 26, ease: "linear", repeat: Infinity }}
              >
                {tickerItems.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex min-w-[178px] items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-2 pr-4 light:border-slate-200 light:bg-white/75 sm:min-w-[210px]"
                  >
                    <AffiliationLogo affiliation={item} compact />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white light:text-slate-950">{t(item.name, locale)}</p>
                      <p className="mono mt-1 text-[10px] uppercase text-slate-500 light:text-slate-500">{t(item.kind, locale)}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-4 gap-2">
              {affiliations.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="h-1 rounded-full bg-cyan-300/15"
                  style={{ "--accent": item.accentRgb } as CSSProperties}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.08, duration: 0.5 }}
                >
                  <span className="block h-full rounded-full bg-[rgb(var(--accent)/0.9)]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {affiliations.map((item, index) => (
              <motion.article
                key={item.id}
                style={{ "--accent": item.accentRgb } as CSSProperties}
                className="panel group overflow-hidden rounded-lg p-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05, duration: 0.42, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <motion.span
                  className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-[rgb(var(--accent)/0.12)] to-transparent opacity-0 group-hover:opacity-100"
                  animate={reduceMotion ? undefined : { x: ["-120%", "520%"] }}
                  transition={reduceMotion ? undefined : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <p className="mono text-[11px] uppercase text-[rgb(var(--accent)/0.95)]">{t(item.kind, locale)}</p>
                  <span className="mono text-[11px] text-slate-500 light:text-slate-500">{item.period}</span>
                </div>

                <div className="relative z-10 mt-4">
                  <AffiliationLogo affiliation={item} />
                </div>

                <div className="relative z-10 mt-4">
                  <h3 className="text-lg font-semibold text-white light:text-slate-950">{t(item.name, locale)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300 light:text-slate-700">{t(item.role, locale)}</p>
                  <p className="mono mt-3 text-xs leading-6 text-cyan-100/80 light:text-cyan-800">{t(item.signal, locale)}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
