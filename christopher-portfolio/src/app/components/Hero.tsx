'use client';

import MarqueeButton from './MarqueeButton';
import React from 'react';

const Hero = () => {

  return (
    <div className="relative">
      <div className='flex sm:justify-center sm:pl-92 justify-end pr-20 '>
        <div className="border-red-500 border-2 sm:h-50 sm:w-90 h-25 w-50"></div>
      </div>
      <div className='flex flex-col justify-between sm:flex-row sm:px-10 px-4 sm:pt-20 '>
        <section className="flex flex-col sm:w-[45rem] w-60 space-y-0">
          <p className="text-[#f0dece] font-migra sm:text-[3rem] text-[1.2rem] font-medium sm:leading-none">creative</p>
          <div className="flex flex-row overflow-visible h-[7.5rem] md:overflow-hidden md:h-[17.5rem] sm:leading-none">
            <h1 className="heading-style">Software</h1>
          </div>
          <div className="overflow-visible h-auto md:overflow-hidden md:h-[17.5rem] sm:leading-none sm:pt-0 pt-3">
            <h1 className="heading-style">Engineer</h1>
          </div>
        </section>
        <div className="flex flex-col items-center border-red-500 border-2">
          <div className="sm:text-[2.2rem] text-[0.875rem] font-neue font-bold text-cozywhite w-[46rem] sm:pt-24 pt-0">
            <p className='sm:pl-52 pl-32'>
              I AM A FULL-STACK DEVELOPER
            </p>
            <p> AND TECHNICAL PROJECT MANAGER BASED IN THE PHILIPPINES. I
              HAVE MANY YEARS OF EXPERIENCE MAKING WEBSITES AND APPS. I LOVE MINIMAL AND
              CLEAN DESIGN. I LOVE PIZZA, CATS AND ART.</p>
          </div>
          <div className='sm:pl-[28rem] sm:pt-[6rem]'>
            <MarqueeButton />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;