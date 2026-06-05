import { motion } from "motion/react";
import { FileDown, FileText, Eye } from "lucide-react";

export function CV() {
  return (
    <section id="cv" className="relative py-32 px-6">
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

          <div className="relative flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <div className="font-mono text-xs text-primary mb-4">// 07 — CURRICULUM VITAE</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Grab my <span className="text-gradient">full CV</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                A comprehensive overview of my research, publications, conferences,
                leadership roles, and technical expertise — ready for review.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/Partho_Sarker_Dhrubo_CV.pdf"
                  download
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:glow transition-all"
                >
                  <FileDown className="h-5 w-5 group-hover:animate-bounce" />
                  Download CV (PDF)
                </a>
                <a
                  href="/Partho_Sarker_Dhrubo_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-white/5 font-medium text-sm transition-all"
                >
                  <Eye className="h-4 w-4" />
                  Preview Online
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <FileText className="h-3.5 w-3.5" />
                <span>Last updated: June 2026</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex flex-col items-center justify-center w-48 h-60 rounded-2xl border border-border bg-white/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <FileText className="h-12 w-12 text-primary mb-3 relative z-10" />
              <div className="text-sm font-semibold text-foreground relative z-10">CV.pdf</div>
              <div className="text-xs text-muted-foreground mt-1 relative z-10">2 pages</div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
