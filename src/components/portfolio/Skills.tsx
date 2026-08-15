import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups, skillNotes } from "@/lib/portfolio-data";

export function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = skillGroups[activeGroup] ?? skillGroups[0]!;

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="03 / Skills"
        title="The toolkit, organised the way I actually use it."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="flex flex-col gap-2">
            {skillGroups.map((g, i) => (
              <li key={g.title}>
                <button
                  type="button"
                  onClick={() => setActiveGroup(i)}
                  className={`w-full rounded-lg border px-5 py-4 text-left transition-colors ${
                    activeGroup === i
                      ? "border-primary/60 bg-surface-raised"
                      : "border-border bg-surface hover:border-border-strong"
                  }`}
                >
                  <span className="font-mono text-[0.65rem] text-primary">
                    G.0{i + 1}
                  </span>
                  <p className="mt-1 font-display text-base font-medium">{g.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {g.items.length} technologies
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-lg border border-border bg-surface p-7">
            <span className="label-mono">{group.title}</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-6 border-t border-border pt-6">
              {skillNotes.map((note) => (
                <div key={note.title}>
                  <h4 className="text-sm font-semibold">{note.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
