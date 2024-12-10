import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface navprops {
    className:string,
    label : string
    reff: string
    f:(l:string) => void
}

const Navlink = ({label,f,className,reff}:navprops) => {
  return (
    <Link onClick={() => f(label) } href={`#${reff}`}  className={cn('',className)}>
    <span className='capitalize font-sans tracking-wide '>
        {label}
    </span>
    </Link>
  )
}



export default Navlink
