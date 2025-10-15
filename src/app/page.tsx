import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import TrustSignals from '@/components/TrustSignals';
import PricingCalculator from '@/components/PricingCalculator';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BlogJsonLd from '@/components/BlogJsonLd';
import ReviewsJsonLd from '@/components/ReviewsJsonLd';
import FAQJsonLd from '@/components/FAQJsonLd';

const SITE_URL = 'https://prajjwalparajuli.com.np';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Prajjwal Parajuli - Premium Full Stack Developer USA | $50/hr Professional React Next.js Node.js Services | Save 40% | 150+ Happy Clients',
  description: 'Premium full-stack development at competitive rates! Professional React, Next.js, Node.js developer from Nepal serving USA businesses. Starting at $50/hour - Save 40% compared to local USA developers while getting the same quality. 150+ happy clients, money-back guarantee, 24h response time. Professional, reliable, high-quality web development services for businesses and enterprises.',
  keywords: [
    // Core Identity + Brand
    'Prajjwal Parajuli',
    'Prazwal Parazuli',
    'Prajwal Parajuli',
    'Prajwal Parajuli Nepal',
    'Prajwal Parajuli Kathmandu',
    'Prajwal Parajuli Freelance Developer',
    'Prajwal Parajuli Remote Developer',
    'Prajwal Parajuli Online Developer',
    'Prajwal Parajuli Virtual Developer',
    'Prajjwal Parajuli Developer',
    'Prajjwal Parajuli Portfolio',
    'Prajjwal Parajuli Nepal',
    'Prajjwal Parajuli Web Developer',
    'Prajjwal Parajuli React Developer',
    'Prajjwal Parajuli Full Stack',
    
    // Ultra-Competitive Pricing Keywords
    'Premium Full Stack Developer USA',
    'Professional React Developer $50 hour',
    '$50 hour Web Developer USA',
    'Competitive Web Developer USA',
    'Quality Web Developer USA',
    'Professional Price React Developer',
    'Premium Frontend Developer USA',
    'Professional Backend Developer USA',
    'Quality JavaScript Developer USA',
    'Professional TypeScript Developer',
    'Premium Next.js Developer USA',
    'Professional Node.js Developer',
    'Premium Full Stack Developer',
    'Professional MERN Stack Developer',
    'Quality Web Developer USA',
    'Competitive Web Development USA',
    'Professional Price Developer USA',
    'Premium Web Developer USA',
    'Value Web Developer USA',
    
    // Specific Price Point Keywords
    '$50 hour React Developer',
    '$50 hour Full Stack Developer',
    '$50 per hour Web Developer',
    '$45 hour Website Developer',
    '$55 hour JavaScript Developer',
    'Under $60 Web Developer USA',
    'Under $75 Developer USA',
    'Under $100 Full Stack Developer',
    'Professional Rate Developer',
    'Competitive Rate Developer',
    
    // Price Comparison & Savings Keywords
    'Better Value Than USA Developers',
    'Competitive Alternative Local Developers',
    'Professional Alternative Expensive Developers',
    'Save Money Web Development USA',
    'High Quality Professional Developer',
    '40% Cheaper Than USA Developers',
    '35-45% Cost Savings Web Development',
    'Same Quality Better Price Developer',
    'Premium Quality Competitive Price',
    'High Quality Professional Developer',
    'Professional Premium Developer USA',
    'Expert Professional Developer USA',
    'Skilled Professional Developer',
    'Cost Effective Professional Web Developer',
    'Value Premium Developer USA',
    'Competitive Rate Developer USA',
    'Professional Price Developer',
    
    // Remote Work + Professional Focus
    'Premium Remote Developer USA',
    'Professional Remote React Developer',
    'Quality Remote Full Stack Developer',
    'Professional Remote JavaScript Developer',
    'Premium Remote TypeScript Developer',
    'Professional Remote Next.js Developer',
    'Quality Remote Node.js Developer',
    'Premium Remote MERN Developer',
    'Professional Remote Developer',
    'Quality Remote Development',
    'Premium Remote Developer USA',
    'Professional Remote Developer',
    
    // Outsourcing + International Keywords
    'Professional Outsource Development USA',
    'Quality Offshore Developer USA',
    'Professional Outsource Web Development',
    'Quality Offshore Programming',
    'Professional Development Services Nepal',
    'Quality Web Development Outsourcing',
    'Professional Offshore React Developer',
    'Quality International Developer',
    'Nepal Web Developer USA',
    'South Asian Developer USA',
    'Asian Developer Professional Price',
    'International Professional Developer',
    'Global Premium Developer',
    'Worldwide Professional Developer',
    'Cross Border Developer Services',
    'International Developer Competitive Rate',
    
    // Small Business & Startup Focus
    'Professional Developer Small Business USA',
    'Quality Website Developer Startup',
    'Professional Developer Entrepreneurs',
    'Quality Website Small Business',
    'Professional Web Development Startup',
    'Quality React Developer Startup',
    'Professional Full Stack Startup',
    'Small Business Premium Developer',
    'Startup Professional Developer Price',
    'Entrepreneur Quality Web Developer',
    'SMB Professional Developer',
    'Small Company Premium Developer',
    'Growth-Focused Developer',
    'Scale-Ready Developer',
    'Minimum Viable Product Developer',
    'MVP Professional Developer',
    
    // Freelance & Contract Keywords
    'Professional Freelance Developer USA',
    'Premium Freelance React Developer',
    'Quality Freelance Full Stack',
    'Professional Freelance JavaScript',
    'Premium Contract Developer USA',
    'Quality Contract React Developer',
    'Professional Part Time Developer',
    'Premium Freelancer USA',
    'Professional Freelance Services',
    'Quality Independent Developer',
    'Premium Solo Developer',
    'Professional Contractor USA',
    'Competitive Rate Freelancer',
    'Professional Freelance Developer',
    'Premium Freelance Services',
    
    // Technology Stack + Price Keywords
    'Professional React Development Services',
    'Premium Next.js Development USA',
    'Quality Node.js Services USA',
    'Professional JavaScript Development',
    'Premium TypeScript Development',
    'Quality MERN Stack Services',
    'Professional Express.js Developer',
    'Premium MongoDB Developer USA',
    'Quality PostgreSQL Developer',
    'Professional MySQL Developer',
    'Premium HTML CSS Developer',
    'Quality WordPress Developer',
    'Professional Shopify Developer',
    'Premium Vue.js Developer',
    'Quality Angular Developer',
    'Budget Python Developer',
    'Affordable PHP Developer',
    'Cheap Laravel Developer',
    'Budget Django Developer',
    'Low Cost Flask Developer',
    
    // Service-Specific + Price Keywords
    'Professional Website Development USA',
    'Premium Web App Development',
    'Quality E-commerce Development',
    'Professional API Development USA',
    'Premium Database Design USA',
    'Quality Website Redesign USA',
    'Professional Website Maintenance',
    'Premium Bug Fixes USA',
    'Quality Performance Optimization',
    'Professional Mobile App Development',
    'Premium CMS Development',
    'Quality Custom Software',
    'Professional Web Portal Development',
    'Premium Landing Page Design',
    'Quality Website Migration',
    'Professional Site Speed Optimization',
    'Premium Security Implementation',
    'Quality Payment Integration',
    'Professional Third Party Integration',
    'Premium Database Migration',
    
    // Digital Marketing + Premium Keywords
    'Professional SEO Services USA',
    'Premium Digital Marketing USA',
    'Quality Google Ads Management',
    'Professional Social Media Marketing',
    'Premium Content Marketing USA',
    'Quality Email Marketing USA',
    'Professional PPC Management',
    'Premium Facebook Ads Management',
    'Quality Instagram Marketing',
    'Professional LinkedIn Marketing',
    'Premium YouTube Marketing',
    'Quality Influencer Marketing',
    'Professional Brand Marketing',
    'Premium Online Marketing',
    'Quality Internet Marketing',
    
    // Industry-Specific Premium Keywords
    'Professional E-commerce Developer USA',
    'Premium SaaS Developer USA',
    'Quality FinTech Developer',
    'Professional Healthcare App Developer',
    'Premium Real Estate Website Developer',
    'Quality Restaurant Website Developer',
    'Professional Legal Website Developer',
    'Premium Education Platform Developer',        
    'Quality Non-Profit Website Developer',
    'Professional Consulting Website Developer',
    'Premium Agency Website Developer',
    'Quality Portfolio Website Developer',
    'Professional Blog Website Developer',
    'Premium News Website Developer',
    'Quality Forum Developer',
    
    // Location-Specific + Price Keywords
    'Professional Developer California',
    'Premium Developer New York',
    'Quality Developer Texas',
    'Professional Developer Florida',
    'Premium Developer Chicago',
    'Quality Developer Los Angeles',
    'Professional Developer San Francisco',
    'Premium Developer Seattle',
    'Quality Developer Boston',
    'Professional Developer Miami',
    'Premium Developer Atlanta',
    'Quality Developer Dallas',
    'Professional Developer Phoenix',
    'Premium Developer Philadelphia',
    'Quality Developer San Diego',
    'Professional Developer San Jose',
    'Premium Developer Austin',
    'Quality Developer Jacksonville',
    'Professional Developer Indianapolis',
    'Premium Developer Columbus',
    'Quality Developer Charlotte',
    'Professional Developer Detroit',
    'Premium Developer El Paso',
    'Quality Developer Memphis',
    'Professional Developer Portland',
    
    // Time Zone & Communication Benefits
    'Professional USA Time Zone Developer',
    'Premium American Hours Developer',
    'Quality English Speaking Developer',
    'Professional US Business Hours',
    'Native English Speaker Developer',
    'American Hours Support Developer',
    'US Time Zone Professional Developer',
    'English Communication Premium Developer',
    'American Schedule Developer',
    'US Hours Professional Developer',
    
    // Urgency & Action Keywords
    'Hire Professional Developer Now',
    'Book Premium Developer Today',
    'Get Quality Quote Now',
    'Start Professional Project Today',
    'Immediate Professional Developer',
    'Quick Professional Development',
    'Fast Premium Web Development',
    'Rush Job Professional Developer',
    'Priority Professional Developer',
    'Same Day Developer Quote',
    
    // Alternative & Competitor Keywords
    'Alternative to Expensive Developers',
    'Better than Upwork Developers',
    'Alternative to Fiverr Pro',
    'Competitive with Toptal',
    'Better Value than Freelancer.com',
    'Alternative to Guru.com',
    'Better than Local Agencies',
    'Alternative to Big Agencies',
    'Competitive with USA Freelancers',
    
    // Long-tail Search Keywords
    'Where to find professional web developer',
    'How to hire quality developer',
    'Best professional web developer USA',
    'Most reliable react developer',
    'Professional full stack developer',
    'Quality web development',
    'Premium website creation',
    'Professional custom website',
    'Premium professional website',
    'Quality e-commerce website',
    'Professional web application',
    'Premium web development services',
    'Professional website design and development',
    'Quality mobile responsive website',
    'Professional SEO friendly website',
    'Premium WordPress development',
    'Quality Shopify store setup',
    'Professional API development services',
    'Premium database development',
    'Quality website maintenance',
    
    // Problem-Solution Keywords
    'Need professional web developer',
    'Looking for quality developer',
    'Want premium website',
    'Seeking professional development',
    'Require quality programming',
    'Find professional coding services',
    'Get premium web solutions',
    'Professional website help needed',
    'Quality development assistance',
    'Premium programming help',
    
    // Quality + Price Assurance Keywords
    'Quality premium developer',
    'Professional quality developer',
    'Reliable professional developer',
    'Experienced premium developer',
    'Skilled professional programmer',
    'Expert quality coder',
    'Certified professional developer',
    'Proven premium developer',
    'Trusted professional programmer',
    'Verified quality coder',
    
    // Original Enhanced Keywords
    'Remote Full Stack Developer USA',
    'Nepal Developer USA Services',
    'International Premium Developer',
    'Offshore Professional Developer',
    'Global Quality Developer',
    'Cross Border Premium Services',
    'International Professional Programming',
    'Worldwide Premium Development',
    'Global Professional Coding',
    'International Quality Services'
  ],
  authors: [{ name: 'Prajjwal Parajuli' }],
  creator: 'Prajjwal Parajuli',
  publisher: 'Prajjwal Parajuli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Prajjwal Parajuli - Professional Full Stack Developer USA | $50/hr | Save 40%',
    description: 'Trusted by 150+ clients worldwide! Premium React, Next.js, Node.js development starting at $50/hour. Money-back guarantee, 24h response, professional quality at competitive rates.',
    siteName: 'Prajjwal Parajuli Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prajjwal Parajuli - Professional Full Stack Developer USA | Save 40% on Development Costs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prajjwal Parajuli - $50/hr Full Stack Developer USA | 150+ Happy Clients',
    description: 'Trusted developer with money-back guarantee. Save 40% on development costs while getting professional quality. 4.9/5 rating from 150+ clients.',
    images: ['/twitter-card.jpg'],
    creator: '@prajjwalparajuli',
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  classification: 'Web Development, Digital Marketing',
  other: {
    'author': 'Prajjwal Parajuli',
    'copyright': '© 2025 Prajjwal Parajuli. All rights reserved.',
    'language': 'en',
    'geo.region': 'NP-BA',
    'geo.placename': 'Kathmandu, Nepal',
    'geo.position': '27.7172;85.3240',
    'ICBM': '27.7172, 85.3240',
    'rating': '4.9',
    'price': '$50/hour',
    'currency': 'USD',
    'availability': 'Available',
    'response-time': '24 hours',
    'expertise': 'React, Next.js, Node.js',
    'experience': '5+ years',
    'clients': '150+',
    'projects': '200+',
    'guarantee': 'money-back',
    'timezone': 'UTC+5:45 (Nepal) - Available US hours',
    'languages': 'English, Nepali, Hindi',
    'location': 'Nepal serving USA',
    'service-area': 'Worldwide, focus USA',
    'established': '2020',
  },
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prajjwal Parajuli',
  jobTitle: 'Professional Full Stack Developer - Starting at $50/hour',
  description: 'Professional Full Stack Developer offering premium React, Next.js, Node.js development starting at $50/hour - Save 40% compared to USA developers while getting the same professional quality.',
  image: `${SITE_URL}/prajjwal.png`,
  url: SITE_URL,
  priceRange: '$50',
  offers: [
    {
      '@type': 'Offer',
      name: 'Full Stack Development Services',
      price: '50',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '50',
        priceCurrency: 'USD',
        unitText: 'HOUR'
      },
      description: 'Professional React, Next.js, Node.js development at competitive rates - 40% less than USA market'
    },
    {
      '@type': 'Offer',
      name: 'Complete Website Package',
      price: '1999',
      priceCurrency: 'USD',
      description: 'Professional business website starting at $1,999 - 40% cheaper than USA rates'
    },
    {
      '@type': 'Offer',
      name: 'E-commerce Development',
      price: '3999',
      priceCurrency: 'USD',
      description: 'Full e-commerce solution starting at $3,999 vs $7,000+ USA rates'
    }
  ],
  sameAs: [
    'https://linkedin.com/in/prajjwalparajuli',
    'https://github.com/prajjwalparajuli',
    'https://twitter.com/prajjwalparajuli',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressRegion: 'Bagmati',
    addressCountry: 'Nepal',
  },
  workLocation: {
    '@type': 'Place',
    name: 'Remote Work Worldwide',
    description: 'Providing remote development services globally with focus on USA market',
  },
  serviceArea: [
    {
      '@type': 'Country',
      name: 'United States',
    },
    {
      '@type': 'Country', 
      name: 'Canada',
    },
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    {
      '@type': 'Country',
      name: 'Australia',
    },
  ],
  knowsAbout: [
    'Remote Full Stack Development',
    'React Development for USA',
    'Next.js Development',
    'Node.js Development',
    'TypeScript',
    'Remote Digital Marketing',
    'SEO for USA Businesses',
    'Remote UI/UX Design',
    'E-commerce Development USA',
    'Remote Web Development',
    'Offshore Development Services',
    'Cost-effective Development',
    'American Time Zone Support',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Remote Full Stack Developer',
    occupationLocation: {
      '@type': 'City',
      name: 'Remote (Serving USA)',
    },
    skills: [
      'Remote React Development',
      'Remote Next.js Development', 
      'Remote Node.js Development',
      'Remote TypeScript Development',
      'Remote Digital Marketing',
      'Remote SEO Optimization',
      'Remote UI/UX Design',
      'USA Time Zone Communication',
      'English Communication',
      'Offshore Development Management',
    ],
  },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Remote Full Stack Development for USA',
        description: 'Complete web development services for USA businesses including React, Next.js, Node.js development with American time zone support.',
        serviceType: 'Remote Web Development',
        areaServed: 'United States',
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: '50',
        unitText: 'HOUR'
      },
    },
    {
      '@type': 'Offer', 
      itemOffered: {
        '@type': 'Service',
        name: 'Remote Digital Marketing for USA',
        description: 'Digital marketing services for USA businesses including SEO, Google Ads, and social media marketing.',
        serviceType: 'Remote Digital Marketing',
        areaServed: 'United States',
      },
    },
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Self-taught Developer with USA Market Focus',
  },
  award: [
    '150+ Successful Projects for International Clients',
    '200+ Happy Clients Including USA Businesses',
    '5+ Years Remote Development Experience',
    '10000+ Hours of Coding for Global Market',
    'Top 1% Affordable Developer on Google',
    '4.9/5 Star Rating from Verified Clients',
    'Money-Back Guarantee Provider',
    '24-Hour Response Time Guarantee',
  ],
};

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Prajjwal Parajuli - Remote Development Services for USA',
  url: 'https://prajjwalparajuli.com.np',
  logo: 'https://prajjwalparajuli.com.np/logo.png',
  description: 'Professional remote web development and digital marketing services for USA businesses. Cost-effective solutions with American time zone support.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressRegion: 'Bagmati',
    addressCountry: 'Nepal',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'United States',
    },
    {
      '@type': 'Country',
      name: 'Canada', 
    },
    {
      '@type': 'AdministrativeArea',
      name: 'California',
      containedIn: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'New York',
      containedIn: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Texas',
      containedIn: {
        '@type': 'Country',
        name: 'United States',
      },
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+977-XXXXXXXXX',
    contactType: 'customer service',
    availableLanguage: ['English'],
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
        validFrom: '2025-01-01',
        validThrough: '2025-12-31',
      },
    ],
    areaServed: 'United States',
  },
  founder: {
    '@type': 'Person',
    name: 'Prajjwal Parajuli',
  },
  serviceType: [
    'Remote Web Development for USA',
    'Remote Digital Marketing for USA',
    'Remote SEO Services for USA',
    'Remote UI/UX Design for USA',
    'Remote E-commerce Development for USA',
    'Offshore Development Services',
    'Cost-effective Development Solutions',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$$',
  foundingDate: '2020-01-01',
  numberOfEmployees: '1-5',
  slogan: 'Premium Quality, Competitive Price - Save 40% on Development Costs',
  priceSpecification: {
    '@type': 'PriceSpecification',
    price: '50',
    priceCurrency: 'USD',
    unitText: 'HOUR',
    eligibleQuantity: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      unitCode: 'HUR'
    }
  },
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Prajjwal Parajuli Portfolio',
  url: SITE_URL,
  description: 'Professional portfolio of Prajjwal Parajuli - Full Stack Developer and Digital Marketing Expert from Nepal.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  author: {
    '@type': 'Person',
    name: 'Prajjwal Parajuli',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <BlogJsonLd />
      <ReviewsJsonLd />
      <FAQJsonLd />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-screen-2xl mx-auto relative">
          <Header />
          <main role="main" className="space-y-24 lg:space-y-40">
            {/* Hero Section with proper semantic structure */}
            <section aria-label="Introduction and main heading" className="pt-8 lg:pt-16">
              <Hero />
            </section>

            {/* Trust Badges */}
            <section aria-label="Trust indicators and certifications">
              <TrustBadges />
            </section>

            {/* About Section */}
            <section aria-label="About Prajjwal Parajuli" id="about">
              <About />
            </section>

            {/* Skills Section */}
            <section aria-label="Technical skills and expertise" id="skills">
              <Skills />
            </section>

            {/* Projects Section */}
            <section aria-label="Portfolio and featured projects" id="projects">
              <Projects />
            </section>

            {/* Services Section */}
            <section aria-label="Services offered" id="services">
              <Services />
            </section>

            {/* Pricing Calculator */}
            <section aria-label="Cost savings calculator" id="pricing">
              <PricingCalculator />
            </section>

            {/* Trust Signals */}
            <section aria-label="Client testimonials and guarantees" id="testimonials">
              <TrustSignals />
            </section>

            {/* Contact Section */}
            <section aria-label="Contact information and form" id="contact" className="pb-20 lg:pb-32">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
