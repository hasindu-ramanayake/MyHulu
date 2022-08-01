import {useRouter} from 'next/router'
import React from 'react'
import requests from '../Utils/requests'

function Nav() {
  const router = useRouter();

  return (
    <nav className=' relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10
                    sm:space-x-20 overflow-x-scroll scrollbar-hide '>
        {Object.entries(requests).map( ([keyMap,{title,url}]) => (
          <h2 
          key={keyMap}
          onClick={()=>router.push(`/?genre=${keyMap}`)} 
          className='last:pr-24 cursor-pointer transition duration-100
          transform hover:scale-125 hover:text-white'>
          {title}
          </h2>
        ))}
        
      </div>
      <div className=' absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
    </nav>
  )
  
}

export default Nav