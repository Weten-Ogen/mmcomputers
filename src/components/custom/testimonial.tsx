"use client"
import { TestimonialsContent } from '@/content/testimonials'
import React from 'react'
import Testimoncard from './testimoncard'
import { cn } from '@/lib/utils'

interface testimonialprops {
  className?: string,

}

const Testimonial = (props: testimonialprops) => {
  return (
    <section 
          className={cn("p-4 ",props.className)} 
          id="testimonial"
          >
      <div className='flex items-start flex-wrap md:flex-nowrap'>
        {
          TestimonialsContent.map((item )=> {
            return(
              <Testimoncard
                key={item.name}
                {...item}
              />
            )
          })
        }
      </div>
    
    </section>
  )
}

export default Testimonial