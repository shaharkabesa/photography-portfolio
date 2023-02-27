import React from 'react'
import mountain from '../assets/Mountain-3.jpg';
const Spacer = () => {
  return (
    <div>
      <div className='bg-cover bg-center text-white flex justify-center h-[400px] items-center' style={{backgroundImage: `url(${mountain})`}}>
        <h1 className='text-4xl font-semibold'>ABOUT</h1>
        
      </div>
    </div>
  )
}

export default Spacer;