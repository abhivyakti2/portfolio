import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Heart, MessageCircle, Star } from 'lucide-react';

interface ProjectsProps {
  id: string;
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
  votes: number;
  feedback: string[];
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newFeedback, setNewFeedback] = useState('');
  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      images: ['https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg', 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      votes: 24,
      feedback: ['Great UI design!', 'Love the smooth animations']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      techStack: ['Vue.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      images: ['https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg', 'https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      votes: 18,
      feedback: ['Very intuitive!', 'Perfect for team collaboration']
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning with natural language processing capabilities.',
      techStack: ['Python', 'Flask', 'OpenAI API', 'React', 'PostgreSQL'],
      images: ['https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg', 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      votes: 31,
      feedback: ['Amazing AI responses!', 'The accuracy is impressive']
    }
  ]);

  const [futureIdeas] = useState([
    { title: 'Blockchain Voting System', votes: 15, description: 'Secure voting platform using blockchain technology' },
    { title: 'AR Shopping Experience', votes: 22, description: 'Augmented reality for online shopping' },
    { title: 'Smart Home Dashboard', votes: 8, description: 'IoT device management interface' }
  ]);

  const currentProject = projects[selectedProject];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFeedback.trim()) {
      const updatedProjects = [...projects];
      updatedProjects[selectedProject].feedback.push(newFeedback.trim());
      setProjects(updatedProjects);
      setNewFeedback('');
    }
  };

  const handleVote = (projectIndex: number) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].votes += 1;
    setProjects(updatedProjects);
  };

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore my latest work and see the technologies I'm passionate about
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(index);
                setCurrentImageIndex(0);
              }}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:scale-105 ${
                selectedProject === index ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVote(index);
                  }}
                  className="flex items-center space-x-1 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  <span>{project.votes}</span>
                </button>
                <div className="flex space-x-2">
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project View */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={currentProject.images[currentImageIndex]}
                alt={currentProject.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{currentProject.title}</h3>
              <p className="text-white/70 mb-6">{currentProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <a
                  href={currentProject.githubUrl}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
                <a
                  href={currentProject.liveUrl}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>

              {/* Feedback Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Community Feedback
                </h4>
                <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
                  {currentProject.feedback.map((feedback, index) => (
                    <div key={index} className="bg-white/5 p-3 rounded-lg">
                      <p className="text-white/80 text-sm">{feedback}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleFeedbackSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={newFeedback}
                    onChange={(e) => setNewFeedback(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Future Ideas Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Future Project Ideas - <span className="text-blue-400">Vote for What's Next!</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureIdeas.map((idea, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-200">
                <h4 className="text-lg font-semibold text-white mb-2">{idea.title}</h4>
                <p className="text-white/70 text-sm mb-4">{idea.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Star className="w-4 h-4" />
                    <span>{idea.votes} votes</span>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors">
                    Vote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;