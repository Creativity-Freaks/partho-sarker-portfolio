import { motion } from "motion/react";
import { FlaskConical, Sprout, Network } from "lucide-react";

const pillars = [
  { icon: FlaskConical, title: "In-silico research", body: "Structural biology, molecular docking, and dynamics simulations to decode hypothetical proteins." },
  { icon: Sprout, title: "Agricultural science", body: "Field-level experimentation, physiology, and lab analysis turning data into crop insights." },
  { icon: Network, title: "Community & leadership", body: "Building research culture as President of PSTU Research Society and connecting students with industry." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="font-mono text-xs text-primary mb-4">// 01 — ABOUT</div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            At the intersection of <span className="text-gradient">biology</span>, <span className="text-gradient">data</span>, and the <span className="text-gradient">field</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I'm a researcher at Patuakhali Science and Technology University working on
            computational structural biology and applied agricultural science.
            My recent work decoded the ligand binding mechanism of a hypothetical
            protein from <em>Fusarium graminearum</em> through molecular docking and
            dynamics simulations — a candidate target for next-generation antifungals.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}