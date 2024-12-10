"use client"
import React from 'react'
import { Sheet,SheetContent,SheetTrigger} from '../ui/sheet'
import Logo from './logo'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { links } from '@/constants'



const MobileNav=()=> {
 
  return (
    <div className=' bg-primarygray'>
    <Sheet  >
      <SheetTrigger 
      aria-description='Menu'
      aria-describedby='marcus'  className='cursor-pointer' >
        <Menu 
        size={10}
        className='h-10 w-10'
        />
      </SheetTrigger>

      <SheetContent 
       aria-label='this this the sheetcontent'
      side={'left'} 
      className=' w-full  md:w-[400px] sm:w-[540px] ' >
      <div className='flex items-center relative '>   
          <Logo />
      </div>
      <div className='flex-start-center flex-col items-center gap-8 my-5 uppercase font-serif '>
       {
        links.map((item:linksprops) => {
            return (
                <Link aria-label={item.label} key={item.label } href={item.reff} className=''>
                    <span  className=''>{item.label}</span>
                </Link>
            )
        })
       }
      </div>
      
     </SheetContent>
    </Sheet>
    </div>
  )
}

export default MobileNav
