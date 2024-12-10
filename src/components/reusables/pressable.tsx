import { cn } from '@/lib/utils'
import React from 'react'

interface pressprops {
    className: string,
    text: React.ReactElement
}
const Pressable = ({text,className}:pressprops) => {
  return (
    <div className={cn('',className)}>
      {text}
    </div>
  )
}

export default Pressable
