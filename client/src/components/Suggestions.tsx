import React, { useState } from 'react';
import { Send, Shield, CheckCircle, XCircle, MessageSquare, Filter, ThumbsUp } from 'lucide-react';

interface SuggestionsProps {
  id: string;
}

interface Suggestion {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
  approved: boolean;
  category: 'portfolio' | 'projects' | 'general';
  helpful: number;
}

const Suggestions: React.FC<SuggestionsProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general' as 'portfolio' | 'projects' | 'general'
  });
  
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      message: 'Your portfolio design is stunning! The gradient backgrounds and smooth animations really make it stand out.',
      timestamp: new Date(2024, 0, 15),
      approved: true,
      category: 'portfolio',
      helpful: 12
    },
    {
      id: '2',
      name: 'Mike Rodriguez',
      email: 'mike@example.com',
      message: 'The AI chat assistant project is impressive. Have you considered adding voice input functionality?',
      timestamp: new Date(2024, 0, 12),
      approved: true,
      category: 'projects',
      helpful: 8
    },
    {
      id: '3',
      name: 'Emily Watson',
      email: 'emily@example.com',
      message: 'Love the interactive timeline! It would be great to see more details about your learning process.',
      timestamp: new Date(2024, 0, 10),
      approved: true,
      category: 'portfolio',
      helpful: 15
    }
  ]);
  
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'blocked'>('idle');
  const [filterMessage, setFilterMessage] = useState('');

  // Simulate AI content filtering
  const simulateAIFilter = (message: string): { approved: boolean; reason?: string } => {
    const inappropriateWords = ['spam', 'hate', 'offensive', 'inappropriate'];
    const lowerMessage = message.toLowerCase();
    
    for (const word of inappropriateWords) {
      if (lowerMessage.includes(word)) {
        return { approved: false, reason: 'Content may contain inappropriate language' };
      }
    }
    
    if (message.length < 10) {
      return { approved: false, reason: 'Message too short to be meaningful' };
    }
    
    if (message.length > 1000) {
      return { approved: false, reason: 'Message exceeds maximum length' };
    }
    
    return { approved: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    // Simulate AI filtering delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const filterResult = simulateAIFilter(formData.message);
    
    if (filterResult.approved) {
      const newSuggestion: Suggestion = {
        id: Date.now().toString(),
        name: formData.name || 'Anonymous',
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
        approved: true,
        category: formData.category,
        helpful: 0
      };
      
      setSuggestions(prev => [newSuggestion, ...prev]);
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '', category: 'general' });
      
      setTimeout(() => setSubmissionStatus('idle'), 3000);
    } else {
      setSubmissionStatus('blocked');
      setFilterMessage(filterResult.reason || 'Content was blocked by our AI filter');
      
      setTimeout(() => {
        setSubmissionStatus('idle');
        setFilterMessage('');
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHelpful = (suggestionId: string) => {
    setSuggestions(prev => prev.map(suggestion => 
      suggestion.id === suggestionId 
        ? { ...suggestion, helpful: suggestion.helpful + 1 }
        : suggestion
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'portfolio': return 'text-blue-400 bg-blue-400/20';
      case 'projects': return 'text-green-400 bg-green-400/20';
      case 'general': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Share Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Feedback</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your insights help me improve my portfolio and projects. All suggestions are welcome and AI-filtered for quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Leave a Suggestion</h3>
              <div className="flex items-center space-x-1 text-green-400">
                <Shield className="w-4 h-4" />
                <span className="text-xs">AI Protected</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-white/70 text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                  <option value="general" className="bg-gray-800">General Feedback</option>
                  <option value="portfolio" className="bg-gray-800">Portfolio Design</option>
                  <option value="projects" className="bg-gray-800">Project Suggestions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                  Your Suggestion *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                  placeholder="Share your thoughts about my portfolio or projects..."
                />
                <div className="text-right mt-1">
                  <span className="text-white/50 text-xs">{formData.message.length}/1000</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submissionStatus === 'submitting' || !formData.message.trim()}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none flex items-center justify-center space-x-2"
              >
                {submissionStatus === 'submitting' ? (
                  <>
                    <Filter className="w-4 h-4 animate-spin" />
                    <span>AI Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Suggestion</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submissionStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/20 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! Your suggestion has been submitted successfully.</span>
                </div>
              )}

              {submissionStatus === 'blocked' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/20 p-3 rounded-lg">
                  <XCircle className="w-5 h-5" />
                  <div>
                    <p>Your message was blocked by our AI filter.</p>
                    <p className="text-sm text-red-300">{filterMessage}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Recent Suggestions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-purple-400" />
              Recent Feedback
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white">{suggestion.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(suggestion.category)}`}>
                        {suggestion.category}
                      </span>
                    </div>
                    <span className="text-white/50 text-sm">
                      {suggestion.timestamp.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-white/70 mb-3">{suggestion.message}</p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleHelpful(suggestion.id)}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{suggestion.helpful} helpful</span>
                    </button>
                    <CheckCircle className="w-4 h-4 text-green-400" title="Approved by AI filter" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Filter Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <h4 className="text-lg font-semibold text-white">AI Content Filtering</h4>
          </div>
          <p className="text-white/70 mb-4">
            All suggestions go through our AI-powered content filter to ensure respectful and constructive feedback. 
            This helps maintain a positive environment for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white/70 text-sm">Respectful language</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white/70 text-sm">Constructive feedback</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white/70 text-sm">Meaningful content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;