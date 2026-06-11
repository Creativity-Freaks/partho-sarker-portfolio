import { motion } from "motion/react";
import { useState } from "react";
import { Mail, FileText, Eye, GraduationCap, FlaskConical, Award, Users, X } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Education", value: "B.Sc. Agriculture · CGPA 3.547" },
  { icon: FlaskConical, label: "Focus", value: "Soil & Molecular Biology" },
  { icon: Award, label: "Output", value: "Published + under-review papers" },
  { icon: Users, label: "Role", value: "Founding President · PSTURS" },
];

const cvPdfPath = "/CV%20of%20Partho%20Sarker%20Dhrubo,%20Bangladesh.pdf";

export function CV() {
  const [open, setOpen] = useState(false);
  return (
    <section id="cv" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-primary/20 bg-background/60 p-8 backdrop-blur-xl md:p-14 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="font-mono text-xs text-primary mb-4">// 07 — CURRICULUM VITAE</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Take home the <span className="text-gradient">full story</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Research experience, publications, projects, awards, language score, and leadership
                work — packaged into the latest four-page CV for scholarship reviewers, supervisors,
                and collaborators.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-border/60"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <h.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {h.label}
                      </div>
                      <div className="text-sm font-medium truncate">{h.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:parthodhrubopstu@gmail.com?subject=CV%20Request%20%E2%80%94%20Partho%20Sarker%20Dhrubo&body=Hi%20Partho%2C%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20CV.%20Thank%20you!"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  <Mail className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Request CV via Email
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary/50 hover:bg-white/5 font-medium text-sm transition-all"
                >
                  <Eye className="h-4 w-4" />
                  Preview Online
                </button>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <FileText className="h-3.5 w-3.5" />
                <span>4 pages · Last updated June 2026 · Available on request</span>
              </div>
            </div>

            {/* Animated 3D document mockup */}
            <div className="perspective-1200 flex justify-center">
              <motion.div
                initial={{ opacity: 0, rotateY: -25, y: 30 }}
                whileInView={{ opacity: 1, rotateY: -12, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ rotateY: -6, rotateX: 4, scale: 1.03 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-64 md:w-72 aspect-[3/4] rounded-2xl shadow-2xl"
              >
                {/* Stack: back pages */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 border border-border translate-x-3 translate-y-3 -z-10" />
                <div className="absolute inset-0 rounded-2xl bg-white/10 border border-border translate-x-1.5 translate-y-1.5 -z-10" />

                {/* Front page */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-background to-secondary border border-primary/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 animate-gradient-shift" />
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-shift" />

                  <div className="relative h-full p-6 flex flex-col">
                    <div className="text-[9px] font-mono text-primary tracking-widest">
                      CURRICULUM VITAE
                    </div>
                    <div className="mt-2 font-display font-bold text-lg leading-tight text-gradient">
                      Partho Sarker Dhrubo
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1">
                      Bioinformatics · Plant Biotechnology
                    </div>

                    <div className="mt-5 space-y-2.5">
                      {[
                        { w: "w-3/4", label: "Education" },
                        { w: "w-full", label: "Research" },
                        { w: "w-2/3", label: "Projects" },
                        { w: "w-5/6", label: "Skills" },
                        { w: "w-3/5", label: "Leadership" },
                      ].map((row, i) => (
                        <div key={i} className="space-y-1">
                          <div className="text-[8px] font-mono text-primary/80 uppercase tracking-wider">
                            {row.label}
                          </div>
                          <div className={`h-1.5 rounded-full bg-foreground/15 ${row.w}`} />
                          <div
                            className={`h-1 rounded-full bg-foreground/10 ${i % 2 ? "w-4/5" : "w-2/3"}`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 flex items-center justify-between text-[8px] font-mono text-muted-foreground border-t border-border/50">
                      <span>partho.dhrubo@pstu.ac.bd</span>
                      <span>p. 1 / 2</span>
                    </div>
                  </div>
                </div>

                {/* Floating request badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ transform: "translateZ(40px)" }}
                  className="absolute -top-4 -right-4 rounded-2xl border border-primary/20 bg-background/60 px-3 py-2 backdrop-blur-xl flex items-center gap-2 shadow-xl"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[10px] font-mono">On Request</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {open && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/85 backdrop-blur-md p-4 md:p-8 animate-fade-in"
            onClick={() => setOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[88vh] rounded-2xl overflow-hidden border border-border bg-background/60 backdrop-blur-xl shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-background/60">
                <div className="flex items-center gap-2 text-sm font-mono">
                  <FileText className="h-4 w-4 text-primary" />
                  CV of Partho Sarker Dhrubo, Bangladesh.pdf
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close preview"
                    className="w-8 h-8 rounded-full border border-border hover:border-primary/50 hover:bg-white/5 flex items-center justify-center transition-all"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <iframe
                src={`${cvPdfPath}#view=FitH`}
                title="CV Preview"
                className="flex-1 w-full bg-white"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
