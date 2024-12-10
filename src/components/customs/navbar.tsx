import React from 'react'
import Logo from '../reusables/logo'
import Navlinks from '../reusables/navlinks'
import { links } from '@/constants'
import MobileNav from '../reusables/mobilenav'
import { cn } from '@/lib/utils'

interface navprops {
  className?:string
}
const NavBar = (props:navprops) => {
  return (
    <section   className={cn("flex items-center justify-between z-50 top-0  fixed w-full ",props.className)}>
      <Logo />
      <Navlinks 
        className='hidden md:flex md:items-center md:gap-4'
        links={links}
      />
      <MobileNav/>
    </section>
  )
}

export default NavBar
