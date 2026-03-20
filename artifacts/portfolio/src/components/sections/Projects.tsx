import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Web App", "Mobile", "AI/ML", "Enterprise"];

const PROJECTS = [
  {
    title: "Aura Financial",
    category: "Web App",
    tech: ["React", "TypeScript", "Node.js"],
    image: "project-fintech.png",
  },
  {
    title: "Synapse AI",
    category: "AI/ML",
    tech: ["Next.js", "Python", "TensorFlow"],
    image: "project-ai.png",
  },
  {
    title: "Vertex Analytics",
    category: "Enterprise",
    tech: ["TypeScript", "D3.js", "PostgreSQL"],
    image: "project-fintech.png",
  },
  {
    title: "Lumina Commerce",
    category: "Web App",
    tech: ["Shopify Plus", "React", "AWS"],
    image: "project-ecommerce.png",
  },
  {
    title: "Halo Logistics",
    category: "Enterprise",
    tech: ["Go", "Kubernetes", "React"],
    image: "project-ecommerce.png",
  },
  {
    title: "Nova Health",
    category: "Mobile",
    tech: ["React Native", "GraphQL"],
    image: "project-health.png",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="work" className="py-32 relative bg-background border-t border-white/5">
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-white/5"
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Selected Works</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              Featured <span className="text-accent text-glow-accent">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg"
            >
              A glimpse into our digital portfolio. Each project represents a technical challenge solved through elegant engineering and exceptional design.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 lg:justify-end"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    : "glass-panel text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Create masonry effect on desktop
              const isFirst = index === 0;
              const isTall = index % 3 === 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={project.title}
                  className={cn(
                    "group relative rounded-3xl overflow-hidden cursor-pointer bg-card border border-white/5",
                    isFirst ? "md:col-span-2 md:aspect-[21/9]" : isTall ? "aspect-[4/5]" : "aspect-square"
                  )}
                >
                  {/* Image Container */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden bg-background">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-40"
                    />
                  </div>

                  {/* Base Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

                  {/* Centered View Case Study button (appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                    <span className="px-6 py-3 rounded-full bg-white text-background font-bold flex items-center gap-2 shadow-2xl">
                      View Case Study <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
                    <div className="flex justify-end">
                      <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.8)]">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium glass-panel rounded-full text-white/90 border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">{project.category}</p>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white hover:text-background transition-all duration-300 inline-flex items-center gap-2 group">
            View Full Archive <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
