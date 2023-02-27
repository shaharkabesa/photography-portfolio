import React, { useEffect, useState } from 'react'
import Dog from '../assets/frenchie.jpg';
import data from '../gallery.json';

const Gallery = () => {
  const [status, setStatus] = useState('All');
  const [Datas, setData] = useState (data.All);
  // useEffect( () => {
  //   if(status == "All") {
  //     return data.All;
  //   }
  // }, status)
  return (
    <div dir="rtl" className='flex flex-col pb-12 pt-8 max-w-[1280px] mx-auto justify-center items-center'>
      <h2 className='text-4xl pt-16 pb-2 uppercase'>Gallery</h2>
      <ul dir="ltr" className='w-full flex justify-center py-10'>
        <li onClick={(e) => {
          {
            setData(data.All);
           }
        }} className='px-2 md:px-4 text-xl hover:scale-110 duration-500 cursor-pointer'>All</li>
        <li onClick={(e) => {
          
          setData( data.All.filter(All => All.Category == `${e.target.outerText}`));
           
        }} className='px-2 md:px-4 text-xl hover:scale-110 duration-500 cursor-pointer'>Nature</li>
        <li onClick={(e) => {
            setData(data.All.filter(All => All.Category == `${e.target.outerText}`));
          }} className='px-4 text-xl hover:scale-110 duration-500 cursor-pointer'>Animals</li>
        <li onClick={(e) => {
        setData(data.All.filter(All => All.Category == `${e.target.outerText}`));
        }} className='px-2 md:px-4 text-xl hover:scale-110 duration-500 cursor-pointer'>Objects</li>
        <li onClick={(e) => {
         setData(data.All.filter(All => All.Category == `${e.target.outerText}`));
        }} className='px-2 md:px-4 text-xl hover:scale-110 duration-500 cursor-pointer'>Food</li>
      </ul>
      <div className='flex justify-center items-center flex-wrap gap-4 px-4'>
     {!Datas ? "" : Datas.map((photo, i) => {
return (
  <div key={photo.id} className='h-[150px] w-[150px] md:h-[400px] md:w-[400px] bg-cover' style={{backgroundImage: `url(${photo.url})`}}> 
  
  </div>
)
        })}
 
      

    </div>

    </div>
  )
}

export default Gallery;