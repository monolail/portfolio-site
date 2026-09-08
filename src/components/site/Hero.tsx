import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { ParticleField } from "./ParticleField";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
      <div className="grid-glow absolute inset-0" aria-hidden="true" />
      <ParticleField />
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <motion.p
          key={`${lang}-badge`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel mx-auto w-fit rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground"
        >
          {t.hero.badge}
        </motion.p>

        <motion.h1
          key={`${lang}-headline`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display mt-7 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          key={`${lang}-sub`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
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
            className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
          >
            {t.hero.cta}
            <ArrowRight className="size-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
