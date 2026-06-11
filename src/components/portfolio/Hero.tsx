import { motion } from "motion/react";
import { Dna, Sparkles, ArrowDown } from "lucide-react";

export function Hero({ speaking }: { speaking: string }) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Animated DNA orbits */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/10 animate-dna-spin" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent/10 animate-dna-spin"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        />
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary animate-float-slow" />
        <div
          className="absolute bottom-32 right-20 w-3 h-3 rounded-full bg-accent animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-40 right-1/4 w-1.5 h-1.5 rounded-full bg-gold animate-float-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground">
              Open to scholarship & research opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            Partho
            <br />
            Sarker <span className="text-gradient">Dhrubo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Graduate researcher in soil & molecular biology working across coastal agriculture,
            silicon stress mitigation, and{" "}
            <span className="text-foreground">bioinformatics-driven discovery</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#research"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:glow transition-all"
            >
              <Dna className="h-4 w-4" />
              Explore my research
              <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 hover:bg-white/5 font-medium text-sm transition-all"
            >
              <Sparkles className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "15+", l: "Bioinformatics tools" },
              { n: "IELTS 7", l: "English proficiency" },
              { n: "4", l: "Manuscripts & conference papers" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                  {s.n}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass glow">
            <img
              src={speaking}
              alt="Partho Sarker Dhrubo speaking"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-mono text-primary mb-1">// SPEAKING @ BDJOBS x PSTU</div>
              <div className="text-sm text-foreground">Journey to Career — 2025</div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-xs font-mono"
          >
            <div className="text-primary">$ run docking</div>
            <div className="text-muted-foreground">→ -8.5 kcal/mol</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
