import React from 'react';
import { Code, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto ">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I'm a Computer Science & Engineering student at Rajiv Gandhi University of Knowledge Technologies, Nuzvid, with a passion for building innovative web applications and solving complex problems.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            My journey in tech began with a perfect academic record, and I've maintained excellence throughout my education with a current CGPA of 9.653. Beyond academics, I've applied my knowledge to real-world projects, including winning the Smart India Hackathon 2024 and developing the Alumni Association Portal for my university.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  <Code className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Developer</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Full stack developer with experience in React.js, Node.js, Express.js, and MongoDB. I enjoy creating responsive and user-friendly web applications.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Student</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Computer Science student with strong fundamentals in data structures, algorithms, and database management systems. Always eager to learn new technologies.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  <Award className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achiever</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                National winner at Smart India Hackathon 2024. Perfect 10.0 CGPA in Pre-University Course and SSC. Active participant in extracurricular activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;