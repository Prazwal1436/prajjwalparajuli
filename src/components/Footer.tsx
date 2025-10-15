"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin, Heart, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];

  const services = [
    'Web Development',
    'Digital Marketing',
    'UI/UX Design',
    'Consulting',
    'E-commerce Solutions'
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/prazwalparazuli',
      icon: <Facebook size={20} />,
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      href: 'https://www.linkedin.com/in/prajjwalparajuli20010215',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      href: 'https://x.com/Prazzwal8',
      icon: <Twitter size={20} />,
      label: 'X (Twitter)',
      color: 'hover:text-gray-900'
    },
    {
      href: 'https://github.com/Prazwal1436',
      icon: <Github size={20} />,
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    {
      href: 'https://www.instagram.com/prazwal_parazuli/',
      icon: <Instagram size={20} />,
      label: 'Instagram',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Section - Enhanced */}
            <div className="lg:col-span-5 space-y-8">
              {/* Logo and Brand */}
              <div className="space-y-6">
                <Link href="/" className="inline-flex items-center space-x-4 group">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                        <Image
                          src="/prajjwal.png"
                          alt="Prajjwal Parajuli"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                          quality={90}
                        />
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Prajjwal Parajuli
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">Full Stack Developer</p>
                  </div>
                </Link>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Creating innovative digital solutions that drive business growth and deliver exceptional user experiences. Specialized in modern web technologies and digital marketing.
                </p>

                {/* Location Badge */}
                <div className="inline-flex items-center space-x-3 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-500/10 rounded-lg">
                    <MapPin size={16} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Kathmandu, Nepal</p>
                    <p className="text-xs text-gray-400">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* Social Links - Enhanced */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative p-3.5 bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700/50 hover:border-gray-600 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <div className={`text-gray-400 transition-colors duration-300 ${social.color}`}>
                        {social.icon}
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-gray-700">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider relative inline-block">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider relative inline-block">
                  Services
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 col-span-2 md:col-span-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider relative inline-block">
                  Get In Touch
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="mailto:prajjwalparajuli@example.com" 
                      className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <div className="flex items-center justify-center w-9 h-9 bg-gray-800/50 border border-gray-700/50 rounded-lg group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors duration-300">
                        <Mail size={16} />
                      </div>
                      <span className="text-sm">Email Me</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://prajjwalparajuli.com.np" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <div className="flex items-center justify-center w-9 h-9 bg-gray-800/50 border border-gray-700/50 rounded-lg group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors duration-300">
                        <Globe size={16} />
                      </div>
                      <span className="text-sm">Visit Website</span>
                    </a>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 mt-4"
                >
                  <span>Start a Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} Prajjwal Parajuli.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse hidden sm:inline" />
              <span className="hidden sm:inline">in Nepal</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;