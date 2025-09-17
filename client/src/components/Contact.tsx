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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to collaborate, have a project in mind, or just want to chat? I'm always open to new opportunities and connections.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'contact'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
            <button
              onClick={() => setActiveTab('collaborate')}
              className={`px-6 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'collaborate'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-white/70 text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  >
                    <option value="general" className="bg-gray-800">General Inquiry</option>
                    <option value="project" className="bg-gray-800">Project Discussion</option>
                    <option value="collaboration" className="bg-gray-800">Collaboration</option>
                    <option value="hiring" className="bg-gray-800">Job Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/70 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                    placeholder="Tell me more about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Chat Interface */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-green-400" />
                Quick Chat
              </h3>

              <div className="bg-white/5 rounded-lg p-4 h-80 overflow-y-auto mb-4 space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.isBot
                          ? 'bg-blue-600/20 text-blue-100'
                          : 'bg-green-600/20 text-green-100'
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
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/70 text-sm mb-4">Or connect with me directly:</p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:alex@example.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
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
              <h3 className="text-3xl font-bold text-white mb-4">Let's Team Up!</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                I'm always looking for exciting collaboration opportunities. Whether it's a hackathon, 
                side project, or open source contribution, let's create something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {collaborationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-200 hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 text-center">{type.title}</h4>
                  <p className="text-white/70 text-center">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h4>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                I bring expertise in full-stack development, problem-solving skills, and a passion for learning. 
                Let's combine our talents to build something extraordinary!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Call</span>
                </button>
                <a
                  href="https://linkedin.com"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors flex items-center space-x-2"
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