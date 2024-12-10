import { cn } from '@/lib/utils'
import React from 'react'

interface paraprops {
    className: string,
    text: string

}


const Para = ({className,text}:paraprops) => {
  return (
    <div className={cn('',className)} >
      {text}
    </div>
  )
}


interface paraprops {
    className: string ,

}
export default Para
