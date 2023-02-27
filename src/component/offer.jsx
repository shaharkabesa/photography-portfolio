import React from 'react'
import nature from '../assets/snow.jpg';
import data from '../gallery.json';
const Offer = () => {
  return (
    <div className='flex py-16 px-4 flex-col max-w-[1280px] mx-auto  w-full h-screen'>
         <h1 className='text-4xl text-center uppercase font-semibold'>What do we offer</h1>
    
      <div className='flex flex-col justify-center'>
        <div className='flex py-16 justify-start items-center gap-6'>
          <div className='p-4 bg-gray-50 drop-shadow'>
            <img className='w-96' src={nature} alt="" />
          </div>
          <div>
            <h1 className='text-4xl font-semibold'>Nature</h1>
            <p className='text-xl'>We offer great variety of nature photography</p>
          </div>


        </div>      
        
        <div className='flex py-16 justify-end items-center gap-6'>
        <div>
            <h1 className='text-4xl text-right font-semibold'>Animals</h1>
            <p className='text-xl'>We offer great variety of Animals photography</p>
          </div>
          <div className='p-4  bg-gray-50 drop-shadow'>
            <img className='w-96' src={data.All[3].url} alt="" />
          </div>
     


        </div>        
         
       
      </div>
    </div>
  )
}

export default Offer;