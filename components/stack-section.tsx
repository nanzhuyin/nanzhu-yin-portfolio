"use client";

import { motion, useReducedMotion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { skills } from "@/data/skills";
import { t } from "@/lib/i18n";
import { revealTransition, revealVariants, revealViewport } from "@/lib/motion";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function StackSection() {
  const { locale } = useSite();
  const reduceMotion = useReducedMotion();

  return (
    <section id="stack" className="shell section-band section-space">
      <SectionHeading number="07" eyebrow={i18n.sections.stack.eyebrow} title={i18n.sections.stack.title} />

      <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => (
          <motion.article
            key={t(group.title, locale)}
            className={`border-t border-[rgb(var(--line)/0.14)] pt-5 ${index === 2 || index === 5 ? "xl:col-span-2" : ""}`}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={revealViewport}
            variants={revealVariants}
            transition={revealTransition(index * 0.04)}
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <h3 className="text-xl font-medium tracking-[-0.02em] text-[rgb(var(--text))]">{t(group.title, locale)}</h3>
              <span className="mono text-[10px] text-[rgb(var(--accent))]">{String(group.items.length).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => <span key={item} className="tag">{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
