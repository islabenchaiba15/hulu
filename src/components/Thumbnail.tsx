import Image from 'next/image';
import React from 'react'
import {HandThumbUpIcon} from '@heroicons/react/24/outline'

const Thumbnail = ( {result}:any ) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original"
  console.log(result.backdrop_path)
  const imagePath =result.backdrop_path;
  const src = `${BASE_URL}${imagePath}`;
  console.log(result)
    return (
    <div className='group cursor-pointer p-4 transition duration-200
    ease-in-out transform sm:hover:scale-105 hover:z-50'>
        <Image  
        layout='responsive'
         height={1080}
         width={1920} 
         alt='poo' src={src} className='group-hover:opacity-100'
         />
         <div className="p-2">
            <p className='truncate max-w-[350px]'>
                {result.overview}
            </p>
            <h2 className=" text-2xl mt-1 text-white
            transition-all duration-100 ease-in-out group-hover:font-bold">
                {result.title}
            </h2>
         </div>
         <div className=' p-2'>
                <p className="flex flex-row items-center opacity-0 group-hover:opacity-100 gap-2">
                    {result.release_date}
                    <HandThumbUpIcon className="w-6 ml-3"/>
                    {result.vote_count}
                </p>
         </div>
    </div>
  )
}

export default Thumbnail