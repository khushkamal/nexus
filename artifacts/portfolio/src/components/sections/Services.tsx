import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Layers, Cpu, ShieldCheck } from "lucide-react";

const SERVICES = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Applications",
    description: "High-performance, scalable React & Node.js architectures tailored for complex enterprise needs.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native-feeling cross-platform mobile experiences that engage and retain users.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Award-winning interface design focusing on seamless journeys and cinematic aesthetics.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Architecture",
    description: "Resilient infrastructure design on AWS and GCP for zero-downtime global deployment.",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Integration",
    description: "Embedding cutting-edge LLMs and machine learning models into your product ecosystem.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Enterprise Software",
    description: "Secure, compliant, and robust custom software replacing legacy operational systems.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Core <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg">
            We don't just write code. We architect solutions that define the future of your industry, combining technical excellence with visionary design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
