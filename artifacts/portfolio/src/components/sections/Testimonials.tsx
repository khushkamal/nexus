import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote: "NEXUS transformed our fintech platform into an industry benchmark. The engineering quality is second to none.",
    author: "Sarah Chen",
    role: "CTO at Aura Financial",
    initials: "SC"
  },
  {
    quote: "The AI integration they built reduced our processing time by 80%. Absolutely extraordinary team.",
    author: "Marcus Webb",
    role: "CEO at Synapse AI",
    initials: "MW"
  },
  {
    quote: "From concept to launch in 8 weeks. The design blew our board away. Unmatched speed and quality.",
    author: "Priya Sharma",
    role: "VP Product at Nova Health",
    initials: "PS"
  },
  {
    quote: "Our conversion rate increased 340% after NEXUS rebuilt our e-commerce platform. ROI was immediate.",
    author: "Daniel Park",
    role: "CMO at Lumina Commerce",
    initials: "DP"
  },
  {
    quote: "They don't just build software — they build competitive moats. A true strategic technology partner.",
    author: "Elena Vasquez",
    role: "Founder at Vertex Analytics",
    initials: "EV"
  },
  {
    quote: "The Kubernetes infrastructure they designed handles 10x our traffic with zero downtime. Phenomenal.",
    author: "James Liu",
    role: "CTO at Halo Logistics",
    initials: "JL"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000); // 5 seconds instead of 4 for better reading time
    
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-32 relative bg-background border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Client <span className="text-gradient-primary">Voices</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Don't take our word for it
          </motion.p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative h-[400px] sm:h-[350px] md:h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full glass-panel p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col items-center text-center justify-center"
            >
              <Quote className="w-12 h-12 text-primary/40 mb-6 absolute top-8 left-8" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-2xl md:text-3xl font-display font-medium text-white mb-8 leading-tight">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  {TESTIMONIALS[currentIndex].initials}
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">{TESTIMONIALS[currentIndex].author}</div>
                  <div className="text-sm text-primary">{TESTIMONIALS[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
