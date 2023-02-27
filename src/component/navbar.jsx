import React, { useState } from 'react'
import {RxHamburgerMenu, RxCross1} from 'react-icons/rx';
const Navbar = () => {

  const [burgerNav, setBurgerNav] = useState(false);
  const handleNav = () => {
    setBurgerNav(!burgerNav);
    if(burgerNav) {
      document.body.style.overflow = "scroll"
    }
    else {
      document.body.style.overflow = "hidden"
    }
  }
  return (
    <div className='flex justify-between max-w-[1600px] mx-auto px-4 py-4'>
      <div className=''>
        <h1 className={!burgerNav ? 'text-2xl font-semibold duration-500' : 'duration-500 text-2xl font-semibold z-40 text-black absolute top-4 left-4'}>Camera</h1>
      </div>
      <div className='hidden md:block'>
        <ul className='md:flex gap-4 text-lg'>
          <li className='hover:scale-110 duration-300 cursor-pointer'>Home</li>
          <li className='hover:scale-110 duration-300 cursor-pointer'>Gallery</li>
          <li className='hover:scale-110 duration-300 cursor-pointer'>About</li>
          <li className='hover:scale-110 duration-300 cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div className='md:hidden'>
        <RxHamburgerMenu size={30} onClick={handleNav} className={!burgerNav ? "block" : "hidden"} />
        <div className='z-40 flex'>
        <RxCross1 size={30} onClick={handleNav} value={{ color: "white" }} className={!burgerNav ? "hidden" : "flex text-black z-30"} />

        <ul className={!burgerNav ? "flex flex-col duration-1000  bg-black/50 text-white h-screen w-full absolute top-0 left-[-500%]  justify-center items-center" : "flex flex-col duration-500 z-20  bg-white text-black h-screen w-full absolute top-0 left-0  justify-center items-center"}>
          <li className='text-2xl py-5'>Home</li>
          <li className='text-2xl py-5'>Gallery</li>
          <li className='text-2xl py-5'>About</li>
          <li className='text-2xl py-5'>Contact</li>
        </ul>
        </div>
      
      </div>
    </div>
  )
}

export default Navbar;