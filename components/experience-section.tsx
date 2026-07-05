"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { i18n } from "@/data/i18n";
import { t, tl } from "@/lib/i18n";
import { EntityBadge } from "./entity-badge";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const { locale } = useSite();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section id="experience" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.experience.eyebrow} title={i18n.sections.experience.title} />

      <div className="relative grid gap-5">
        <div className="absolute left-[21px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/20 to-transparent md:block" />
        {experience.map((item, index) => {
          const allHighlights = tl(item.highlights, locale);
          const visibleCount = item.id === "kaidi-feiyan" ? 4 : allHighlights.length;
          const visibleHighlights = expanded[item.id] ? allHighlights : allHighlights.slice(0, visibleCount);
          const canExpand = allHighlights.length > visibleCount;

          return (
          <motion.article
            key={item.id}
            className="panel relative rounded-lg p-5 md:ml-16 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.45 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

            <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
              <div className="flex gap-4 md:block">
                <EntityBadge badge={item.badge} className="md:absolute md:-left-[4.35rem] md:top-5" />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="mono text-sm text-cyan-200 light:text-cyan-800">{item.period}</p>
                    <span className="tag">{t(item.keywords, locale)}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white light:text-slate-950">{t(item.company, locale)}</h3>
                  <p className="mt-3 text-lg text-slate-200 light:text-slate-800">{t(item.role, locale)}</p>
                </div>
              </div>

              <div>
                <p className="mono mb-3 text-xs uppercase text-slate-500 light:text-slate-500">
                  {t(i18n.labels.stack, locale)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 border-t border-white/10 pt-4 light:border-slate-200">
              {visibleHighlights.map((highlight, highlightIndex) => (
                <motion.div
                  key={highlight}
                  className="grid grid-cols-[34px_1fr] gap-3"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: highlightIndex * 0.025, duration: 0.35 }}
                >
                  <span className="mono grid h-7 w-7 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs text-cyan-100 light:text-cyan-900">
                    {String(highlightIndex + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-slate-400 light:text-slate-600">{highlight}</p>
                </motion.div>
              ))}
            </div>

            {canExpand ? (
              <button
                type="button"
                className="button-secondary mt-5"
                onClick={() => setExpanded((current) => ({ ...current, [item.id]: !current[item.id] }))}
                aria-expanded={Boolean(expanded[item.id])}
              >
                {expanded[item.id] ? t(i18n.actions.collapse, locale) : t(i18n.actions.expand, locale)}
              </button>
            ) : null}
          </motion.article>
          );
        })}
      </div>
    </section>
  );
}
