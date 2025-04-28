import { useState } from "react";
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
    title: "Analyse de Données Hospitalières - CHU Mohammed VI Oujda",
    image: "chu-1.png",
    description: "Analyse approfondie des données hospitalières, création de tableaux de bord interactifs et développement de recommandations stratégiques pour améliorer les services de santé.",
    skills: ["Analyse de Données", "Conception de Tableaux de Bord", "Planification Stratégique"],
    tools: ["Power BI", "DAX"],
    screens: ["chu-2.png", "chu-3.png", "chu-4.png"],
    features: [
      "Analyse du flux des patients et de l'utilisation des ressources",
      "Développement d'indicateurs clés de performance hospitalière",
      "Création de tableaux de bord pour les décideurs"
    ]
  },
  {
    id: 2,
    title: "Site Web de l'Association ALESM",
    image: "alesm.png",
    description: "Développement et déploiement d'un site web complet avec tableaux de bord par rôle et intégration du paiement Stripe pour les dons en ligne.",
    skills: ["Développement Full-stack", "Intégration de Paiement", "Design Responsive"],
    tools: ["PHP Laravel", "Stripe", "Bootstrap", "JavaScript", "HTML", "CSS"],
    screens: ["dash-1.png", "dash-2.png", "dash.png"],
    features: [
      "Tableaux de bord pour admin, membres et public",
      "Traitement sécurisé des paiements avec Laravel Cashier",
      "Design responsive pour tous les appareils"
    ]
  },
  {
    id: 3,
    title: "Détection des Stades Phénologiques des Agrumes",
    image: "citrus/flower-detection.png",
    description: "Système de vision par ordinateur pour identifier les stades phénologiques des agrumes, optimisant les processus agricoles et la prédiction des rendements.",
    skills: ["Vision par Ordinateur", "Transfer Learning", "Deep Learning", "Annotation d'Images"],
    tools: ["Python", "Roboflow", "TensorFlow"],
    screens: ["citrus/citrus-tree.png", "citrus/image4.png", "citrus/image5.png", "citrus/image17.png", "citrus/image21.png", "citrus/image26.png"],
    features: [
      "Collecte et augmentation de dataset",
      "Classification des stades de croissance",
      "Entraînement et validation du modèle"
    ]
  },
  {
    id: 4,
    title: "Entrepôt de Données pour Benchmarking de LLM (Cas d'étude EvalLLM)",
    image: "llm.png",
    description: "Conception et implémentation d'un entrepôt de données pour suivre et analyser les performances des LLM open-source sur divers benchmarks.",
    skills: ["Data Warehousing", "ETL", "Modélisation de Données", "Reporting BI"],
    tools: ["Microsoft SQL Server", "SSIS", "SSAS", "Power BI"],
    screens: ["/evalllm_dashboard.jpg", "/evalllm_etl.jpg"],
    features: [
      "Schéma en étoile avec datamarts thématiques",
      "Pipeline ETL construit avec SSIS à partir de sources CSV et SQL",
      "Dimensions à évolution lente pour le suivi historique",
      "Cube SSAS pour l'analyse multidimensionnelle",
      "Tableaux de bord interactifs pour comparaison et reporting"
    ]
  },
  {
    id: 6,
    title: "Système de Recommandation de Contenu",
    image: "/Recommendation-Systems.jpg",
    description: "Plateforme de recommandation de contenu (films/musique/livres) utilisant des algorithmes de filtrage collaboratif.",
    skills: ["Systèmes de Recommandation", "Modélisation de Données", "Analyse Comportementale", "Implémentation d'Algorithmes"],
    tools: ["Python", "MongoDB", "Pandas", "Scikit-learn", "Flask"]
  },
  {
    id: 7,
    title: "Suivi des Prix & Analyse Concurrentielle en E-commerce",
    image: "commerce.png",
    description: "Système de monitoring des prix concurrentiels collectant les données produits sur plusieurs plateformes pour fournir des insights marché en temps réel.",
    skills: ["Web Scraping", "Analyse de Prix", "Visualisation de Données", "Automatisation"],
    tools: ["Python", "Scrapy/Selenium", "PostgreSQL", "Power BI", "Airflow"],
    features: [
      "Suivi des prix en temps réel sur 4 plateformes",
      "Analyse des tendances saisonnières et alertes",
      "Système automatisé de reporting quotidien",
      "Benchmarking des prix concurrents"
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
            {expanded ? "Moins" : "Plus"}
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
                <h4 className="text-sm font-medium mb-2 text-gray-400">Fonctionnalités Clés :</h4>
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
                <h4 className="text-sm font-medium mb-2 text-gray-400">Captures d'écran :</h4>
                <div className="relative">
                  {project.screens.length > 1 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 p-1 rounded-full z-10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  
                  <div className="flex justify-center">
                    <div className="w-full max-w-md rounded-lg overflow-hidden border border-gray-700 hover:border-neonBlue transition-colors">
                      <img
                        src={project.screens[currentImageIndex]}
                        alt={`${project.title} capture ${currentImageIndex + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  
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
                <h4 className="text-xs font-semibold mb-1 text-gray-400">COMPÉTENCES</h4>
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
                <h4 className="text-xs font-semibold mb-1 text-gray-400">OUTILS</h4>
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
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const ProjectCardWithExpansion = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const isExpanded = expandedProjectId === project.id;

    const toggleExpand = () => {
      if (isExpanded) {
        setExpandedProjectId(null);
      } else {
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
              {isExpanded ? "Moins" : "Plus"}
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
                  <h4 className="text-sm font-medium mb-2 text-gray-400">Fonctionnalités Clés :</h4>
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
                  <h4 className="text-sm font-medium mb-2 text-gray-400">Captures d'écran :</h4>
                  <div className="relative">
                    {project.screens.length > 1 && (
                      <button
                        onClick={prevImage}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 p-1 rounded-full z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                    )}
                    
                    <div className="flex justify-center">
                      <div className="w-full max-w-md rounded-lg overflow-hidden border border-gray-700 hover:border-neonBlue transition-colors">
                        <img
                          src={project.screens[currentImageIndex]}
                          alt={`${project.title} capture ${currentImageIndex + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    
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
                  <h4 className="text-xs font-semibold mb-1 text-gray-400">COMPÉTENCES</h4>
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
                  <h4 className="text-xs font-semibold mb-1 text-gray-400">OUTILS</h4>
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
          Mes Projets
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