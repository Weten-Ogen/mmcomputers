"use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface testicardprops {
    name : string,
    passage: string,
    ratings: number,
    className?: string
}

const Testimoncard = (props: testicardprops) => {
  return (
    <div className={cn('container p-4 flex flex-col ',props.className
    )}>
        <div className=''>
            <h2 className='text-primaryFont font-poppins tracking-wide font-bold'>
                {props.name}
            </h2>
            <p className='text-extraSmall font-medium p-2 font-poppins'>
                {props.passage}
            </p>
            <p className='font-poppins  text-extraSmall'>
                {props.ratings}
            </p>
        </div>
    </div>
  )
}

export default Testimoncard