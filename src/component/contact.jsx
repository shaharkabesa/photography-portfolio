import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full mt-5 flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/c31dc57c-f9a3-45a3-84a1-24f9c3a3a153" className='flex flex-col max-w-[600px] w-full text-black' >
  
        <input className='bg-gray-200 p-2 placeholder:text-gray-500'type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-gray-200 placeholder:text-gray-500' type="email" placeholder='Email' name='email' />
        <textarea className='bg-gray-200 p-2 placeholder:text-gray-500' name="message" rows="10" placeholder='Message'></textarea>
        <button className=' border-2 hover:text-black hover:bg-white text-white bg-black hover:border-black px-4 py-3 my-8 mx-auto flex items-center duration-300'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;