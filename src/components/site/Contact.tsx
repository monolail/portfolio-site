import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const EMAIL = "hojun.dev@example.com";

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `[Portfolio] ${form.name}`,
    )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
  };

  const field =
    "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none transition";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glow-card grid gap-12 rounded-3xl p-8 md:grid-cols-2 md:p-14"
        >
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">
              {t.contact.kicker}
            </p>
            <h2 className="font-display mt-4 text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {t.contact.desc}
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { href: "https://github.com/monolail", Icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${EMAIL}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass-panel flex size-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <input
              className={field}
              placeholder={t.contact.name}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              type="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              className={`${field} min-h-32 resize-y`}
              placeholder={t.contact.message}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-neon w-full rounded-xl px-6 py-3.5 text-sm"
            >
              {t.contact.send}
            </motion.button>
            {status !== "idle" && (
              <p className="text-xs text-muted-foreground">
                {status === "sent" ? t.contact.sent : t.contact.invalid}
              </p>
            )}
          </form>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <span className="font-display">Hojun.dev</span>
          <span>{t.footer}</span>
          <span>© {new Date().getFullYear()} 이호준 (Hojun Lee)</span>
        </footer>
      </div>
    </section>
  );
}
