import React, { useState } from 'react';
import { Mail, MessageCircle, Users, Linkedin, Github, Send, Calendar, Coffee, Zap } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'collaborate'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general' as 'general' | 'project' | 'collaboration' | 'hiring'
  });
  const [chatMessages, setChatMessages] = useState([
    {
      id: '1',
      sender: 'Alex',
      message: 'Hi there! 👋 Thanks for visiting my portfolio. How can I help you today?',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      isBot: true
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent. I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'You',
      message: newMessage,
      timestamp: new Date(),
      isBot: false
    };

    setChatMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! I'd love to discuss this further. Feel free to connect with me on LinkedIn.",
        "That sounds interesting! I'm always excited about new opportunities. Let's schedule a call.",
        "I appreciate your message! I'll get back to you within 24 hours with more details.",
        "Great question! I'd be happy to elaborate on that. What specific aspects would you like to know more about?"
      ];
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'Alex',
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        isBot: true
      };

      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);

    setNewMessage('');
  };

  const collaborationTypes = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Hackathons',
      description: 'Team up for hackathons and coding competitions',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Side Projects',
      description: 'Collaborate on innovative side projects and experiments',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Open Source',
      description: 'Contribute to open source projects together',
      color: 'from-green-400 to-blue-500'
    }
  ];

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flower-divider mb-6"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bounce-in">
            Let's <span className="bg-gradient-to-r from-bright-yellow to-teal bg-clip-text text-transparent">Connect 💕</span>
          </h2>
          <p className="text-xl text-bright-yellow max-w-2xl mx-auto font-medium">
            Ready to collaborate, have a project in mind, or just want to chat? I'm always open to new opportunities and connections ✨
          </p>
          <div className="flower-divider mt-6"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-pink rounded-full p-2">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 font-medium hover:scale-105 ${
                activeTab === 'contact'
                  ? 'bg-gradient-yellow-pink text-white shadow-glow-yellow'
                  : 'text-bright-yellow hover:text-white hover:bg-gradient-purple-teal'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
            <button
              onClick={() => setActiveTab('collaborate')}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 font-medium hover:scale-105 ${
                activeTab === 'collaborate'
                  ? 'bg-gradient-yellow-pink text-white shadow-glow-yellow'
                  : 'text-bright-yellow hover:text-white hover:bg-gradient-purple-teal'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Collaborate</span>
            </button>
          </div>
        </div>

        {activeTab === 'contact' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-pink rounded-3xl p-8 hover:glass-yellow transition-all duration-300">
              <h3 className="text-2xl font-bold text-bright-yellow mb-6 flex items-center">
                <span className="text-2xl mr-3">✉️</span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                      Name * 👤
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass border border-bright-yellow/30 rounded-full text-white placeholder-bright-yellow/70 focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:glass-yellow transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                      Email * ✉️
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass border border-bright-yellow/30 rounded-full text-white placeholder-bright-yellow/70 focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:glass-yellow transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-white/70 text-sm font-medium mb-2">
                    Inquiry Type 📂
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass border border-bright-yellow/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:glass-yellow transition-all duration-200"
                  >
                    <option value="general" className="bg-gray-800">General Inquiry</option>
                    <option value="project" className="bg-gray-800">Project Discussion</option>
                    <option value="collaboration" className="bg-gray-800">Collaboration</option>
                    <option value="hiring" className="bg-gray-800">Job Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/70 text-sm font-medium mb-2">
                    Subject * 📝
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass border border-bright-yellow/30 rounded-full text-white placeholder-bright-yellow/70 focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:glass-yellow transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                    Message * 💭
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass border border-bright-yellow/30 rounded-3xl text-white placeholder-bright-yellow/70 focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:glass-yellow transition-all duration-200 resize-none"
                    placeholder="Tell me more about your project or inquiry... ✨"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-yellow-pink text-white rounded-full font-semibold hover:shadow-glow-yellow transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 hover-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message 💕</span>
                </button>
              </form>
            </div>

            {/* Chat Interface */}
            <div className="glass-pink rounded-3xl p-8 hover:glass-yellow transition-all duration-300">
              <h3 className="text-2xl font-bold text-bright-yellow mb-6 flex items-center">
                <span className="text-2xl mr-3">💬</span>
                Quick Chat
              </h3>

              <div className="glass rounded-2xl p-4 h-80 overflow-y-auto mb-4 space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.isBot
                          ? 'glass-yellow text-white'
                          : 'bg-gradient-yellow-pink text-white'
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message... 💭"
                  className="flex-1 px-4 py-3 glass border border-bright-yellow/30 rounded-full text-white placeholder-bright-yellow/70 focus:outline-none focus:ring-2 focus:ring-bright-yellow focus:glass-yellow transition-all duration-200"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-yellow-pink hover:bg-gradient-purple-teal text-white rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white text-sm mb-4 font-medium">Or connect with me directly: 🌟</p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-yellow-pink hover:bg-gradient-pink-lavender text-white rounded-full transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-purple-teal hover:bg-gradient-yellow-pink text-white rounded-full transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:alex@example.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-yellow-pink hover:bg-gradient-purple-teal text-white rounded-full transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-bright-yellow mb-4">Let's Team Up! 🤝</h3>
              <p className="text-white max-w-2xl mx-auto font-medium">
                I'm always looking for exciting collaboration opportunities. Whether it's a hackathon, 
                side project, or open source contribution, let's create something amazing together! ✨
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {collaborationTypes.map((type, index) => (
                <div
                  key={index}
                  className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt hover:shadow-float"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-bold text-bright-yellow mb-3 text-center">{type.title}</h4>
                  <p className="text-white text-center">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-pink rounded-3xl p-8 text-center hover:glass-yellow transition-all duration-300">
              <h4 className="text-2xl font-bold text-bright-yellow mb-4">Ready to Collaborate? 🌟</h4>
              <p className="text-white mb-6 max-w-2xl mx-auto">
                I bring expertise in full-stack development, problem-solving skills, and a passion for learning. 
                Let's combine our talents to build something extraordinary! ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-yellow-pink text-white rounded-full font-semibold hover:shadow-glow-yellow transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 hover-glow">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Call 📞</span>
                </button>
                <a
                  href="https://linkedin.com"
                  className="px-8 py-4 bg-gradient-purple-teal hover:bg-gradient-yellow-pink text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;