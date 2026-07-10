"use client";

import type { LocalizedText } from "@/data/types";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { MotionReveal } from "./motion-reveal";

type HeadingText = string | LocalizedText;

export function SectionHeading({
  number,
  eyebrow,
  title,
  description
}: {
  number: string;
  eyebrow: HeadingText;
  title: HeadingText;
  description?: HeadingText;
}) {
  const { locale } = useSite();
  const resolve = (value: HeadingText) => (typeof value === "string" ? value : t(value, locale));

  return (
    <MotionReveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <div className="flex items-center gap-3">
          <span className="mono text-xs text-[rgb(var(--faint))]">{number}</span>
          <span className="h-px w-10 bg-[rgb(var(--accent))]" aria-hidden="true" />
        </div>
        <p className="eyebrow mt-4">{resolve(eyebrow)}</p>
      </div>
      <div className="md:col-span-9">
        <h2 className="display max-w-5xl text-[clamp(2.65rem,5.8vw,5.75rem)] leading-[0.94] text-[rgb(var(--text))]">
          {resolve(title)}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))] md:text-base md:leading-8">{resolve(description)}</p>
        ) : null}
      </div>
    </MotionReveal>
  );
}
