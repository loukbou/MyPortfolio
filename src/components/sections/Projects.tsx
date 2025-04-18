import { useState, useRef } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  skills: string[];
  tools: string[];
  screens?: string[];
  features?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Hospital Data Analysis - CHU Mohammed VI Oujda",
    image: "chu-1.png",
    description: "Performed in-depth analysis of hospital data, created interactive dashboards, and developed strategic recommendations to improve healthcare services.",
    skills: ["Data Analysis", "Dashboard Design", "Strategic Planning"],
    tools: ["Power BI", "DAX"],
    screens: ["chu-2.png", "chu-3.png", "chu-4.png"],
    features: [
      "Analyzed patient flow and resource utilization",
      "Developed KPIs for hospital performance",
      "Created executive dashboards for decision makers"
    ]
  },
  {
    id: 2,
    title: "ALESM Association Website",
    image: "alesm.png",
    description: "Developed and deployed a comprehensive website with role-based dashboards and integrated Stripe payment processing for online donations.",
    skills: ["Full-stack Development", "Payment Integration", "Responsive Design"],
    tools: ["PHP Laravel", "Stripe", "Bootstrap", "JavaScript", "HTML", "CSS"],
    screens: ["dash-1.png", "dash-2.png", "dash.png"],
    features: [
      "Admin, member, and public dashboards",
      "Secure payment processing with Laravel Cashier",
      "Responsive design for all devices"
    ]
  },
  {
    id: 3,
    title: "Citrus Tree phenological Stage Detection",
    image: "citrus/flower-detection.png",
    description: "Computer vision system to identify phenological stages of citrus trees, helping optimize agricultural processes and yield prediction.",
    skills: ["Computer Vision", "Transfer Learning", "Deep Learning", "Image Annotation"],
    tools: ["Python", "Roboflow", "TensorFlow"],
    screens: ["citrus/citrus-tree.png", "citrus/image4.png", "citrus/image5.png", "citrus/image17.png", "citrus/image21.png", "citrus/image26.png"],
    features: [
      "Dataset collection and augmentation",
      "Image classification of growth stages",
      "Model training and validation"
    ]
  },
  {
    id: 4,
    title: "LLM Benchmarking Data Warehouse (EvalLLM Case Study)",
    image: "llm.png",
    description: "Designed and implemented a data warehouse to track and analyze performance metrics of open LLMs across diverse benchmarks.",
    skills: ["Data Warehousing", "ETL", "Data Modeling", "BI Reporting"],
    tools: ["Microsoft SQL Server", "SSIS", "SSAS", "Power BI"],
    screens: ["/evalllm_dashboard.jpg", "/evalllm_etl.jpg"],
    features: [
      "Fact-dimension schema with thematic datamarts",
      "ETL pipeline built with SSIS from CSV and SQL sources",
      "Slowly Changing Dimensions for historical tracking",
      "SSAS cube for multi-dimensional analysis",
      "Interactive dashboards for model comparison and reporting"
    ]
  },
  {
    id: 6,
    title: "Content Recommendation System",
    image: "/Recommendation-Systems.jpg",
    description: "Developed a content recommendation platform (for films/music/books) using collaborative filtering algorithms.",
    skills: ["Recommendation Systems", "Data Modeling", "User Behavior Analysis", "Algorithm Implementation"],
    tools: ["Python", "MongoDB", "Pandas", "Scikit-learn", "Flask"]
  },
  {
    id: 7,
    title: "Price Monitoring & Competitive Analysis in E-commerce",
    image: "commerce.png",
    description: "Competitive price monitoring system that scrapes product data across multiple platforms to provide real-time market insights.",
    skills: ["Web Scraping", "Price Analytics", "Data Visualization", "Process Automation"],
    tools: ["Python", "Scrapy/Selenium", "PostgreSQL", "Power BI", "Airflow"],
    features: [
      "Real-time price tracking across 4 platforms",
      "Seasonal trend analysis and alerts",
      "Automated daily reporting system",
      "Competitor price benchmarking"
    ]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.screens) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.screens!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (project.screens) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.screens!.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-neonBlue/50 bg-gradient-to-b from-gray-900/50 to-gray-900/30 hover:border-neonBlue/70 hover:shadow-[0_0_25px_rgba(9,83,230,0.3)] transition-all duration-300 shadow-[0_0_20px_rgba(9,83,230,0.1)]">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center text-sm text-neonBlue hover:text-neonBlue/80 transition-colors"
            aria-expanded={expanded}
          >
            {expanded ? "Less" : "More"}
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {expanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <p className="text-sm text-gray-300">{project.description}</p>

            {project.features && (
              <div>
                <h4 className="text-sm font-medium mb-2 text-gray-400">Key Features:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <span className="text-neonBlue mr-2">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.screens && project.screens.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 text-gray-400">Screenshots:</h4>
                <div className="relative">
                  {/* Display navigation only if there are multiple screenshots */}
                  {project.screens.length > 1 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 p-1 rounded-full z-10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  
                  {/* Single image container */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-md rounded-lg overflow-hidden border border-gray-700 hover:border-neonBlue transition-colors">
                      <img
                        src={project.screens[currentImageIndex]}
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Image counter indicator */}
                  <div className="text-center text-xs text-gray-400 mt-2">
                    {currentImageIndex + 1} / {project.screens.length}
                  </div>
                  
                  {project.screens.length > 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 p-1 rounded-full z-10"
                    >
                      <ChevronRight size={20} />
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <div>
                <h4 className="text-xs font-semibold mb-1 text-gray-400">SKILLS</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold mb-1 text-gray-400">TOOLS</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  // Track which project is expanded using expandedProjectId state variable
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  // Modified ProjectCard component that passes expandedProjectId state
  const ProjectCardWithExpansion = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Check if this project is currently expanded
    const isExpanded = expandedProjectId === project.id;

    const toggleExpand = () => {
      if (isExpanded) {
        // If already expanded, collapse it
        setExpandedProjectId(null);
      } else {
        // Otherwise expand this one (which collapses any other)
        setExpandedProjectId(project.id);
      }
    };

    const nextImage = () => {
      if (project.screens) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === project.screens!.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    const prevImage = () => {
      if (project.screens) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? project.screens!.length - 1 : prevIndex - 1
        );
      }
    };

    return (
      <div className="group relative overflow-hidden rounded-xl border border-neonBlue/50 bg-gradient-to-b from-gray-900/50 to-gray-900/30 hover:border-neonBlue/70 hover:shadow-[0_0_25px_rgba(9,83,230,0.3)] transition-all duration-300 shadow-[0_0_20px_rgba(9,83,230,0.1)]">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <button
              onClick={toggleExpand}
              className="flex items-center text-sm text-neonBlue hover:text-neonBlue/80 transition-colors"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Less" : "More"}
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {isExpanded && (
            <div className="mt-4 space-y-4 animate-fade-in">
              <p className="text-sm text-gray-300">{project.description}</p>

              {project.features && (
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-400">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <span className="text-neonBlue mr-2">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.screens && project.screens.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2 text-gray-400">Screenshots:</h4>
                  <div className="relative">
                    {/* Display navigation only if there are multiple screenshots */}
                    {project.screens.length > 1 && (
                      <button
                        onClick={prevImage}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 p-1 rounded-full z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                    )}
                    
                    {/* Single image container */}
                    <div className="flex justify-center">
                      <div className="w-full max-w-md rounded-lg overflow-hidden border border-gray-700 hover:border-neonBlue transition-colors">
                        <img
                          src={project.screens[currentImageIndex]}
                          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Image counter indicator */}
                    <div className="text-center text-xs text-gray-400 mt-2">
                      {currentImageIndex + 1} / {project.screens.length}
                    </div>
                    
                    {project.screens.length > 1 && (
                      <button
                        onClick={nextImage}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 p-1 rounded-full z-10"
                      >
                        <ChevronRight size={20} />
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <div>
                  <h4 className="text-xs font-semibold mb-1 text-gray-400">SKILLS</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold mb-1 text-gray-400">TOOLS</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 rounded-full bg-neonBlue/10 text-neonBlue border border-neonBlue/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-16 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_2px_4px_rgba(43,88,255,0.3)]">
          My Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCardWithExpansion key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};