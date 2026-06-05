import { motion } from "motion/react";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${scrolled ? "scale-95" : ""}`}
    >
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl">
        <a href="#top" className="px-4 py-1.5 font-display font-bold text-sm tracking-tight">
          <span className="text-gradient">PSD</span>
        </a>
        <div className="h-4 w-px bg-border mx-1" />
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-3 py-1.5 text-xs md:text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}