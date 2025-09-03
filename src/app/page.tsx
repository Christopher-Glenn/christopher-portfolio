'use client';

import Hero from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import About from './components/About';
import Works from '@/app/components/Works';
import { useScrollOpacity } from '../../lib/useScrollOpacity';
import CenterHoleOverlay from './components/animations/Centerhole';
import Contacts from './components/Contacts';

export default function Home() {
  const opacity = useScrollOpacity();

  return (
    <main className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-20 bg-[#131313] sm:bg-[url('/images/heropage-bg.webp')] bg-cover bg-no-repeat bg-top-right"
      />
      <div
        className="fixed inset-0 -z-10 hidden sm:block sm:transition-all sm:duration-300"
        style={{ backgroundColor: `rgba(19, 19, 19, ${opacity})` }}
      />
      
      <CenterHoleOverlay />

      <Navbar opacity={opacity} />

      <Hero />
      <About id="about"/>
      <Works id="works"/>
      <Contacts id="contact" />
    </main>
  );
}