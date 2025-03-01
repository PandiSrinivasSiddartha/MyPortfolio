import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Award, Terminal } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;