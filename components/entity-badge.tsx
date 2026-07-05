import type { EntityBadge as EntityBadgeData } from "@/data/types";

const toneClassName: Record<EntityBadgeData["tone"], string> = {
  cyan: "border-cyan-300/35 bg-cyan-300/10 text-cyan-100 light:text-cyan-900",
  sky: "border-sky-300/30 bg-sky-300/10 text-sky-100 light:text-sky-900",
  lime: "border-lime-300/30 bg-lime-300/10 text-lime-100 light:text-lime-900",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100 light:text-emerald-900"
};

export function EntityBadge({ badge, className = "" }: { badge: EntityBadgeData; className?: string }) {
  return (
    <span
      className={`mono grid h-11 w-11 shrink-0 place-items-center rounded-lg border text-sm font-semibold shadow-[0_0_22px_rgb(var(--cyan)/0.08)] ${toneClassName[badge.tone]} ${className}`}
      aria-hidden="true"
    >
      {badge.label}
    </span>
  );
}
