import { cn } from '@/lib/utils'
import React from 'react'

interface comprops {
    text: string,
    className:string
}
const Heading = ({text,className}:comprops) => {
  return (
    <h2 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",className)}>
      {text}
    </h2>
  )
}

export default Heading
