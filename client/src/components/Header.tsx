import React, { useState } from 'react';
import { Menu, X, Code2, User, Briefcase, TrendingUp, Clock, MessageSquare, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: TrendingUp },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'suggestions', label: 'Feedback', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-pink rounded-b-3xl mx-4 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🌸</div>
            <span className="text-bright-yellow font-bold text-xl font-poppins">Alex's World</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeSection === id
                    ? 'text-white bg-gradient-yellow-pink shadow-glow-yellow'
                    : 'text-bright-yellow hover:text-white hover:bg-gradient-purple-teal hover:shadow-glow-purple'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-bright-yellow p-2 rounded-full hover:bg-lavender/20 transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-soft-pink/30">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-full text-left transition-all duration-300 hover:scale-105 ${
                    activeSection === id
                      ? 'text-white bg-gradient-yellow-pink shadow-glow-yellow'
                      : 'text-bright-yellow hover:text-white hover:bg-gradient-purple-teal'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;