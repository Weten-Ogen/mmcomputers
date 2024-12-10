import { cn } from '@/lib/utils'
import React from 'react'
interface comprops {
    text:string,
    className: string,
}

const Highlightedtext = ({className,text}:comprops) => {
  return (
    <div  className={cn('',className)}>
      {text}
    </div>
  )
}

export default Highlightedtext
