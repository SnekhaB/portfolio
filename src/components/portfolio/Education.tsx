import { Reveal, SectionHeading } from "./Reveal";
import { education, certifications } from "@/lib/portfolio-data";
import { ExternalLink } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="05 / Education"
        title="Foundation, credentials, and continuous learning."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="h-full rounded-lg border border-border bg-surface p-6">
            <span className="label-mono">Education</span>
            <h3 className="mt-3 text-lg font-semibold">{education.school}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
            <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span>{education.period}</span>
              <span className="h-3 w-px bg-border" />
              <span className="text-signal">{education.detail}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-lg border border-border bg-surface p-6">
            <span className="label-mono">Certifications</span>
            <ul className="mt-4 divide-y divide-border">
              {certifications.map((c) => (
                <li key={c.name} className="py-3 first:pt-0 last:pb-0">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-start justify-between gap-4"
                  >
                    <span>
                      <span className="text-sm font-medium transition-colors group-hover:text-primary">
                        {c.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {c.issuer} · {c.period}
                      </span>
                    </span>
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
