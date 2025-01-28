"use client"
import { ServicesContent } from '@/content/services'
import { cn } from '@/lib/utils'
import React from 'react'
import ServiceCard from './servicecard'
import { IconNode } from 'lucide-react'

interface serviceprops {
  className? :string
}

const Services = (props: serviceprops) => {
  return (
    <section
          className={cn('min-h-screen',props.className)}
    id="services">
        <div className='grid grid-cols-2 gap-4'>
          {
            ServicesContent.services.map((item) => {
              return (
                <ServiceCard
                    className=''
                    icon={item.icon}
                    description={item.description}
                    label={item.label}
                    key={item.label}
                />
              )
            })
          }
        </div>
    </section>
  )
}

export default Services