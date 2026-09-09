import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36 pattern-bg">
      <div className="absolute inset-0 bg-accent/90" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-5 text-center text-white">
        <motion.p
          key={`${lang}-badge`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs tracking-wide text-white/90 backdrop-blur-md"
        >
          {t.hero.badge}
        </motion.p>

        <motion.h1
          key={`${lang}-headline`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display mt-7 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl text-white"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          key={`${lang}-sub`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm"
          >
            {t.hero.cta}
            <ArrowRight className="size-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
