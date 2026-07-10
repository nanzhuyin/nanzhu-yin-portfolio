"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { i18n } from "@/data/i18n";
import { t, tl } from "@/lib/i18n";
import { motionTokens, revealTransition, revealVariants, revealViewport } from "@/lib/motion";
import { EntityBadge } from "./entity-badge";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const { locale } = useSite();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="shell section-band section-space">
      <SectionHeading number="04" eyebrow={i18n.sections.experience.eyebrow} title={i18n.sections.experience.title} />

      <div className="grid gap-5">
        {experience.map((item, index) => {
          const allHighlights = tl(item.highlights, locale);
          const visibleCount = item.id === "kaidi-feiyan" ? 4 : allHighlights.length;
          const visibleHighlights = expanded[item.id] ? allHighlights : allHighlights.slice(0, visibleCount);
          const canExpand = allHighlights.length > visibleCount;
          const detailsId = `experience-details-${item.id}`;

          return (
            <motion.article
              key={item.id}
              className="panel overflow-hidden"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={revealViewport}
              variants={revealVariants}
              transition={revealTransition(index * 0.06)}
            >
              <div className="grid gap-6 border-b border-[rgb(var(--line)/0.12)] p-6 md:grid-cols-12 md:p-8">
                <div className="flex gap-4 md:col-span-2">
                  <EntityBadge badge={item.badge} />
                  <p className="mono pt-1 text-[10px] leading-5 text-[rgb(var(--accent))] md:hidden">{item.period}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="mono hidden text-[10px] uppercase tracking-[0.14em] text-[rgb(var(--accent))] md:block">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.02em] text-[rgb(var(--text))] md:text-3xl">{t(item.company, locale)}</h3>
                  <p className="mt-3 text-base text-[rgb(var(--muted))]">{t(item.role, locale)}</p>
                  <p className="mt-3 text-xs leading-6 text-[rgb(var(--faint))]">{t(item.keywords, locale)}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="mono mb-3 text-[9px] uppercase tracking-[0.15em] text-[rgb(var(--faint))]">{t(i18n.labels.stack, locale)}</p>
                  <div className="flex flex-wrap gap-1.5">{item.stack.map((tool) => <span key={tool} className="tag">{tool}</span>)}</div>
                </div>
              </div>

              <div id={detailsId} className="p-6 md:p-8">
                <div className="grid gap-4 lg:grid-cols-2">
                  <AnimatePresence initial={false}>
                    {visibleHighlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlight}
                        className="grid grid-cols-[2rem_1fr] gap-3 border-t border-[rgb(var(--line)/0.1)] pt-4"
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: motionTokens.fast, ease: motionTokens.ease }}
                      >
                        <span className="mono text-[10px] text-[rgb(var(--accent))]">{String(highlightIndex + 1).padStart(2, "0")}</span>
                        <p className="text-sm leading-7 text-[rgb(var(--muted))]">{highlight}</p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {canExpand ? (
                  <button
                    type="button"
                    className="button-secondary mt-6"
                    onClick={() => setExpanded((current) => ({ ...current, [item.id]: !current[item.id] }))}
                    aria-expanded={Boolean(expanded[item.id])}
                    aria-controls={detailsId}
                  >
                    {expanded[item.id] ? t(i18n.actions.collapse, locale) : t(i18n.actions.expand, locale)}
                    <span aria-hidden="true">{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
