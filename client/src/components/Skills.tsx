import React from 'react';
import { Code, Database, Globe, Smartphone, Server, GitBranch, Award, TrendingUp } from 'lucide-react';

interface SkillsProps {
  id: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  projects: number;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: React.ComponentType;
  color: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'Frontend', projects: 15 },
    { name: 'TypeScript', level: 90, category: 'Language', projects: 12 },
    { name: 'Node.js', level: 85, category: 'Backend', projects: 10 },
    { name: 'Python', level: 80, category: 'Language', projects: 8 },
    { name: 'MongoDB', level: 75, category: 'Database', projects: 6 },
    { name: 'AWS', level: 70, category: 'Cloud', projects: 5 },
    { name: 'Docker', level: 65, category: 'DevOps', projects: 4 },
    { name: 'GraphQL', level: 60, category: 'API', projects: 3 },
  ];

  const achievements: Achievement[] = [
    {
      title: 'Full Stack Certification',
      description: 'Completed comprehensive full-stack development program',
      date: '2024',
      icon: Award,
      color: 'text-yellow-400'
    },
    {
      title: 'React Expert',
      description: 'Advanced React patterns and performance optimization',
      date: '2023',
      icon: Code,
      color: 'text-blue-400'
    },
    {
      title: 'Cloud Architecture',
      description: 'AWS Solutions Architect Associate certification',
      date: '2023',
      icon: Server,
      color: 'text-green-400'
    },
  ];

  const codingStats = [
    { label: 'GitHub Commits', value: '2,847', change: '+12%', icon: GitBranch },
    { label: 'LeetCode Problems', value: '245', change: '+8%', icon: Code },
    { label: 'Code Reviews', value: '189', change: '+15%', icon: TrendingUp },
    { label: 'Open Source PRs', value: '67', change: '+22%', icon: Globe },
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 75) return 'from-blue-400 to-blue-500';
    if (level >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-500';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Globe className="w-4 h-4" />;
      case 'Backend': return <Server className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Mobile': return <Smartphone className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flower-divider mb-6"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bounce-in">
            Skills & <span className="bg-gradient-to-r from-bright-yellow to-hot-pink bg-clip-text text-transparent">Progress 📈</span>
          </h2>
          <p className="text-xl text-hot-pink max-w-2xl mx-auto font-medium">
            My technical expertise and continuous learning journey ✨
          </p>
          <div className="flower-divider mt-6"></div>
        </div>

        {/* Coding Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {codingStats.map((stat, index) => (
            <div key={index} className="glass-pink rounded-3xl p-6 text-center hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt hover:shadow-float">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-bright-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-hot-pink mb-1">{stat.value}</h3>
              <p className="text-white text-sm mb-2 font-medium">{stat.label}</p>
              <span className="text-bright-yellow text-xs font-semibold bg-bright-yellow/20 px-2 py-1 rounded-full">{stat.change}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-hot-pink mb-8 flex items-center">
              <span className="text-2xl mr-3">🛠️</span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getCategoryIcon(skill.category)}
                      <h4 className="text-lg font-semibold text-hot-pink">{skill.name}</h4>
                      <span className="px-3 py-1 bg-gradient-yellow-pink text-white text-xs rounded-full font-medium">
                        {skill.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-bright-yellow font-bold text-lg">{skill.level}%</span>
                      <p className="text-hot-pink text-xs font-medium">{skill.projects} projects</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-yellow-pink transition-all duration-1000 ease-out shadow-glow-yellow`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-hot-pink mb-8 flex items-center">
              <span className="text-2xl mr-3">🏆</span>
              Recent Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full glass-yellow ${achievement.color}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-hot-pink mb-1">{achievement.title}</h4>
                      <p className="text-white mb-2">{achievement.description}</p>
                      <span className="text-bright-yellow text-sm font-semibold bg-bright-yellow/20 px-2 py-1 rounded-full">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Learning Timeline */}
              <div className="glass-pink rounded-3xl p-6 hover:glass-yellow transition-all duration-300">
                <h4 className="text-lg font-semibold text-hot-pink mb-4 flex items-center">
                  <span className="text-xl mr-2">📚</span>
                  Learning Milestones
                </h4>
                <div className="space-y-4">
                  {[
                    { year: '2024', milestone: 'Advanced React Patterns & Performance ⚛️' },
                    { year: '2023', milestone: 'Cloud Architecture & Microservices ☁️' },
                    { year: '2022', milestone: 'Full-Stack JavaScript Development 💻' },
                    { year: '2021', milestone: 'Started Programming Journey 🚀' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-yellow-pink rounded-full shadow-glow-pink" />
                      <div className="flex-1">
                        <span className="text-bright-yellow font-bold text-sm bg-bright-yellow/20 px-2 py-1 rounded-full">{item.year}</span>
                        <p className="text-white text-sm mt-1">{item.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Frontend', count: 12, emoji: '🎨', color: 'from-bright-yellow to-hot-pink' },
            { name: 'Backend', count: 8, emoji: '⚙️', color: 'from-hot-pink to-pastel-lavender' },
            { name: 'Database', count: 6, emoji: '🗄️', color: 'from-pastel-lavender to-bright-yellow' },
            { name: 'DevOps', count: 4, emoji: '🚀', color: 'from-bright-yellow to-soft-pink' },
          ].map((category, index) => (
            <div key={index} className="glass-pink rounded-3xl p-6 text-center hover:glass-yellow transition-all duration-300 hover:scale-105 hover-tilt hover:shadow-float">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-glow-soft`}>
                <span className="text-2xl">{category.emoji}</span>
              </div>
              <h4 className="text-lg font-semibold text-hot-pink mb-1">{category.name}</h4>
              <p className="text-white text-sm font-medium">{category.count} technologies</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;