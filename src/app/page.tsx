import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import BlogJsonLd from '@/components/BlogJsonLd';
import ReviewsJsonLd from '@/components/ReviewsJsonLd';
import FAQJsonLd from '@/components/FAQJsonLd';
import SplashScreen from '@/components/SplashScreen';
import HeroTypewriter from '@/components/HeroTypewriter';
import SiteShell from '@/components/SiteShell';

const SITE_URL = 'https://prajjwalparajuli.com.np';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Prajjwal Parajuli | Software Developer & Digital Marketing Expert',
  description: 'Software Developer, Digital Marketing Expert, Meta Ads Expert, and AI Skilled Person. Mobile apps, web apps, websites, AI chatbots, and social media packages with strategic planning.',
  keywords: [
    'Prajjwal Parajuli',
    'Software Developer',
    'Digital Marketing Expert',
    'Meta Ads Expert',
    'AI Skilled Person',
    'Mobile App Development',
    'Web App Development',
    'Website Development',
    'AI Chatbot',
    'Social Media Strategy',
  ],
  authors: [{ name: 'Prajjwal Parajuli' }],
  creator: 'Prajjwal Parajuli',
  publisher: 'Prajjwal Parajuli',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Prajjwal Parajuli | Software Developer & Digital Marketing Expert',
    description: 'Mobile apps, web apps, websites, AI chatbots, and social media packages with strategic planning.',
    siteName: 'Prajjwal Parajuli Portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Prajjwal Parajuli' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prajjwal Parajuli | Software Developer',
    description: 'Mobile apps, web apps, websites, AI chatbots, and social media packages with strategic planning.',
    images: ['/twitter-card.jpg'],
    creator: '@prajjwalparajuli',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prajjwal Parajuli',
  jobTitle: 'Software Developer, Digital Marketing Expert, Meta Ads Expert, AI Skilled Person',
  description: 'Mobile apps, web apps, websites, AI chatbots, and social media packages with strategic planning.',
  image: `${SITE_URL}/prajjwal.png`,
  url: SITE_URL,
  sameAs: [
    'https://linkedin.com/in/prajjwalparajuli',
    'https://github.com/prajjwalparajuli',
    'https://twitter.com/prajjwalparajuli',
  ],
};

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Prajjwal Parajuli',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Software development, AI solutions, and digital marketing services.',
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Prajjwal Parajuli Portfolio',
  url: SITE_URL,
  description: 'Software Developer and Digital Marketing Expert from Nepal.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
};

export default function Home() {
  return (
    <>
      {/* Google Consent Mode v2 - Default to denied */}
      <Script id="google-consent-mode" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Default consent mode - denied until user accepts
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
        `}
      </Script>
      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JDGFYK81LZ"
        strategy="afterInteractive"
        async
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JDGFYK81LZ', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
        `}
      </Script>

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

      <SplashScreen />

      <SiteShell>
        <section className="hero pro-hero">
          <div className="container hero-grid pro-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software Developer • Digital Marketing • Meta Ads • AI</p>
              <HeroTypewriter />
              <p className="lead">
                I build mobile apps, web apps, websites, and AI chatbots. I also run social media packages
                with strategic planning for measurable growth.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="/contact">Start a Project</a>
                <a className="btn ghost" href="/services">Explore Services</a>
              </div>
              <div className="hero-points">
                <div>Product‑first development</div>
                <div>Meta Ads performance campaigns</div>
                <div>AI prompting & automation</div>
              </div>
            </div>
            <div className="hero-card pro-hero-card">
              <div className="hero-portrait">
                <Image
                  src="/prajjwal.png"
                  alt="Prajjwal Parajuli"
                  width={360}
                  height={360}
                  className="hero-portrait-img"
                  priority
                />
              </div>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-label">Development</div>
                  <div className="stat-value">5 Years</div>
                </div>
                <div className="stat">
                  <div className="stat-label">Digital Marketing</div>
                  <div className="stat-value">3 Years</div>
                </div>
                <div className="stat">
                  <div className="stat-label">Meta Ads</div>
                  <div className="stat-value">2 Years</div>
                </div>
                <div className="stat">
                  <div className="stat-label">AI Prompting</div>
                  <div className="stat-value">Advanced</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
