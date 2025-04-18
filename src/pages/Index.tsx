
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      <SectionDivider />
      
      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      <SectionDivider />
      
      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>
      <SectionDivider />
      
      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>
      <SectionDivider />
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-foreground/60">
        <p>© 2025 Bouchra LOUKILI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
