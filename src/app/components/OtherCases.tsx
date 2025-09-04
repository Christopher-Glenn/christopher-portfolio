import React from 'react'
import MarqueeButton from './buttons/MarqueeButton'
import Drawer from './slider/CaseDrawer'

export default function OtherCases () {
  return (
    <div className='pt-10 mx-6 sm:mx-50'> 
    
        <div className='flex sm:flex-row flex-col gap-3 sm:gap-6'>
          <p className='sm:block hidden items-center justify-center font-migra text-cozywhite text-xl leading-tight'>Yes, These are <br /> some buttons</p>
          <MarqueeButton title='Contact Me' classname='bg-none text-white'/>
          <Drawer />
        </div>
    </div>
  )
}
