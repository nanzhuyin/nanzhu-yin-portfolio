"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { i18n } from "@/data/i18n";
import { t, tl } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const { locale } = useSite();

  return (
    <section id="experience" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.experience.eyebrow} title={i18n.sections.experience.title} />

      <div className="grid gap-5">
        {experience.map((item, index) => (
          <motion.article
            key={item.id}
            className="panel relative overflow-hidden rounded-lg p-5 md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.07, duration: 0.45 }}
          >
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-white/10 to-lime-300" />
            <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
              <div>
                <p className="mono text-sm text-cyan-200 light:text-cyan-800">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white light:text-slate-950">{t(item.company, locale)}</h3>
                <p className="mt-3 text-lg text-slate-200 light:text-slate-800">{t(item.role, locale)}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400 light:text-slate-600">{t(item.keywords, locale)}</p>

                <div className="mt-6">
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

              <div className="grid gap-3">
                {tl(item.highlights, locale).map((highlight, highlightIndex) => (
                  <motion.div
                    key={highlight}
                    className="grid grid-cols-[34px_1fr] gap-3 border-t border-white/10 py-3 first:border-t-0 light:border-slate-200"
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: highlightIndex * 0.025, duration: 0.35 }}
                  >
                    <span className="mono grid h-7 w-7 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs text-cyan-100 light:text-cyan-900">
                      {String(highlightIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-slate-400 light:text-slate-600">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
