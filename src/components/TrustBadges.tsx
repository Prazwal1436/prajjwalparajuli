'use client';

import { Shield, Clock, Star, Award, CheckCircle, Users, Globe } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Money-Back Guarantee',
      subtitle: '100% Risk-Free',
      color: 'text-[color:var(--accent-3)]'
    },
    {
      icon: Clock,
      title: '24 Hour Response',
      subtitle: 'Fast Communication',
      color: 'text-[color:var(--accent)]'
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      subtitle: '150+ Reviews',
      color: 'text-[color:var(--accent-2)]'
    },
    {
      icon: Award,
      title: 'Certified Developer',
      subtitle: 'AWS & Google Certified',
      color: 'text-[color:var(--accent-2)]'
    },
    {
      icon: Users,
      title: '150+ Happy Clients',
      subtitle: 'Worldwide Success',
      color: 'text-[color:var(--accent)]'
    },
    {
      icon: Globe,
      title: 'USA Time Zone',
      subtitle: 'Business Hours Support',
      color: 'text-[color:var(--accent-3)]'
    }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-theme mb-3">
            Trusted by Businesses Worldwide
          </h3>
          <p className="text-lg text-muted">
            Join 150+ satisfied clients who saved thousands on development costs
          </p>
        </div>
        
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="border border-[color:var(--border)] bg-[color:var(--panel)] rounded-2xl p-6 text-center transition-transform hover:scale-105 hover:shadow-lg glow-ring"
              >
                <div className={`flex justify-center mb-3 ${badge.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="font-semibold text-md mb-1 text-theme">{badge.title}</div>
                <div className="text-sm text-muted">{badge.subtitle}</div>
              </div>
            );
          })}
        </div>
        
        {/* Security Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 text-md text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[color:var(--accent-3)]" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[color:var(--accent-3)]" />
              <span>PayPal Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[color:var(--accent-3)]" />
              <span>Escrow Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[color:var(--accent-3)]" />
              <span>NDA Signing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
