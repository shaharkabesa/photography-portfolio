import React, { useEffect, useState } from 'react'
import data from '../gallery.json';
const Carousel = () => {
  const [color, setColor] = useState(['black', 'white', 'blue'])
  const [slide, setSlide] = useState(0);
  const [count, setCount] = useState(0);
  console.log(color);
  console.log(data.All);
  console.log(data.All.length);
  useEffect(() => {
    const timer = setTimeout(() => {
      const count = slide;
      console.log(slide);
      // slide == data.All.length ? setSlide(0) : slide != data.All.length ? setSlide(slide + 1) : ""
      slide === data.All.length - 1 ? setSlide(0) : setSlide(slide + 1)
      console.log(slide);
    }, 2000);
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <div className='flex max-w-[1280px] h-screen mx-auto justify-center items-center'>
      <div className="carousel h-[200px] w-full md:h-[400px] md:w-[400px] bg-cover duration-700" style={{backgroundImage : `url(${data.All[slide].url})`}}>

      </div>
    </div>
  )
}

export default Carousel;