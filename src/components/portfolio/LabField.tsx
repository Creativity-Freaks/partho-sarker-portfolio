import { motion } from "motion/react";
import labPotsAsset from "@/assets/lab-pots.jpeg";
import fieldFluorimeterAsset from "@/assets/field-fluorimeter.jpeg";
import labScannerAsset from "@/assets/lab-scanner.jpeg";
import ricePotsAsset from "@/assets/rice-pots.jpeg";
import fieldTeamAsset from "@/assets/field-team.jpeg";
import societyEventAsset from "@/assets/society-event.jpeg";

const shots = [
  {
    src: labPotsAsset,
    title: "Pot experiment sampling",
    tag: "Greenhouse · Treatment setup",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: fieldFluorimeterAsset,
    title: "Chlorophyll fluorometry",
    tag: "Field · Pocket PEA",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: labScannerAsset,
    title: "Root scanning",
    tag: "Lab · Image analysis",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: ricePotsAsset,
    title: "Rice trait monitoring",
    tag: "Net-house · Phenotyping",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    src: fieldTeamAsset,
    title: "Field briefing with mentors",
    tag: "Research walk · PSTU",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: societyEventAsset,
    title: "Research Society gathering",
    tag: "Community · PSTU",
    span: "md:col-span-2 md:row-span-1",
  },
];

export function LabField() {
  return (
    <section id="labfield" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-tilt-float" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <div className="font-mono text-xs text-primary mb-4">// 05 — IN THE LAB & FIELD</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Where <span className="text-gradient">science</span> meets the soil
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From pot experiments and root scanning to chlorophyll fluorometry in the paddy — a
            glimpse into the hands-on work behind the data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px] perspective-1200">
          {shots.map((s, i) => (
            <motion.figure
              key={s.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, rotateY: 4, rotateX: -4, z: 30 }}
              className={`tilt-card relative overflow-hidden rounded-2xl glass group ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.title}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">
                  {s.tag}
                </div>
                <div className="text-sm md:text-base font-semibold leading-tight">{s.title}</div>
              </figcaption>
              <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_2px] shadow-primary/60" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
