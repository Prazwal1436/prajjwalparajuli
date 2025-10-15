import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Cookie, Mail, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Prajjwal Parajuli',
  description: 'Privacy Policy for Prajjwal Parajuli\'s portfolio website. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "October 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="glass rounded-3xl p-8 lg:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Lock size={24} className="text-blue-600" />
                <span>Introduction</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Prajjwal Parajuli's portfolio website ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://prajjwalparajuli.com" className="text-blue-600 hover:underline">prajjwalparajuli.com</a>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the website.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Database size={24} className="text-blue-600" />
                <span>Information We Collect</span>
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Data</h3>
              <p className="text-gray-700 leading-relaxed">
                When you contact us through our website, we may collect personally identifiable information that you voluntarily provide, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project details and requirements</li>
                <li>Any other information you choose to provide in forms or messages</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information (screen size, device type)</li>
                <li>Geographic location (country/city level)</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Eye size={24} className="text-blue-600" />
                <span>How We Use Your Information</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and communicate about potential projects or services</li>
                <li><strong>Service Improvement:</strong> To understand how visitors use our website and improve our services</li>
                <li><strong>Analytics:</strong> To analyze website traffic, user behavior, and optimize user experience</li>
                <li><strong>Marketing:</strong> To send you newsletters, updates, and promotional materials (only with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activities</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Cookie size={24} className="text-blue-600" />
                <span>Cookies and Tracking Technologies</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Analyze website traffic and performance</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use third-party services to help us operate our website and provide better services. These services may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                <li><strong>Email Service Providers:</strong> For sending emails and managing communications</li>
                <li><strong>Hosting Services:</strong> For website hosting and performance optimization</li>
                <li><strong>Payment Processors:</strong> For secure payment processing (if applicable)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These third parties have their own privacy policies and may collect, use, and share your information according to their own practices. We recommend reviewing their privacy policies.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Data backup and recovery procedures</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request a copy of your information in a portable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent for data processing at any time</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided at the end of this policy.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information from our records.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our website, you consent to the transfer of your information to Nepal and other countries where we operate.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Mail size={24} className="text-blue-600" />
                <span>Contact Us</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-gray-900 font-semibold mb-2">Prajjwal Parajuli</p>
                <p className="text-gray-700">Email: <a href="mailto:prajjwalparajuli@example.com" className="text-blue-600 hover:underline">prajjwalparajuli@example.com</a></p>
                <p className="text-gray-700">Website: <a href="https://prajjwalparajuli.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">prajjwalparajuli.com.np</a></p>
                <p className="text-gray-700">Location: Kathmandu, Nepal</p>
              </div>
            </section>

            {/* Consent */}
            <section className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl">
              <p className="text-gray-900 font-semibold mb-2">Your Consent</p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
