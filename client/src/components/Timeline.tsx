import React, { useState } from 'react';
import { Calendar, GitCommit, Award, Briefcase, GraduationCap, Rocket } from 'lucide-react';

interface TimelineProps {
  id: string;
}

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'project' | 'achievement' | 'education' | 'work' | 'milestone';
  details?: string[];
  link?: string;
}

const Timeline: React.FC<TimelineProps> = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      date: '2024-01',
      title: 'Launched AI Chat Assistant',
      description: 'Deployed intelligent chatbot with natural language processing capabilities',
      type: 'project',
      details: ['OpenAI GPT integration', 'Real-time messaging', 'Context-aware responses', '1000+ active users'],
      link: 'https://demo.com'
    },
    {
      id: '2',
      date: '2023-12',
      title: 'AWS Solutions Architect Certification',
      description: 'Achieved AWS Solutions Architect Associate certification',
      type: 'achievement',
      details: ['Cloud architecture design', 'High availability systems', 'Cost optimization strategies']
    },
    {
      id: '3',
      date: '2023-10',
      title: 'Senior Full-Stack Developer',
      description: 'Promoted to senior role at TechCorp Inc.',
      type: 'work',
      details: ['Lead development team of 5', 'Architecture decisions', 'Mentoring junior developers', '40% performance improvement']
    },
    {
      id: '4',
      date: '2023-08',
      title: 'E-Commerce Platform v2.0',
      description: 'Major release with advanced features and improved performance',
      type: 'project',
      details: ['Microservices architecture', 'Payment gateway integration', 'Real-time inventory', '200% faster loading']
    },
    {
      id: '5',
      date: '2023-05',
      title: 'React Advanced Patterns Course',
      description: 'Completed comprehensive React mastery program',
      type: 'education',
      details: ['Performance optimization', 'Custom hooks patterns', 'State management', 'Testing strategies']
    },
    {
      id: '6',
      date: '2023-03',
      title: '1000th GitHub Contribution',
      description: 'Reached milestone of 1000 contributions on GitHub',
      type: 'milestone',
      details: ['Open source contributions', 'Code reviews', 'Bug fixes', 'Feature implementations']
    },
    {
      id: '7',
      date: '2022-11',
      title: 'Task Management App',
      description: 'Built collaborative project management tool',
      type: 'project',
      details: ['Real-time collaboration', 'Team dashboards', 'Progress tracking', '500+ teams using']
    },
    {
      id: '8',
      date: '2022-06',
      title: 'Full-Stack Developer',
      description: 'Started career as full-stack developer',
      type: 'work',
      details: ['MERN stack development', 'API design', 'Database optimization', 'UI/UX implementation']
    },
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'project', name: 'Projects', icon: Rocket },
    { id: 'work', name: 'Career', icon: Briefcase },
    { id: 'achievement', name: 'Achievements', icon: Award },
    { id: 'education', name: 'Learning', icon: GraduationCap },
    { id: 'milestone', name: 'Milestones', icon: GitCommit },
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === selectedCategory);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'project': return <Rocket className="w-5 h-5" />;
      case 'achievement': return <Award className="w-5 h-5" />;
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'work': return <Briefcase className="w-5 h-5" />;
      case 'milestone': return <GitCommit className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'project': return 'from-blue-400 to-blue-600';
      case 'achievement': return 'from-yellow-400 to-orange-500';
      case 'education': return 'from-green-400 to-emerald-500';
      case 'work': return 'from-purple-400 to-purple-600';
      case 'milestone': return 'from-pink-400 to-rose-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flower-divider mb-6"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bounce-in">
            My <span className="bg-gradient-to-r from-bright-yellow to-hot-pink bg-clip-text text-transparent">Journey 🌸</span>
          </h2>
          <p className="text-xl text-hot-pink max-w-2xl mx-auto font-medium">
            A timeline of my coding journey, projects, and professional milestones ✨
          </p>
          <div className="flower-divider mt-6"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium ${
                selectedCategory === category.id
                  ? 'bg-gradient-yellow-pink text-white shadow-glow-yellow'
                  : 'glass-pink text-hot-pink hover:glass-yellow hover:text-white hover:shadow-glow-pink'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-bright-yellow via-hot-pink to-pastel-lavender rounded-full shadow-glow-pink"></div>

          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-yellow-pink flex items-center justify-center text-white z-10 shadow-glow-yellow hover:scale-110 transition-transform duration-300">
                  {getEventIcon(event.type)}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt hover:shadow-float">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${getEventColor(event.type)} shadow-glow-soft`}>
                        {getEventIcon(event.type)}
                      </div>
                      <span className="text-bright-yellow text-sm font-bold bg-bright-yellow/20 px-3 py-1 rounded-full">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-hot-pink mb-2">{event.title}</h3>
                    <p className="text-white mb-4">{event.description}</p>
                    
                    {event.details && (
                      <ul className="space-y-1 mb-4">
                        {event.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-white text-sm">
                            <div className="w-2 h-2 bg-gradient-yellow-pink rounded-full shadow-glow-pink" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {event.link && (
                      <a
                        href={event.link}
                        className="inline-flex items-center space-x-1 text-hot-pink hover:text-bright-yellow transition-colors text-sm font-medium hover:scale-105 duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-pink rounded-3xl p-6 text-center hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="text-2xl font-bold text-bright-yellow mb-2">
              {timelineEvents.filter(e => e.type === 'project').length}
            </h3>
            <p className="text-hot-pink font-medium">Major Projects</p>
          </div>
          <div className="glass-pink rounded-3xl p-6 text-center hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-2xl font-bold text-bright-yellow mb-2">
              {timelineEvents.filter(e => e.type === 'achievement').length}
            </h3>
            <p className="text-hot-pink font-medium">Achievements</p>
          </div>
          <div className="glass-pink rounded-3xl p-6 text-center hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="text-2xl font-bold text-bright-yellow mb-2">3+</h3>
            <p className="text-hot-pink font-medium">Years Experience</p>
          </div>
          <div className="glass-pink rounded-3xl p-6 text-center hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt">
            <div className="text-3xl mb-2">💻</div>
            <h3 className="text-2xl font-bold text-bright-yellow mb-2">1000+</h3>
            <p className="text-hot-pink font-medium">Code Contributions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;