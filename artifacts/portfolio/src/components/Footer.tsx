import { Hexagon, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-primary fill-primary/20" />
            <span className="font-display font-bold text-lg tracking-widest text-white">
              NEXUS
            </span>
          </div>

          <div className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Nexus Development Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
