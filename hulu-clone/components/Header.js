import React from 'react'
import { 
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between h-auto'>
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title='HOME' Icon={HomeIcon}/>
            <HeaderItem title='THRENDING' Icon={LightningBoltIcon}/>
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
            <HeaderItem title='COLLECTION' Icon={CollectionIcon}/>
            <HeaderItem title='SEARCH' Icon={SearchIcon}/>
            <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
        </div>
        <h1 className=' text-60' width={200} height={100} >MyHuLuImage</h1>
    {/* <Image
        className="object-contain" 
        src="D:/webDev/projects/MyHulu/styles/hululogo.png" 
        width={200} 
        height={100}/> */}
    
    </header>

  )
}

export default Header