import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-border bg-surface/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04 / Projects"
          title="Selected work, from classical NLP to generative AI."
        />

        <div className="space-y-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group grid gap-6 rounded-xl border border-border bg-background p-7 transition-colors hover:border-border-strong sm:p-9 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="font-mono text-xs text-primary">
                    P.0{i + 1} — {p.kicker}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                    >
                      View project
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : null}
                </div>

                <div className="lg:border-l lg:border-border lg:pl-8">
                  <ul className="space-y-3">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[0.65rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
