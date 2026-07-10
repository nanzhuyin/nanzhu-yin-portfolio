"use client";

import { profile } from "@/data/profile";
import { i18n } from "@/data/i18n";
import { t } from "@/lib/i18n";
import { withBasePath } from "@/lib/paths";
import { useSite } from "./site-provider";
import { SectionHeading } from "./section-heading";
import { MotionReveal } from "./motion-reveal";

export function ContactSection() {
  const { locale } = useSite();
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    ...profile.githubLinks.map((href, index) => ({ label: `GitHub ${index + 1}`, value: href.replace("https://github.com/", ""), href }))
  ];

  return (
    <section id="contact" className="shell section-band section-space">
      <SectionHeading number="08" eyebrow={i18n.sections.contact.eyebrow} title={i18n.sections.contact.title} />

      <MotionReveal className="panel panel-rule overflow-hidden">
        <div className="grid lg:grid-cols-12">
          <div className="border-b border-[rgb(var(--line)/0.12)] p-6 md:p-9 lg:col-span-5 lg:border-b-0 lg:border-r">
            <p className="eyebrow">Closing frame / Contact</p>
            <h3 className="display mt-8 text-[clamp(3.5rem,7vw,7rem)] leading-[0.82] text-[rgb(var(--text))]">{t(profile.name, locale)}</h3>
            <p className="mt-7 max-w-md text-sm leading-8 text-[rgb(var(--muted))]">{t(profile.target, locale)}</p>
            <p className="mono mt-6 text-[9px] uppercase tracking-[0.14em] text-[rgb(var(--faint))]">{t(i18n.labels.sourceNote, locale)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href={`mailto:${profile.email}`}>{t(i18n.actions.contactMe, locale)} <span aria-hidden="true">↗</span></a>
              <a className="button-secondary" href={withBasePath("/cv.pdf")} download>{t(i18n.actions.downloadCv, locale)}</a>
            </div>
          </div>

          <div className="divide-y divide-[rgb(var(--line)/0.12)] lg:col-span-7">
            {contacts.map((contact, index) => {
              const external = contact.href.startsWith("http");
              return (
                <a
                  key={contact.href}
                  href={contact.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group grid min-h-24 items-center gap-2 px-6 py-5 transition-colors hover:bg-[rgb(var(--surface-2)/0.45)] sm:grid-cols-[3rem_7rem_1fr_auto] md:px-9"
                  aria-label={external ? `${contact.label}: ${contact.value} (external link)` : undefined}
                >
                  <span className="mono text-[10px] text-[rgb(var(--accent))]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mono text-[10px] uppercase tracking-[0.12em] text-[rgb(var(--faint))]">{contact.label}</span>
                  <span className="break-all text-sm font-medium leading-6 text-[rgb(var(--text))]">{contact.value}</span>
                  <span className="text-lg text-[rgb(var(--accent))] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
