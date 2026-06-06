import { motion } from "motion/react";
import { Linkedin, Facebook, Mail, Phone, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", handle: "partho-sarker-dhrubo", href: "https://www.linkedin.com/in/partho-sarker-dhrubo/" },
  { icon: Facebook, label: "Facebook", handle: "parthosarker.dhrubofish", href: "https://www.facebook.com/parthosarker.dhrubofish" },
  { icon: Mail, label: "Email", handle: "parthodhrubopstu@gmail.com", href: "mailto:parthodhrubopstu@gmail.com" },
  { icon: Phone, label: "Phone", handle: "+880 1715 771780", href: "tel:+8801715771780" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">
            <div className="font-mono text-xs text-primary mb-4">// 06 — LET'S CONNECT</div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Have a research idea, a <span className="text-gradient">collaboration</span>, or just curious?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              I'm always open to conversations about bioinformatics, agricultural innovation,
              or building things that help researchers and farmers.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                    <div className="text-sm font-medium truncate">{s.handle}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}