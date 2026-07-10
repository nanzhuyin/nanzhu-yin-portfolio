"use client";

import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";

export function SiteFooter() {
  const { locale } = useSite();
  return (
    <footer className="border-t border-[rgb(var(--line)/0.12)] py-8">
      <div className="shell grid gap-6 text-[rgb(var(--faint))] sm:grid-cols-3 sm:items-end">
        <div>
          <p className="text-sm font-medium text-[rgb(var(--text))]">{t(profile.name, locale)}</p>
          <p className="mono mt-2 text-[9px] uppercase tracking-[0.15em]">Cinematic Intelligence</p>
        </div>
        <p className="mono text-[9px] uppercase tracking-[0.15em] sm:text-center">Research in Motion / 2026</p>
        <a href="#home" className="mono min-h-11 justify-self-start py-3 text-[9px] uppercase tracking-[0.15em] transition-colors hover:text-[rgb(var(--accent))] sm:justify-self-end">Back to opening frame ↑</a>
      </div>
    </footer>
  );
}
