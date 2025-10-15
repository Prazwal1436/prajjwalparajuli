"use client";

import { useState, useRef, useEffect } from 'react';
import { Code, Palette, BarChart3, Zap, Star, Award, TrendingUp, Layers, Sparkles } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('development');
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = {
    development: {
      title: 'Development',
      icon: Code,
      color: 'blue',
      gradient: 'from-blue-500 via-blue-600 to-purple-600',
      emoji: '💻',
      skills: [
        { name: 'React/Next.js', level: 95, description: 'Building modern, scalable web applications', icon: '⚛️' },
        { name: 'TypeScript', level: 90, description: 'Type-safe JavaScript development', icon: '📘' },
        { name: 'Node.js', level: 85, description: 'Server-side JavaScript applications', icon: '🟢' },
        { name: 'Python', level: 80, description: 'Backend development and automation', icon: '🐍' },
        { name: 'PostgreSQL', level: 85, description: 'Database design and optimization', icon: '🐘' },
        { name: 'MongoDB', level: 80, description: 'NoSQL database management', icon: '🍃' }
      ]
    },
    design: {
      title: 'Design',
      icon: Palette,
      color: 'purple',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      emoji: '🎨',
      skills: [
        { name: 'UI/UX Design', level: 90, description: 'User-centered design principles', icon: '✨' },
        { name: 'Figma', level: 85, description: 'Design systems and prototyping', icon: '🎯' },
        { name: 'Adobe Creative Suite', level: 80, description: 'Graphic design and branding', icon: '🖼️' },
        { name: 'Tailwind CSS', level: 95, description: 'Utility-first CSS framework', icon: '💨' },
        { name: 'Responsive Design', level: 95, description: 'Mobile-first approach', icon: '📱' },
        { name: 'Brand Identity', level: 85, description: 'Logo and brand development', icon: '🎭' }
      ]
    },
    marketing: {
      title: 'Digital Marketing',
      icon: BarChart3,
      color: 'green',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      emoji: '📈',
      skills: [
        { name: 'SEO', level: 90, description: 'Search engine optimization', icon: '🔍' },
        { name: 'Google Ads', level: 85, description: 'PPC campaign management', icon: '🎯' },
        { name: 'Facebook Ads', level: 90, description: 'Social media advertising', icon: '📱' },
        { name: 'Content Marketing', level: 85, description: 'Strategic content creation', icon: '📝' },
        { name: 'Email Marketing', level: 80, description: 'Automated email campaigns', icon: '✉️' },
        { name: 'Analytics', level: 90, description: 'Data-driven insights', icon: '📊' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Zap,
      color: 'amber',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      emoji: '⚡',
      skills: [
        { name: 'Git/GitHub', level: 95, description: 'Version control and collaboration', icon: '🔧' },
        { name: 'Docker', level: 80, description: 'Containerization and deployment', icon: '🐳' },
        { name: 'AWS', level: 75, description: 'Cloud infrastructure', icon: '☁️' },
        { name: 'Vercel', level: 90, description: 'Frontend deployment platform', icon: '▲' },
        { name: 'WordPress', level: 85, description: 'CMS development and customization', icon: '📝' },
        { name: 'Shopify', level: 80, description: 'E-commerce development', icon: '🛒' }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-skill-id');
            if (id) {
              setIsVisible(prev => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillElements = document.querySelectorAll('[data-skill-id]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]);

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories];
  const IconComponent = currentCategory.icon;

  return (
    <section ref={sectionRef} id="skills" className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in flex flex-col items-center justify-center">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
            <Sparkles size={20} className="text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Technical Expertise</span>
          </div>
          <h2 className="text-fluid-4xl font-bold text-gray-900 mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical capabilities and professional expertise 
            across full-stack development, design, and digital marketing.
          </p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 w-full">
          {Object.entries(skillCategories).map(([key, category]) => {
            const isActive = activeCategory === key;
            const IconComp = category.icon;
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group relative flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'glass text-white shadow-2xl'
                    : 'glass text-gray-600 hover:text-gray-900 hover:shadow-lg'
                }`}
              >
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-sm opacity-80`}></div>
                )}
                <div className="relative z-10 flex items-center space-x-3">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors duration-300`}>
                    <IconComp size={20} className={isActive ? 'text-white' : 'text-gray-600'} />
                  </div>
                  <span>{category.title}</span>
                  <span className="text-lg">{category.emoji}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="w-full max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={skill.name}
              data-skill-id={`${activeCategory}-${index}`}
              className="group glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentCategory.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${currentCategory.gradient} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(skill.level / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${currentCategory.gradient} transition-all duration-1500 ease-out transform ${
                      isVisible[`${activeCategory}-${index}`] ? 'scale-x-100' : 'scale-x-0'
                    } origin-left relative`}
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer"></div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-8">
                  <div className={`w-2 h-2 bg-gradient-to-r ${currentCategory.gradient} rounded-full animate-pulse`}></div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentCategory.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
          </div>
        </div>

        {/* Premium Professional Journey Section */}
        <div className="mt-24 lg:mt-32 animate-fade-in w-full" style={{ animationDelay: '600ms' }}>
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 shadow-lg">
              <Award size={20} className="text-blue-600" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">CAREER JOURNEY</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="gradient-text">Timeline</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From junior developer to trusted professional serving 150+ global clients with proven expertise in modern web technologies.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto w-full">
            {/* Modern Timeline Line - Only visible on desktop, centered */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
            
            <div className="space-y-12 lg:space-y-20">
              {[
                {
                  year: '2023 - Present',
                  duration: '2+ Years',
                  title: 'Senior Full Stack Developer',
                  company: 'International Freelance',
                  location: 'Remote (USA/Global)',
                  description: 'Serving international clients with premium web development and digital marketing solutions. Specializing in React, Next.js, and performance-driven applications with proven ROI.',
                  achievements: [
                    { icon: '🎯', text: '150+ successful projects delivered', metric: '150+' },
                    { icon: '💰', text: 'Achieved 400%+ ROI for clients', metric: '400%' },
                    { icon: '⚡', text: '99.9% on-time delivery rate', metric: '99.9%' },
                    { icon: '⭐', text: '4.9/5 average client rating', metric: '4.9/5' }
                  ],
                  side: 'left',
                  gradient: 'from-blue-600 via-blue-500 to-purple-600',
                  icon: '🚀',
                  iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600'
                },
                {
                  year: '2022 - 2023',
                  duration: '1 Year',
                  title: 'Full Stack Developer & Digital Marketer',
                  company: 'DigiExperts Nepal',
                  location: 'Kathmandu, Nepal',
                  description: 'Led development projects and implemented comprehensive digital marketing strategies. Built scalable web applications and managed high-budget advertising campaigns.',
                  achievements: [
                    { icon: '💻', text: 'Built 50+ responsive web applications', metric: '50+' },
                    { icon: '📈', text: 'Increased client traffic by 250%', metric: '250%' },
                    { icon: '🎨', text: 'Implemented modern UI/UX practices', metric: '100%' },
                    { icon: '🔧', text: 'Optimized performance by 60%', metric: '60%' }
                  ],
                  side: 'right',
                  gradient: 'from-purple-600 via-purple-500 to-pink-600',
                  icon: '💼',
                  iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600'
                },
                {
                  year: '2021 - 2022',
                  duration: '1 Year',
                  title: 'Junior Web Developer',
                  company: 'Creative Agency',
                  location: 'Kathmandu, Nepal',
                  description: 'Started professional journey building modern websites and learning digital marketing fundamentals. Focused on frontend development, SEO, and client communication.',
                  achievements: [
                    { icon: '🌟', text: 'Built 30+ client websites', metric: '30+' },
                    { icon: '📚', text: 'Mastered React & Next.js', metric: '100%' },
                    { icon: '🎓', text: 'Google Analytics certified', metric: 'Cert.' },
                    { icon: '🏆', text: 'Best newcomer award', metric: 'Award' }
                  ],
                  side: 'left',
                  gradient: 'from-pink-600 via-pink-500 to-red-500',
                  icon: '🎯',
                  iconBg: 'bg-gradient-to-br from-pink-500 to-red-500'
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start lg:items-center">
                  {/* Timeline Dot & Connector */}
                  <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 -translate-x-0 z-20">
                    <div className={`relative flex items-center justify-center w-16 h-16 ${item.iconBg} rounded-2xl shadow-2xl rotate-45 group-hover:rotate-0 transition-transform duration-500`}>
                      <span className="text-2xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">{item.icon}</span>
                    </div>
                    <div className={`absolute inset-0 ${item.iconBg} rounded-2xl blur-xl opacity-50 animate-pulse`}></div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full lg:w-[calc(50%-4rem)] ml-24 lg:ml-0 ${
                    item.side === 'right' ? 'lg:ml-[calc(50%+4rem)]' : 'lg:mr-[calc(50%+4rem)]'
                  }`}>
                    <div className="group relative">
                      {/* Premium Card */}
                      <div className="relative glass rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50">
                        {/* Gradient Background on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                        
                        {/* Header */}
                        <div className="relative z-10 mb-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg`}>
                              <span className="text-xs font-bold text-white tracking-wider">{item.year}</span>
                              <span className="text-xs text-white/80">•</span>
                              <span className="text-xs font-semibold text-white/90">{item.duration}</span>
                            </div>
                            <div className="hidden lg:block text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {item.location}
                            </div>
                          </div>
                          
                          <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {item.title}
                          </h4>
                          
                          <div className="flex items-center space-x-2 mb-4">
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                            <p className={`text-lg font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                              {item.company}
                            </p>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            {item.description}
                          </p>
                        </div>

                        {/* Achievements Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 transition-all duration-300">
                              <span className="text-xl flex-shrink-0 mt-0.5">{achievement.icon}</span>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-700 leading-snug">{achievement.text}</p>
                                <p className={`text-xs font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mt-1`}>
                                  {achievement.metric}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Corner Decoration */}
                        <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-2xl`}></div>
                      </div>

                      {/* Connecting Line for Desktop */}
                      <div className={`hidden lg:block absolute top-8 ${
                        item.side === 'right' ? 'right-full mr-8' : 'left-full ml-8'
                      } w-8 h-0.5 bg-gradient-to-r ${
                        item.side === 'right' ? 'from-gray-300 to-transparent' : 'from-transparent to-gray-300'
                      }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats Summary */}
            <div className="mt-20 glass rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50">
              <div className="text-center mb-8">
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Journey <span className="gradient-text">Highlights</span>
                </h4>
                <p className="text-gray-600">Key metrics from my professional career</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { icon: '📅', label: 'Years Active', value: '5+', color: 'from-blue-500 to-blue-600' },
                  { icon: '🌍', label: 'Countries Served', value: '15+', color: 'from-purple-500 to-purple-600' },
                  { icon: '💎', label: 'Projects Delivered', value: '200+', color: 'from-pink-500 to-pink-600' },
                  { icon: '⭐', label: 'Client Rating', value: '4.9/5', color: 'from-amber-500 to-amber-600' }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className={`text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;