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
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-white font-bold text-xl">Alex Thompson</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Full-stack developer passionate about creating innovative web solutions and bringing ideas to life through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, section }) => (
                <li key={section}>
                  <button
                    onClick={() => onNavigate(section)}
                    className="text-white/70 hover:text-white transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Feedback */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-400" />
              Quick Thoughts?
            </h3>
            {!showFeedbackForm ? (
              <button
                onClick={() => setShowFeedbackForm(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
              >
                Share Feedback
              </button>
            ) : (
              <div className="space-y-3">
                {feedbackSubmitted ? (
                  <div className="text-green-400 text-sm">
                    ✓ Thanks for your feedback!
                  </div>
                ) : (
                  <form onSubmit={handleQuickFeedback} className="space-y-2">
                    <textarea
                      value={quickFeedback}
                      onChange={(e) => setQuickFeedback(e.target.value)}
                      placeholder="What do you think about my portfolio?"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm resize-none"
                      rows={3}
                    />
                    <div className="flex space-x-2">
                      <button
                        type="submit"
                        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors"
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowFeedbackForm(false)}
                        className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm transition-colors"
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
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-white/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Alex Thompson</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-110"
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