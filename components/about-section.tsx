"use client";

import { i18n } from "@/data/i18n";
import { profile } from "@/data/profile";
import type { LocalizedText } from "@/data/types";
import { t, tl } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";
import { MotionReveal } from "./motion-reveal";

const profileKind = {
  zh: "研究型工程师",
  en: "Research Engineer",
  zhHant: "研究型工程師"
} satisfies LocalizedText;

export function AboutSection() {
  const { locale } = useSite();

  return (
    <section id="about" className="shell section-band section-space">
      <SectionHeading number="06" eyebrow={t(i18n.sections.about.eyebrow, locale)} title={t(i18n.sections.about.title, locale)} />
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <MotionReveal className="md:col-span-5">
          <p className="eyebrow">{t(profileKind, locale)}</p>
          <p className="display mt-7 max-w-xl text-[clamp(2.8rem,5vw,5rem)] leading-[0.96] text-[rgb(var(--text))]">
            <span className="block">AI + Web3 Security</span>
            <span className="block">LLM Agent / RAG</span>
          </p>
          <div className="mt-9 h-px w-24 bg-[rgb(var(--accent))]" />
          <p className="mt-6 max-w-md text-sm leading-8 text-[rgb(var(--muted))]">{t(profile.heroIntro, locale)}</p>
        </MotionReveal>

        <div className="md:col-span-7">
          {tl(profile.about, locale).map((paragraph, index) => (
            <MotionReveal key={paragraph} delay={index * 0.06} className="grid grid-cols-[2rem_1fr] gap-4 border-t border-[rgb(var(--line)/0.12)] py-6 first:pt-0">
              <span className="mono text-[10px] text-[rgb(var(--accent))]">{String(index + 1).padStart(2, "0")}</span>
              <p className="max-w-[65ch] text-base leading-8 text-[rgb(var(--muted))] md:text-lg md:leading-9">{paragraph}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
