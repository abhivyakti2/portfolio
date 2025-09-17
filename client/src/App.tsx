import React, { useState, useEffect } from 'react';
import FloatingElements from './components/FloatingElements';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Suggestions from './components/Suggestions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'timeline', 'suggestions', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-girlish font-poppins relative overflow-hidden">
      <FloatingElements />
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Landing id="home" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Timeline id="timeline" />
        <Suggestions id="suggestions" />
        <Contact id="contact" />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;