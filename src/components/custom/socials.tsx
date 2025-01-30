"use client"
import { generalcontent } from '@/content'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface socialprops {
  className?: string,
}

const Socials = (props: socialprops) => {
  return (
    <section id="socials">
      <div className='flex items-center justify-center  gap-4 p-4'>
        {generalcontent.socials.map((item) => {
          return (
            <Link 
                  key={item.label}
                  className={cn('',props.className)}
                  href={item.link}
                >
                    <Image
                        className=''
                        width={25}
                        height={25}
                        src={item.icon}
                        alt={item.label}
                    />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Socials