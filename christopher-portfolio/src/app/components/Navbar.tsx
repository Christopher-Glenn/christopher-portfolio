'use client'
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 800, 1) * 0.9;
  const blurStrength = Math.min(opacity * 6, 6);

  return (
    <nav className="sticky top-0 z-50">
      <section
        className="px-5 pt-6 sm:px-10 sm:pt-9 transition-all duration-300"
        style={{
          backgroundColor: `rgba(19, 19, 19, ${opacity})`,
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
        }}
      >
        <div className="flex flex-row justify-between border-b border-b-cozywhite/65 sm:pb-6 pb-3 ">
          <div className="flex flex-row gap-9">
            <a className="text-lg sm:text-xl font-migra text-white" href="/">Christopher Glenn</a>
            <div className="hidden sm:block uppercase font-neue text-cozywhite text-xl font-semibold">Project Manager • Full - Stack Developer</div>
          </div>
          <ul className="sm:text-xl flex space-x-1 text-white font-neue font-medium text-base">
            <li><a href="/works">works,</a></li>
            <li><a href="/about">about,</a></li>
            <li><a href="/contact">contact</a></li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
