import { FileText, Github, Linkedin } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/lib/portfolio-data";

const channels = [
  { label: "LinkedIn", value: "snekhabaskar", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "SnekhaB", href: profile.github, Icon: Github },
  { label: "Resume", value: "Full CV (PDF)", href: profile.resumeUrl, Icon: FileText },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="06 / Contact"
        title="Let's build something that reaches production."
        lead="Open to AI/ML Engineer, Generative AI Engineer, and ML Engineer roles. The fastest way to reach me is LinkedIn."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary"
            >
              <c.Icon className="h-5 w-5 text-primary" />
              <div className="mt-10">
                <span className="label-mono">{c.label}</span>
                <p className="mt-1 text-base font-medium transition-colors group-hover:text-primary">
                  {c.value}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Data → Retrieval → LLM → Agents → APIs → Production
        </p>
      </footer>
    </section>
  );
}
