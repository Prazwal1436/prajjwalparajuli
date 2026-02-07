"use client";

import { useState, useRef, useEffect } from 'react';
import { Award, Users, Coffee, Clock, Target, Heart, Zap, Code, Palette, TrendingUp, Mail, Github, Linkedin, MapPin, CheckCircle, Star, Briefcase } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Happy Clients', value: '100+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: Clock, label: 'Hours of Coding', value: '5000+' },
  ];

  const skills = [
    { 
      name: 'Frontend Development', 
      percentage: 95, 
      icon: Code, 
      description: 'React, Next.js, TypeScript',
      projects: '25+ Projects'
    },
    { 
      name: 'Backend Development', 
      percentage: 85, 
      icon: Zap, 
      description: 'Node.js, Python, APIs',
      projects: '20+ Projects'
    },
    { 
      name: 'Digital Marketing', 
      percentage: 90, 
      icon: TrendingUp, 
      description: 'SEO, SEM, Analytics',
      projects: '30+ Campaigns'
    },
    { 
      name: 'UI/UX Design', 
      percentage: 80, 
      icon: Palette, 
      description: 'Figma, Design Systems',
      projects: '15+ Designs'
    },
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart },
    { id: 'mission', label: 'Mission', icon: Target },
    { id: 'values', label: 'Values', icon: Award },
  ];

  const accentGradients = [
    'from-[color:var(--accent)] to-[color:var(--accent-2)]',
    'from-[color:var(--accent-2)] to-[color:var(--accent-3)]',
    'from-[color:var(--accent-3)] to-[color:var(--accent)]',
    'from-[color:var(--accent)] to-[color:var(--accent-3)]',
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] rounded-3xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                👨‍💻
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-theme mb-6">My Journey in Tech</h3>
                <div className="space-y-6 text-muted leading-relaxed text-lg">
                  <p>
                    Hello! I'm Prajjwal Parajuli, a passionate full-stack developer and digital marketing expert 
                    based in Nepal. My journey into technology began with curiosity about how websites work, 
                    which evolved into a deep passion for creating digital solutions that make real impact.
                  </p>
                  <p>
                    Over 3+ years, I've worked with diverse clients across industries - from building robust 
                    e-commerce platforms to crafting comprehensive marketing campaigns. Each project has 
                    shaped my expertise in bridging technology with business goals.
                  </p>
                  <p>
                    When not coding or strategizing campaigns, you'll find me exploring emerging technologies, 
                    contributing to open-source projects, or sharing insights with the developer community. 
                    I believe in continuous learning and giving back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'mission':
        return (
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[color:var(--accent-3)] to-[color:var(--accent)] rounded-3xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                🎯
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-theme mb-6">Bridging Technology & Business</h3>
                <div className="space-y-6 text-muted leading-relaxed text-lg">
                  <p>
                    My mission is to bridge the gap between cutting-edge technology and meaningful business 
                    outcomes. Great software should be technically excellent while solving real problems 
                    and creating tangible value for users and businesses.
                  </p>
                  <p>
                    I help businesses establish strong digital presence, optimize online performance, and 
                    achieve sustainable growth through strategic technology use and data-driven marketing. 
                    Every line of code and campaign is focused on delivering measurable results.
                  </p>
                  <p>
                    I'm committed to staying at the forefront of innovation while maintaining strong focus 
                    on user experience, accessibility, and ethical development practices. The digital world 
                    should be inclusive and beneficial for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'values':
        return (
          <div className="space-y-10">
            <div className="flex items-start space-x-6 mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-[color:var(--accent-2)] to-[color:var(--accent)] rounded-3xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                ⭐
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-theme mb-4">Core Values</h3>
                <p className="text-muted text-lg">The principles that guide every decision and project I undertake.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { 
                  title: 'Innovation', 
                  desc: 'Embracing new technologies and creative solutions to solve complex problems.',
                  icon: '🚀',
                  color: 'from-[color:var(--accent)] to-[color:var(--accent-3)]'
                },
                { 
                  title: 'Quality', 
                  desc: 'Delivering exceptional work that exceeds expectations and stands the test of time.',
                  icon: '💎',
                  color: 'from-[color:var(--accent-2)] to-[color:var(--accent)]'
                },
                { 
                  title: 'Collaboration', 
                  desc: 'Building strong partnerships with clients and team members for mutual success.',
                  icon: '🤝',
                  color: 'from-[color:var(--accent-3)] to-[color:var(--accent)]'
                },
                { 
                  title: 'Growth', 
                  desc: 'Continuously learning and helping others grow in their digital journey.',
                  icon: '📈',
                  color: 'from-[color:var(--accent)] to-[color:var(--accent-2)]'
                }
              ].map((value) => (
                <div key={value.title} className="group p-8 rounded-3xl border border-[color:var(--border)] hover:border-[color:var(--accent)]/40 transition-all duration-300 hover:shadow-xl bg-[color:var(--bg-elev)]">
                  <div className="flex items-start space-x-5">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-theme mb-3">{value.title}</h4>
                      <p className="text-muted leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-40 relative overflow-hidden grid-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[color:var(--accent)]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[color:var(--accent-2)]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[color:var(--accent-3)]/6 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 sm:mb-24 lg:mb-32">
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass rounded-full text-[color:var(--accent)] text-sm font-semibold mb-10 border border-[color:var(--border)]">
            <Heart size={18} className="text-[color:var(--accent-2)]" />
            <span>About Me</span>
            <div className="w-2 h-2 bg-[color:var(--accent-3)] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-theme mb-10 leading-tight">
            The <span className="bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] bg-clip-text text-transparent">Story</span> Behind
            <br />
            the <span className="bg-gradient-to-r from-[color:var(--accent-3)] to-[color:var(--accent)] bg-clip-text text-transparent">Code</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted max-w-4xl mx-auto leading-relaxed">
            Passionate full-stack developer and digital marketing strategist crafting 
            <span className="font-bold text-theme"> innovative solutions</span> that bridge 
            technology and business success.
          </p>
        </div>

        {/* Profile & Content Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 xl:grid-cols-7 gap-12 lg:gap-16">
            {/* Profile Card */}
            <div className="xl:col-span-3">
              <div className="bg-[color:var(--bg-elev)] rounded-4xl p-10 lg:p-12 shadow-xl border border-[color:var(--border)] hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/10 via-transparent to-[color:var(--accent-2)]/10 pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative w-48 h-48 mx-auto mb-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] rounded-full p-2 animate-pulse">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[color:var(--bg-elev)] p-2">
                        <Image
                          src="/prajjwal.png"
                          alt="Prajjwal Parajuli"
                          width={192}
                          height={192}
                          className="w-full h-full object-cover rounded-full"
                          quality={95}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[color:var(--accent-3)] rounded-full border-4 border-[color:var(--bg-elev)] flex items-center justify-center shadow-lg">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="text-center space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold text-theme">Prajjwal Parajuli</h3>
                      <div className="space-y-2">
                        <p className="text-xl font-semibold bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] bg-clip-text text-transparent">
                          Full Stack Developer
                        </p>
                        <p className="text-muted">Digital Marketing Expert</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-3 text-muted py-4 px-6 bg-[color:var(--panel)] rounded-2xl border border-[color:var(--border)]">
                      <MapPin size={16} />
                      <span>Kathmandu, Nepal</span>
                      <div className="w-2 h-2 bg-[color:var(--accent-3)] rounded-full animate-pulse"></div>
                      <span className="text-[color:var(--accent-3)] font-semibold">Available</span>
                    </div>

                    {/* Contact Links */}
                    <div className="flex justify-center space-x-4 pt-6">
                      {[
                        { icon: Github, label: 'GitHub', href: '#', color: 'hover:bg-[color:var(--bg-elev)]' },
                        { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-[color:var(--bg-elev)]' },
                        { icon: Mail, label: 'Email', href: '#', color: 'hover:bg-[color:var(--bg-elev)]' }
                      ].map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            className={`w-14 h-14 bg-[color:var(--panel)] ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-sm border border-[color:var(--border)]`}
                            title={social.label}
                          >
                            <IconComponent size={22} className="text-muted group-hover:text-theme" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="xl:col-span-4 space-y-8">
              {/* Tab Navigation */}
              <div className="bg-[color:var(--bg-elev)] rounded-3xl p-3 shadow-lg border border-[color:var(--border)]">
                <div className="grid grid-cols-3 gap-3">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center justify-center space-x-3 px-6 py-5 rounded-2xl font-semibold transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] text-white shadow-lg transform scale-105'
                            : 'text-muted hover:text-theme hover:bg-[color:var(--bg-elev)]'
                        }`}
                      >
                        <IconComponent size={18} />
                        <span className="font-bold">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-[color:var(--bg-elev)] rounded-4xl p-10 lg:p-12 shadow-xl border border-[color:var(--border)] min-h-[600px]">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20 sm:mb-24 lg:mb-32">
          {[
            { label: 'Experience', value: '3+', unit: 'Years' },
            { label: 'Projects', value: '50+', unit: 'Completed' },
            { label: 'Clients', value: '100+', unit: 'Happy' },
            { label: 'Code Hours', value: '5K+', unit: 'Hours' }
          ].map((stat, index) => (
            <div key={stat.label} className="bg-[color:var(--bg-elev)] rounded-3xl p-8 lg:p-10 text-center border border-[color:var(--border)] hover:shadow-xl transition-all duration-300 group">
              <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${accentGradients[index % accentGradients.length]} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted mb-2 font-medium">{stat.unit}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-[color:var(--bg-elev)] rounded-4xl p-10 lg:p-12 shadow-xl border border-[color:var(--border)] mb-20 sm:mb-24 lg:mb-32">
          <div className="flex items-center space-x-6 mb-20">
            <div className="w-16 h-16 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] rounded-3xl flex items-center justify-center shadow-lg">
              <Zap size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-theme mb-2">Core Expertise</h3>
              <p className="text-muted text-lg">Technologies & Skills I Master</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="group bg-[color:var(--panel)] p-8 rounded-3xl border border-[color:var(--border)] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-10">
                    <div className="flex items-center space-x-5">
                      <div className={`w-16 h-16 bg-gradient-to-r ${accentGradients[index % accentGradients.length]} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-theme mb-2">{skill.name}</h4>
                        <p className="text-muted mb-1">{skill.description}</p>
                        <p className="text-sm text-muted">{skill.projects}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-theme mb-1">{skill.percentage}%</div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className={`${i < Math.floor(skill.percentage / 20) ? 'text-[color:var(--accent-3)] fill-current' : 'text-[color:var(--border)]'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-[color:var(--border)] opacity-60 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${accentGradients[index % accentGradients.length]} transition-all duration-1000 ease-out ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ 
                          width: `${skill.percentage}%`,
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-10 mb-20 sm:mb-24 lg:mb-32">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-[color:var(--bg-elev)] rounded-3xl p-8 lg:p-10 text-center border border-[color:var(--border)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-[color:var(--accent)]/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${accentGradients[index % accentGradients.length]} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <div className="text-4xl font-bold text-theme mb-3">{stat.value}</div>
                  <div className="text-muted font-semibold">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] rounded-4xl p-12 lg:p-16 text-white max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--accent)]/90 via-[color:var(--accent-2)]/90 to-[color:var(--accent-3)]/90"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-10">
                <Briefcase size={32} className="text-white" />
                <h3 className="text-3xl lg:text-4xl font-bold">Ready to Work Together?</h3>
              </div>
              <p className="text-white/80 mb-16 text-xl leading-relaxed max-w-3xl mx-auto">
                Let's create something amazing together. I'm always excited to take on new challenges 
                and bring innovative ideas to life through cutting-edge technology and strategic marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-10 justify-center">
                <a
                  href="/contact"
                  className="px-12 py-6 bg-[color:var(--bg-elev)] text-[color:var(--accent)] rounded-2xl font-bold hover:bg-[color:var(--panel)] transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
                >
                  Start a Project
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="px-12 py-6 border-2 border-white/30 rounded-2xl font-bold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 text-lg"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
