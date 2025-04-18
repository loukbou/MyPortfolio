
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Progress } from "./ui/progress";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Observer for sections to update active nav item
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    // Handle scroll progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Check if page is scrolled to toggle navbar size
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      } bg-foreground/10 backdrop-blur-md`}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0">
        <Progress value={scrollProgress} className="h-0.5 rounded-none bg-transparent" />
      </div>
      
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={() => scrollToSection("hero")}
          className="text-xl md:text-2xl font-semibold cursor-pointer"
        >
          B.LOUKILI
        </a>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <nav className="flex items-center space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`cursor-pointer relative text-sm transition-colors hover:text-neonBlue ${
                  activeSection === section.id
                    ? "text-neonBlue active-nav-link"
                    : "text-foreground/80"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        ) : (
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-foreground/20"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <nav className="fixed left-0 right-0 bg-background/95 backdrop-blur-lg py-6 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`cursor-pointer p-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? "bg-neonBlue/20 text-neonBlue active-nav-link"
                    : "text-foreground/80 hover:bg-foreground/10"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
