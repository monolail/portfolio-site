import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const links = [
  { id: "home", key: "home" as const },
  { id: "projects", key: "projects" as const },
  { id: "studying", key: "studying" as const },
  { id: "blog", key: "blog" as const },
];

export function Navbar() {
  const { lang, t, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-display text-sm font-bold tracking-tight text-foreground"
        >
          {t.nav.brand}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav[l.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {lang === "ko" ? "EN" : "KR"}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-1.5 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-white md:hidden"
          >
            {links.map((l) => (
              <li key={l.id} className="border-b border-border/60">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3.5 text-sm text-foreground"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-sm font-semibold text-primary"
              >
                {t.nav.cta}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
