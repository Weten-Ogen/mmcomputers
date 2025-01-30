'use client'

import React from 'react'
import Statement from './statement'
import { cn } from '@/lib/utils'
import { StatementContent } from '@/content/statement'
import Image from 'next/image'

interface moreprops {
    className?:string
}

const MoreStatement = (props: moreprops) => {
  return (
    <section
            className={cn('min-h-screen w-full max-w-full md:h-screen mx-auto',props.className)}     
            id='morestatement'
    >
            <div className=''>
                <h2 className='md:text-center max-w-sm uppercase text-primaryFont text-center font-poppins  underline underline-offset-2 p-4 md:max-w-md md:mx-auto font-bold'>
                    {StatementContent.secondStatementHeading}
                </h2>
                <p className='p-4 text-extraSmall font-medium text-left font-poppins'>{StatementContent.secondStatement}</p>
                <div>
                    <div className='p-4 max-w-lg object-contain '>
                        <Image
                            src={StatementContent.statementImage}
                            alt={`${StatementContent.statementImage}`}
                            width={800}
                            height={800}
                            className='w-full h-auto object-cover'
                        />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default MoreStatement