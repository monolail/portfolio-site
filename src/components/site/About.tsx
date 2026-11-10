import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground">
          {t.about.kicker}
        </p>
        <h2 className="font-display mt-1.5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t.about.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          {t.about.subtitle}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.about.cards.map((card, i) => {
            const indexLabel = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="apple-card-white flex flex-col justify-between p-8 apple-card-hover"
              >
                <div>
                  <span className="text-xs font-bold text-muted-foreground">
                    {indexLabel}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {card.body}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4 pt-2">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline sm:text-sm"
                  >
                    {card.linkText} <span aria-hidden="true">›</span>
                  </a>
                  {card.secondaryLink && card.secondaryLinkText && (
                    <a
                      href={card.secondaryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline sm:text-sm"
                    >
                      {card.secondaryLinkText} <span aria-hidden="true">›</span>
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
