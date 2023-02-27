import React from 'react'
import person from '../assets/person.jpg';
const About = () => {
  return (
    <div className='flex flex-col justify-center items-center py-16 mx-auto max-w-[1280px] px-4'>
      <div className='gap-5 grid grid-cols-2 justify-center py-16 items-center drop-shadow-2xl rounded-md mt-5'>
      <div className='flex justify-end items-end bg-gray-200 drop-shadow-lg p-2'>
          <img src={person} className="" alt="" />
        </div>
        <div className='flex col-span-1 justify-center flex-col items-center text-center'>
          
          <h1 className='md:text-4xl font-bold mb-4'>Jane doe</h1>
          <p className='md:text-3xl text-center'>I am taking photos ever since i was a child focusing on the moment in life we hold dear and taking pictures to treasure these moments forever</p>
        </div>
      </div>
     
    </div>
  )
}

export default About;