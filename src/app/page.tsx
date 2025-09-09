'use client';

import Hero from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import About from './components/About';
import Works from '@/app/components/Works';
import Cases from './components/OtherCases';
import Contacts from './components/Contacts';
import CenterHoleOverlay from './components/animations/Centerhole';
import Image from 'next/image';
import { useScrollFade } from '../../lib/useScrollFade';

export default function Home() {
  const opacity = useScrollFade({
    inStart: 300,
    inEnd: 800,
    outStart: 3700,
    outEnd: 4200,
    defaultOpacity: 1,
  });

  const mobileOpacity = useScrollFade({
    outStart: 2600,
    outEnd: 3000,
    defaultOpacity: 1,
  });

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-30">
        <Image
          src="/images/heropage-bg.webp"
          alt="background-image"
          fill
          priority
          className="object-cover object-left-top brightness-90"
        />
      </div>

      <div
        className="fixed inset-0 -z-20 sm:hidden bg-[#131313] transition-opacity duration-300"
        style={{ opacity: mobileOpacity }}
      />

      <div
        className="fixed inset-0 -z-10 hidden sm:block transition-opacity duration-300"
        style={{ backgroundColor: `rgba(19, 19, 19, ${opacity})` }}
      />

      <CenterHoleOverlay />
      <Navbar opacity={opacity} />

      <Hero />
      <About id="about" />
      <Works id="works" />
      <Cases />
      <Contacts id="contact" />
    </main>
  );
}
