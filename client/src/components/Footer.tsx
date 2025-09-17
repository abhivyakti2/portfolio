import React, { useState } from 'react';
import { Heart, Code2, ArrowUp, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [quickFeedback, setQuickFeedback] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickFeedback.trim()) {
      // Simulate feedback submission
      console.log('Quick feedback:', quickFeedback);
      setFeedbackSubmitted(true);
      setQuickFeedback('');
      setTimeout(() => {
        setFeedbackSubmitted(false);
        setShowFeedbackForm(false);
      }, 3000);
    }
  };

  const quickLinks = [
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Timeline', section: 'timeline' },
    { label: 'Feedback', section: 'suggestions' },
    { label: 'Contact', section: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
  ];

  return (
    <footer className="glass-pink border-t border-soft-pink/30 rounded-t-3xl mx-4 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌸</span>
              <span className="text-bright-yellow font-bold text-xl font-poppins">Alex Thompson</span>
            </div>
            <p className="text-white mb-6 max-w-md">
              Full-stack developer passionate about creating innovative web solutions and bringing ideas to life through code ✨
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full glass hover:glass-yellow transition-all duration-300 hover:scale-110 hover:shadow-glow-yellow group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-bright-yellow group-hover:text-charcoal transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-bright-yellow font-semibold text-lg mb-4 flex items-center">
              <span className="mr-2">🔗</span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, section }) => (
                <li key={section}>
                  <button
                    onClick={() => onNavigate(section)}
                    className="text-white hover:text-teal transition-colors text-left hover:scale-105 duration-200 font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Feedback */}
          <div>
            <h3 className="text-bright-yellow font-semibold text-lg mb-4 flex items-center">
              <span className="text-xl mr-2">💭</span>
              Quick Thoughts?
            </h3>
            {!showFeedbackForm ? (
              <button
                onClick={() => setShowFeedbackForm(true)}
                className="px-4 py-2 bg-gradient-yellow-pink hover:bg-gradient-purple-teal text-white rounded-full transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                Share Feedback
              </button>
            ) : (
              <div className="space-y-3">
                {feedbackSubmitted ? (
                  <div className="text-teal text-sm font-medium">
                    ✓ Thanks for your feedback! 🌟
                  </div>
                ) : (
                  <form onSubmit={handleQuickFeedback} className="space-y-2">
                    <textarea
                      value={quickFeedback}
                      onChange={(e) => setQuickFeedback(e.target.value)}
                      placeholder="What do you think about my portfolio? ✨"
                      className="w-full px-3 py-2 glass border border-bright-yellow/30 rounded-2xl text-white placeholder-bright-yellow/70 focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:glass-yellow text-sm resize-none transition-all duration-200"
                      rows={3}
                    />
                    <div className="flex space-x-2">
                      <button
                        type="submit"
                        className="px-3 py-1 bg-gradient-yellow-pink hover:bg-gradient-purple-teal text-white rounded-full text-sm transition-all duration-300 hover:scale-105 font-medium"
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowFeedbackForm(false)}
                        className="px-3 py-1 glass hover:glass-yellow text-bright-yellow rounded-full text-sm transition-all duration-300 hover:scale-105 font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-soft-pink/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-white">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-hot-pink animate-pulse" />
            <span>by Alex Thompson</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className="text-white text-sm font-medium">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gradient-yellow-pink hover:bg-gradient-purple-teal text-white transition-all duration-300 hover:scale-110 hover:shadow-glow-yellow"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;