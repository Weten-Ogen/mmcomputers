"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import {Icon, IconNode} from 'lucide-react'

interface servicecardprops {
    label : string,
    icon : any,
    description: string,
    className?:string
}

const ServiceCard = (props: servicecardprops) => {
  return (
    <div className={cn('container shadow-lg p-4 flex  ',props.className)}>
        
        <div  className='flex flex-col gap-4'>
            <div className='md:p-4'>

                <h2 
                        className='font-poppins text-primaryFont tracking-wide font-bold capitalize '
                >
                    {props.label}
                </h2>
            </div>
            <div 
                    className='max-w-lg text-extraSmall font-poppins md:p-4'
            >
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard