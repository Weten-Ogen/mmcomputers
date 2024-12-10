import { cn } from '@/lib/utils'
import React from 'react'

interface subprops {
    className:string,
    text: string
}

const SubHeading = ({text,className}:subprops) => {
  return (
    <div className={cn('scroll-m-20 text-2xl font-semibold tracking-tight text-foreground ',className)
    }>
      {text}
    </div>
  )
}

export default SubHeading
