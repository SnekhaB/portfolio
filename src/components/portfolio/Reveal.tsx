import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  lead,
}: {
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="label-mono">{index}</span>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>
      ) : null}
    </Reveal>
  );
}
