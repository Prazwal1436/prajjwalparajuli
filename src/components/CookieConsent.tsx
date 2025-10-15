'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Info } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Apply saved consent preferences
      updateConsent(consent === 'accepted');
    }
  }, []);

  const updateConsent = (accepted: boolean) => {
    // Initialize gtag consent mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': accepted ? 'granted' : 'denied',
        'ad_user_data': accepted ? 'granted' : 'denied',
        'ad_personalization': accepted ? 'granted' : 'denied',
        'analytics_storage': accepted ? 'granted' : 'denied',
        'functionality_storage': accepted ? 'granted' : 'denied',
        'personalization_storage': accepted ? 'granted' : 'denied',
        'security_storage': 'granted', // Always granted for security
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    updateConsent(true);
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    updateConsent(false);
    setShowBanner(false);
  };

  const handleReset = () => {
    localStorage.removeItem('cookie-consent');
    setShowBanner(true);
  };

  if (!showBanner) {
    // Show a small settings button for users who want to change preferences
    return (
      <button
        onClick={handleReset}
        className="fixed bottom-4 left-4 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
        aria-label="Cookie settings"
      >
        <Cookie className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">Privacy & Cookies</h3>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
              and personalize content. By clicking "Accept All", you consent to our use of cookies.
            </p>

            {/* Details Section */}
            {showDetails && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Cookie Categories
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Essential Cookies</p>
                    <p className="text-gray-600">Required for basic site functionality and security. Always enabled.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Analytics Cookies</p>
                    <p className="text-gray-600">Help us understand how visitors interact with our website (Google Analytics).</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Marketing Cookies</p>
                    <p className="text-gray-600">Used to deliver personalized ads and track campaign performance.</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 flex items-center"
            >
              <Info className="w-4 h-4 mr-1" />
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                Reject All
              </button>
            </div>

            {/* Privacy Policy Link */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              Read our{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-blue-600 hover:text-blue-700 underline">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
