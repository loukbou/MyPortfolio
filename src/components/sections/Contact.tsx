import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-16 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_2px_4px_rgba(43,88,255,0.3)]">
          Contact
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-medium mb-6 text-foreground">Me Contacter</h3>
          <div className="space-y-4">
            <a
              href="https://github.com/loukbou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:text-blue-500 transition-colors duration-300"
            >
              <Github className="mr-2 text-blue-500" size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bouchra-loukili-81005329b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:text-blue-500 transition-colors duration-300"
            >
              <Linkedin className="mr-2 text-blue-500" size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:loukilib357@gmail.com"
              className="flex items-center text-foreground hover:text-blue-500 transition-colors duration-300"
            >
              <Mail className="mr-2 text-blue-500" size={20} />
              loukilib357@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6 text-foreground">Envoyer un message</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-3 bg-transparent rounded-lg border-[3px] border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-transparent rounded-lg border-[3px] border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-transparent rounded-lg border-[3px] border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium shadow-[0_4px_14px_rgba(43,88,255,0.3)] hover:shadow-[0_6px_18px_rgba(43,88,255,0.4)]"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};