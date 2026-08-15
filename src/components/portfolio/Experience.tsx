import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02 / Experience" title="Shipping AI systems, not demos." />

        <Reveal>
          <div className="rounded-xl border border-border bg-background p-7 sm:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold">{experience.role}</h3>
                <p className="mt-1 text-sm text-primary">{experience.company}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {experience.period}
              </span>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
              {experience.metrics.map((m) => (
                <div key={m.label} className="bg-surface px-4 py-5">
                  <p className="font-display text-2xl font-semibold text-signal">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              {experience.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {experience.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border bg-surface px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <span className="label-mono">Key features engineered</span>
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {experience.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <article className="group h-full rounded-lg border border-border bg-background p-6 transition-colors hover:border-border-strong">
                  <span className="font-mono text-xs text-primary">
                    F.0{i + 1}
                  </span>
                  <h4 className="mt-3 text-base font-semibold">{f.title}</h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {f.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[0.65rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
