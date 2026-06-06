import { motion } from "motion/react";
import { Award, BookOpen, BriefcaseBusiness, Languages } from "lucide-react";

const credentials = [
  {
    icon: BookOpen,
    label: "Education",
    title: "B.Sc. in Agriculture",
    meta: "Patuakhali Science and Technology University · 2020-2025",
    body: "Final grade 3.547/4.00 across 180 credits, with a foundation in agricultural science, soil management, plant biotechnology, and research design.",
  },
  {
    icon: BriefcaseBusiness,
    label: "Research Assistant",
    title: "BAS-USDA PSTU CC Project",
    meta: "Department of Soil Science · Department of Genetics & Plant Breeding",
    body: "Worked on saline soil and nutrient management in coastal unfavorable ecosystems, including sample collection, treatment setup, silicon mitigation, trait analysis, and data analysis.",
  },
  {
    icon: Award,
    label: "Awards",
    title: "Scholarships & case competition",
    meta: "Education Board · BRAC · Qamarun Agro Farm",
    body: "Received Education Board, BRAC merit, and primary school scholarships; winner with Team Sabuj Pathik at the 4th Youth Business Conference business case study competition.",
  },
  {
    icon: Languages,
    label: "Language",
    title: "English proficiency",
    meta: "IELTS 7.0 · C1",
    body: "Listening 8.0, Reading 7.0, Speaking 6.5, and Writing 6.0, supporting international research communication and scholarship applications.",
  },
];

export function Credentials() {
  return (
    <section id="credentials" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="font-mono text-xs text-primary mb-4">// 02 — CREDENTIALS</div>
          <h2 className="text-4xl md:text-6xl font-bold">Education, work & awards</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A compact view of the updated CV: academic record, funded research experience,
            scholarships, and language readiness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {credentials.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white/5 p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
                    {item.label}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  <div className="mt-1 text-xs font-mono text-muted-foreground">{item.meta}</div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
