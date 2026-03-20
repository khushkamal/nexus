import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Hexagon className="w-8 h-8 text-primary fill-primary/20" />
          </motion.div>
          <span className="font-display font-bold text-xl tracking-widest text-white group-hover:text-primary transition-colors">
            NEXUS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full font-medium text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-white transition-all duration-300 shadow-[0_0_0_0_rgba(138,43,226,0)] hover:shadow-[0_0_20px_0_rgba(138,43,226,0.3)]"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-white/70 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl text-white/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 rounded-full font-bold bg-primary text-white glow-primary"
              >
                Start a Project
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
