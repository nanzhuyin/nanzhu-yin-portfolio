"use client";

import { motion, useReducedMotion } from "framer-motion";
import { awards, education } from "@/data/education";
import { i18n } from "@/data/i18n";
import { t, tl } from "@/lib/i18n";
import { revealTransition, revealVariants, revealViewport } from "@/lib/motion";
import { EntityBadge } from "./entity-badge";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  const { locale } = useSite();
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="shell section-band section-space">
      <SectionHeading number="05" eyebrow={i18n.sections.education.eyebrow} title={i18n.sections.education.title} />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-9">
          <div className="absolute bottom-0 left-[1.4rem] top-0 w-px bg-[rgb(var(--line)/0.13)]" aria-hidden="true" />
          {education.map((item, index) => (
            <motion.article
              key={`${item.period}-${t(item.degree, locale)}`}
              className="relative grid gap-4 border-t border-[rgb(var(--line)/0.12)] py-7 pl-20 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-8"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={revealViewport}
              variants={revealVariants}
              transition={revealTransition(index * 0.05)}
            >
              <EntityBadge badge={item.badge} className="absolute left-0 top-4" />
              <div>
                <h3 className="text-xl font-medium text-[rgb(var(--text))] md:text-2xl">{t(item.school, locale)}</h3>
                <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">{t(item.degree, locale)}</p>
                {item.details ? <p className="mt-2 text-xs leading-6 text-[rgb(var(--faint))]">{t(item.details, locale)}</p> : null}
              </div>
              <p className="mono text-[10px] uppercase tracking-[0.12em] text-[rgb(var(--accent))]">{item.period}</p>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="border-t border-[rgb(var(--accent))] pt-5 lg:col-span-3"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={revealViewport}
          variants={revealVariants}
          transition={revealTransition(0.08)}
        >
          <p className="eyebrow">{t(i18n.labels.awards, locale)}</p>
          <ul className="mt-6 grid gap-5">
            {tl(awards, locale).map((award, index) => (
              <li key={award} className="grid grid-cols-[1.75rem_1fr] gap-3 text-sm leading-7 text-[rgb(var(--muted))]">
                <span className="mono text-[10px] text-[rgb(var(--accent))]">{String(index + 1).padStart(2, "0")}</span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
