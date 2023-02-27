import React from 'react'
import boat from '../assets/hero-bg.jpg';
const Spacer_contact = () => {
  return (
    <div className='relative'>
      <div className='bg-cover bg-center text-white flex justify-center h-[400px] items-center' style={{backgroundImage: `url(${boat})`}}>
        <h1 className='text-4xl font-semibold z-10'>Contact Me</h1>
      </div>
      <div className='absolute bg-black/70 top-0 left-0 w-full h-full'>

      </div>
    </div>
  )
}

export default Spacer_contact;