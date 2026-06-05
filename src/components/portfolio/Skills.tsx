import { motion } from "motion/react";

const groups = [
  {
    label: "Bioinformatics",
    color: "primary",
    items: ["NCBI-CD", "ExPASy", "InterPro", "iTOL v7.0", "PSIPRED", "BLASTp", "MEGA12", "SOPMA", "trRosetta", "Clustal Omega", "MolProbity", "SWISS-MODEL", "Subcellular localization", "Ramachandran plot"],
  },
  {
    label: "Lab & Field",
    color: "accent",
    items: ["Fluorescence chlorophyll", "Vitamin C analysis", "Moisture content", "Root scanning", "UV/VIS spectrometer", "AAS operation", "TSS estimation (chili)", "Ascorbic acid profiling", "Dose optimization", "Pot experiments", "Research design", "Sample analysis", "Treatment setup", "Trait analysis"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="font-mono text-xs text-primary mb-4">// 03 — TOOLBOX</div>
          <h2 className="text-4xl md:text-6xl font-bold">Skills & instruments</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">A working vocabulary spanning computational pipelines and wet-lab protocols.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-2 w-2 rounded-full bg-${g.color} animate-pulse`} />
                <h3 className="font-display font-semibold text-xl">{g.label}</h3>
                <span className="ml-auto text-xs font-mono text-muted-foreground">{g.items.length} tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/5 border border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary cursor-default transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}