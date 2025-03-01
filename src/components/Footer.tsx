import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="font-mono">&lt;</span>Siddartha<span className="font-mono">/&gt;</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & Computer Science Student based in India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:pandisrinivassiddartha@gmail.com" 
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-indigo-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-indigo-400 transition-colors">Education</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="text-gray-400 mb-2">
              <strong>Email:</strong> pandisrinivassiddartha@gmail.com
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Phone:</strong> +91-9059533659
            </p>
            <p className="text-gray-400">
              <strong>Location:</strong> RGUKT Nuzvid, Andhra Pradesh, India
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Pandi Srinivas Siddartha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> in {theme === 'dark' ? 'Dark' : 'Light'} Mode
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;