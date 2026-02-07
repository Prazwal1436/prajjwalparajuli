"use client";

import { useState, useRef } from 'react';
import { Code, Palette, BarChart3, Zap, CheckCircle, ArrowRight, Star, Sparkles, Target, Users, Clock, Trophy, Rocket, Globe } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'Fast Loading Speed',
        'SEO Optimized',
        'Modern Frameworks',
        'Database Integration',
        'API Development'
      ],
      price: 'Starting at $2,000',
      color: 'blue',
      gradient: 'from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)]',
      popular: false,
      emoji: '💻',
      deliveryTime: '2-4 weeks'
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and drive conversions.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Google Ads Management',
        'Content Strategy',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      price: 'Starting at $1,500',
      color: 'green',
      gradient: 'from-[color:var(--accent-3)] via-[color:var(--accent)] to-[color:var(--accent-2)]',
      popular: true,
      emoji: '📈',
      deliveryTime: '1-2 weeks'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging experiences and drive business results.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      price: 'Starting at $1,200',
      color: 'purple',
      gradient: 'from-[color:var(--accent-2)] via-[color:var(--accent)] to-[color:var(--accent-3)]',
      popular: false,
      emoji: '🎨',
      deliveryTime: '1-3 weeks'
    },
    {
      icon: Zap,
      title: 'Consulting',
      description: 'Strategic consulting to help you make informed decisions about your digital initiatives.',
      features: [
        'Technology Audit',
        'Digital Strategy',
        'Performance Analysis',
        'Technical Guidance',
        'Market Research',
        'Growth Planning'
      ],
      price: 'Starting at $150/hour',
      color: 'amber',
      gradient: 'from-[color:var(--accent)] via-[color:var(--accent-3)] to-[color:var(--accent-2)]',
      popular: false,
      emoji: '⚡',
      deliveryTime: 'Flexible'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed discussions.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Based on our findings, we create a comprehensive strategy and project timeline that aligns with your objectives.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Our team brings your vision to life with modern design and cutting-edge development techniques.',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures everything works perfectly before we launch your project to the world.',
      icon: '🚀'
    },
    {
      step: '05',
      title: 'Support & Growth',
      description: 'Ongoing maintenance, optimization, and growth strategies to ensure long-term success.',
      icon: '📈'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-40 overflow-hidden grid-surface">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_55%)]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-[color:var(--accent)]/15 to-[color:var(--accent-2)]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[color:var(--accent-2)]/15 to-[color:var(--accent-3)]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[color:var(--accent-3)]/10 to-[color:var(--accent)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[color:var(--accent)]/40 to-[color:var(--accent-2)]/40 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 sm:mb-24 lg:mb-28">
          <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-10 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] rounded-full animate-pulse"></div>
              <Target size={18} className="text-[color:var(--accent)] group-hover:animate-bounce" />
              <span className="text-sm font-semibold text-muted">Professional Services</span>
            </div>
            <div className="w-px h-4 bg-[color:var(--border)]"></div>
            <span className="text-xs text-muted font-medium">Quality Solutions</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme mb-10 leading-tight">
            Services That <span className="gradient-text relative">
              Drive
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[color:var(--accent)]/20 to-[color:var(--accent-2)]/20 -skew-x-12"></div>
            </span>
            <br className="hidden sm:block" />
            <span className="text-[color:var(--accent)]">Success</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            From concept to launch, I provide <span className="font-semibold text-theme">comprehensive digital solutions</span> 
            that help businesses thrive in today's competitive landscape.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-24 sm:mb-28 lg:mb-32">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index} 
                className={`relative group glass rounded-3xl p-8 lg:p-10 backdrop-blur-xl border border-[color:var(--border)] hover:border-[color:var(--accent)]/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in ${
                  service.popular ? 'ring-2 ring-[color:var(--accent)]/30 ring-offset-2 ring-offset-transparent' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 -right-4 z-20">
                    <div className="flex items-center space-x-2 glass rounded-full px-4 py-2 shadow-xl backdrop-blur-xl border border-[color:var(--border)]">
                      <Star size={16} className="text-[color:var(--accent-3)] fill-current animate-pulse" />
                      <span className="text-sm font-bold text-muted">Most Popular</span>
                    </div>
                  </div>
                )}
                
                {/* Header Section */}
                <div className="flex items-start justify-between mb-10">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl relative overflow-hidden`}>
                      <IconComponent size={28} className="text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-theme group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[color:var(--accent)] group-hover:to-[color:var(--accent-2)] transition-all duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="text-2xl">{service.emoji}</span>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} className="text-muted" />
                          <span className="text-sm text-muted font-medium">{service.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Display */}
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                    {hoveredService === index && (
                      <div className="flex space-x-1 mt-2 justify-end">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="text-[color:var(--accent-3)] fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted leading-relaxed mb-10 text-lg">
                  {service.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-10 mb-10">
                  {service.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center text-sm text-muted group-hover:text-muted transition-colors duration-300 p-3 glass rounded-xl hover:bg-[color:var(--bg-elev)]/40"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[color:var(--accent-3)]/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle size={14} className="text-[color:var(--accent-3)]" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className={`group/btn w-full flex items-center justify-center space-x-3 bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 relative overflow-hidden hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--accent)]/40 text-lg`}
                >
                  <span className="relative z-10 tracking-wide">Get Started Today</span>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover/btn:bg-white/30 transition-all duration-300 group-hover/btn:rotate-12">
                    <ArrowRight 
                      size={18} 
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" 
                    />
                  </div>
                  
                  {/* Enhanced Effects */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 right-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  
                  {/* Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover/btn:opacity-40 transition-opacity duration-300 -z-10`}></div>
                </Link>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Process Section */}
        <div className="mb-24 sm:mb-28 lg:mb-32">
          <div className="text-center mb-20 sm:mb-20">
            <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-10 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] rounded-full animate-pulse"></div>
                <Rocket size={18} className="text-[color:var(--accent-2)] group-hover:animate-bounce" />
                <span className="text-sm font-semibold text-muted">Work Process</span>
              </div>
              <div className="w-px h-4 bg-[color:var(--border)]"></div>
              <span className="text-xs text-muted font-medium">5-Step Method</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme mb-10">
              My <span className="gradient-text relative">
                Proven
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[color:var(--accent)]/20 to-[color:var(--accent-2)]/20 -skew-x-12"></div>
              </span> Process
            </h3>
            
            <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              A systematic approach that ensures <span className="font-semibold text-theme">successful delivery</span> 
              and exceptional results for every project.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] transform -translate-x-1/2 rounded-full"></div>
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-3 bg-gradient-to-b from-[color:var(--accent)]/30 via-[color:var(--accent-2)]/30 to-[color:var(--accent-3)]/30 transform -translate-x-1/2 rounded-full blur-sm"></div>
            
            <div className="space-y-16 lg:space-y-24">
              {process.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-16`}
                >
                  {/* Process Card */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="glass rounded-3xl p-8 lg:p-10 backdrop-blur-xl border border-[color:var(--border)] hover:border-[color:var(--accent)]/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                      <div className={`flex items-center space-x-4 mb-6 ${index % 2 === 0 ? 'lg:justify-end lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                        <div className="text-4xl group-hover:animate-bounce transition-all duration-300">
                          {item.icon}
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                          <h4 className="text-2xl font-bold text-theme group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[color:var(--accent)] group-hover:to-[color:var(--accent-2)] transition-all duration-300">
                            {item.title}
                          </h4>
                          <div className="text-sm text-muted font-medium">Step {item.step}</div>
                        </div>
                      </div>
                      
                      <p className="text-muted leading-relaxed text-lg group-hover:text-muted transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className={`mt-6 ${index % 2 === 0 ? 'lg:flex lg:justify-end' : ''}`}>
                        <div className="w-24 h-1 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl hover:scale-110 transition-all duration-300 z-10">
                    <span className="tracking-wider">{item.step}</span>
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Mobile Step Number */}
                  <div className="lg:hidden w-16 h-16 bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl mb-6">
                    {item.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="relative">
          <div className="glass rounded-3xl p-10 lg:p-16 backdrop-blur-xl border border-[color:var(--border)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/6 via-[color:var(--accent-2)]/6 to-[color:var(--accent-3)]/6"></div>
            <div className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-to-r from-[color:var(--accent)]/20 to-[color:var(--accent-2)]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-[color:var(--accent-2)]/20 to-[color:var(--accent-3)]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-10">
                <Sparkles size={18} className="text-[color:var(--accent-3)] animate-pulse" />
                <span className="text-sm font-semibold text-muted">Ready to Start?</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme mb-10">
                Let's Create Something <span className="gradient-text">Amazing</span>
              </h3>
              
              <p className="text-lg sm:text-xl text-muted mb-16 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your ideas into reality? Let's discuss your project and create 
                solutions that drive real business results.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-20">
                <Link
                  href="/contact"
                  className="group relative btn-primary rounded-3xl flex items-center justify-center space-x-4 overflow-hidden px-12 py-6 font-bold text-xl shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-[color:var(--accent)]/30 min-w-[240px]"
                >
                  <span className="relative z-10 tracking-wide">Start Your Project</span>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                    <Rocket size={22} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  
                  {/* Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--accent-2)] to-[color:var(--accent-3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-3 left-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 right-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  
                  <div className="absolute -inset-2 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                </Link>
                
                <Link
                  href="/projects"
                  className="group glass rounded-3xl px-12 py-6 font-bold text-xl text-muted hover:text-theme transition-all duration-500 flex items-center justify-center space-x-4 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[color:var(--border)]/50 min-w-[240px] relative overflow-hidden backdrop-blur-xl border border-[color:var(--border)]"
                >
                  <span className="relative z-10 tracking-wide">View Portfolio</span>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[color:var(--bg-elev)] group-hover:bg-[color:var(--panel)] transition-all duration-300">
                    <Globe size={22} className="text-[color:var(--accent)] group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--accent)]/10 via-[color:var(--accent-2)]/8 to-[color:var(--accent-3)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  { icon: Users, number: '100+', label: 'Happy Clients', color: 'from-[color:var(--accent)] to-[color:var(--accent-3)]' },
                  { icon: Trophy, number: '50+', label: 'Projects Done', color: 'from-[color:var(--accent-3)] to-[color:var(--accent-2)]' },
                  { icon: Star, number: '5.0', label: 'Average Rating', color: 'from-[color:var(--accent-2)] to-[color:var(--accent)]' },
                  { icon: Clock, number: '24/7', label: 'Support', color: 'from-[color:var(--accent)] to-[color:var(--accent-2)]' }
                ].map((stat) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={stat.label} 
                      className="group cursor-pointer"
                    >
                      <div className="glass rounded-3xl p-6 lg:p-8 text-center backdrop-blur-xl border border-[color:var(--border)] hover:border-[color:var(--accent)]/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/10 via-[color:var(--accent-2)]/8 to-[color:var(--accent-3)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                        
                        <div className="relative z-10">
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} text-white rounded-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                            <IconComponent size={24} />
                          </div>
                          
                          <div className="text-3xl font-bold text-theme mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[color:var(--accent)] group-hover:to-[color:var(--accent-2)] transition-all duration-500">
                            {stat.number}
                          </div>
                          
                          <div className="text-sm text-muted font-medium">
                            {stat.label}
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
