'use client';

import { Shield, Award, Users, Clock, Star, CheckCircle, Globe, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function TrustSignals() {
  const stats = [
    { icon: Users, value: '150+', label: 'Happy Clients' },
    { icon: Award, value: '200+', label: 'Projects Completed' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Globe, value: '25+', label: 'Countries Served' }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: 'Money-Back Guarantee',
      description: '100% refund if not satisfied within 7 days'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Project delivered on schedule or get 20% discount'
    },
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: '30-minute strategy call to discuss your project'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing and code review process'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder, California',
      content: 'Saved our startup $12,000 on development costs. Same quality as expensive agencies but fraction of the price!',
      rating: 5,
      savings: '$12,000',
      project: 'E-commerce Platform'
    },
    {
      name: 'Mike Chen',
      role: 'Small Business Owner, Texas',
      content: 'Incredible value! Got a professional website for $599 instead of the $3,500 quoted by local developers.',
      rating: 5,
      savings: '$2,901',
      project: 'Business Website'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Marketing Director, New York',
      content: 'Quality work, great communication, and unbeatable prices. Will definitely hire again for future projects.',
      rating: 5,
      savings: '$8,500',
      project: 'Web Application'
    }
  ];

  const certifications = [
    { name: 'React Certified Developer', issuer: 'Meta', year: '2024' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2024' },
    { name: 'Google Ads Certified', issuer: 'Google', year: '2024' },
    { name: 'Advanced JavaScript', issuer: 'Codecademy', year: '2023' }
  ];

  const paymentMethods = [
    { name: 'PayPal', secure: true },
    { name: 'Stripe', secure: true },
    { name: 'Wise', secure: true },
    { name: 'Bank Transfer', secure: true }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Businesses Worldwide</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 150+ satisfied clients who saved thousands while getting premium quality development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Guarantees</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{guarantee.title}</h4>
                    <p className="text-sm text-gray-600">{guarantee.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials with Savings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Client Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Savings Badge */}
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Saved {testimonial.savings}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Certifications & Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-600">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Payment */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Secure & Flexible Payments</h3>
          <div className="flex items-center justify-center gap-8 mb-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">{method.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Milestone Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Escrow Available</span>
            </div>
          </div>
        </div>

        {/* Risk-Free CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Save 80-90% on Development Costs?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 150+ businesses that chose quality without the premium price
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project - Risk Free
              </a>
              <div className="text-sm opacity-90">
                💰 Money-back guarantee • 🚀 Free consultation • ⚡ 24h response
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}