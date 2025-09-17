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
    <header className="fixed top-0 left-0 right-0 z-50 glass-pink rounded-b-3xl mx-2 sm:mx-4 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl">🌸</div>
            <span className="text-citrus-yellow font-bold text-lg sm:text-xl font-poppins truncate">Alex's World</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-1 xl:space-x-2 px-3 xl:px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm xl:text-base ${
                  activeSection === id
                    ? 'text-white bg-gradient-yellow-pink shadow-glow-yellow'
                    : 'text-citrus-yellow hover:text-white hover:bg-gradient-purple-teal hover:shadow-glow-purple'
                }`}
              >
                <Icon className="w-3 h-3 xl:w-4 xl:h-4" />
                <span className="hidden xl:inline">{label}</span>
                <span className="xl:hidden">{label.slice(0, 4)}</span>
              </button>
            ))}
          </nav>

          {/* Medium Screen Navigation */}
          <nav className="hidden md:flex lg:hidden space-x-2">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeSection === id
                    ? 'text-white bg-gradient-yellow-pink shadow-glow-yellow'
                    : 'text-citrus-yellow hover:text-white hover:bg-gradient-purple-teal hover:shadow-glow-purple'
                }`}
                title={navItems.find(item => item.id === id)?.label}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-citrus-yellow p-2 rounded-full hover:bg-strawberry-pink/20 transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-strawberry-pink/30">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-full text-left transition-all duration-300 hover:scale-105 ${
                    activeSection === id
                      ? 'text-white bg-gradient-yellow-pink shadow-glow-yellow'
                      : 'text-citrus-yellow hover:text-white hover:bg-gradient-purple-teal'
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