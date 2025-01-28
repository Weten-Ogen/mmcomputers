"use client"
import { StatementContent } from '@/content/statement'
import { cn } from '@/lib/utils'
import React from 'react'

interface statementprops {
    className?:string
}

const Statement = (props: statementprops) => {
  return (
    <section className={cn('relative mt-36 h-screen w-full',props.className)} id="statement">
        <div className='w-full md:flex md:items-center md:justify-center '>
            <h4 className=''>
                {StatementContent.mainStatement}
            </h4>
        </div>
    </section>
  )
}

export default Statement