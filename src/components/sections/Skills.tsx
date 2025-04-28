export const Skills = () => {
  const languages = [
    { name: "Arabe", level: "Langue maternelle", flag: "🇲🇦" },
    { name: "Anglais", level: "Courant", flag: "🇬🇧" },
    { name: "Français", level: "Courant (DELF B2)", flag: "🇫🇷" },
    { name: "Espagnol", level: "Débutante", flag: "🇪🇸" },
  ];

  const technicalSkills = [
    "Python", "SQL", "Docker", "Power BI", "Tableau", "R", 
    "Excel", "Machine Learning", "Analyse Statistique", 
    "Visualisation de Données", "Processus ETL", "Git", 
    "Cloud Computing", "Big Data"
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-16 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_2px_4px_rgba(43,88,255,0.3)]">
          Langues & Compétences
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full">
          <h3 className="text-xl font-medium mb-6">Langues</h3>
          <div className="grid grid-cols-2 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 w-[4cm]"
              >
                <span className="text-2xl">{lang.flag}</span>
                <div>
                  <h4>{lang.name}</h4>
                  <p className="text-sm text-foreground/70">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-medium mb-6">Compétences Techniques</h3>
          <div className="flex flex-wrap gap-4">
            {technicalSkills.map((skill) => (
              <span
                key={skill}
                className="skill-tag rounded-full py-1 px-4 border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};