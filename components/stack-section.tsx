"use client";

import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { skills } from "@/data/skills";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function StackSection() {
  const { locale } = useSite();

  return (
    <section id="stack" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.stack.eyebrow} title={i18n.sections.stack.title} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => (
          <motion.article
            key={t(group.title, locale)}
            className="panel relative overflow-hidden rounded-lg p-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.04, duration: 0.42 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-white light:text-slate-950">{t(group.title, locale)}</h3>
              <span className="mono text-xs text-cyan-200 light:text-cyan-800">{String(group.items.length).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100 light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:text-cyan-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
