import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import speakingAsset from "@/assets/speaking.jpeg";
import posterAsset from "@/assets/poster.jpeg";
import krishiAsset from "@/assets/krishibondhu.jpeg";
import { Hero } from "./portfolio/Hero";
import { About } from "./portfolio/About";
import { Research } from "./portfolio/Research";
import { Skills } from "./portfolio/Skills";
import { Credentials } from "./portfolio/Credentials";
import { Publications } from "./portfolio/Publications";
import { Gallery } from "./portfolio/Gallery";
import { Leadership } from "./portfolio/Leadership";
import { LabField } from "./portfolio/LabField";
import { CV } from "./portfolio/CV";
import { Contact } from "./portfolio/Contact";
import { Nav } from "./portfolio/Nav";
import { Marquee } from "./portfolio/Marquee";
import { SocialRail } from "./portfolio/SocialRail";
import { Mail, Phone, Linkedin, Facebook, MapPin } from "lucide-react";

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-hidden">
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left"
      />
      <Nav />
      <SocialRail />
      <Hero speaking={speakingAsset} />
      <About />
      <Credentials />
      <Research poster={posterAsset} krishi={krishiAsset} />
      <Publications />
      <Marquee />
      <Skills />
      <Leadership />
      <LabField />
      <Gallery speaking={speakingAsset} poster={posterAsset} krishi={krishiAsset} />
      <CV />
      <Contact />
      <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient">Partho Sarker Dhrubo</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Graduate researcher in soil & molecular biology, connecting coastal agriculture,
              silicon stress mitigation, and bioinformatics.
            </p>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:parthodhrubopstu@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" /> parthodhrubopstu@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801715771780"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" /> +880 1715 771780
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Gaibandha, Bangladesh · PSTU
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              Elsewhere
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/partho-sarker-dhrubo/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/parthosarker.dhrubofish"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:parthodhrubopstu@gmail.com"
                className="w-10 h-10 rounded-full glass border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            {/* <a
              href="/CV%20of%20Partho%20Sarker%20Dhrubo,%20Bangladesh.pdf"
              download
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:glow transition-all"
            >
              Download CV
            </a> */}
          </div>
        </div>
        <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
          © 2026 Partho Sarker Dhrubo · Designed by <a href="https://www.hcsarker.me" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors"> hcsarker </a>
        </div>
      </footer>
    </div>
  );
}
