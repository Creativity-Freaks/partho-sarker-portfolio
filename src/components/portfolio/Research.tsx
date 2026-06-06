import { motion } from "motion/react";
import { FileText, Smartphone, Sprout } from "lucide-react";

export function Research({ poster, krishi }: { poster: string; krishi: string }) {
  const projects = [
    {
      img: poster,
      tag: "Bioinformatics · Molecular Docking",
      title:
        "Decoding structural stability & ligand binding of a hypothetical protein from Fusarium graminearum",
      body: "First in-depth computational analysis of YP_001249320.1 — combining homology modelling, 250 ns MD simulations, and docking with eight flavonoid derivatives. Identified MOLPORT-003-935-831 as a top-performing binder (-8.5 kcal/mol).",
      venue:
        "11th International Plant Tissue Culture & Biotechnology Conference · University of Dhaka · Jan 2026",
      icon: FileText,
    },
    {
      img: krishi,
      tag: "AgriTech · Concept",
      title: "কৃষিবন্ধু App — Transforming agriculture, empowering farmers",
      body: "A concept platform aggregating weather advisories, market prices, pest diagnostics, and treatment guidance directly into farmers' hands — bridging extension services with mobile technology.",
      venue: "Project poster · Faculty of Agriculture, PSTU",
      icon: Smartphone,
    },
    {
      img: poster,
      tag: "Soil Science · Coastal Agriculture",
      title: "Silicon mitigation for saline and heavy-metal stressed crop systems",
      body: "Research experience under BAS-USDA PSTU CC and Bangladesh Academy of Sciences-supported work, focusing on saline soil, nutrient management, treatment application, trait analysis, and crop stress resilience.",
      venue: "Department of Soil Science · Department of Genetics & Plant Breeding · PSTU",
      icon: Sprout,
    },
  ];

  return (
    <section id="research" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-primary mb-4">// 03 — SELECTED WORK</div>
          <h2 className="text-4xl md:text-6xl font-bold">Research & projects</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Updated from the latest CV: coastal soil management, BRRI rice genotype field work,
            RTC-funded bioinformatics training, and agri-tech concept development.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden glass group">
                <img
                  src={p.img}
                  alt={p.title}
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent mb-4">
                  <p.icon className="h-3.5 w-3.5" />
                  {p.tag}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
                <div className="mt-6 text-xs font-mono text-muted-foreground border-l-2 border-primary/40 pl-4">
                  {p.venue}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
