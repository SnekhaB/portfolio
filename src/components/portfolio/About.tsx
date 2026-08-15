import { Reveal, SectionHeading } from "./Reveal";
import { aboutParagraphs } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="01 / About"
        title="Engineering AI that has to hold up in production."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-surface p-6">
            <span className="label-mono">What I focus on</span>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                Production RAG pipelines with chunked ingestion, re-ranking, and eval.
              </li>
              <li className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                Agentic systems with tool-calling, state machines, and observability.
              </li>
              <li className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                End-to-end ML deployment: Python APIs, container orchestration, and CI/CD.
              </li>
              <li className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                Bridging research and engineering to ship measurable outcomes.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
