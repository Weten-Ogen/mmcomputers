"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import Navlink from './navlink'


interface navprops {
    className: string,
    links : linksprops[]
}

const Navlinks = (props:navprops) => {
  const [active, setActive] = useState('home')

  const handleactive = (l:string) => {
    setActive(l)
  }
    return (
    <div className={cn('',props.className)}>
      {
        props.links.map((item:linksprops) => {
            return (
            <Navlink
                f={handleactive}
                key={item.reff}
                label={item.label}
                className={`${active === item.label ? "underline underline-offset-4 text-midviolet" :""}`} 
                reff={item.reff}
            />
        )
        })
      }
    </div>
  )
}

export default Navlinks
