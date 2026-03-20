import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Aura Financial",
    category: "Fintech Dashboard",
    tech: ["React", "TypeScript", "Node.js"],
    image: "project-fintech.png",
  },
  {
    title: "Synapse AI",
    category: "Machine Learning Platform",
    tech: ["Next.js", "Python", "TensorFlow"],
    image: "project-ai.png",
  },
  {
    title: "Nova Health",
    category: "Biometric Tracking",
    tech: ["React Native", "GraphQL"],
    image: "project-health.png",
  },
  {
    title: "Lumina Commerce",
    category: "Global Retail Ecosystem",
    tech: ["Shopify Plus", "React", "AWS"],
    image: "project-ecommerce.png",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32 relative bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Selected <span className="text-accent">Works</span>
            </h2>
            <p className="text-white/60 max-w-xl text-lg">
              A glimpse into our digital portfolio. Each project represents a technical challenge solved through elegant engineering and exceptional design.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
            View Full Archive <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index % 2 !== 0 ? "md:mt-16" : ""
              }`}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-background">
                <img
                  src={`${import.meta.env.BASE_URL}images/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full text-white/90 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-primary font-medium mb-2">{project.category}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-display font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-white text-background flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
