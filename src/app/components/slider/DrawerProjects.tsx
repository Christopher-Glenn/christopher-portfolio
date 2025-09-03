import React from 'react'

type DrawerProjects = {
name:string
role:string
year:number

}

export default function DrawerProjects({name,role,year}:DrawerProjects) {
    return (
        <div className='grid grid-cols-[1fr_1fr_auto] w-full items-center sm:text-lg text-base font-semibold uppercase py-4 border-b-1 border-gray-500'>
            <span className='font-neue text-white'>{name}</span>
            <span className='font-neue text-white'>{role}</span>
            <span className=' font-migra text-xl pr-8 text-cozywhite'>{year}</span>
        </div>
    )
}