import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 150, label: "Projects Delivered", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 12, label: "Years Experience", suffix: "+" },
  { value: 40, label: "Global Clients", suffix: "+" },
];

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to]);

  return (
    <span ref={nodeRef} className="text-5xl lg:text-7xl font-display font-bold text-white tracking-tighter">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-2">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/50 font-medium uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
