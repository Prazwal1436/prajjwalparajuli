export default function BlogJsonLd() {
  const blogData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Prajjwal Parajuli Development Blog',
    description: 'Tips, tutorials, and insights on affordable web development, React, Next.js, and budget-friendly programming solutions for USA businesses.',
  url: 'https://prajjwalparajuli.com.np/blog',
    author: {
      '@type': 'Person',
      name: 'Prajjwal Parajuli',
  url: 'https://prajjwalparajuli.com.np',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Prajjwal Parajuli Development Services',
      logo: {
        '@type': 'ImageObject',
  url: 'https://prajjwalparajuli.com.np/logo.png',
      },
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Why I Can Offer 80% Cheaper Development Without Compromising Quality',
        description: 'Learn how Nepal-based developers can provide premium quality at budget prices.',
  url: 'https://prajjwalparajuli.com.np/blog/affordable-development-explained',
        datePublished: '2025-10-15',
        dateModified: '2025-10-15',
        author: {
          '@type': 'Person',
          name: 'Prajjwal Parajuli',
        },
        keywords: ['cheap web development', 'affordable React developer', 'budget programming'],
      },
      {
        '@type': 'BlogPosting',
        headline: 'Complete Guide to Hiring Budget Developers in 2025',
        description: 'Everything you need to know about finding reliable, affordable developers.',
  url: 'https://prajjwalparajuli.com.np/blog/hiring-budget-developers-guide',
        datePublished: '2025-10-14',
        dateModified: '2025-10-14',
        author: {
          '@type': 'Person',
          name: 'Prajjwal Parajuli',
        },
        keywords: ['hire cheap developer', 'budget developer guide', 'affordable programming'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogData),
      }}
    />
  );
}