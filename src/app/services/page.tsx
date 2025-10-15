import { Metadata } from 'next';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services - Prajjwal Parajuli | Web Development & Digital Marketing',
  description: 'Professional web development, digital marketing, UI/UX design, and consulting services. Get custom solutions that drive business growth.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
}