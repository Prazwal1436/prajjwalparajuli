'use client';

import { Shield, Clock, Star, Award, CheckCircle, Users, Globe } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Money-Back Guarantee',
      subtitle: '100% Risk-Free',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      icon: Clock,
      title: '24 Hour Response',
      subtitle: 'Fast Communication',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      subtitle: '150+ Reviews',
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200'
    },
    {
      icon: Award,
      title: 'Certified Developer',
      subtitle: 'AWS & Google Certified',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      icon: Users,
      title: '150+ Happy Clients',
      subtitle: 'Worldwide Success',
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      icon: Globe,
      title: 'USA Time Zone',
      subtitle: 'Business Hours Support',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Trusted by Businesses Worldwide
          </h3>
          <p className="text-lg text-gray-600">
            Join 150+ satisfied clients who saved thousands on development costs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className={`border rounded-xl p-6 text-center transition-transform hover:scale-105 hover:shadow-lg ${badge.color}`}
              >
                <div className="flex justify-center mb-3">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="font-semibold text-md mb-1">{badge.title}</div>
                <div className="text-sm opacity-75">{badge.subtitle}</div>
              </div>
            );
          })}
        </div>
        
        {/* Security Indicators */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-8 text-md text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>PayPal Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Escrow Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>NDA Signing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}