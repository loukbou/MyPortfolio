export const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-16 text-center text-white filter drop-shadow-[0_0_8px_#ffffff4d]">
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2cm] items-start"> {/* items-start for alignment */}

        {/* === Description (left side) - Original Style === */}
        <div className="relative space-y-6 mt-[4cm] pl-4 pr-4 pt-4 pb-4">
          {/* Top-left blue corner (original) */}
          <div className="absolute top-0 left-0">
            <div className="h-[2px] w-[3cm] bg-[#2b58ff] shadow-[0_0_10px_#2b58ff]"></div>
            <div className="h-[3cm] w-[2px] bg-[#2b58ff] shadow-[0_0_10px_#2b58ff] mt-[-2px]"></div>
          </div>

          {/* Bottom-right blue corner (original) */}
          <div className="absolute bottom-0 right-0">
            <div className="h-[2px] w-[3cm] bg-[#2b58ff] shadow-[0_0_10px_#2b58ff] absolute bottom-0 right-0"></div>
            <div className="h-[3cm] w-[2px] bg-[#2b58ff] shadow-[0_0_10px_#2b58ff] absolute bottom-0 right-0 mb-[-2px]"></div>
          </div>

          {/* Your original text */}
          <p className="text-foreground/90 leading-relaxed">
            Passionate about transforming raw data into meaningful insights, I'm on a journey to leverage analytics and business intelligence to solve complex problems. My interests lie at the intersection of data science, machine learning, and business strategy—where I believe the most impactful innovations happen.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            With a strong foundation in mathematics and a deep curiosity for data patterns, I aim to bridge the gap between technical capabilities and business needs. I'm constantly exploring new technologies and methodologies to enhance my analytical toolkit.
          </p>
        </div>

        {/* === Education (right side) - Aligned Version === */}
        <div className="space-y-6 mt-[4cm]"> {/* Same mt-[4cm] as description */}
          <h3 className="text-xl font-medium mb-2">Education</h3>
          <div className="relative pl-6 border-l-2 border-neonBlue/15 space-y-6">

            {/* ENSIAS */}
            <div className="relative">
              <div className="absolute -left-[22px] top-1 w-3 h-3 text-neonBlue">◆</div>
              <div>
                <p className="text-lg font-medium">2023–2026</p>
                <p className="font-medium">ENSIAS – Business Intelligence & Analytics</p>
                <ul className="mt-1 space-y-1 text-sm">
                  {/* Add content if needed */}
                </ul>
              </div>
            </div>

            {/* CPGE */}
            <div className="relative">
              <div className="absolute -left-[22px] top-1 w-3 h-3 text-neonBlue">◆</div>
              <div>
                <p className="text-lg font-medium">2021–2023</p>
                <p className="font-medium">CPGE MP – Lycée d'Excellence de Benguérir (LYDEX)</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li className="flex items-start"><span className="text-gray-400 mr-2">◦</span><span>Focus: Mathématiques et Physique</span></li>
                </ul>
              </div>
            </div>

            {/* Bac */}
            <div className="relative">
              <div className="absolute -left-[22px] top-1 w-3 h-3 text-neonBlue">◆</div>
              <div>
                <p className="text-lg font-medium">2020–2021</p>
                <p className="font-medium">Baccalauréat Sciences Mathématiques B – LYDEX</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li className="flex items-start"><span className="text-gray-400 mr-2">◦</span><span>Mention Très Bien</span></li>
                  <li className="flex items-start"><span className="text-gray-400 mr-2">◦</span><span>DELF B2 – Français</span></li>
                  <li className="flex items-start"><span className="text-gray-400 mr-2">◦</span><span>Olympiade nationale NMao 2020</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};