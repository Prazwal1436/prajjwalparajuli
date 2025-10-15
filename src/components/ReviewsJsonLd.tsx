export default function ReviewsJsonLd() {
  const reviewsData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Prajjwal Parajuli Full Stack Development Services',
    description: 'Affordable full stack development services starting at $15/hour',
    brand: {
      '@type': 'Brand',
      name: 'Prajjwal Parajuli',
    },
    offers: {
      '@type': 'Offer',
      price: '15',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
  url: 'https://prajjwalparajuli.com.np',
      eligibleRegion: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '39.8283',
          longitude: '-98.5795'
        },
        geoRadius: '10000000'
      },
      businessFunction: 'http://purl.org/goodrelations/v1#Sell',
      description: 'Ultra-competitive $15/hour rate - 85-90% cheaper than typical USA developers ($80-150/hour)'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson',
        },
        datePublished: '2025-10-10',
        reviewBody: 'INCREDIBLE savings! Paid only $15/hour vs $120/hour local quotes - saved our startup $12,000+ on development costs. Same quality as expensive agencies but fraction of the price! This is the most affordable quality developer I have ever found.',
        publisher: {
          '@type': 'Organization',
          name: 'Verified Client Review',
        },
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Mike Chen',
        },
        datePublished: '2025-10-08',
        reviewBody: 'UNBELIEVABLE value! Got a professional website for $599 instead of the $3,500-5000 quoted by local developers. At $15/hour rate, this is literally 90% cheaper than anyone else. Fast delivery and excellent communication. This pricing should be illegal it is so good!',
        publisher: {
          '@type': 'Organization',
          name: 'Verified Client Review',
        },
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Lisa Rodriguez',
        },
        datePublished: '2025-10-05',
        reviewBody: 'Quality work, great communication, and unbeatable prices. Saved us $8,500 on our web application. Will definitely hire again for future projects.',
        publisher: {
          '@type': 'Organization',
          name: 'Verified Client Review',
        },
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'David Thompson',
        },
        datePublished: '2025-10-03',
        reviewBody: 'This is INSANE value! Professional React development at only $15/hour vs $100-150/hour local rates. Same quality, 90% savings. How is this even possible?! Excellent English communication and delivers exactly what promised. Every startup should know about this.',
        publisher: {
          '@type': 'Organization',
          name: 'Verified Client Review',
        },
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Jennifer Williams',
        },
        datePublished: '2025-10-01',
        reviewBody: 'RIDICULOUSLY affordable! Built our e-commerce site for $999 instead of $8000-12000 quoted locally. At $15/hour, this is the cheapest quality development on the planet. Professional, reliable, and incredibly affordable. I cannot believe these rates are real!',
        publisher: {
          '@type': 'Organization',
          name: 'Verified Client Review',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewsData),
      }}
    />
  );
}