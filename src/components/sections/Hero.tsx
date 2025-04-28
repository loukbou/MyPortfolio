import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-hero-gradient px-4">
      <div className="space-y-8 text-center animate-fade-in max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-2">
          Bouchra <span className="hero-loukili">LOUKILI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12">
          Étudiante en Business Intelligence & Analytics
        </p>
        
        <div className="relative">
          {/* Guillemet ouvrant français « */}
          <span className="absolute top-0 -left-4 text-4xl text-white">«</span>
          
          <blockquote className="text-xl md:text-2xl text-white/90 italic px-8 py-6 leading-relaxed">
            L'avenir appartient à ceux qui exploitent les données avec intention.
          </blockquote>
          
          {/* Guillemet fermant français » */}
          <span className="absolute bottom-0 -right-4 text-4xl text-white">»</span>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 animate-bounce-slow text-white"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </button>
    </section>
  );
};