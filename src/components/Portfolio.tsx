import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import speakingAsset from "@/assets/speaking.jpeg.asset.json";
import posterAsset from "@/assets/poster.jpeg.asset.json";
import krishiAsset from "@/assets/krishibondhu.jpeg.asset.json";
import { Hero } from "./portfolio/Hero";
import { About } from "./portfolio/About";
import { Research } from "./portfolio/Research";
import { Skills } from "./portfolio/Skills";
import { Gallery } from "./portfolio/Gallery";
import { Leadership } from "./portfolio/Leadership";
import { CV } from "./portfolio/CV";
import { Contact } from "./portfolio/Contact";
import { Nav } from "./portfolio/Nav";

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
      <Hero speaking={speakingAsset.url} />
      <About />
      <Research poster={posterAsset.url} krishi={krishiAsset.url} />
      <Skills />
      <Leadership />
      <Gallery speaking={speakingAsset.url} poster={posterAsset.url} krishi={krishiAsset.url} />
      <CV />
      <Contact />
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/40">
        <p>© 2026 Partho Sarker Dhrubo · Crafted with curiosity & code</p>
      </footer>
    </div>
  );
}