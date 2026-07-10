import Image from "next/image";
import type { EntityBadge as EntityBadgeData } from "@/data/types";
import { withBasePath } from "@/lib/paths";

const toneClassName: Record<EntityBadgeData["tone"], string> = {
  cyan: "border-[rgb(var(--line)/0.16)] bg-[rgb(var(--surface-2)/0.45)] text-[rgb(var(--accent))]",
  sky: "border-[rgb(var(--line)/0.16)] bg-[rgb(var(--surface-2)/0.45)] text-[rgb(var(--accent))]",
  lime: "border-[rgb(var(--line)/0.16)] bg-[rgb(var(--surface-2)/0.45)] text-[rgb(var(--accent))]",
  emerald: "border-[rgb(var(--line)/0.16)] bg-[rgb(var(--surface-2)/0.45)] text-[rgb(var(--accent))]"
};

export function EntityBadge({ badge, className = "" }: { badge: EntityBadgeData; className?: string }) {
  const isWideLogo = badge.imageSrc && badge.shape === "wide";
  const isCrestLogo = badge.imageSrc && badge.logoMode === "crest";

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-sm border ${
        isCrestLogo ? "h-14 w-14 p-1" : isWideLogo ? "h-11 w-20 p-1.5" : "h-11 w-11 p-1"
      } ${toneClassName[badge.tone]} ${className}`}
      aria-hidden="true"
    >
      {isCrestLogo ? (
        <Image
          src={withBasePath(badge.imageSrc!)}
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-contain"
        />
      ) : badge.imageSrc ? (
        <Image
          src={withBasePath(badge.imageSrc)}
          alt=""
          width={isWideLogo ? 76 : 34}
          height={34}
          className="h-full w-full object-contain"
        />
      ) : (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 20V8.5L12 4l8 4.5V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 20v-6h8v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}
