import { Dna, FlaskConical, Leaf, Atom, Microscope, TestTube2, Sprout, Beaker, Database, Network } from "lucide-react";

const items = [
  { icon: Dna, label: "Molecular Docking" },
  { icon: Network, label: "Phylogenetics" },
  { icon: FlaskConical, label: "AAS Operation" },
  { icon: Leaf, label: "Plant Biotechnology" },
  { icon: Atom, label: "AutoDock Vina" },
  { icon: Microscope, label: "Tissue Culture" },
  { icon: TestTube2, label: "TSS Estimation" },
  { icon: Sprout, label: "Agri Innovation" },
  { icon: Beaker, label: "Ascorbic Acid Profiling" },
  { icon: Database, label: "BLASTp · MEGA12" },
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="relative py-16 overflow-hidden border-y border-border/40 bg-gradient-to-r from-background via-secondary/30 to-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex gap-10 animate-marquee whitespace-nowrap py-2">
          {row.map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full glass border border-border/60"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <it.icon className="h-4 w-4" />
              </div>
              <span className="font-display text-lg md:text-xl font-semibold tracking-tight">
                {it.label}
              </span>
              <span className="text-primary/60 text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-16" />
    </section>
  );
}