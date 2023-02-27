import React from 'react'
import data from '../gallery.json';
const ImageHouse = () => {
  return (
    <div>
      <div className='flex justify-center'><h1>Hello</h1></div>
  
    <div className='h-screen flex max-w-[1280px] justify-center items-center mx-auto text-center'>
    

    <div className='grid md:grid-cols-2 grid-rows-3 self-center  mx-auto'>
      <div className='flex w-full row-span-3 col-span-1 bg-cover'>
        <img className='w-full' src={data.All[0].url} alt="" />
      </div>     
      
      <div className='flex w-full row-span-3 bg-cover  col-span-2'>
      <img src={data.All[0].url} alt="" />
      </div>

    </div>
    </div>
    </div>

  )
}

export default ImageHouse;