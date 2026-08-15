import { motion } from "motion/react";
import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { profile, stack } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="label-mono !text-[0.65rem] text-foreground">
              Open to AI Engineering roles
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
            <span className="text-signal-gradient">{profile.name}</span>
            <br />
            <span className="text-muted-foreground">{profile.role}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-20 border-t border-border pt-6"
        >
          <span className="label-mono">The stack I own end to end</span>
          <ol className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {stack.map((node, i) => (
              <motion.li
                key={node.stage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                className="group relative bg-surface p-4 transition-colors hover:bg-surface-raised"
              >
                <span className="font-mono text-[0.65rem] text-primary">
                  0{i + 1}
                </span>
                <p className="mt-1.5 font-display text-sm font-medium">{node.stage}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {node.detail}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
