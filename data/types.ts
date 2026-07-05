export type Locale = "zh" | "en" | "zhHant";

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type ProjectCategory = "security" | "rag" | "data" | "blockchain";

export type ThemeMode = "dark" | "light";
