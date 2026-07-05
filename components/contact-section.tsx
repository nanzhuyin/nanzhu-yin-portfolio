"use client";

import { motion } from "framer-motion";
import { i18n } from "@/data/i18n";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const { locale } = useSite();

  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    ...profile.githubLinks.map((href, index) => ({ label: `GitHub ${index + 1}`, value: href.replace("https://github.com/", ""), href }))
  ];

  return (
    <section id="contact" className="shell section-band py-20">
      <SectionHeading eyebrow={i18n.sections.contact.eyebrow} title={i18n.sections.contact.title} />

      <motion.div
        className="panel overflow-hidden rounded-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-6 light:border-slate-200 lg:border-b-0 lg:border-r">
            <p className="mono text-xs uppercase text-cyan-200 light:text-cyan-800">{t(i18n.labels.sourceNote, locale)}</p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight text-white light:text-slate-950">{t(profile.name, locale)}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400 light:text-slate-600">{t(profile.target, locale)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="button-primary" href="/cv.pdf" download>
                {t(i18n.actions.downloadCv, locale)}
              </a>
              <a className="button-secondary" href={`mailto:${profile.email}`}>
                {t(i18n.actions.contactMe, locale)}
              </a>
            </div>
          </div>

          <div className="divide-y divide-white/10 light:divide-slate-200">
            {contacts.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group grid gap-2 p-5 transition hover:bg-cyan-300/5 sm:grid-cols-[120px_1fr_auto]"
              >
                <span className="mono text-xs text-slate-500 light:text-slate-500">{contact.label}</span>
                <span className="break-all text-sm font-medium text-slate-200 light:text-slate-800">{contact.value}</span>
                <span className="mono text-xs text-cyan-200 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100 light:text-cyan-800">
                  OPEN
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
