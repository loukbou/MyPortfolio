export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Stagiaire en Science des Données",
      company: "Agri4.0",
      period: "Juillet 2024, 2 mois",
      description:
        "Développement d'un modèle de vision par ordinateur pour identifier les stades phénologiques des agrumes, contribuant à optimiser les processus agricoles et la prédiction des rendements.",
      logo: "/logos/agri.png",
    },
    {
      id: 2,
      role: "Co-responsable, Cellule Formation @ ENSIAS IT Club",
      company: "ENSIAS",
      period: "Août 2024 - Présent",
      description:
        "Conception d'ateliers pratiques et suivi des progrès des membres du club. Organisation du hackathon DevJam de la conception à l'exécution, créant des environnements d'apprentissage collaboratifs.",
      logo: "/logos/eitc.png",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-16 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_2px_4px_rgba(43,88,255,0.3)]">
          Expériences
        </span>
      </h2>

      <div className="relative">
        {/* Ligne de timeline lumineuse */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[6px] rounded-full bg-blue-500/40 backdrop-blur-md transform md:translate-x-px shadow-[0_0_25px_rgba(43,88,255,0.7)] z-0"></div>

        <div className="space-y-12 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Point de timeline lumineux */}
              <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-3 md:-translate-x-3 shadow-[0_0_18px_rgba(9,83,230,0.9)] ring-2 ring-blue-300/50 z-20"></div>

              {/* Carte d'expérience */}
              <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                <div className="relative p-6 rounded-2xl border-[3px] border-blue-500/70 backdrop-blur-sm shadow-[0_0_25px_rgba(43,88,255,0.3)] bg-blue-500/20">
                  {/* Couche de lueur permanente */}
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/20 z-0 pointer-events-none"></div>

                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Logo + Poste */}
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src={exp.logo}
                        alt={'Logo ' + exp.company}
                        className="w-10 h-10 object-contain rounded-md shadow-sm bg-white/10 p-1"
                      />
                      <div>
                        <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                        <p className="text-sm text-foreground/70">
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};