"use client";

import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Sparkles, Download, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const words = [
    'USA Outsourcing Partner',
    'Full Stack Developer',
    'Digital Marketing Expert',
    'Remote US Hours Support',
    'AI Automation Lead',
    'Growth Marketing Strategist',
    'Enterprise Integration Partner'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pre-generate particle positions on client to prevent SSR/client mismatch
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate deterministic particle data only on client
    const generated = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Mouse Cursor Effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <MapPin size={16} className="text-blue-600" />
              <span className="text-gray-700">US-focused outsourcing • Based in Nepal</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-fluid-5xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text relative">
                  Prajjwal
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
                </span>
              </h1>
              
              <div className="text-fluid-2xl text-gray-700 leading-relaxed">
                I'm a{' '}
                <span className="relative inline-block">
                  <span className="gradient-text font-semibold">
                    {text}
                  </span>
                  <span className="animate-pulse ml-1 text-blue-600 font-bold">|</span>
                </span>
              </div>
              
              <p className="text-fluid-lg text-gray-600 leading-relaxed max-w-2xl">
                Outsource your business with us at lower cost. I help US companies ship 
                React, Next.js, and Node.js products from Nepal with American time zone support, 
                40% savings, and enterprise-level delivery standards.
              </p>
            </div>

            {/* Enhanced Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                { skill: 'React', icon: '⚛️' },
                { skill: 'Next.js', icon: '▲' },
                { skill: 'TypeScript', icon: '📘' },
                { skill: 'Digital Marketing', icon: '📈' },
                { skill: 'SEO', icon: '🔍' },
                { skill: 'UI/UX', icon: '🎨' }
              ].map(({ skill, icon }, index) => (
                <span
                  key={skill}
                  className="group glass rounded-2xl px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="mr-2 group-hover:animate-bounce inline-block">{icon}</span>
                  {skill}
                </span>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="group relative btn-primary rounded-2xl flex items-center justify-center space-x-2 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group glass rounded-2xl px-8 py-4 font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 text-center flex items-center justify-center space-x-2 hover:scale-105"
              >
                <Sparkles size={18} className="group-hover:animate-spin" />
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { href: 'https://github.com/prajjwalparajuli', icon: Github, color: 'hover:text-gray-900 hover:bg-gray-100' },
                { href: 'https://linkedin.com/in/prajjwalparajuli', icon: Linkedin, color: 'hover:text-blue-600 hover:bg-blue-50' },
                { href: 'mailto:prajjwalparajuli@example.com', icon: Mail, color: 'hover:text-red-600 hover:bg-red-50' }
              ].map(({ href, icon: Icon, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 text-gray-600 glass rounded-2xl transition-all duration-300 ${color} hover:scale-110 hover:-translate-y-1`}
                >
                  <Icon size={24} className="group-hover:animate-pulse" />
                </a>
              ))}
              <div className="h-8 w-px bg-gray-300 mx-2"></div>
              <a
                href="/resume.pdf"
                download
                className="group glass rounded-2xl px-6 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '300ms' }}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Main Profile Container */}
              <div className="relative w-full h-full">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full p-1 animate-gradient">
                  <div className="w-full h-full bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-full p-3">
                    <div className="w-full h-full rounded-full overflow-hidden relative group">
                      <Image
                        src="/prajjwal.png"
                        alt="Prajjwal Parajuli - Profile"
                        width={384}
                        height={384}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        priority
                        quality={95}
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110 animate-float">
                <div className="text-2xl sm:text-3xl">⚡</div>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl sm:text-3xl">💻</div>
              </div>
              <div className="absolute top-1/2 -right-6 sm:-right-8 lg:-right-10 glass rounded-full p-3 sm:p-4 shadow-2xl animate-float hover:scale-110 transition-all duration-300" style={{ animationDelay: '2s' }}>
                <div className="text-xl sm:text-2xl">🚀</div>
              </div>
              <div className="absolute top-16 sm:top-20 -left-4 sm:-left-6 lg:-left-8 glass rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl animate-float hover:scale-110 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
                <Star size={16} className="text-yellow-500 sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Enhanced Stats Card */}
            <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 transform -translate-x-1/2 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl animate-scale-in w-[280px] sm:w-auto" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center justify-between sm:space-x-8 space-x-4">
                {[
                  { number: '50+', label: 'Projects', color: 'text-blue-600' },
                  { number: '100+', label: 'Happy Clients', color: 'text-purple-600' },
                  { number: '3+', label: 'Years Exp', color: 'text-green-600' }
                ].map(({ number, label, color }, index) => (
                  <div key={label} className="text-center group cursor-pointer">
                    <div className={`text-2xl font-bold ${color} group-hover:scale-110 transition-transform duration-300`}>
                      {number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="absolute top-6 left-6 glass rounded-full px-4 py-2 shadow-lg animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-medium text-gray-700">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="glass rounded-full p-3 shadow-lg">
            <ChevronDown size={24} className="text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;