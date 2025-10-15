export default function FAQJsonLd() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'Frequently Asked Questions - Prajjwal Parajuli Development Services',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why are your development rates so much cheaper than USA developers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I am based in Nepal where the cost of living is significantly lower, allowing me to offer the same professional quality at only $15/hour instead of $80-200/hour that USA developers charge. You get 85-93% cost savings while maintaining the same quality standards. This is not "cheap" quality - this is premium development at Nepal pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your experience with React and Next.js development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I have 5+ years of experience in React and Next.js development, with 200+ completed projects for clients worldwide. I am certified by Meta for React development and have built everything from simple websites to complex e-commerce platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer any guarantees for your work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! I offer a 100% money-back guarantee within 7 days if you are not satisfied with the work. I also guarantee 24-hour response times and on-time project delivery. Your satisfaction is my priority.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save compared to hiring USA developers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can save 85-93% on development costs - this is MASSIVE savings! For example: a website that costs $5,000-8,000 from USA developers costs only $599-999 with me. A web application that costs $25,000-50,000 locally costs only $2,999-7,999 with the same quality. At $15/hour vs $100-200/hour, the savings are extraordinary.',
        },
      },
      {
        '@type': 'Question',
        name: 'What time zone do you work in and can you communicate during USA business hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I am based in Nepal (UTC+5:45) but I adjust my working hours to accommodate USA business hours. I provide daily updates, video calls, and maintain English communication throughout the project. I respond within 24 hours guaranteed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I accept PayPal, Stripe, Wise, and bank transfers. All payments are secure and I offer milestone-based payments so you only pay as work is completed. Escrow services are also available for added security.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete a typical website project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A basic business website takes 1-2 weeks, an e-commerce site takes 2-4 weeks, and a custom web application takes 4-8 weeks. Timeline depends on complexity and features required. I provide realistic estimates upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide ongoing support and maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! I provide ongoing support and maintenance at the same affordable rates. Basic maintenance starts at $25/month, and I offer emergency support with 24-hour response times. All my projects come with initial free support period.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
}