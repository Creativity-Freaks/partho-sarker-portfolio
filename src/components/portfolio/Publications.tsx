import { motion } from "motion/react";
import { FileCheck2, FileClock, Presentation } from "lucide-react";

const publications = [
  {
    icon: FileCheck2,
    status: "Published",
    title: "Remediation of lead toxicity by exogenous application of silicon in rice",
    detail: "Bangladesh Journal of Agriculture, 50(1), 1-19 · DOI: 10.3329/bjagri.v50i1.82829",
  },
  {
    icon: FileCheck2,
    status: "Published",
    title:
      "Silicon Supplementation Boosts Salt Resilience of Traditional Rice Varieties by Ionic Regulation and Nutrient Balance",
    detail:
      "Journal of Patuakhali Science and Technology University, 3(1), 1-15 · DOI: 10.3329/jpstu.v3i1.82829",
    link: "https://journal.pstu.ac.bd/public/storage/papers/1784010977_Shanta%20et%20al._JPSTU%20revised%20(2)%20with%20discussion%20part%20(2).pdf",
  },
  {
    icon: Presentation,
    status: "Conference paper",
    title:
      "Decoding structural stability and ligand binding mechanism of a hypothetical protein from Fusarium graminearum",
    detail: "11th International PTC&B Conference, University of Dhaka · 24-26 January 2026",
  },
  {
    icon: FileClock,
    status: "Under review",
    title:
      "Integrated effects of different root-zone hydration and moisture conservation techniques on survival, growth and physiological performance of young tea plants (Camellia sinensis L.) during drought stress",
    detail: "Field Crops Research · Manuscript FIELD-D-26-02635",
  },
  {
    icon: FileClock,
    status: "Under review",
    title:
      "In silico structural and functional characterization of an uncharacterized protein from Arabidopsis thaliana involved in phosphate transport",
    detail: "Journal of Genetic Engineering and Biotechnology · Manuscript JGEBIO-D-26-00036",
  },
  {
    icon: FileClock,
    status: "Under review",
    title:
      "Comparative effectiveness of basal and foliar silicon application on wheat productivity in coastal saline-prone soils",
    detail: "Journal of Soil Science and Plant Nutrition · EMID: 6e17009eea1db52b",
  },
];

export function Publications() {
  return (
    <section id="publications" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="font-mono text-xs text-primary mb-4">// 04 — PUBLICATIONS</div>
          <h2 className="text-4xl md:text-6xl font-bold">Manuscripts & conference papers</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Published articles, conference presentations, and under-review manuscripts across
            silicon-mediated stress tolerance, coastal agriculture, and computational protein
            characterization.
          </p>
        </motion.div>

        <div className="space-y-4">
          {publications.map((paper, i) => (
            <motion.article
              key={paper.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="grid gap-4 rounded-2xl border border-border bg-white/5 p-5 md:grid-cols-[160px_1fr] md:items-start hover:border-primary/40 transition-colors"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary">
                <paper.icon className="h-3.5 w-3.5" />
                {paper.status}
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{paper.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{paper.detail}</p>
                {"link" in paper && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary/50 hover:bg-primary/15"
                  >
                    View paper
                    <span className="font-mono text-[10px] opacity-80">PDF</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
