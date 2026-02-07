'use client';

import { Shield, Award, Users, Clock, Star, CheckCircle, Globe, MessageCircle } from 'lucide-react';

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
    <section className="py-24 lg:py-40 grid-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-[color:var(--accent-3)]" />
            <h2 className="text-3xl font-bold text-theme">Trusted by Businesses Worldwide</h2>
          </div>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Join 150+ satisfied clients who saved thousands while getting premium quality development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-[color:var(--panel)] border border-[color:var(--border)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-[color:var(--accent)]" />
                </div>
                <div className="text-3xl font-bold text-theme mb-1">{stat.value}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="bg-[color:var(--panel)] rounded-2xl p-8 mb-20 border border-[color:var(--border)]">
          <h3 className="text-2xl font-bold text-center text-theme mb-10">Our Guarantees</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[color:var(--bg-elev)] rounded-xl p-6 shadow-md border border-[color:var(--border)]">
                    <div className="bg-[color:var(--accent-3)]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-[color:var(--accent-3)]" />
                    </div>
                    <h4 className="font-semibold text-theme mb-2">{guarantee.title}</h4>
                    <p className="text-sm text-muted">{guarantee.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials with Savings */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-theme mb-10">Client Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[color:var(--bg-elev)] rounded-xl shadow-lg p-6 border border-[color:var(--border)]">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[color:var(--accent-3)] text-[color:var(--accent-3)]" />
                  ))}
                </div>
                
                {/* Savings Badge */}
                <div className="bg-[color:var(--accent-3)]/15 text-[color:var(--accent-3)] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Saved {testimonial.savings}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-theme">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                  <div className="text-sm text-[color:var(--accent)] font-medium mt-1">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-[color:var(--panel)] rounded-2xl p-8 mb-20 border border-[color:var(--border)]">
          <h3 className="text-2xl font-bold text-center text-theme mb-10">Certifications & Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[color:var(--bg-elev)] rounded-lg p-4 text-center shadow-sm border border-[color:var(--border)]">
                <div className="bg-[color:var(--accent)]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-[color:var(--accent)]" />
                </div>
                <h4 className="font-semibold text-theme text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Payment */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-theme mb-6">Secure & Flexible Payments</h3>
          <div className="flex items-center justify-center gap-10 mb-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[color:var(--accent-3)]" />
                <span className="text-muted font-medium">{method.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-10 text-sm text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[color:var(--accent-3)]" />
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[color:var(--accent-3)]" />
              <span>Milestone Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[color:var(--accent-3)]" />
              <span>Escrow Available</span>
            </div>
          </div>
        </div>

        {/* Risk-Free CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Save 80-90% on Development Costs?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 150+ businesses that chose quality without the premium price
            </p>
            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <a
                href="#contact"
                className="bg-[color:var(--bg-elev)] text-[color:var(--accent)] px-10 py-4 rounded-lg font-semibold hover:bg-[color:var(--panel)] transition-colors"
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
