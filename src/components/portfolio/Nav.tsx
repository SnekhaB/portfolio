import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-sm font-semibold tracking-tight">
          {profile.name}
          <span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active === link.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === link.id ? (
                <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-primary align-middle" />
              ) : null}
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-border-strong px-3.5 py-1.5 font-mono text-xs tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Resume
          </a>
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="rounded-md border border-border-strong p-1.5 text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Toggle theme"
          >
            <Moon className="h-4 w-4 dark:hidden" />
            <Sun className="h-4 w-4 hidden dark:block" />
          </button>
        </div>
      </nav>
    </header>
  );
}
