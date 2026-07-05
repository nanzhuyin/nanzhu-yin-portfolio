"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import type { Affiliation } from "@/data/affiliations";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";

const logoPlateClassName: Record<Affiliation["logoPlate"], string> = {
  light: "bg-white/95 light:bg-white",
  dark: "bg-slate-950/85 light:bg-slate-950",
  accent: "bg-[rgb(var(--accent)/0.13)] light:bg-[rgb(var(--accent)/0.1)]"
};

export function AffiliationLogo({
  affiliation,
  compact = false,
  className = ""
}: {
  affiliation: Affiliation;
  compact?: boolean;
  className?: string;
}) {
  const { locale } = useSite();
  const style = { "--accent": affiliation.accentRgb } as CSSProperties;

  return (
    <div
      style={style}
      className={`${logoPlateClassName[affiliation.logoPlate]} relative grid shrink-0 place-items-center overflow-hidden rounded-md border border-[rgb(var(--accent)/0.28)] shadow-[0_0_24px_rgb(var(--accent)/0.08)] ${
        compact ? "h-12 w-16 p-2" : "h-20 w-full p-4"
      } ${className}`}
      aria-label={t(affiliation.name, locale)}
    >
      <span
        className={`mono absolute inset-0 grid place-items-center font-semibold text-[rgb(var(--accent)/0.45)] ${
          compact ? "text-base" : "text-2xl"
        }`}
      >
        {affiliation.initials}
      </span>
      {affiliation.logoSrc ? (
        <div className={`relative z-10 ${compact ? "h-full w-full" : "h-12 w-full"}`}>
          <Image
            src={affiliation.logoSrc}
            alt={t(affiliation.name, locale)}
            fill
            sizes={compact ? "64px" : "192px"}
            className="object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      ) : null}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent)/0.7)] to-transparent" />
    </div>
  );
}
