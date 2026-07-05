"use client";

import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { researchFocus } from "@/data/focus";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function FocusSection() {
  const { locale } = useSite();
  return (
    <section id="focus" className="shell section-band py-20 md:py-28">
      <SectionHeading eyebrow={t(i18n.sections.focus.eyebrow, locale)} title={t(i18n.sections.focus.title, locale)} />
      <div className="grid gap-4 md:grid-cols-2">
        {researchFocus.map((item, index) => (
          <motion.article
            key={t(item.title, locale)}
            className="group panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 md:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="mono mb-6 text-xs text-lime-200 light:text-green-700">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="text-2xl font-semibold text-white light:text-slate-950">{t(item.title, locale)}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400 light:text-slate-600">{t(item.description, locale)}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
