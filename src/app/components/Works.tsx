import React, { Suspense, lazy } from 'react'
import { PiBagFill } from 'react-icons/pi'
import Image from 'next/image'

const TimeLineItem = lazy(() => import('./timeline').then(module => ({
  default: module.TimeLineItem
})))

const TimelineItemSkeleton = () => (
  <div className="animate-pulse mb-4">
    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-600 rounded w-1/2"></div>
  </div>
)

const ProjectSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-700 h-48 w-full rounded mb-4"></div>
    <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-500 rounded w-1/2"></div>
  </div>
)

export default function Works({ id }: { id?: string }) {
  return (
    <div id={id} className='relative sm:px-16 px-6 sm:pt-[10rem] pt-30'>
      <div className='flex flex-row'>
        <div className='flex sm:pl-50 flex-row'>
          <Image 
            src="/images/decagramStar.webp"
            className='h-auto sm:w-14 w-6'
            width={56}
            height={56}
            alt='decagram-star'
            priority
          />
          <div className='flex flex-row font-bold sm:pl-6 pl-2 font-neue text-white sm:text-[2.3rem] text-[0.9rem] uppercase'>
            Works
          </div>
        </div>
      </div>

      <section className="sm:pl-50 grid grid-cols-1 sm:grid-cols-[0.8fr_1fr_1fr] items-center">
        <div className="sm:block hidden flex-col order-1 sm:order-1">
          <div className="overflow-visible h-[7.6rem] md:overflow-hidden md:h-[7.3rem]">
            <h2 className="uppercase font-tusker text-cozywhite sm:text-[8rem] text-[4.5rem] 
            sm:leading-24 leading-47">Paul Kaldi</h2>
          </div>
          <h3 className="font-neue font-medium text-white sm:text-[1.2rem] text-[1rem] uppercase">
            Project Manager, Developer
          </h3>
        </div>

        <div className="bento-card sm:p-4 p-0 pt-4 sm-pt-8 w-full sm:w-[23rem] mr-52 mt-6 text-white order-1 sm:order-3">
          <div className="flex items-center gap-2 pl-4">
            <PiBagFill className="w-5 h-5 sm:w-6 sm:h-6 fill-gray-400" />
            <h2 className="text-xl sm:text-2xl font-medium">Experience</h2>
          </div>

          <section className="relative flex flex-row pt-8 pl-4">
            <div className="absolute left-6 inset-y-12 border-l-2 border-gray-400 z-0" />
            
            <div className="flex flex-col">
              <Suspense fallback={<TimelineItemSkeleton />}>
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
              </Suspense>
            </div>
          </section>
        </div>

        {/* First Project Image */}
        <div className="sm:block hidden img-hover-zoom w-[12rem] h-[25rem] sm:w-[18rem] sm:h-[33rem] sm:pt-0 pt-6 cursor-pointer order-2 sm:order-2 relative">
          <a href="https://paul-kaldi-coffee.vercel.app/home" aria-label="Visit Paul Kaldi Coffee project">
            <Image
              src="/images/works-1.webp"
              alt="paul-kaldi project screenshot"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 12rem, 18rem"
            />
          </a>
        </div>
      </section>

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectSection
          href="https://binhi.wvsu.edu.ph/"
          imageSrc="/images/works-2.webp"
          imageAlt="Binhi Website screenshot"
          title="BINHI Website"
          role="Developer"
          layout="left-image"
        />
      </Suspense>

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectSection
          href="https://cict.wvsu-fundays.com/"
          imageSrc="/images/works-3.webp"
          imageAlt="CICT fundays project screenshot"
          title="ReDiPoST"
          role="Developer"
          layout="right-image"
        />
      </Suspense>

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectSection
          href="https://wvsu-usc.org/"
          imageSrc="/images/works-4.webp"
          imageAlt="USC Infosite screenshot"
          title="USC Infosite"
          role="Developer"
          layout="right-image-large"
        />
      </Suspense>
    </div>
  )
}

function ProjectSection({ 
  href, 
  imageSrc, 
  imageAlt, 
  title, 
  role, 
  layout 
}: {
  href: string
  imageSrc: string
  imageAlt: string
  title: string
  role: string
  layout: 'left-image' | 'right-image' | 'right-image-large'
}) {
  const getGridClass = () => {
    switch (layout) {
      case 'left-image':
        return 'sm:grid-cols-[0.9fr_2fr]'
      case 'right-image':
        return 'sm:grid-cols-[8fr_5fr]'
      case 'right-image-large':
        return 'sm:grid-cols-[3fr_1fr]'
      default:
        return 'sm:grid-cols-[1fr_1fr]'
    }
  }

  const getImageClass = () => {
    switch (layout) {
      case 'left-image':
        return 'w-[20rem] h-[11.7rem] sm:w-[30rem] sm:h-[17rem]'
      case 'right-image':
        return 'w-[20rem] h-[11.7rem] sm:w-[30rem] sm:h-[17rem] justify-self-auto sm:justify-self-end'
      case 'right-image-large':
        return 'w-[20rem] h-[11.7rem] sm:w-[35rem] sm:h-[20rem]'
      default:
        return 'w-[20rem] h-[11.7rem] sm:w-[30rem] sm:h-[17rem]'
    }
  }

  const isImageFirst = layout === 'left-image'

  return (
    <section className={`sm:pl-50 grid grid-cols-1 ${getGridClass()} items-center`}>
      {isImageFirst && (
        <div className={`relative img-hover-zoom ${getImageClass()} cursor-pointer mt-8 sm:mt-26`}>
          <a href={href} aria-label={`Visit ${title} project`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 20rem, (max-width: 1200px) 30rem, 35rem"
            />
          </a>
        </div>
      )}
      
      <div className={`sm:block hidden flex-col ${layout === 'right-image-large' ? 'pt-12 justify-self-end sm:pr-8 pr-0' : layout === 'right-image' ? 'pt-12 sm:pl-8 pl-0' : 'pt-16 pl-6'}`}>
        <div className="overflow-visible h-[7.6rem] md:overflow-hidden md:h-[7.3rem]">
          <h2 className="uppercase font-tusker text-cozywhite sm:text-[8rem] text-[4.5rem] 
            sm:leading-24 leading-47">{title}</h2>
        </div>
        <h3 className="font-neue font-medium text-white sm:text-[1.2rem] text-[1rem] uppercase">
          {role}
        </h3>
      </div>

      {!isImageFirst && (
        <div className={`relative img-hover-zoom ${getImageClass()} cursor-pointer mt-8 sm:mt-26`}>
          <a href={href} aria-label={`Visit ${title} project`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 20rem, (max-width: 1200px) 30rem, 35rem"
            />
          </a>
        </div>
      )}
    </section>
  )
}