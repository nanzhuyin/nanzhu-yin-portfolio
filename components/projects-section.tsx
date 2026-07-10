"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { projectCategories, projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/types";
import { t, tl } from "@/lib/i18n";
import { motionTokens, revealTransition, revealVariants, revealViewport } from "@/lib/motion";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

type ProjectFilter = "all" | ProjectCategory;

export function ProjectsSection() {
  const { locale } = useSite();
  const [active, setActive] = useState<ProjectFilter>("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const reduceMotion = useReducedMotion();

  const availableCategories = useMemo(
    () =>
      (Object.keys(projectCategories) as ProjectCategory[]).filter((category) =>
        projects.some((project) => project.category === category)
      ),
    []
  );

  const visibleProjects = active === "all" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="shell section-band section-space">
      <SectionHeading number="02" eyebrow={i18n.sections.projects.eyebrow} title={i18n.sections.projects.title} />

      <div className="mb-10 flex flex-wrap gap-1 border-y border-[rgb(var(--line)/0.12)] py-3" aria-label={t(i18n.sections.projects.title, locale)}>
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={`mono min-h-11 border px-3 text-[10px] uppercase tracking-[0.08em] transition-colors ${
            active === "all"
              ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent))] text-[rgb(var(--accent-ink))]"
              : "border-transparent text-[rgb(var(--muted))] hover:border-[rgb(var(--line)/0.16)] hover:text-[rgb(var(--text))]"
          }`}
        >
          {t(i18n.sections.projects.filterAll, locale)}
        </button>
        {availableCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`mono min-h-11 border px-3 text-[10px] uppercase tracking-[0.08em] transition-colors ${
              active === category
                ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent))] text-[rgb(var(--accent-ink))]"
                : "border-transparent text-[rgb(var(--muted))] hover:border-[rgb(var(--line)/0.16)] hover:text-[rgb(var(--text))]"
            }`}
          >
            {t(projectCategories[category], locale)}
          </button>
        ))}
      </div>

      <motion.div layout={!reduceMotion} className="grid gap-4 lg:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => {
            const isFeatured = index === 0;
            const detailsId = `project-details-${project.id}`;
            return (
              <motion.article
                layout={!reduceMotion}
                key={project.id}
                className={`panel panel-rule group overflow-hidden ${isFeatured ? "lg:col-span-2" : ""}`}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                viewport={revealViewport}
                variants={revealVariants}
                transition={revealTransition(Math.min(index, 4) * 0.045)}
              >
                <div className={`grid ${isFeatured ? "md:grid-cols-12" : ""}`}>
                  <div className={`p-6 md:p-8 ${isFeatured ? "md:col-span-7 lg:p-10" : ""}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="status-tag tag">{t(project.status, locale)}</span>
                      <span className="tag">{t(projectCategories[project.category], locale)}</span>
                      <span className="mono ml-auto text-[10px] text-[rgb(var(--faint))]">{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <h3 className={`mt-8 font-medium leading-[1.04] tracking-[-0.035em] text-[rgb(var(--text))] ${isFeatured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                      {t(project.title, locale)}
                    </h3>
                    <p className={`mt-5 max-w-[62ch] text-[rgb(var(--muted))] ${isFeatured ? "text-base leading-8" : "text-sm leading-7"}`}>
                      {t(project.summary, locale)}
                    </p>

                    {project.paper ? (
                      <p className="mt-6 border-l border-[rgb(var(--accent))] pl-4 text-xs italic leading-6 text-[rgb(var(--faint))]">{project.paper}</p>
                    ) : null}

                    <div className="mt-7">
                      <p className="mono mb-3 text-[9px] uppercase tracking-[0.16em] text-[rgb(var(--faint))]">{t(i18n.labels.stack, locale)}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item) => <span key={item} className="tag">{item}</span>)}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setExpanded((current) => ({ ...current, [project.id]: !current[project.id] }))}
                      className="button-secondary mt-7"
                      aria-expanded={Boolean(expanded[project.id])}
                      aria-controls={detailsId}
                    >
                      {expanded[project.id] ? t(i18n.actions.collapse, locale) : t(i18n.actions.expand, locale)}
                      <span aria-hidden="true">{expanded[project.id] ? "−" : "+"}</span>
                    </button>
                  </div>

                  {isFeatured ? (
                    <div className="relative min-h-72 border-t border-[rgb(var(--line)/0.12)] bg-[rgb(var(--surface-2)/0.42)] p-6 md:col-span-5 md:border-l md:border-t-0 md:p-8 lg:p-10">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(var(--line)/0.045)_1px,transparent_1px),linear-gradient(0deg,rgb(var(--line)/0.045)_1px,transparent_1px)] bg-[length:3rem_3rem]" />
                      <div className="relative flex h-full flex-col justify-between">
                        <div>
                          <p className="eyebrow">Research still / {project.category}</p>
                          <p className="display mt-8 text-8xl leading-none text-[rgb(var(--accent))]">{String(index + 1).padStart(2, "0")}</p>
                        </div>
                        <div className="mt-12 grid gap-3">
                          {(project.metrics ?? []).map((metric) => (
                            <div key={`${project.id}-${metric.value}`} className="border-t border-[rgb(var(--line)/0.14)] pt-3">
                              <p className="mono text-2xl text-[rgb(var(--text))]">{metric.value}</p>
                              <p className="mt-1 text-xs leading-5 text-[rgb(var(--muted))]">{t(metric.label, locale)}</p>
                            </div>
                          ))}
                          {!project.metrics?.length ? (
                            <p className="max-w-xs text-sm leading-7 text-[rgb(var(--muted))]">{t(project.status, locale)}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <AnimatePresence initial={false}>
                  {expanded[project.id] ? (
                    <motion.div
                      id={detailsId}
                      className="border-t border-[rgb(var(--line)/0.12)] px-6 py-7 md:px-8"
                      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                      transition={{ duration: motionTokens.fast, ease: motionTokens.ease }}
                    >
                      <p className="eyebrow mb-5">{t(i18n.labels.highlights, locale)}</p>
                      <ul className="grid gap-4 lg:grid-cols-3">
                        {tl(project.highlights, locale).map((item, highlightIndex) => (
                          <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-7 text-[rgb(var(--muted))]">
                            <span className="mono text-[10px] text-[rgb(var(--accent))]">{String(highlightIndex + 1).padStart(2, "0")}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {project.metrics?.length ? (
                        <div className="mt-7 grid gap-3 border-t border-[rgb(var(--line)/0.12)] pt-6 sm:grid-cols-2">
                          {project.metrics.map((metric) => (
                            <div key={`${project.id}-${metric.value}`}>
                              <p className="mono text-2xl text-[rgb(var(--text))]">{metric.value}</p>
                              <p className="mt-1 text-xs leading-5 text-[rgb(var(--muted))]">{t(metric.label, locale)}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {project.link ? (
                        <a className="button-tertiary mt-5" href={project.link} target="_blank" rel="noreferrer">
                          {t(i18n.actions.openGithub, locale)} <span aria-hidden="true">↗</span>
                        </a>
                      ) : null}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
