"use client";

import { motion } from "framer-motion";
import { awards, education } from "@/data/education";
import { i18n } from "@/data/i18n";
import { t, tl } from "@/lib/i18n";
import { EntityBadge } from "./entity-badge";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  const { locale } = useSite();

  return (
    <section id="education" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.education.eyebrow} title={i18n.sections.education.title} />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.34fr]">
        <div className="relative grid gap-4">
          <div className="absolute left-[21px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/20 to-transparent md:block" />
          {education.map((item, index) => (
            <motion.article
              key={`${item.period}-${t(item.degree, locale)}`}
              className="panel relative rounded-lg p-5 md:ml-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <div className="flex items-start gap-3">
                    <EntityBadge badge={item.badge} className="md:absolute md:-left-[4.35rem] md:top-5" />
                    <h3 className="text-xl font-semibold text-white light:text-slate-950">{t(item.school, locale)}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300 light:text-slate-700">{t(item.degree, locale)}</p>
                  {item.details ? <p className="mt-2 text-sm leading-7 text-slate-500 light:text-slate-500">{t(item.details, locale)}</p> : null}
                </div>
                <p className="mono text-sm text-cyan-200 light:text-cyan-800">{item.period}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="panel rounded-lg p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
        >
          <p className="mono text-xs uppercase text-cyan-200 light:text-cyan-800">{t(i18n.labels.awards, locale)}</p>
          <ul className="mt-5 grid gap-3">
            {tl(awards, locale).map((award) => (
              <li key={award} className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-7 text-slate-400 light:text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
