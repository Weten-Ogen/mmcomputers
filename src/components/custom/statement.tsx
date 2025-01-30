"use client"
import { StatementContent } from '@/content/statement'
import { cn } from '@/lib/utils'
import React from 'react'

interface statementprops {
    className?:string
}

const Statement = (props: statementprops) => {
  return (
    <section className={cn('relative  md:mt-20  h-[80vh] max-w-md mx-auto font-bold leading-8 flex items-center tracking-wider  w-full',props.className)} id="statement">
        
            <h4 className='text-extraSmall font-poppins  capitalize font-bold text-right'>
                {StatementContent.mainStatement}
            </h4>
      
    </section>
  )
}

export default Statement