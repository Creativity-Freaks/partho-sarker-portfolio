import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "About" },
  { href: "#credentials", label: "Credentials" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Papers" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#labfield", label: "Lab" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100vw-1.5rem)] max-w-6xl transition-all duration-300 md:w-auto ${scrolled ? "scale-95" : ""}`}
    >
      <div className="glass rounded-full px-3 py-2 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 md:justify-start md:gap-1">
          <a href="#top" className="px-3 py-1.5 font-display font-bold text-sm tracking-tight">
            <span className="text-gradient">PSD</span>
          </a>

          <div className="hidden h-4 w-px bg-border mx-1 md:block" />

          <div className="hidden items-center gap-1 md:flex">
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

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-sm border-border/60 bg-background/95 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:slide-in-from-right-6 data-[state=closed]:slide-out-to-right-6"
              >
                <SheetHeader className="text-left">
                  <SheetTitle className="font-display text-2xl">
                    <span className="text-gradient">PSD</span>
                  </SheetTitle>
                  <SheetDescription>Navigate to sections of the portfolio.</SheetDescription>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-border/60 bg-secondary/30 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
