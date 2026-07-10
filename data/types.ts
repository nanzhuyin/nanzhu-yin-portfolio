export type Locale = "zh" | "en" | "zhHant";

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type ProjectCategory = "security" | "rag" | "data" | "blockchain";

export type ThemeMode = "dark" | "light";

export type EntityBadge = {
  label: string;
  imageSrc?: string;
  shape?: "square" | "wide";
  logoMode?: "full" | "crest";
  icon?: "building";
  tone: "cyan" | "sky" | "lime" | "emerald";
};
