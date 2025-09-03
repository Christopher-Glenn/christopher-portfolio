'use client';
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  opacity: number;
}

const Navbar: React.FC<NavbarProps> = ({ opacity }) => {
  // Cap opacity at 0.9 for background color
  const cappedOpacity = Math.min(opacity, 0.8);
  // Calculate blur strength based on capped opacity
  const blurStrength = Math.min(cappedOpacity * 6, 6);

  return (
    <nav className="sticky top-0 z-50">
      <section
        className="px-5 pt-6 sm:px-10 sm:pt-9 transition-all duration-300"
        style={{
          backgroundColor: `rgba(19, 19, 19, ${cappedOpacity})`,
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
        }}
      >
        <div className="flex flex-row justify-between border-b border-b-cozywhite/65 sm:pb-6 pb-3 ">
          <div className="flex flex-row gap-9">
            <Link className="text-lg sm:text-xl font-migra text-white" href="/">Christopher Glenn</Link>
            <div className="hidden sm:block uppercase font-neue text-cozywhite text-xl font-semibold">Project Manager • Full - Stack Developer</div>
          </div>
          <ul className="sm:text-xl flex space-x-1 text-white font-neue font-medium text-base">
            <li>
              <Link href="#works" className="hover-underline-animation">works,</Link>
            </li>
            <li>
              <Link href="#about" className="hover-underline-animation">about,</Link>
            </li>
            <li>
              <Link href="#contact" className="hover-underline-animation">contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;