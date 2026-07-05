"use client";

import { motion } from "framer-motion";
import { awards, education } from "@/data/education";
import { i18n } from "@/data/i18n";
import { t, tl } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  const { locale } = useSite();

  return (
    <section id="education" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.education.eyebrow} title={i18n.sections.education.title} />

      <div className="grid gap-5 lg:grid-cols-[1fr_0.42fr]">
        <div className="grid gap-4">
          {education.map((item, index) => (
            <motion.article
              key={`${item.period}-${t(item.degree, locale)}`}
              className="panel rounded-lg p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="grid gap-4 sm:grid-cols-[150px_1fr]">
                <p className="mono text-sm text-cyan-200 light:text-cyan-800">{item.period}</p>
                <div>
                  <h3 className="text-xl font-semibold text-white light:text-slate-950">{t(item.school, locale)}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300 light:text-slate-700">{t(item.degree, locale)}</p>
                  {item.details ? <p className="mt-2 text-sm leading-7 text-slate-500 light:text-slate-500">{t(item.details, locale)}</p> : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="panel rounded-lg p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.42 }}
        >
          <p className="mono text-xs uppercase text-cyan-200 light:text-cyan-800">Awards</p>
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
