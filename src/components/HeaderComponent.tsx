import Image from 'next/image'
import React from 'react'
import HeaderItems from './HeaderItems'
import { HomeIcon,CheckBadgeIcon,UserIcon,LightBulbIcon,MagnifyingGlassCircleIcon,ArrowTrendingUpIcon} from '@heroicons/react/24/outline'

const HeaderComponent = () => {
  return (
    <header className='flex flex-col m-5 sm:flex-row justify-between items-center '>
        <div className="flex flex-grow justify-evenly max-w-2xl ">
            <HeaderItems title='Home' Icon={HomeIcon} />
            <HeaderItems title='Verified' Icon={CheckBadgeIcon} />
            <HeaderItems title='Account' Icon={UserIcon} />
            <HeaderItems title='Collection' Icon={LightBulbIcon} />
            <HeaderItems title='Search' Icon={MagnifyingGlassCircleIcon} />
            <HeaderItems title='Trending' Icon={ArrowTrendingUpIcon} />

        </div>
        <div className="object-contain -mt-6">
            <Image src="https://links.papareact.com/ua6" alt='dd' width={100} height={80}/>
        </div>
    </header>
  )
}

export default HeaderComponent