import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-20 min-h-screen flex items-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-indigo-600 dark:text-indigo-400">
                Pandi Srinivas Siddartha
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              Full Stack Developer & Computer Science Student
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I build exceptional digital experiences with modern technologies.
              Currently focused on creating accessible, human-centered products
              at RGUKT Nuzvid.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors shadow-md"
              >
                Contact Me
              </a>

              <a
                href="/Resume.pdf"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center gap-2"
                download
              >
                <Download size={18} />
                Resume
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/PandiSrinivasSiddartha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pandi-srinivas-siddartha-256767316"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:pandisrinivassiddartha@gmail.com"
                className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
                <img
                  src="/me.jpg"
                  alt="Pandi Srinivas Siddartha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-9 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md">
                <p className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">
                  &lt;Siddartha/&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
