"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { i18n, locales, navItems } from "@/data/i18n";
import { profile } from "@/data/profile";
import { motionTokens } from "@/lib/motion";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";

export function Header() {
  const { locale, setLocale, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -66% 0px", threshold: [0, 0.15, 0.4] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    navItems.findIndex(([id]) => id === activeSection)
  );

  const nav = (
    <nav className="grid gap-1 lg:flex lg:items-center" aria-label="Primary">
      {navItems.map(([id, key], index) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setOpen(false)}
          aria-current={activeSection === id ? "location" : undefined}
          className={`group flex min-h-11 items-center gap-2 rounded-sm px-3 text-xs transition-colors lg:min-h-9 lg:px-2.5 ${
            activeSection === id ? "text-[rgb(var(--text))]" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
          }`}
        >
          <span
            className={`h-px transition-all ${activeSection === id ? "w-4 bg-[rgb(var(--accent))]" : "w-0 bg-[rgb(var(--accent))] group-hover:w-2"}`}
            aria-hidden="true"
          />
          {t(i18n.nav[key], locale)}
          <span className="mono ml-auto text-[9px] text-[rgb(var(--faint))] lg:hidden">{String(index).padStart(2, "0")}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgb(var(--line)/0.12)] bg-[rgb(var(--header)/0.9)] backdrop-blur-md">
      <div className="shell flex min-h-16 items-center justify-between gap-4">
        <a href="#home" className="group flex min-h-11 items-center gap-3" aria-label={`${t(profile.name, locale)} — Home`}>
          <span className="mono grid h-9 w-9 place-items-center border border-[rgb(var(--accent)/0.7)] text-[11px] font-semibold tracking-[-0.08em] text-[rgb(var(--accent))] transition-colors group-hover:bg-[rgb(var(--accent))] group-hover:text-[rgb(var(--accent-ink))]">
            YN
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-none">{t(profile.name, locale)}</span>
            <span className="mono mt-1.5 block text-[9px] uppercase tracking-[0.18em] text-[rgb(var(--faint))]">Research in motion</span>
          </span>
        </a>

        <div className="hidden xl:block">{nav}</div>

        <div className="flex items-center gap-2">
          <div className="mono hidden items-center gap-2 border-r border-[rgb(var(--line)/0.12)] pr-3 text-[10px] text-[rgb(var(--faint))] md:flex" aria-hidden="true">
            <span>{String(activeIndex).padStart(2, "0")}</span>
            <span className="h-px w-7 bg-[rgb(var(--accent))]" />
            <span>{String(navItems.length - 1).padStart(2, "0")}</span>
          </div>
          <div className="hidden items-center border border-[rgb(var(--line)/0.14)] sm:flex" aria-label="Language">
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLocale(item.code)}
                aria-pressed={locale === item.code}
                className={`mono min-h-9 border-r border-[rgb(var(--line)/0.14)] px-2.5 text-[10px] transition-colors last:border-r-0 ${
                  locale === item.code
                    ? "bg-[rgb(var(--text))] text-[rgb(var(--bg))]"
                    : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                }`}
              >
                {item.shortLabel}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="mono min-h-11 min-w-11 border border-[rgb(var(--line)/0.14)] px-3 text-[10px] text-[rgb(var(--muted))] transition-colors hover:border-[rgb(var(--accent)/0.65)] hover:text-[rgb(var(--text))]"
            aria-label={t(i18n.actions.toggleTheme, locale)}
          >
            {theme === "dark" ? "DARK" : "LIGHT"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="mono min-h-11 border border-[rgb(var(--line)/0.14)] px-3 text-[10px] text-[rgb(var(--text))] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? t(i18n.actions.closeMenu, locale) : t(i18n.actions.openMenu, locale)}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            className="border-t border-[rgb(var(--line)/0.12)] bg-[rgb(var(--surface))] px-4 py-5 xl:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: motionTokens.fast, ease: motionTokens.ease }}
          >
            <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-[1fr_auto]">
              {nav}
              <div className="flex flex-wrap content-start gap-1 sm:hidden">
                {locales.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLocale(item.code);
                      setOpen(false);
                    }}
                    className={`mono min-h-11 border px-3 text-[10px] ${
                      locale === item.code
                        ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent))] text-[rgb(var(--accent-ink))]"
                        : "border-[rgb(var(--line)/0.14)] text-[rgb(var(--muted))]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
