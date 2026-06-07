import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const links = [
  { icon: MessageSquare, href: "#contact", label: "Contact" },
  { icon: Mail, href: "mailto:parthodhrubopstu@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+8801715771780", label: "Phone" },
  { icon: MessageCircle, href: "https://wa.me/8801715771780", label: "WhatsApp" },
  { icon: Facebook, href: "https://www.facebook.com/parthosarker.dhrubofish", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/partho-sarker-dhrubo/", label: "LinkedIn" },
];

export function SocialRail() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Vertical icon rail */}
      <nav
        aria-label="Social links"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5"
      >
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className="w-9 h-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </nav>

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-4 z-40 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
