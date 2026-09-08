import { motion } from "motion/react";
import { BarChart3, Code2, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [BarChart3, Code2, BookOpen];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">
          {t.about.kicker}
        </p>
        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {t.about.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.about.cards.map((card, i) => {
            const Icon = icons[i] ?? BarChart3;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glow-card rounded-2xl p-7 hover:glow-card-hover"
              >
                <span className="btn-neon flex size-11 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display mt-6 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
