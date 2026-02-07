import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://prajjwalparajuli.com.np";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2b7cff' },
    { media: '(prefers-color-scheme: dark)', color: '#42d0ff' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prajjwal Parajuli - Full Stack Developer & Digital Marketing Expert",
    template: "%s | Prajjwal Parajuli"
  },
  description: "Portfolio of Prajjwal Parajuli - Full Stack Developer and Digital Marketing Expert based in Nepal. Specializing in React, Next.js, TypeScript, and comprehensive digital marketing solutions.",
  keywords: [
    "Prajjwal Parajuli", 
    "Full Stack Developer", 
    "Digital Marketing Expert", 
    "React Developer", 
    "Next.js", 
    "TypeScript", 
    "Web Development", 
    "SEO", 
    "Nepal Developer", 
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Kathmandu Developer",
    "Freelance Developer Nepal",
    "Saathi Developer",
    "aone skills"  
  ],
  authors: [{ name: "Prajjwal Parajuli", url: siteUrl }],
  creator: "Prajjwal Parajuli",
  publisher: "Prajjwal Parajuli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Prajjwal Parajuli - Full Stack Developer & Digital Marketing Expert",
    description: "Creating digital solutions that drive business growth. Specializing in modern web development and strategic digital marketing.",
  url: siteUrl,
    siteName: "Prajjwal Parajuli Portfolio",
    images: [
      {
        url: "/prajjwal.png",
        width: 1200,
        height: 630,
        alt: "Prajjwal Parajuli - Portfolio",
        type: "image/png",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajjwal Parajuli - Full Stack Developer & Digital Marketing Expert",
    description: "Creating digital solutions that drive business growth",
    images: ["/prajjwal.png"],
    creator: "@prajjwalparajuli",
    site: "@prajjwalparajuli",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2b7cff',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'ne-NP': `${siteUrl}/ne`,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-site-verification',
    other: {
      'msvalidate.01': 'your-bing-verification',
    },
  },
  category: 'Technology',
  classification: 'Web Development, Digital Marketing',
  referrer: 'origin-when-cross-origin',
  bookmarks: [siteUrl],
  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },
  archives: [`${siteUrl}/blog`],
  assets: [`${siteUrl}/assets`],
  generator: 'Next.js',
  applicationName: 'Prajjwal Parajuli Portfolio',
  other: {
    'author': 'Prajjwal Parajuli',
    'copyright': '© 2025 Prajjwal Parajuli. All rights reserved.',
    'language': 'en',
    'geo.region': 'NP-BA',
    'geo.placename': 'Kathmandu, Nepal',
    'geo.position': '27.7172;85.3240',
    'ICBM': '27.7172, 85.3240',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'expires': 'never',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#2b7cff" />
        <meta name="msapplication-TileColor" content="#2b7cff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Canonical URL */}
  <link rel="canonical" href={siteUrl} />
        
        {/* Alternate hreflang for international SEO */}
  <link rel="alternate" hrefLang="en" href={siteUrl} />
  <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="Prajjwal Parajuli Blog" href="/rss.xml" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        
        {children}
        
        {/* Google Analytics (replace with your tracking ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* Microsoft Clarity (replace with your project ID) */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
            `,
          }}
        />
      </body>
    </html>
  );
}
