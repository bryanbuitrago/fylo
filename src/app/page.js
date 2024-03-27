import Features from '@/components/features/Features';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Productive from '@/components/productive/Productive';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Hero />
      <Features />
      <Productive />
    </main>
  );
}
