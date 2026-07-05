"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { i18n, locales, navItems } from "@/data/i18n";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";

export function Header() {
  const { locale, setLocale, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1" aria-label="Primary">
      {navItems.map(([id, key]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setOpen(false)}
          className="mono rounded-md px-3 py-2 text-xs text-slate-400 transition hover:bg-white/5 hover:text-cyan-100 light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950"
        >
          {t(i18n.nav[key], locale)}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/75 backdrop-blur-xl light:border-slate-200 light:bg-white/75">
      <div className="shell flex min-h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold">
          <span className="grid h-9 w-9 place-items-center border border-cyan-300/60 bg-cyan-300/10 text-cyan-100 shadow-glow light:text-cyan-900">
            {t(profile.name, locale).slice(0, 1)}
          </span>
          <span className="hidden sm:block">{t(profile.name, locale)}</span>
        </a>

        <div className="hidden md:block">{nav}</div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLocale(item.code)}
                className={`mono rounded-full border px-3 py-1.5 text-xs transition ${
                  locale === item.code
                    ? "border-cyan-300 bg-cyan-300 text-slate-950"
                    : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-300/50 hover:text-cyan-100 light:border-slate-200 light:bg-white light:text-slate-600 light:hover:text-slate-950"
                }`}
              >
                {item.shortLabel}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="mono rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100 light:border-slate-200 light:bg-white light:text-slate-700"
            aria-label={t(i18n.actions.toggleTheme, locale)}
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="mono rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300 md:hidden"
            aria-label={open ? t(i18n.actions.closeMenu, locale) : t(i18n.actions.openMenu, locale)}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          className="border-t border-white/10 bg-ink-950/95 px-4 py-4 light:border-slate-200 light:bg-white/95 md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLocale(item.code);
                  setOpen(false);
                }}
                className={`mono rounded-full border px-3 py-1.5 text-xs ${
                  locale === item.code
                    ? "border-cyan-300 bg-cyan-300 text-slate-950"
                    : "border-white/10 text-slate-400 light:border-slate-200 light:text-slate-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {nav}
        </motion.div>
      ) : null}
    </header>
  );
}
