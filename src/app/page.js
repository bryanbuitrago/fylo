import FeaturesSection from '@/components/features/FeaturesSection';
import Header from '@/components/header/Header';
import HeroSection from '@/components/hero/HeroSection';
import ProductiveSection from '@/components/productive/ProductiveSection';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductiveSection />
    </main>
  );
}
