"use client";

import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Calendar, Clock, Star, Sparkles, Users, Globe, Rocket, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Option 1: Using EmailJS (Recommended)
      // Uncomment and configure this section after setting up EmailJS
      /*
      const emailjs = (await import('@emailjs/browser')).default;
      
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
          to_email: 'contact@prajjwalparajuli.com.np' // Change this to your actual email
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      */
      
      // Option 2: Using Next.js API Route
      // Uncomment this section if you prefer API route approach
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      */
      
      // Option 3: Using Formspree
      // Uncomment this section if you prefer Formspree
      /*
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      */
      
      // Temporary simulation for demo (remove this in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', service: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

    const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@prajjwalparajuli.com.np', // Change this to your actual email
      subtitle: 'Send me an email',
      link: 'mailto:contact@prajjwalparajuli.com.np', // Change this too
      gradient: 'from-blue-500 to-blue-600',
      emoji: '📧'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+977 9842747572',
      subtitle: 'Call for urgent projects',
      link: 'tel:+9779842747572',
      gradient: 'from-green-500 to-green-600',
      emoji: '📱'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Kathmandu, Nepal',
      subtitle: 'Available for remote work',
      link: 'https://maps.google.com/?q=Kathmandu,Nepal',
      gradient: 'from-purple-500 to-purple-600',
      emoji: '🌍'
    },
    {
      icon: MessageCircle,
      title: 'LinkedIn',
      details: 'Connect with me',
      subtitle: 'Professional networking',
      link: 'https://www.linkedin.com/in/prajjwalparajuli20010215',
      gradient: 'from-blue-600 to-blue-700',
      emoji: '💼'
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'prajjwalparajuli.com.np',
      subtitle: 'Visit my portfolio',
      link: 'https://prajjwalparajuli.com.np',
      gradient: 'from-emerald-500 to-emerald-600',
      emoji: '🌐'
    }
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

  const services = [
    'Web Development',
    'Digital Marketing',
    'UI/UX Design',
    'Consulting',
    'E-commerce Solutions',
    'Other'
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity, but most websites take 2-6 weeks, while larger applications can take 2-4 months. I provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients globally. I\'m available for calls in different time zones and use modern collaboration tools to ensure smooth communication.'
    },
    {
      question: 'What is included in your digital marketing services?',
      answer: 'My digital marketing services include SEO optimization, social media marketing, Google Ads management, content strategy, email marketing, and detailed analytics reporting.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Absolutely! I offer various maintenance packages and am always available for updates, improvements, and technical support after your project launches.'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Redesigned Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/30">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <MessageCircle size={18} className="text-blue-600 group-hover:animate-bounce" />
            <span className="text-sm font-semibold text-gray-700">Get In Touch</span>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="text-xs text-gray-500 font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Work <span className="gradient-text relative inline-block">
              Together
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200/40 to-purple-200/40 -skew-x-12 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? I'd love to hear about your project and 
            <span className="font-semibold text-gray-800"> help bring your vision to life</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Enhanced Contact Form */}
          <div className="xl:col-span-3">
            <div className="glass rounded-2xl p-8 lg:p-10 xl:p-12 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-purple-600/3 to-pink-600/3"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Send size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      Send Me a Message
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">Let's discuss your project in detail</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-3">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-4 glass rounded-xl border-2 transition-all duration-300 text-base font-medium ${
                            focusedField === 'name' 
                              ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.01]' 
                              : 'border-gray-200/50 hover:border-gray-300/70'
                          }`}
                          placeholder="Your full name"
                        />
                        {focusedField === 'name' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none"></div>
                        )}
                      </div>
                    </div>
                    
                    <div className="group space-y-3">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-4 glass rounded-xl border-2 transition-all duration-300 text-base font-medium ${
                            focusedField === 'email' 
                              ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.01]' 
                              : 'border-gray-200/50 hover:border-gray-300/70'
                          }`}
                          placeholder="your@email.com"
                        />
                        {focusedField === 'email' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Service and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-3">
                      <label htmlFor="service" className="block text-sm font-bold text-gray-700">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-4 glass rounded-xl border-2 transition-all duration-300 text-base font-medium ${
                            focusedField === 'service' 
                              ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.01]' 
                              : 'border-gray-200/50 hover:border-gray-300/70'
                          }`}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {focusedField === 'service' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none"></div>
                        )}
                      </div>
                    </div>
                    
                    <div className="group space-y-3">
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700">
                        Project Subject *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-4 glass rounded-xl border-2 transition-all duration-300 text-base font-medium ${
                            focusedField === 'subject' 
                              ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.01]' 
                              : 'border-gray-200/50 hover:border-gray-300/70'
                          }`}
                          placeholder="Brief project title"
                        />
                        {focusedField === 'subject' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group space-y-3">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                      Project Details & Requirements *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        className={`w-full px-4 py-4 glass rounded-xl border-2 transition-all duration-300 resize-none text-base font-medium ${
                          focusedField === 'message' 
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.01]' 
                            : 'border-gray-200/50 hover:border-gray-300/70'
                        }`}
                        placeholder="Tell me about your project goals, timeline, budget range, specific requirements, and any other details that would help me understand your needs better..."
                      />
                      {focusedField === 'message' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none"></div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full rounded-2xl py-4 px-8 font-bold text-lg flex items-center justify-center gap-3 relative overflow-hidden shadow-xl transition-all duration-500 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'btn-primary hover:shadow-blue-500/30 hover:scale-[1.02] hover:-translate-y-1'
                      }`}
                    >
                      <div className={`relative z-10 flex items-center justify-center w-8 h-8 bg-white/20 rounded-full transition-all duration-300 ${
                        isSubmitting ? '' : 'group-hover:bg-white/30 group-hover:rotate-12'
                      }`}>
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        )}
                      </div>
                      <span className="relative z-10 tracking-wide">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      
                      {/* Button Effects */}
                      {!isSubmitting && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mt-8 glass rounded-2xl p-6 border-2 border-green-300/50 bg-green-50/50 backdrop-blur-xl animate-fade-in">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-green-800 text-lg">Message sent successfully!</p>
                        <p className="text-green-700 text-sm">I'll get back to you within 24 hours. Thank you for reaching out!</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mt-8 glass rounded-2xl p-6 border-2 border-red-300/50 bg-red-50/50 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-red-800 text-lg">Oops! Something went wrong</p>
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="xl:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="glass rounded-2xl p-6 lg:p-8 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quick Contact</h3>
                  <p className="text-gray-600 text-sm">Direct ways to reach me</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="group flex items-center gap-4 p-4 glass rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm border border-white/20 hover:border-white/30"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                      
                      <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10`}>
                        <IconComponent size={18} className="text-white" />
                      </div>
                      
                      <div className="flex-1 relative z-10 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 truncate">
                            {info.title}
                          </h4>
                          <span className="text-lg opacity-60 group-hover:animate-bounce flex-shrink-0">
                            {info.emoji}
                          </span>
                        </div>
                        <p className="text-gray-800 font-semibold text-xs truncate">{info.details}</p>
                        <p className="text-gray-600 text-xs truncate">{info.subtitle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Response Time */}
              <div className="mt-8 pt-6 border-t border-gray-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Clock size={16} className="text-blue-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Response Time</h4>
                </div>
                <div className="glass rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-900">Usually within 2-6 hours</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    I typically respond to all inquiries very quickly. For urgent projects, 
                    feel free to call me directly for immediate assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced FAQ */}
            <div className="glass rounded-2xl p-6 lg:p-8 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quick FAQ</h3>
                  <p className="text-gray-600 text-sm">Common questions</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30">
                      <span className="font-semibold text-gray-900 text-sm pr-2">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-gray-600 rotate-45 transform translate-y-0.5"></div>
                      </div>
                    </summary>
                    <div className="mt-3 px-4 pb-4">
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="glass rounded-2xl p-8 lg:p-12 text-center backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-purple-600/3 to-pink-600/3"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8">
                <Rocket size={18} className="text-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Ready to Start?</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Prefer a <span className="gradient-text">Quick Chat</span>?
              </h3>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Sometimes a quick conversation can clarify everything. I'm available for 
                <span className="font-semibold text-gray-800"> a 15-minute consultation</span> to discuss your project needs and answer any questions.
              </p>
              
              <a
                href="tel:+9779842747572"
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-green-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-500/30 relative overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                  <Phone size={18} />
                </div>
                <span className="relative z-10 tracking-wide">Schedule a Call</span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-emerald-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;