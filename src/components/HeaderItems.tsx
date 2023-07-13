import React from 'react'
interface Props{
    title:string
    Icon:React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    } & React.RefAttributes<SVGSVGElement>>
}
const HeaderItems = ({title,Icon}:Props) => {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
        <Icon className='h-6 sm:h-8 group-hover:animate-bounce mb-1'/>
        <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  )
}

export default HeaderItems