import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface LandingProps {
  id: string;
}

const Landing: React.FC<LandingProps> = ({ id }) => {
  const scrollToNext = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Alex Thompson
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer passionate about creating innovative web solutions and bringing ideas to life through code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Explore My Work</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="mailto:alex@example.com" 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-200">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">50+</h3>
              <p className="text-white/70">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-200">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">3+</h3>
              <p className="text-white/70">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-200">
              <h3 className="text-2xl font-bold text-green-400 mb-2">100%</h3>
              <p className="text-white/70">Client Satisfaction</p>
            </div>
          </div>

          <button 
            onClick={scrollToNext}
            className="animate-bounce p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;