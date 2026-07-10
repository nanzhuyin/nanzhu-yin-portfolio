"use client";

import { motion, useReducedMotion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { publications } from "@/data/publications";
import { t } from "@/lib/i18n";
import { revealTransition, revealVariants, revealViewport } from "@/lib/motion";
import { SectionHeading } from "./section-heading";
import { useSite } from "./site-provider";

export function PublicationsSection() {
  const { locale } = useSite();
  const reduceMotion = useReducedMotion();

  return (
    <section id="publications" className="shell section-band section-space">
      <SectionHeading number="03" eyebrow={i18n.sections.publications.eyebrow} title={i18n.sections.publications.title} />

      <div className="border-y border-[rgb(var(--line)/0.13)]">
        {publications.map((item, index) => (
          <motion.article
            key={item.id}
            className="grid gap-4 border-b border-[rgb(var(--line)/0.11)] py-6 last:border-b-0 md:grid-cols-12 md:gap-8 md:py-8"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={revealViewport}
            variants={revealVariants}
            transition={revealTransition(index * 0.045)}
          >
            <div className="flex items-baseline justify-between md:col-span-2 md:block">
              <span className="display text-5xl leading-none text-[rgb(var(--accent))]">{String(index + 1).padStart(2, "0")}</span>
              <p className="mono mt-3 text-[9px] uppercase tracking-[0.12em] text-[rgb(var(--faint))]">{item.venue}</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="max-w-4xl text-base font-medium leading-7 text-[rgb(var(--text))] md:text-xl md:leading-8">{t(item.title, locale)}</h3>
              {item.note ? <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">{t(item.note, locale)}</p> : null}
            </div>
            <div className="md:col-span-2 md:text-right">
              <span className="status-tag tag">{t(item.status, locale)}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
