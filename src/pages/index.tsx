import { Hero } from '../components/blocks/Hero';
import { About } from '../components/blocks/About';
import { Portfolio } from '../components/blocks/Portfolio';
import { Testimonials } from '../components/blocks/Testimonials';
import { Contact } from '../components/blocks/Contact';
import { Toaster } from '../components/ui/toaster';

export default function HomePage() {
  return (
    <main className="bg-black text-white pt-16">
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Toaster />
    </main>
  );
}