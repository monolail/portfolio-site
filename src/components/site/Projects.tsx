import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import vscodeImg from "@/assets/project-vscode.jpg";
import financeImg from "@/assets/project-finance.jpg";

const images = [vscodeImg, financeImg];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="grid-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">
          {t.projects.kicker}
        </p>
        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {t.projects.title}
        </h2>

        <div className="mt-14 space-y-16 md:space-y-24">
          {t.projects.items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="glow-card overflow-hidden rounded-2xl">
                  <img
                    src={images[i]}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
