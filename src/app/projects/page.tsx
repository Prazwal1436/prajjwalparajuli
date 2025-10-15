import { Metadata } from 'next';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Projects - Prajjwal Parajuli | Portfolio & Case Studies',
  description: 'Explore my portfolio of web development projects, digital marketing campaigns, and case studies showcasing real business results.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}