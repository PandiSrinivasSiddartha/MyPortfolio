import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Alumni Association of RGUKT Nuzvid",
      period: "Jan 2025 - Present",
      description: [
        "Designed and developed the Alumni Association website, enhancing connectivity and engagement among alumni and current students.",
        "Implemented front-end and back-end functionalities, including user authentication, event management, and a database-driven alumni directory."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "National Winner",
      company: "Smart India Hackathon 2024",
      period: "Nov - Dec 2024",
      description: [
        "Led development team for NCT Delhi's public transport route optimization challenge (PS ID: 1617).",
        "Designed innovative ML/AI solution with real-time data processing capabilities.",
        "Developed solution that can be aligned with Digital India and Smart Cities initiatives."
      ],
      technologies: ["Node.js", "Express.js", "Flutter", "AI/ML", "MongoDB", "Kafka"]
    },
    {
      title: "Lead Organizer",
      company: "JASHN, Interactive Freshers' Session",
      period: "Sept 2024",
      description: [
        "Spearheaded the planning and execution of JASHN, a welcoming event for juniors, fostering engagement and a vibrant college culture.",
        "Managed logistics, coordinated with teams, and ensured seamless event flow, enhancing student interactions and participation."
      ],
      technologies: ["Event Management", "Team Coordination", "Leadership"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-2 bg-indigo-200 dark:bg-indigo-900"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-0' : 'md:pl-12 md:text-left md:ml-0 md:mr-auto'} md:w-1/2 ml-8 md:ml-0`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-400 flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">{exp.company}</h4>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="text-gray-700 dark:text-gray-300 mb-4 list-disc pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
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
      </div>
    </section>
  );
};

export default Experience;