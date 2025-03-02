import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Dynamic Route Rationalization System",
      description: "ML/AI-powered system for optimizing public transport routes using real-time data. Designed scalable architecture using Node.js, Kafka, & MongoDB for handling transport data. SIH 2024 Winning Project (PS ID: 1617).",
      image: "/sih.jpg",
      technologies: ["Node.js", "Express.js", "Flutter", "AI/ML", "MongoDB", "Kafka"],
      githubLink: "https://github.com/438-venkatesh/SIH_2K24_Project.git"
    },
    {
      title: "RGUKT Alumni Association Portal",
      description: "Developed and designed an Alumni Association website to facilitate networking and engagement among former students. Implemented user-friendly features for event updates, member registration, and communication.",
      image: "/Alumni.jpg",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://alumni-n4q7.vercel.app/",
      githubLink: "https://github.com/Dharaneeswar-Reddy-Avula/AlumniRepo.git"
    },
    {
      title: "Digital Democracy (E-Voting Platform)",
      description: "Developed Digital Democracy, an E-voting platform for the CSE department to facilitate the election of the student body head, ensuring a secure and user-friendly voting experience. Implemented authentication, real-time vote counting, and a transparent electoral process.",
      image: "/DigiDemos.jpg",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/N210023/final.git"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className={`absolute inset-0 bg-indigo-900 bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;