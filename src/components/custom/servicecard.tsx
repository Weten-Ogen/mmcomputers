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
    <div className={cn('container shadow-lg p-4 ',props.className)}>
        <div  className=''>
                <h2>{props.label}</h2>
                

        </div>
    </div>
  )
}

export default ServiceCard