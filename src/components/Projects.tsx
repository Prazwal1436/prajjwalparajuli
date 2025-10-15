"use client";

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Eye, Filter, Star, Rocket, Trophy, Zap, Code2, Palette, BarChart3, Globe } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Saathi - Blood Donation Companion',
      description: 'A community-driven blood donation companion app that connects people who urgently require blood with verified, willing donors. Features real-time emergency requests, donor matching, and donation history tracking.',
      image: '/images/projects/saathi-hero.png', // Add your actual screenshot here
      category: 'web-app',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Real-time Notifications'],
      liveUrl: 'https://saathi.aoneskills.com.np',
      githubUrl: 'https://github.com/prajjwalparajuli/saathi-blood-donation',
      featured: true,
      metrics: {
        impact: 'Lives Saved Daily',
        users: 'Growing Community',
        response: 'Real-time Matching'
      }
    },
    {
      id: 2,
      title: 'AOne Skills - Corporate Website',
      description: 'Professional corporate website for AOne Skills featuring course catalog, instructor profiles, student testimonials, and online enrollment system.',
      image: '/images/projects/aoneskills-hero.png', // Add your actual screenshot here
      category: 'website',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS'],
      liveUrl: 'https://aoneskills.com.np',
      githubUrl: 'https://github.com/prajjwalparajuli/aoneskills-website',
      featured: true,
      metrics: {
        visitors: '2K+ Monthly Visitors',
        enrollment: '25% Conversion Rate',
        loading: '1.8s Load Time'
      }
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring payment integration, inventory management, and admin dashboard.',
      image: '/api/placeholder/600/400',
      category: 'web-app',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/prajjwalparajuli/ecommerce',
      featured: false,
      metrics: {
        performance: '95% Lighthouse Score',
        users: '10K+ Active Users',
        conversion: '3.2% Conversion Rate'
      }
    },
    {
      id: 4,
      title: 'Digital Marketing Dashboard',
      description: 'Analytics dashboard for tracking social media campaigns, SEO metrics, and ROI across multiple platforms.',
      image: '/api/placeholder/600/400',
      category: 'dashboard',
      technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB', 'Google Analytics API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/prajjwalparajuli/marketing-dashboard',
      featured: false,
      metrics: {
        dataPoints: '50+ Metrics Tracked',
        clients: '25+ Active Clients',
        efficiency: '60% Time Saved'
      }
    },
    {
      id: 5,
      title: 'Restaurant Website & Ordering System',
      description: 'Modern restaurant website with online ordering, table reservations, and menu management system.',
      image: '/api/placeholder/600/400',
      category: 'website',
      technologies: ['Next.js', 'Sanity CMS', 'PayPal', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/prajjwalparajuli/restaurant-site',
      featured: false,
      metrics: {
        orders: '500+ Monthly Orders',
        loading: '2s Load Time',
        rating: '4.8/5 User Rating'
      }
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Collaborative project management tool with team features, time tracking, and progress analytics.',
      image: '/api/placeholder/600/400',
      category: 'web-app',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/prajjwalparajuli/task-manager',
      featured: false,
      metrics: {
        teams: '100+ Teams',
        tasks: '10K+ Tasks Managed',
        productivity: '40% Productivity Boost'
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length, icon: Globe, color: 'from-blue-500 to-purple-600' },
    { key: 'web-app', label: 'Web Apps', count: projects.filter(p => p.category === 'web-app').length, icon: Code2, color: 'from-green-500 to-emerald-600' },
    { key: 'website', label: 'Websites', count: projects.filter(p => p.category === 'website').length, icon: Palette, color: 'from-purple-500 to-pink-600' },
    { key: 'dashboard', label: 'Dashboards', count: projects.filter(p => p.category === 'dashboard').length, icon: BarChart3, color: 'from-orange-500 to-red-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"></div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/6 to-pink-400/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/6 to-cyan-400/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Clean Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 backdrop-blur-md border border-white/30 group hover:scale-105 transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Rocket size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Featured <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover my latest work spanning full-stack applications, digital marketing solutions, 
            and innovative web experiences that deliver exceptional results.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20 sm:mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4 glass rounded-2xl px-6 py-4 backdrop-blur-md border border-white/30">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Trophy size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Featured Work</h3>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project) => {
              const hasShareableImage = Boolean(project.image) && !project.image.includes('/api/placeholder');
              const hasLiveUrl = Boolean(project.liveUrl);
              const isPrivacyRedirect = !hasShareableImage || !hasLiveUrl;
              const projectHref = isPrivacyRedirect ? '/projects/privacy' : project.liveUrl;

              return (
                <div 
                  key={project.id} 
                  className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 backdrop-blur-md border border-white/30"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image/Preview */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative">
                      {/* Website Screenshot */}
                      {hasShareableImage && (
                        <img 
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      
                      {/* Fallback content if image doesn't load */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">🚀</div>
                      </div>
                      
                      {/* Tech Stack Preview */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <div
                              key={tech}
                              className="glass rounded-lg px-3 py-1 backdrop-blur-sm border border-white/30"
                            >
                              <span className="text-xs font-semibold text-white drop-shadow-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Confidential Badge */}
                    {isPrivacyRedirect && (
                      <div className="absolute top-4 left-4 flex items-center gap-2 glass rounded-full px-3 py-2 backdrop-blur-sm border border-white/30">
                        <span className="text-xs font-bold text-gray-700">Confidential Project</span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black/70 transition-all duration-300 flex items-center justify-center ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="flex gap-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        {isPrivacyRedirect ? (
                          <Link
                            href="/projects/privacy"
                            className="glass text-white p-4 rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/30"
                          >
                            <ExternalLink size={24} />
                          </Link>
                        ) : (
                          <a
                            href={projectHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass text-white p-4 rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/30"
                          >
                            <ExternalLink size={24} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 glass rounded-full px-3 py-2 backdrop-blur-sm border border-white/30">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-xs font-bold text-gray-700">Featured</span>
                    </div>
                  </div>
                  
                  <div className="p-6 lg:p-8">
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="glass rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 backdrop-blur-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="glass rounded-lg px-3 py-2 text-sm font-medium text-blue-600 backdrop-blur-sm border border-white/20">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 py-4 mb-6 border-t border-b border-gray-200/50">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-bold text-gray-900 mb-1">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {isPrivacyRedirect ? (
                        <Link
                          href="/projects/privacy"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-sm shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <Eye size={16} />
                          <span>View Privacy Notice</span>
                        </Link>
                      ) : (
                        <a
                          href={projectHref ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-sm shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <Eye size={16} />
                          <span>View Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col items-center mb-16 sm:mb-20">
          <div className="flex items-center gap-3 glass rounded-2xl px-6 py-3 mb-8 backdrop-blur-md border border-white/30">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Filter size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700">Explore by Category</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              const isActive = activeFilter === filter.key;
              
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`group relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? 'glass text-white shadow-lg backdrop-blur-md border border-white/30'
                      : 'glass text-gray-600 hover:text-gray-900 hover:shadow-md backdrop-blur-md border border-white/20'
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${filter.color} rounded-xl opacity-90`}></div>
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors duration-300`}>
                      <IconComponent size={16} className={isActive ? 'text-white' : 'text-gray-600'} />
                    </div>
                    <span>{filter.label}</span>
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                    }`}>
                      {filter.count}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {filteredProjects.map((project) => {
            const hasShareableImage = Boolean(project.image) && !project.image.includes('/api/placeholder');
            const hasLiveUrl = Boolean(project.liveUrl);
            const isPrivacyRedirect = !hasShareableImage || !hasLiveUrl;
            const projectHref = isPrivacyRedirect ? '/projects/privacy' : project.liveUrl;

            return (
              <div 
                key={project.id} 
                className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 backdrop-blur-md border border-white/30"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative">
                    {/* Website Screenshot */}
                    {hasShareableImage && (
                      <img 
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback to gradient background if image fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    
                    {/* Fallback content if image doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl opacity-30 group-hover:scale-110 transition-transform duration-300">💻</div>
                    </div>
                    
                    {/* Simple floating elements */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                  </div>

                  {/* Confidential Badge */}
                  {isPrivacyRedirect && (
                    <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 backdrop-blur-sm border border-white/30">
                      <span className="text-xs font-semibold text-gray-700">Confidential</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      {isPrivacyRedirect ? (
                        <Link
                          href="/projects/privacy"
                          className="glass text-white p-3 rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/30"
                        >
                          <Eye size={18} />
                        </Link>
                      ) : (
                        <a
                          href={projectHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass text-white p-3 rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/30"
                        >
                          <Eye size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 backdrop-blur-sm border border-white/30">
                    <span className="text-xs font-semibold text-gray-700 capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="glass rounded-lg px-3 py-1 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 backdrop-blur-sm border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="glass rounded-lg px-3 py-1 text-xs font-medium text-blue-600 backdrop-blur-sm border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Area */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isPrivacyRedirect ? 'bg-amber-500' : 'bg-green-500'}`}></div>
                      <span className="text-xs text-gray-500 font-medium">
                        {isPrivacyRedirect ? 'Privacy Protected' : 'Live Project'}
                      </span>
                    </div>
                    
                    <div className="flex gap-4">
                      {isPrivacyRedirect ? (
                        <Link
                          href="/projects/privacy"
                          className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 hover:scale-105 transition-all duration-300"
                        >
                          <span>View Notice</span>
                          <ExternalLink size={14} />
                        </Link>
                      ) : (
                        <a
                          href={projectHref ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 hover:scale-105 transition-all duration-300"
                        >
                          <span>Visit Site</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass rounded-2xl p-8 lg:p-12 relative overflow-hidden backdrop-blur-md border border-white/30">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-purple-600/3 to-pink-600/3"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-white/30">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Ready to Start?</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Build Something <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Amazing</span> Together
              </h3>
              
              <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your vision to life? I'd love to discuss your project and explore 
                how we can create exceptional digital experiences that drive real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center gap-3 overflow-hidden px-8 py-4 font-semibold text-base shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <Rocket size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/services"
                  className="group glass rounded-xl px-8 py-4 font-semibold text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-3 backdrop-blur-sm border border-white/30"
                >
                  <span>View Services</span>
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200/50">
                {[
                  { number: '50+', label: 'Projects Delivered', icon: '🚀' },
                  { number: '100+', label: 'Happy Clients', icon: '😊' },
                  { number: '99%', label: 'Success Rate', icon: '⭐' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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

export default Projects;