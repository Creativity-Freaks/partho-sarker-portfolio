import { motion } from "motion/react";
import { Award, BookOpen, BriefcaseBusiness, Languages } from "lucide-react";

const credentials = [
  {
    icon: BookOpen,
    label: "Education",
    title: "B.Sc. in Agriculture",
    meta: "Patuakhali Science and Technology University · 2020–2025",
    body: "Five years and 180 credits at PSTU, graduating with a CGPA of 3.547/4.00 — grounded in agricultural science, soil management, plant biotechnology, and hands-on research design.",
  },
  {
    icon: BriefcaseBusiness,
    label: "Work",
    title: "BAS-USDA PSTU CC Project",
    meta: "Department of Soil Science · Department of Genetics & Plant Breeding",
    body: "Research assistant on coastal unfavourable ecosystems — saline soil and nutrient management from sample collection and treatment setup through silicon mitigation, trait analysis, and data interpretation.",
  },
  {
    icon: Award,
    label: "Awards",
    title: "Scholarships & competition wins",
    meta: "Education Board · BRAC · Qamarun Agro Farm",
    body: "Education Board, BRAC merit, and primary school scholarships — plus first place with Team Sabuj Pathik at the 4th Youth Business Conference business case study competition.",
  },
  {
    icon: Languages,
    label: "Language",
    title: "English proficiency",
    meta: "IELTS 7.0 · C1",
    body: "Listening 8.0, Reading 7.0, Speaking 6.5, and Writing 6.0 — ready for international research communication, conference presentation, and scholarship applications.",
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
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="font-mono text-xs text-primary mb-4">// 02 — CREDENTIALS</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Grounded in <span className="text-gradient">education</span>, sharpened through{" "}
            <span className="text-gradient">research</span>, and marked by{" "}
            <span className="text-gradient">awards</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            My degree at PSTU built the scientific foundation; BAS-USDA funded work took me into
            coastal field research; and scholarships plus a national case competition affirmed the
            path I'm building between the lab, the soil, and research leadership.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {credentials.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
                {item.label}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <div className="mt-1 text-xs font-mono text-muted-foreground">{item.meta}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
