import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Project Privacy Notice | Prajjwal Parajuli',
  description: 'Some project case studies are protected by client confidentiality. Learn why certain project assets are not publicly accessible.',
};

const PrivacyNoticePage = () => {
  return (
    <section className="relative min-h-[70vh] py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="glass rounded-3xl p-10 sm:p-14 backdrop-blur-md border border-white/30 shadow-xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 backdrop-blur-sm border border-white/30 text-sm font-semibold text-blue-600">
            🔒 Client Confidentiality
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Certain Case Studies Stay Private
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Some of my engagements involve sensitive business data, proprietary technology, or strict non-disclosure agreements. For these projects, I reserve detailed visuals and internal assets to honor my clients&apos; confidentiality commitments.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            I&apos;m happy to discuss these projects privately and walk you through the outcomes, processes, and measurable impact during a one-on-one conversation. Please reach out and I&apos;ll share what I can within the agreed boundaries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-sm text-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              Schedule a Private Walkthrough
            </Link>
            <Link
              href="/"
              className="glass px-6 py-3 rounded-xl font-semibold text-sm text-gray-700 text-center hover:text-blue-600 transition-colors duration-300 backdrop-blur-sm border border-white/30"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyNoticePage;
