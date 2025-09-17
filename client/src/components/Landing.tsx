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
    <section id={id} className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bounce-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hey there! 🌸 I'm{' '}
            <span className="bg-gradient-to-r from-bright-yellow via-hot-pink to-pastel-lavender bg-clip-text text-transparent">
              Alex Thompson ✨
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-bright-yellow mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Full-stack developer passionate about creating innovative web solutions and bringing ideas to life through code 💕
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-gradient-yellow-pink text-white rounded-full font-semibold hover:shadow-glow-yellow transform hover:scale-110 transition-all duration-300 flex items-center space-x-2 hover-glow">
              <span>Explore My Work 🌼</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="p-3 rounded-full glass-pink hover:glass-yellow transition-all duration-300 hover:scale-110 hover:shadow-glow-pink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-3 rounded-full glass-pink hover:glass-yellow transition-all duration-300 hover:scale-110 hover:shadow-glow-pink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="mailto:alex@example.com" 
                className="p-3 rounded-full glass-pink hover:glass-yellow transition-all duration-300 hover:scale-110 hover:shadow-glow-pink"
              >
                <Mail className="w-6 h-6 text-hot-pink" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt hover:shadow-float">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="text-2xl font-bold text-bright-yellow mb-2">50+</h3>
              <p className="text-white font-medium">Projects Completed</p>
            </div>
            <div className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt hover:shadow-float">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="text-2xl font-bold text-bright-yellow mb-2">3+</h3>
              <p className="text-white font-medium">Years Experience</p>
            </div>
            <div className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt hover:shadow-float">
              <div className="text-3xl mb-2">💖</div>
              <h3 className="text-2xl font-bold text-bright-yellow mb-2">100%</h3>
              <p className="text-white font-medium">Client Satisfaction</p>
            </div>
          </div>

          <button 
            onClick={scrollToNext}
            className="animate-bounce p-4 rounded-full glass-pink hover:glass-yellow transition-all duration-300 hover:scale-110 hover:shadow-glow-yellow"
          >
            <ArrowDown className="w-6 h-6 text-bright-yellow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;