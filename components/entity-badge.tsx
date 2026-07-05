import Image from "next/image";
import type { EntityBadge as EntityBadgeData } from "@/data/types";
import { withBasePath } from "@/lib/paths";

const toneClassName: Record<EntityBadgeData["tone"], string> = {
  cyan: "border-cyan-300/35 bg-cyan-300/10 text-cyan-100 light:text-cyan-900",
  sky: "border-sky-300/30 bg-sky-300/10 text-sky-100 light:text-sky-900",
  lime: "border-lime-300/30 bg-lime-300/10 text-lime-100 light:text-lime-900",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100 light:text-emerald-900"
};

export function EntityBadge({ badge, className = "" }: { badge: EntityBadgeData; className?: string }) {
  const isWideLogo = badge.imageSrc && badge.shape === "wide";

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-lg border shadow-[0_0_22px_rgb(var(--cyan)/0.08)] ${
        isWideLogo ? "h-11 w-20 p-1.5" : "h-11 w-11 p-1"
      } ${toneClassName[badge.tone]} ${className}`}
      aria-hidden="true"
    >
      {badge.imageSrc ? (
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
