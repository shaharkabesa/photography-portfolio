import React from 'react'
import Heros from '../assets/hero-bg.jpg';
const Hero = () => {
  return (
    <div className='flex py-4 items-center justify-center relative h-[600px] md:h-screen bg-cover bg-no-repeat bg-fixed' style={{backgroundImage : `url(${Heros})`}}>
        
      <div className='z-10 text-center'>
        <h2 className='text-white text-3xl md:text-4xl py-3 font-semibold'>Professional Photography</h2>
        <p className='text-white text-xl md:text-2xl tracking-[0.25rem]'>Picture of another world</p>
      </div>
   
   <div className='absolute top-0 left-0 h-[600px] w-full md:h-screen bg-black/30'>
   
   </div>
    </div>
  )
}

export default Hero;