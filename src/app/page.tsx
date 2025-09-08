'use client';

import Hero from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import About from './components/About';
import Works from '@/app/components/Works';
import { useScrollOpacity } from '../../lib/useScrollOpacity';
import CenterHoleOverlay from './components/animations/Centerhole';
import Cases from './components/OtherCases';
import Contacts from './components/Contacts';
import Image from 'next/image';

export default function Home() {
  const opacity = useScrollOpacity();

  return (
    <main className="relative min-h-screen">
     <div className="fixed inset-0 -z-20 sm:bg-[#131313]">
        <Image
          src="/images/heropage-bg.webp"
          alt="background-image"
          fill
          priority
          className="object-cover object-left-top"
        />
      </div>

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