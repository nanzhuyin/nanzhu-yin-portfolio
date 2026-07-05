"use client";

import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { profile } from "@/data/profile";
import { t, tl } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  const { locale } = useSite();
  return (
    <section id="about" className="shell section-band py-20 md:py-28">
      <SectionHeading eyebrow={t(i18n.sections.about.eyebrow, locale)} title={t(i18n.sections.about.title, locale)} />
      <div className="grid items-start gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="panel relative overflow-hidden rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.028)_1px,transparent_1px)] bg-[length:28px_28px]" />
          <p className="mono relative text-xs uppercase text-cyan-200 light:text-cyan-800">Current profile</p>
          <p className="relative mt-4 text-lg font-semibold leading-8 text-slate-100 light:text-slate-900 md:text-xl">{t(profile.target, locale)}</p>
          <div className="relative mt-6 grid gap-3 border-t border-white/10 pt-5 light:border-slate-200">
            {tl(profile.facts, locale).map((fact, index) => (
              <div key={fact} className="grid grid-cols-[32px_1fr] items-start gap-3">
                <span className="mono grid h-7 w-7 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs text-cyan-100 light:text-cyan-900">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-slate-400 light:text-slate-600">{fact}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-5 flex flex-wrap gap-2">
            {tl(profile.keywords, locale).map((keyword) => (
              <span key={keyword} className="tag">
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-4">
          {tl(profile.about, locale).map((paragraph, index) => (
            <motion.p
              key={paragraph}
              className="panel rounded-lg p-5 text-base leading-8 text-slate-300 light:text-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
