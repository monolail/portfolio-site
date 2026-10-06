import { motion } from "motion/react";
import { Server, Cpu, Coffee } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [Server, Cpu, Coffee];

export function Studying() {
  const { t } = useLanguage();

  return (
    <section id="studying" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">
          {t.studying.kicker}
        </p>
        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {t.studying.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.studying.items.map((item, i) => {
            const Icon = icons[i] ?? Server;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="lab-card p-7 lab-card-hover"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <div className="mt-6">
                  <a
                    href="https://github.com/monolail?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Repository &rarr;
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
