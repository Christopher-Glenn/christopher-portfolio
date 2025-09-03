import React from 'react'

type DrawerButton = {
    title: string
}


export default function DrawerButton ({title}:DrawerButton) {

  return (
    <button
        className={`relative overflow-hidden sm:border-2 border-1 sm:text-[2.3rem] text-[1.4rem] cursor-pointer border-white rounded-full w-full px-5 uppercase font-medium transition-colors `}
      >
        <span className="inline-block text-center">{title}</span>
        <div className="absolute inset-0 flex whitespace-nowrap marquee-inner">
          <span className="mx-4">{title}</span>
          <span className="mx-4">{title}</span>
        </div>
      </button>
  )
}
