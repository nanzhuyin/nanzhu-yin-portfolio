"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, locales } from "@/data/i18n";
import type { Locale, ThemeMode } from "@/data/types";

type SiteContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [theme, setThemeState] = useState<ThemeMode>("dark");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("portfolio-locale") as Locale | null;
    const storedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;
    if (storedLocale && locales.some((item) => item.code === storedLocale)) {
      setLocaleState(storedLocale);
    }
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const meta = locales.find((item) => item.code === locale);
    html.lang = meta?.htmlLang ?? "zh-CN";
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("light", theme === "light");
    html.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      theme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState((current) => (current === "dark" ? "light" : "dark"))
    }),
    [locale, theme]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
