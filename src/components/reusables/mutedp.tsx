import { cn } from '@/lib/utils'
import React from 'react'

interface mutedprops {
    className: string,
    text: string
}

const MutedP = ({text,className}:mutedprops) => {
  return (
    <div className={cn('',className)}>
      {text}
    </div>
  )
}

export default MutedP
