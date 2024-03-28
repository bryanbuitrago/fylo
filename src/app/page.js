import EarlyAcessSection from '@/components/earlyaccess/EarlyAccessSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import Header from '@/components/header/Header';
import HeroSection from '@/components/hero/HeroSection';
import ProductiveSection from '@/components/productive/ProductiveSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductiveSection />
      <TestimonialsSection />
      <EarlyAcessSection />
    </main>
  );
}
