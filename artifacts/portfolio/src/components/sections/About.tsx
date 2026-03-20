import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Engineering the <br />
              <span className="text-gradient-primary">Impossible</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              NEXUS was founded on a singular premise: to build software that feels like magic. We are a collective of elite engineers, visionary designers, and strategic thinkers dedicated to pushing the boundaries of what's possible on the web.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Uncompromising Code Quality",
                "Award-Winning Visual Design",
                "Scalable Enterprise Architecture",
                "Agile & Transparent Delivery"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-background transition-colors duration-300">
              Meet The Leadership
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative glass-panel">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img
                src={`${import.meta.env.BASE_URL}images/agency-office.png`}
                alt="NEXUS Agency Office"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-[50px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
