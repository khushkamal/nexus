import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <Projects />
        <Stats />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
