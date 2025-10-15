import { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About - Prajjwal Parajuli | Full Stack Developer & Digital Marketing Expert',
  description: 'Learn more about Prajjwal Parajuli - a passionate Full Stack Developer and Digital Marketing Expert based in Nepal with 3+ years of experience.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}