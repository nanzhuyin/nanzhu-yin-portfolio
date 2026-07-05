import type { Locale, LocalizedList, LocalizedText } from "@/data/types";

export function t(value: LocalizedText, locale: Locale): string {
  return value[locale] ?? value.zh;
}

export function tl(value: LocalizedList, locale: Locale): string[] {
  return value[locale] ?? value.zh;
}
