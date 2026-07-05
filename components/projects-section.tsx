"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { projectCategories, projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/types";
import { t, tl } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

type ProjectFilter = "all" | ProjectCategory;

export function ProjectsSection() {
  const { locale } = useSite();
  const [active, setActive] = useState<ProjectFilter>("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const availableCategories = useMemo(
    () =>
      (Object.keys(projectCategories) as ProjectCategory[]).filter((category) =>
        projects.some((project) => project.category === category)
      ),
    []
  );

  const visibleProjects = active === "all" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.projects.eyebrow} title={i18n.sections.projects.title} />

      <div className="mb-7 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`mono rounded-full border px-3 py-2 text-xs transition ${
            active === "all"
              ? "border-cyan-300 bg-cyan-300 text-slate-950"
              : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-300/50 hover:text-cyan-100 light:border-slate-200 light:bg-white light:text-slate-600"
          }`}
        >
          {t(i18n.sections.projects.filterAll, locale)}
        </button>
        {availableCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`mono rounded-full border px-3 py-2 text-xs transition ${
              active === category
                ? "border-cyan-300 bg-cyan-300 text-slate-950"
                : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-300/50 hover:text-cyan-100 light:border-slate-200 light:bg-white light:text-slate-600"
            }`}
          >
            {t(projectCategories[category], locale)}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article
            layout
            key={project.id}
            className="panel group relative overflow-hidden rounded-lg p-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.035, duration: 0.45 }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-70 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="tag border-lime-300/20 bg-lime-300/5 text-lime-100 light:text-emerald-900">
                  {t(project.status, locale)}
                </span>
                <span className="tag">{t(projectCategories[project.category], locale)}</span>
              </div>

              <h3 className="text-xl font-semibold text-white light:text-slate-950">{t(project.title, locale)}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400 light:text-slate-600">{t(project.summary, locale)}</p>

              <div className="mt-5">
                <p className="mono mb-2 text-xs uppercase text-slate-500 light:text-slate-500">
                  {t(i18n.labels.stack, locale)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((current) => ({ ...current, [project.id]: !current[project.id] }))}
                className="button-secondary mt-5"
                aria-expanded={Boolean(expanded[project.id])}
              >
                {expanded[project.id] ? t(i18n.actions.collapse, locale) : t(i18n.actions.expand, locale)}
              </button>

              {expanded[project.id] ? (
                <motion.div
                  className="mt-5 border-t border-white/10 pt-4 light:border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24 }}
                >
                  <p className="mono mb-3 text-xs uppercase text-slate-500 light:text-slate-500">
                    {t(i18n.labels.highlights, locale)}
                  </p>
                  <ul className="grid gap-3">
                    {tl(project.highlights, locale).map((item) => (
                      <li key={item} className="grid grid-cols-[10px_1fr] gap-3 text-sm leading-7 text-slate-400 light:text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-glow" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {project.metrics?.length ? (
                    <div className="mt-5 grid gap-2 border-y border-white/10 py-4 light:border-slate-200 sm:grid-cols-2">
                      {project.metrics.map((metric) => (
                        <div key={`${project.id}-${metric.value}`} className="rounded-md border border-cyan-300/15 bg-cyan-300/[0.04] p-3">
                          <p className="mono text-xl font-semibold text-cyan-100 light:text-cyan-900">{metric.value}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-500 light:text-slate-600">{t(metric.label, locale)}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {project.link ? (
                    <a
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-lime-100 light:text-cyan-800 light:hover:text-emerald-800"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t(i18n.actions.openGithub, locale)}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </motion.div>
              ) : null}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
