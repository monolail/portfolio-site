import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const EMAIL = "minn0949@khu.ac.kr";

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
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition";

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="apple-card-gray grid gap-12 p-8 sm:p-12 md:grid-cols-2"
        >
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                {t.contact.kicker}
              </p>
              <h2 className="font-display mt-1.5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.contact.desc}
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="size-4 text-muted-foreground" />
                <a href={`mailto:${EMAIL}`} className="font-medium hover:text-primary">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/monolail"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  href="https://velog.io/@second_ho_jun/posts"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  <BookOpen className="size-4" /> Velog
                </a>
                <a
                  href="https://www.linkedin.com/in/%ED%98%B8%EC%A4%80-%EC%9D%B4-6a515b3aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>
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
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t.contact.send}
            </button>
            {status !== "idle" && (
              <p className="text-xs text-muted-foreground">
                {status === "sent" ? t.contact.sent : t.contact.invalid}
              </p>
            )}
          </form>
        </motion.div>

        <footer className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <span className="font-display font-semibold text-foreground">Hojun Lab</span>
          <span>{t.footer}</span>
          <span>© {new Date().getFullYear()} Hojun Lee. All rights reserved.</span>
        </footer>
      </div>
    </section>
  );
}
