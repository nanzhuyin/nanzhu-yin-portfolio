"use client";

import { motion } from "framer-motion";
import type { LocalizedText } from "@/data/types";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";

type HeadingText = string | LocalizedText;

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: HeadingText;
  title: HeadingText;
  description?: HeadingText;
}) {
  const { locale } = useSite();
  const resolve = (value: HeadingText) => (typeof value === "string" ? value : t(value, locale));

  return (
    <motion.div
      className="mb-8 grid gap-3 md:mb-10 md:grid-cols-[220px_1fr] md:gap-10"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mono text-xs uppercase text-cyan-200 light:text-cyan-800">{resolve(eyebrow)}</div>
      <div>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white light:text-slate-950 md:text-5xl">
          {resolve(title)}
        </h2>
        {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 light:text-slate-600">{resolve(description)}</p> : null}
      </div>
    </motion.div>
  );
}
