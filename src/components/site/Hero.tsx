import { motion } from "motion/react";
import { Github, BookOpen, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="bg-white pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          key={`${lang}-univ`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-semibold tracking-tight text-muted-foreground sm:text-base"
        >
          {t.hero.univ}
        </motion.p>

        <motion.h1
          key={`${lang}-name`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display mt-3 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {t.hero.name}{" "}
          <span className="text-3xl font-bold text-foreground/90 sm:text-4xl md:text-5xl">
            {t.hero.suffix}
          </span>
        </motion.h1>

        <motion.p
          key={`${lang}-role`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-lg font-medium text-foreground sm:text-xl md:text-2xl"
        >
          {t.hero.role}
        </motion.p>

        <motion.p
          key={`${lang}-sub`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-2.5 text-sm text-muted-foreground sm:text-base"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            {t.hero.secondaryCta} <span aria-hidden="true">›</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-2.5"
        >
          {t.hero.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {t.hero.info.affiliationLabel}
              </p>
              <p className="mt-1.5 text-sm font-medium text-foreground">
                {t.hero.info.affiliationValue}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {t.hero.info.emailLabel}
              </p>
              <a
                href={`mailto:${t.hero.info.emailValue}`}
                className="mt-1.5 inline-block text-sm font-medium text-foreground hover:text-primary"
              >
                {t.hero.info.emailValue}
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {t.hero.info.elsewhereLabel}
              </p>
              <div className="mt-1.5 flex items-center justify-center gap-4 text-sm font-medium text-foreground">
                <a
                  href="https://github.com/monolail"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  href="https://velog.io/@second_ho_jun/posts"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary"
                >
                  <BookOpen className="size-4" /> Velog
                </a>
                <a
                  href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EC%9D%B4-6a515b3aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
