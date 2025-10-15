"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, Zap, Home, User, Briefcase, Settings, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/services', label: 'Services', icon: Settings },
    { href: '/contact', label: 'Contact', icon: MessageCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Modern Logo Design */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-2xl p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/prajjwal.png"
                    alt="Prajjwal Parajuli"
                    width={44}
                    height={44}
                    className="rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
                Prajjwal
              </h1>
              <p className="text-xs text-gray-500 font-medium -mt-1">Full Stack Developer</p>
            </div>
          </Link>

          {/* Modern Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center space-x-3 px-4 xl:px-6 py-3.5 rounded-xl font-semibold transition-all duration-500 min-w-[100px] xl:min-w-[110px] justify-center ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-xl shadow-indigo-500/25'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <IconComponent size={19} className={`${isActive ? 'text-white' : 'text-gray-500 group-hover:text-indigo-500'} transition-all duration-300 ${isActive ? 'drop-shadow-sm' : ''}`} />
                  <span className="text-sm font-bold tracking-wide">{item.label}</span>
                  {isActive && (
                    <>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-700/20 rounded-xl blur-xl -z-10"></div>
                    </>
                  )}
                  {!isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/70 via-purple-50/50 to-blue-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-8 transition-all duration-500 rounded-full"></div>
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Professional CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center space-x-2 lg:space-x-3 px-4 lg:px-6 py-3.5 text-gray-700 hover:text-indigo-600 bg-white border-2 border-gray-200 hover:border-indigo-300 rounded-2xl transition-all duration-500 font-bold group hover:shadow-xl hover:scale-105 relative overflow-hidden min-w-[120px] lg:min-w-[140px] justify-center"
            >
              <div className="relative">
                <Download size={18} className="group-hover:animate-bounce transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-bold tracking-wide">Resume</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </a>
            
            {/* Premium Primary CTA */}
            <Link
              href="/contact"
              className="relative flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-800 text-white px-6 lg:px-8 py-3.5 rounded-2xl font-bold transition-all duration-500 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-600/40 hover:scale-110 group overflow-hidden min-w-[130px] lg:min-w-[150px] justify-center"
            >
              <div className="relative z-10 flex items-center space-x-3">
                <Zap size={18} className="group-hover:animate-pulse group-hover:scale-110 transition-all duration-300 drop-shadow-sm" />
                <span className="text-sm font-bold tracking-wide">Let's Talk</span>
              </div>
              
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-2 left-6 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
              </div>
              
              {/* Shimmer wave */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
              
              {/* Button glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
              
              {/* Success indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </Link>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3.5 text-gray-700 hover:text-indigo-600 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 rounded-2xl transition-all duration-500 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X size={22} className="group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={22} className="group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              {/* Button indicator */}
              <div className={`absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}></div>
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 ${
          isMenuOpen ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`} style={{ zIndex: 40 }}>
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 mt-6 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 rounded-full blur-2xl -z-10"></div>
            
            {/* Menu header */}
            <div className="text-center pb-6 border-b border-gray-200/60">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl px-6 py-3">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-700 tracking-wider">NAVIGATION MENU</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Enhanced Mobile Navigation */}
            <nav className="space-y-3 mb-8">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center space-x-4 px-6 py-4 rounded-2xl font-bold transition-all duration-500 relative overflow-hidden ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-xl shadow-indigo-500/30'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 hover:shadow-md'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      <IconComponent size={22} className={`${isActive ? 'text-white drop-shadow-sm' : 'text-gray-400 group-hover:text-indigo-500'} transition-all duration-300`} />
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <span className="text-base font-bold tracking-wide flex-1">{item.label}</span>
                    
                    {isActive && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="text-xs bg-white/20 rounded-full px-2 py-1 font-bold">ACTIVE</div>
                      </div>
                    )}
                    
                    {!isActive && (
                      <div className="w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-6 transition-all duration-500 rounded-full"></div>
                    )}
                    
                    {/* Enhanced hover effects */}
                    {!isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/30 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </>
                    )}
                    
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-700/20 rounded-2xl blur-xl -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Enhanced Mobile CTA Buttons */}
            <div className="space-y-4 pt-8 border-t border-gray-200/80">
              {/* Mobile action header */}
              <div className="text-center pb-2">
                <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-600 tracking-wide">QUICK ACTIONS</span>
                </div>
              </div>
              
              {/* Enhanced Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center space-x-3 w-full px-6 py-4 text-gray-700 hover:text-indigo-600 bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-indigo-300 rounded-2xl font-bold hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="relative">
                  <Download size={20} className="group-hover:animate-bounce transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                </div>
                <span className="text-sm font-bold tracking-wide">Download Resume</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </a>
              
              {/* Enhanced Primary CTA */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="relative flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-800 text-white px-6 py-4 rounded-2xl font-bold shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-600/50 transition-all duration-500 group overflow-hidden hover:scale-105"
              >
                <div className="relative z-10 flex items-center space-x-3">
                  <Zap size={20} className="group-hover:animate-pulse group-hover:scale-110 transition-all duration-300 drop-shadow-sm" />
                  <span className="text-sm font-bold tracking-wide">Let's Work Together</span>
                </div>
                
                {/* Enhanced background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Shimmer wave */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                
                {/* Button glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
    
  );
};

export default Header;