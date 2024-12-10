import { cn } from '@/lib/utils'
import React from 'react'

interface spanprops {
    className?:string,
    message: string
}

const Spantext = (props:spanprops) => {
  return (
    <span className={cn('',props.className)}>
      {props.message}
    </span>
  )
}

export default Spantext
