import React from 'react'
import Mountain from '../assets/Mountain.jpg';
const Herov2 = () => {
  return (
    <div className='flex relative flex-col h-screen w-full py-16 justify-center items-center'>
      <div className='flex flex-col justify-center px-4 md:p-0 z-10 text-gray-200'>
      <h1>Camera</h1>
      <h1 className='text-4xl font-bold uppercase'>Proffesional Photography</h1>
      <p className=' text-2xl'>Taking a photo straight out of a dream</p>
      </div>

      <div className='w-full absolute top-0 left-0 h-screen bg-cover' style={{backgroundImage : `url(${Mountain})`}}>

      </div>   
      <div className='w-full absolute bg-black/70 z-[5] top-0 left-0 h-screen'>

      </div>
    </div>
  )
}
export default Herov2;