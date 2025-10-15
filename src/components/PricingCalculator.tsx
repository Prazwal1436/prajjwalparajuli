// Pricing Calculator Component
'use client';

import { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, CheckCircle, Zap, Star, Shield, Clock } from 'lucide-react';

type ProjectType = 'website' | 'ecommerce' | 'webapp' | 'mobile';
type Complexity = 'basic' | 'standard' | 'complex';

export default function PricingCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>('website');
  const [complexity, setComplexity] = useState<Complexity>('basic');

  const usaRates: Record<ProjectType, Record<Complexity, number>> = {
    website: { basic: 3000, standard: 6000, complex: 12000 },
    ecommerce: { basic: 8000, standard: 15000, complex: 25000 },
    webapp: { basic: 15000, standard: 35000, complex: 75000 },
    mobile: { basic: 20000, standard: 50000, complex: 120000 }
  };

  const myRates: Record<ProjectType, Record<Complexity, number>> = {
    website: { basic: 599, standard: 1299, complex: 2999 },
    ecommerce: { basic: 1499, standard: 3499, complex: 6999 },
    webapp: { basic: 2999, standard: 7999, complex: 17999 },
    mobile: { basic: 3999, standard: 9999, complex: 24999 }
  };

  const usaPrice = usaRates[projectType][complexity];
  const myPrice = myRates[projectType][complexity];
  const savings = usaPrice - myPrice;
  const savingsPercent = Math.round((savings / usaPrice) * 100);

  const projectTypes = [
    { 
      id: 'website' as ProjectType, 
      name: 'Business Website', 
      icon: '🌐',
      description: 'Professional business presence',
      features: ['Responsive Design', 'SEO Optimized', 'Contact Forms']
    },
    { 
      id: 'ecommerce' as ProjectType, 
      name: 'E-commerce Store', 
      icon: '🛒',
      description: 'Online store with payments',
      features: ['Product Catalog', 'Payment Gateway', 'Admin Dashboard']
    },
    { 
      id: 'webapp' as ProjectType, 
      name: 'Web Application', 
      icon: '💻',
      description: 'Custom functionality & features',
      features: ['User Authentication', 'Database Integration', 'Custom Features']
    },
    { 
      id: 'mobile' as ProjectType, 
      name: 'Mobile App', 
      icon: '📱',
      description: 'iOS & Android applications',
      features: ['Cross Platform', 'App Store Ready', 'Push Notifications']
    }
  ];

  const complexityLevels = [
    { 
      id: 'basic' as Complexity, 
      name: 'Basic', 
      description: 'Essential features & simple design',
      timeline: '1-2 weeks',
      pages: '3-5 pages',
      color: 'from-green-500 to-green-600'
    },
    { 
      id: 'standard' as Complexity, 
      name: 'Standard', 
      description: 'Advanced features & custom design',
      timeline: '2-4 weeks',
      pages: '6-12 pages',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 'complex' as Complexity, 
      name: 'Complex', 
      description: 'Enterprise-level custom functionality',
      timeline: '4-8 weeks',
      pages: '12+ pages',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const guarantees = [
    { icon: Shield, text: '100% Money-Back Guarantee' },
    { icon: Clock, text: '24-Hour Response Time' },
    { icon: Star, text: '4.9/5 Client Satisfaction' },
    { icon: Zap, text: 'Lightning Fast Delivery' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 mb-6">
            <Calculator className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-gray-900">Savings Calculator</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Incredible Savings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate exactly how much you'll save with our ultra-competitive pricing. 
            <span className="font-semibold text-blue-600"> 85-93% cheaper</span> than USA developers!
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          {/* Project Type Selection */}
          <div className="mb-12 w-full">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 flex justify-center items-center">
              What type of project do you need?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    projectType === type.id
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg shadow-blue-500/25'
                      : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{type.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-1">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-center gap-1 text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {projectType === type.id && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Selected
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Complexity Selection */}
          <div className="mb-12 w-full">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 flex justify-center items-center">
              Choose your project complexity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
              {complexityLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setComplexity(level.id)}
                  className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                    complexity === level.id
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg shadow-blue-500/25'
                      : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${level.color} text-white text-sm font-medium mb-4`}>
                    {level.name}
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{level.description}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>Timeline: {level.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calculator className="h-4 w-4 text-blue-500" />
                      <span>Scope: {level.pages}</span>
                    </div>
                  </div>
                  {complexity === level.id && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Selected
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12 w-full">
            {/* Price Comparison */}
            <div className="grid lg:grid-cols-3 gap-8 mb-10 items-center justify-items-center w-full">
              {/* USA Price */}
              <div className="text-center w-full max-w-xs">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200 w-full">
                  <div className="text-red-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    USA Developer Price
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                    ${usaPrice.toLocaleString()}
                  </div>
                  <div className="text-sm text-red-500">
                    Typical market rate
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="flex items-center justify-center w-full">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  VS
                </div>
              </div>

              {/* My Price */}
              <div className="text-center w-full max-w-xs">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 w-full">
                  <div className="text-green-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    My Price
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                    ${myPrice.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-500">
                    Same quality, better price
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="text-center mb-10 flex justify-center items-center w-full">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-2xl shadow-xl">
                <TrendingDown className="h-8 w-8" />
                <div>
                  <div className="text-sm font-medium opacity-90">Your Total Savings</div>
                  <div className="text-3xl lg:text-4xl font-bold">
                    ${savings.toLocaleString()}
                  </div>
                  <div className="text-lg font-semibold">
                    ({savingsPercent}% OFF!)
                  </div>
                </div>
                <Zap className="h-8 w-8" />
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 w-full max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon;
                return (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{guarantee.text}</span>
                  </div>
                );
              })}
            </div>

            {/* What You Get */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 w-full max-w-4xl mx-auto">
              <h4 className="font-bold text-lg text-gray-900 mb-4 text-center flex justify-center items-center">
                What You Get for ${myPrice.toLocaleString()}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Professional, modern design',
                  'Mobile-responsive layout',
                  'SEO optimization included',
                  'Fast loading performance',
                  'Security best practices',
                  '30 days free support',
                  'Source code ownership',
                  'Money-back guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center flex flex-col items-center justify-center w-full">
              <div className="mb-6 flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Save ${savings.toLocaleString()}?
                </h4>
                <p className="text-gray-600">
                  Join 150+ businesses that chose quality without the premium price
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <DollarSign className="h-5 w-5" />
                  Get Started & Save {savingsPercent}%
                  <Zap className="h-5 w-5 group-hover:animate-pulse" />
                </a>
                
                <div className="text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-lg">
                  💰 Free consultation • ⚡ 24h response • 🛡️ Money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}