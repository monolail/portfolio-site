import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const links = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "projects", key: "projects" as const },
  { id: "contact", key: "contact" as const },
];

export function Navbar() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b shadow-sm py-3" : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          mono<span className="text-primary">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="relative text-sm text-muted-foreground transition-colors hover:text-primary font-medium"
              >
                {t.nav[l.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="relative flex h-9 w-[92px] items-center rounded-full border border-border bg-muted/60 p-1 text-xs font-semibold"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              className="absolute h-7 w-[42px] rounded-full bg-primary shadow-sm"
              style={{ left: lang === "ko" ? 4 : 46 }}
            />
            <span
              className={`relative z-10 flex-1 text-center ${lang === "ko" ? "text-primary-foreground" : "text-muted-foreground"}`}
            >
              KR
            </span>
            <span
              className={`relative z-10 flex-1 text-center ${lang === "en" ? "text-primary-foreground" : "text-muted-foreground"}`}
            >
              EN
            </span>
          </button>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg border border-border p-2 text-foreground md:hidden"
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
            className="bg-white/90 backdrop-blur-md border border-border mt-3 overflow-hidden rounded-xl md:hidden shadow-sm"
          >
            {links.map((l) => (
              <li key={l.id} className="border-b last:border-b-0">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm text-muted-foreground"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
