import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact - Prajjwal Parajuli | Get In Touch for Your Next Project',
  description: 'Ready to start your project? Contact Prajjwal Parajuli for web development, digital marketing, and consulting services. Available for remote and local projects.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}