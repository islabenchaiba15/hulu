import React from 'react'
import { navLinks } from '../../utiles/requests'
import { Router, useRouter } from 'next/router'
const NavComponent = () => {
    const router=useRouter();
  return (
    <nav className="relative">
        <div className="flex justify justify-between px-10 sm:px-20 text-[16px] sm:text-[20px] whitespace-nowrap overflow-x-scroll 
        space-x-10 sm:space-x-20 scrollbar-hide">
            {Object.entries(navLinks).map(([key,{title,url}])=>(
                <h2 className="cursor-pointer transition-100 transform hover:scale-125
                hover:text-white active:text-red-500" key={key} onClick={()=>router.push(`/?genre=${key}`)}>{title}</h2>
            ))}
           
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  )
}

export default NavComponent