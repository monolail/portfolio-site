import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";

export function TechBlog() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground">
          {t.blogSection.kicker}
        </p>
        <h2 className="font-display mt-1.5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t.blogSection.title}
        </h2>
        <p className="mt-2 text-base text-muted-foreground sm:text-lg">
          {t.blogSection.subtitle}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.blogSection.items.map((item, i) => {
            const indexLabel = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={item.title}
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
                  <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    {item.sub}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90 sm:text-sm">
                    {item.body}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-5 pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline sm:text-sm"
                  >
                    {item.linkText} <span aria-hidden="true">›</span>
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
