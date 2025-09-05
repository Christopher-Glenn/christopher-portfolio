import React from 'react'
import { PiBagFill } from 'react-icons/pi'
// import { TimelineItem } from './timeline'
import { TimeLineItem } from './timeline'
import Image from 'next/image'

export default function Works({ id }: { id?: string }) {
  return (
    <div id={id} className='relative sm:px-16 px-6 sm:pt-[10rem] pt-30'>
      <div className='flex flex-row ' >
        <div className='flex sm:pl-50 flex-row'>
          <Image 
            src="/images/decagramStar.webp"
            className='h-auto sm:w-14 w-6'
            width={24}
            height={24}
            alt='decagram-star'
          />
          <div className='flex flex-row font-bold sm:pl-6 pl-2 font-neue text-white sm:text-[2.3rem] text-[0.9rem] uppercase'>Works</div>
        </div>
      </div>
      <section className="sm:pl-50 grid grid-cols-1 sm:grid-cols-[0.8fr_1fr_1fr] items-center">
        {/* First Project */}
        <div className="sm:block hidden flex-col order-1 sm:order-1">
          <div className="overflow-visible h-[7.6rem] md:overflow-hidden md:h-[7.3rem] ">
            <h2 className="uppercase font-tusker text-cozywhite sm:text-[8rem] text-[4.5rem] 
            sm:leading-24 leading-47">Paul Kaldi</h2>
          </div>
          <h3 className="font-neue font-medium text-white sm:text-[1.2rem] text-[1rem] uppercase">
            Project Manager, Developer
          </h3>
        </div>

        {/* Experience */}
        <div className="bento-card sm:p-4 p-0 pt-4 sm-pt-8 w-full sm:w-[23rem] mr-52 mt-6 text-white order-1 sm:order-3">
          <div className="flex items-center gap-2 pl-4">
            <PiBagFill className="w-5 h-5 sm:w-6 sm:h-6 fill-gray-400" />
            <h2 className="text-xl sm:text-2xl font-medium">Experience</h2>
          </div>

          <section className="relative flex flex-row pt-8 pl-4">
            {/* Vertical Line */}
            <div className="absolute left-6 inset-y-12 border-l-2 border-gray-400 z-0" />

            <div className="flex flex-col">
              <TimeLineItem
                title="Project Manager"
                subtitle="ePaulTech Solutions, BINHI TBI"
                year="2025"
                className="bg-white"
              />
              <TimeLineItem
                title="Research & Development Engineer"
                subtitle="WVSU - SPARK Hub"
                year="2025"
                className="bg-muted"
              />
              <TimeLineItem
                title="BS Computer Science"
                subtitle="West Visayas State University"
                year="2023"
                className="bg-muted"
              />
              <TimeLineItem
                title="Hello World!"
                subtitle="Wrote my first line of code"
                year="2021"
                className="bg-muted"
              />
            </div>
          </section>
        </div>

        {/* Image */}
        <div className="sm:block hidden img-hover-zoom w-[12rem] h-[25rem] sm:w-[18rem] sm:h-[33rem] sm:pt-0 pt-6 cursor-pointer order-2 sm:order-2 relative">
          <a href="https://paul-kaldi-coffee.vercel.app/home">
            <Image
              src="/images/works-1.webp"
              alt="paul-kaldi"
              fill
              className="object-cover"
            />
          </a>
        </div>
      </section>

      {/* Second Project */}
      <section className='sm:pl-50 grid grid-cols-1 sm:grid-cols-[0.9fr_2fr] items-center'>
        <div className='relative img-hover-zoom w-[20rem] h-[11.7rem] sm:w-[30rem] sm:h-[17rem] cursor-pointer mt-8 sm:mt-26 '>
          <a href='https://binhi.wvsu.edu.ph/'>
            <Image
              src="/images/works-2.webp"
              alt='Binhi Website'
              fill
              className='object-cover'
            />
          </a>
        </div>
        <div className='sm:block hidden flex-col pt-16 pl-6'>
          <div className="overflow-visible h-[7.6rem] md:overflow-hidden md:h-[7.3rem]">
            <h2 className='uppercase font-tusker text-cozywhite sm:text-[8rem] text-[4.5rem] 
              sm:leading-24 leading-47'>BINHI Website</h2>
          </div>
          <h3 className='font-neue font-medium text-white sm:text-[1.2rem] text-[1rem] uppercase'>Developer</h3>
        </div>
      </section>
      {/* Third Project */}
      <section className='sm:pl-50 grid grid-cols-1 sm:grid-cols-[8fr_5fr] items-center'>
        <div className='relative img-hover-zoom w-[20rem] h-[11.7rem] sm:w-[30rem] sm:h-[17rem] cursor-pointer mt-8 sm:mt-26 justify-self-auto sm:justify-self-end'>
          <a href='https://cict.wvsu-fundays.com/'>
            <Image
              src="/images/works-3.webp"
              alt='CICT fundays'
              fill
              className='object-cover'
            />
          </a>
        </div>
        <div className='sm:block hidden flex-col pt-12 sm:pl-8 pl-0 '>
          <div className="overflow-visible h-[7.6rem] md:overflow-hidden md:h-[7.3rem]">
            <h2 className='uppercase font-tusker text-cozywhite sm:text-[8rem] s text-[4.5rem] 
              sm:leading-24 leading-47'>ReDiPoST</h2>
          </div>
          <h3 className='font-neue font-medium text-white sm:text-[1.2rem] text-[1rem] uppercase'>Developer</h3>
        </div>
      </section>
      <section className='sm:pl-50 grid grid-cols-1 sm:grid-cols-[3fr_1fr] items-center'>
        {/* Fourth Project */}
        <div className='sm:block hidden flex-col pt-12 justify-self-end sm:pr-8 pr-0'>
          <div className="overflow-visible h-[7.6rem] md:overflow-hidden md:h-[7.3rem]">
            <h2 className='uppercase font-tusker text-cozywhite sm:text-[8rem] text-[4.5rem] 
              sm:leading-24 leading-47'>USC Infosite</h2>
          </div>
          <h3 className='font-neue font-medium text-white sm:text-[1.2rem] text-[1rem] uppercase'>Developer</h3>
        </div>
        <div className='relative img-hover-zoom w-[20rem] h-[11.7rem] sm:w-[35rem] sm:h-[20rem] cursor-pointer mt-8 sm:mt-26 '>
          <a href='https://wvsu-usc.org/'>
            <Image
              src="/images/works-4.webp"
              alt="USC Cite"
              fill
              className='object-cover'
            />
          </a>
        </div>
      </section>
    </div>
  )
}
