"use client"
import React from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface btncomprops {
    className?: string,
    label: string,
    func:() => void 
}

const ButtonUi = (props: btncomprops) => {
  return (
    <Button  
        onClick={()=>props.func()} 
        className={cn('',props.className)}
    >
        {props.label}
    </Button>
  )
}

export default ButtonUi