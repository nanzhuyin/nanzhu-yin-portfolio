"use client";

import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { publications } from "@/data/publications";
import { t } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";
import { useSite } from "./site-provider";

export function PublicationsSection() {
  const { locale } = useSite();

  return (
    <section id="publications" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.publications.eyebrow} title={i18n.sections.publications.title} />

      <div className="relative grid gap-3">
        <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/20 to-transparent md:block" />
        {publications.map((item, index) => (
          <motion.article
            key={item.id}
            className="panel relative rounded-lg p-5 md:ml-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.045, duration: 0.4 }}
          >
            <span className="absolute -left-[2.15rem] top-6 hidden h-3 w-3 rounded-full border border-cyan-300 bg-ink-950 shadow-glow light:bg-white md:block" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="mono text-xs uppercase text-cyan-200 light:text-cyan-800">{item.venue}</p>
                <h3 className="mt-2 text-base font-semibold leading-7 text-white light:text-slate-950">{t(item.title, locale)}</h3>
              </div>
              <span className="tag shrink-0 border-lime-300/20 bg-lime-300/5 text-lime-100 light:text-emerald-900">
                {t(item.status, locale)}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
