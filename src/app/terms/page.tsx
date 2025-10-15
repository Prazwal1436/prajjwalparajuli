import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertCircle, Scale, Ban, DollarSign, Shield, Mail, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Prajjwal Parajuli',
  description: 'Terms of Service for Prajjwal Parajuli\'s portfolio website and services. Read our terms and conditions for using our website and services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
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
            <FileText size={32} className="text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
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
                <Scale size={24} className="text-blue-600" />
                <span>Agreement to Terms</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Prajjwal Parajuli's portfolio and services website. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Prajjwal Parajuli ("we," "us," or "our") regarding your use of our website <a href="https://prajjwalparajuli.com" className="text-blue-600 hover:underline">prajjwalparajuli.com</a> and any related services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our website or use our services.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <p className="text-gray-700 leading-relaxed">
                We provide the following professional services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li><strong>Web Development:</strong> Custom website and web application development using modern technologies (React, Next.js, Node.js, etc.)</li>
                <li><strong>Digital Marketing:</strong> SEO optimization, Google Ads management, social media marketing, and content marketing</li>
                <li><strong>UI/UX Design:</strong> User interface and user experience design for web and mobile applications</li>
                <li><strong>Consulting Services:</strong> Technical consulting and strategic planning for digital projects</li>
                <li><strong>E-commerce Solutions:</strong> Online store development and e-commerce platform integration</li>
                <li><strong>Website Maintenance:</strong> Ongoing support, updates, and maintenance services</li>
              </ul>
            </section>

            {/* User Obligations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <AlertCircle size={24} className="text-blue-600" />
                <span>User Obligations and Acceptable Use</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Provide accurate, current, and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                <li>Not engage in any activity that interferes with or disrupts our services</li>
                <li>Not attempt to gain unauthorized access to our systems or networks</li>
                <li>Not use our services to transmit harmful, offensive, or illegal content</li>
                <li>Not impersonate any person or entity or misrepresent your affiliation</li>
                <li>Respect all intellectual property rights</li>
              </ul>
            </section>

            {/* Project Engagement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Engagement and Deliverables</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Proposals and Agreements</h3>
              <p className="text-gray-700 leading-relaxed">
                All project work will be governed by a separate written agreement or proposal that outlines:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Scope of work and deliverables</li>
                <li>Project timeline and milestones</li>
                <li>Payment terms and pricing</li>
                <li>Revision policy</li>
                <li>Intellectual property rights</li>
                <li>Confidentiality requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Client Responsibilities</h3>
              <p className="text-gray-700 leading-relaxed">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Providing timely feedback and approvals</li>
                <li>Supplying necessary content, materials, and access</li>
                <li>Responding to communication within agreed timeframes</li>
                <li>Ensuring all provided content is legally compliant and properly licensed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Timeline and Delays</h3>
              <p className="text-gray-700 leading-relaxed">
                Project timelines are estimates and may be affected by factors including client delays, scope changes, or unforeseen technical challenges. We will communicate any anticipated delays promptly.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <DollarSign size={24} className="text-blue-600" />
                <span>Payment Terms</span>
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pricing and Invoicing</h3>
              <p className="text-gray-700 leading-relaxed">
                All prices are quoted in USD unless otherwise specified. We reserve the right to modify our pricing at any time, but such changes will not affect projects already under contract.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Payment Schedule</h3>
              <p className="text-gray-700 leading-relaxed">
                Unless otherwise agreed in writing, payment terms are as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li><strong>Deposit:</strong> 50% upfront payment before project commencement</li>
                <li><strong>Milestone Payments:</strong> As specified in project agreement</li>
                <li><strong>Final Payment:</strong> Remaining balance due upon project completion</li>
                <li><strong>Hourly Projects:</strong> Invoiced weekly or bi-weekly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Late Payments</h3>
              <p className="text-gray-700 leading-relaxed">
                Invoices are due within 7 days of receipt unless otherwise specified. Late payments may incur a 5% monthly interest charge. We reserve the right to suspend services for accounts with overdue payments.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Refund Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer a money-back guarantee for the first 14 days of project engagement if you're not satisfied with our work. After this period, refunds will be evaluated on a case-by-case basis. Refunds do not apply to completed and delivered work.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ownership of Deliverables</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon full payment, clients receive full ownership rights to the final deliverables specifically created for their project. This includes custom code, designs, and content developed exclusively for the client.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Components</h3>
              <p className="text-gray-700 leading-relaxed">
                Projects may incorporate third-party libraries, frameworks, or components subject to their respective licenses. Clients receive usage rights but not ownership of these components.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Portfolio Rights</h3>
              <p className="text-gray-700 leading-relaxed">
                We retain the right to display completed projects in our portfolio and marketing materials unless a non-disclosure agreement specifically prohibits this.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Website Content</h3>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is our property or licensed to us and protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </section>

            {/* Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Shield size={24} className="text-blue-600" />
                <span>Confidentiality</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We understand the importance of protecting sensitive business information. We agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Maintain confidentiality of all proprietary client information</li>
                <li>Not disclose client information to third parties without permission</li>
                <li>Use client information solely for project purposes</li>
                <li>Sign separate Non-Disclosure Agreements (NDAs) when requested</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Confidentiality obligations do not apply to information that: (a) is publicly available, (b) was known prior to disclosure, (c) is independently developed, or (d) must be disclosed by law.
              </p>
            </section>

            {/* Warranties and Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Warranties</h3>
              <p className="text-gray-700 leading-relaxed">
                We warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Services will be performed in a professional and workmanlike manner</li>
                <li>Deliverables will substantially conform to agreed specifications</li>
                <li>We have the right to provide the contracted services</li>
                <li>Work will not infringe upon third-party intellectual property rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Bug Fixes and Support</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide a 30-day warranty period for bug fixes on delivered projects. This covers defects in our work, not changes to requirements or scope.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Disclaimer of Warranties</h3>
              <p className="text-gray-700 leading-relaxed">
                EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Ban size={24} className="text-blue-600" />
                <span>Limitation of Liability</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim</li>
                <li>We are not liable for losses resulting from your failure to comply with these Terms</li>
                <li>We are not responsible for third-party services, platforms, or integrations</li>
                <li>We are not liable for data loss (you are responsible for backups)</li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Termination by Client</h3>
              <p className="text-gray-700 leading-relaxed">
                Clients may terminate a project with 7 days' written notice. Upon termination, clients are responsible for payment of all work completed to date, plus any non-refundable expenses incurred.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Termination by Us</h3>
              <p className="text-gray-700 leading-relaxed">
                We may terminate services if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Client fails to make payments as agreed</li>
                <li>Client violates these Terms or project agreement</li>
                <li>Client requests illegal or unethical work</li>
                <li>Continued collaboration is not feasible</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Effect of Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, we will deliver work completed to date. Payment obligations for completed work remain in effect. Confidentiality and intellectual property provisions survive termination.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Prajjwal Parajuli from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3 ml-4">
                <li>Your violation of these Terms</li>
                <li>Your use of our services</li>
                <li>Content you provide to us</li>
                <li>Your violation of any third-party rights</li>
                <li>Any fraudulent or illegal activities</li>
              </ul>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Informal Resolution</h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of any dispute, we encourage you to contact us first to seek an informal resolution. Most concerns can be resolved quickly through communication.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Governing Law</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Arbitration</h3>
              <p className="text-gray-700 leading-relaxed">
                Any disputes that cannot be resolved informally shall be submitted to binding arbitration in Kathmandu, Nepal, in accordance with the Arbitration Act of Nepal.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the "Last Updated" date and posting a notice on our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Miscellaneous */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Miscellaneous Provisions</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Entire Agreement</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with any project-specific agreements, constitute the entire agreement between you and us regarding use of our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Severability</h3>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Waiver</h3>
              <p className="text-gray-700 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Assignment</h3>
              <p className="text-gray-700 leading-relaxed">
                You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Force Majeure</h3>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any delay or failure to perform due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, or Internet service failures.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Mail size={24} className="text-blue-600" />
                <span>Contact Us</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-gray-900 font-semibold mb-2">Prajjwal Parajuli</p>
                <p className="text-gray-700">Email: <a href="mailto:prajjwalparajuli@example.com" className="text-blue-600 hover:underline">prajjwalparajuli@example.com</a></p>
                <p className="text-gray-700">Website: <a href="https://prajjwalparajuli.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">prajjwalparajuli.com.np</a></p>
                <p className="text-gray-700">Location: Kathmandu, Nepal</p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl">
              <p className="text-gray-900 font-semibold mb-2">Acknowledgment</p>
              <p className="text-gray-700 leading-relaxed">
                BY USING OUR WEBSITE AND SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
