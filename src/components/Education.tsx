import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  specialization: string;
  institute: string;
  year: string;
  cgpa: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "B.Tech",
      specialization: "Computer Science & Engineering",
      institute: "RGUKT - NUZVID",
      year: "2025-Present (3rd SEM)",
      cgpa: "9.653"
    },
    {
      degree: "Pre-University Course",
      specialization: "Physics, Chemistry, & Mathematics",
      institute: "RGUKT - NUZVID",
      year: "2023",
      cgpa: "10.0"
    },
    {
      degree: "SSC-BSEAP",
      specialization: "-",
      institute: "Siddartha High School - Srikakulam",
      year: "2021",
      cgpa: "10.0  (600/600) "
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-2 bg-indigo-200 dark:bg-indigo-900"></div>
            
            {/* Education items */}
            {educationItems.map((item, index) => (
              <div 
                key={index} 
                className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-0' : 'md:pl-12 md:text-left md:ml-0 md:mr-auto'} md:w-1/2 ml-16 md:ml-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-400 flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">{item.specialization}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{item.institute}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.year}</span>
                  </div>
                  <div className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full">
                    CGPA: {item.cgpa}
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

export default Education;