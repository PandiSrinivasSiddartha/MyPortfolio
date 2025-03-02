import React from 'react';
import { Terminal, Database, Globe, Server, Smartphone, Code } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Terminal className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ["Python", "C", "Java", "JavaScript"]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "jQuery" , "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ["Node.js","Express.js","Next.js"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ["Flutter"]
    },
    {
      title: "Databases",
      icon: <Database className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "CS Fundamentals",
      icon: <Code className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ["Data Structures & Algorithms", "OOPs", "DBMS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Tools & Environments</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Jupyter Notebook", "LaTeX", "VS Code", "GitHub", "Postman"].map((tool, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-md text-center"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;