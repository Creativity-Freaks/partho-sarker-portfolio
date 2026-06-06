import { motion } from "motion/react";
import { Award, Users, Mic, Leaf } from "lucide-react";

const items = [
  {
    icon: Users,
    year: "Mar 2025 — Dec 2025",
    title: "Founding President, PSTU Research Society",
    body: "Led research culture programs, including the Journey to Career seminar with bdjobs and supervised hands-on student research pathways.",
  },
  {
    icon: Mic,
    year: "Jul 2025 — current",
    title: "Co-founder, Bioinformatics Club, PSTU",
    body: "Helping run Bioinformatics for Beginners and workshops connecting agricultural and fisheries research with bioinformatics tools.",
  },
  {
    icon: Mic,
    year: "26 Aug 2025",
    title: "Journey to Career × bdjobs",
    body: "Flagship program in collaboration with Bangladesh's largest job-seeking platform, helping students prepare for the workforce.",
  },
  {
    icon: Leaf,
    year: "2024",
    title: "Qamarun Agro Farm — 4th Youth Business Conference",
    body: "Winner with Team Sabuj Pathik - Green Travelers in a business case study competition.",
  },
  {
    icon: Award,
    year: "2026",
    title: "Poster presenter — 11th PTC&B Conference, DU",
    body: "Presented bioinformatics research on molecular docking & dynamics simulations at the University of Dhaka.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-primary mb-4">// 04 — JOURNEY</div>
          <h2 className="text-4xl md:text-6xl font-bold">Leadership & milestones</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-8">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 h-12 w-12 rounded-full glass flex items-center justify-center text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-mono text-muted-foreground">{it.year}</div>
                <h3 className="text-xl md:text-2xl font-semibold mt-1">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
