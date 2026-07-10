"use client";

import { motion, useReducedMotion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { researchFocus } from "@/data/focus";
import { t } from "@/lib/i18n";
import { revealTransition, revealVariants, revealViewport } from "@/lib/motion";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function FocusSection() {
  const { locale } = useSite();
  const reduceMotion = useReducedMotion();

  return (
    <section id="focus" className="shell section-band section-space">
      <SectionHeading number="01" eyebrow={t(i18n.sections.focus.eyebrow, locale)} title={t(i18n.sections.focus.title, locale)} />
      <div className="border-y border-[rgb(var(--line)/0.13)]">
        {researchFocus.map((item, index) => (
          <motion.article
            key={t(item.title, locale)}
            className="group grid gap-5 border-b border-[rgb(var(--line)/0.11)] py-7 last:border-b-0 md:grid-cols-12 md:items-start md:gap-8 md:py-9"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={revealViewport}
            variants={revealVariants}
            transition={revealTransition(index * 0.045)}
          >
            <div className="md:col-span-2">
              <span className="display text-6xl leading-none text-[rgb(var(--accent))] md:text-7xl">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.025em] text-[rgb(var(--text))] md:text-3xl">{t(item.title, locale)}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <p className="max-w-[60ch] text-sm leading-7 text-[rgb(var(--muted))] md:col-span-5 md:pt-1 md:text-base md:leading-8">
              {t(item.description, locale)}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
