"use client";

import { motion } from "framer-motion";
import { profileHighlights } from "@/data/highlights";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";

export function ProfileHighlightsSection() {
  const { locale } = useSite();

  return (
    <section className="section-band py-8">
      <div className="shell">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {profileHighlights.map((item, index) => (
            <motion.article
              key={t(item.value, locale)}
              className="panel overflow-hidden rounded-lg p-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.38 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="flex items-start justify-between gap-3">
                <p className="mono text-[11px] uppercase text-cyan-200 light:text-cyan-800">{t(item.label, locale)}</p>
                <span className="mono text-[11px] text-slate-500 light:text-slate-500">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-white light:text-slate-950">{t(item.value, locale)}</h2>
              <p className="mt-2 text-xs leading-6 text-slate-400 light:text-slate-600">{t(item.detail, locale)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
