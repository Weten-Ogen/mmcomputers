"use client"
import { HeroContent } from '@/content/hero';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

interface heroprops  {
  className?:string
}

const Hero = (props: heroprops) => {
  return (
    <section  className={cn('relative flex flex-col  h-[110vh] md:h-screen',props.className)} id="hero">
            <div className='w-full  max-w-full h-auto bg-black  md:w-[50%] md:h-screen md:ml-auto '>
              <Image
                  src={HeroContent.backgroundImage}
                  alt={`${HeroContent.backgroundImage} image`}
                  width={1000}
                  height={800}
                  className='object-cover h-auto'
              />
            </div>
            <div  
                className='block md:absolute md:inset-0  w-full md:flex md:items-center md:h-full z-10 '
            > 
                    <div className='p-8 md:p-20 w-full z-20 md:text-white md:max-w-2xl  md:bg-muted-foreground md:rounded-lg md:mx-5 md:space-y-2 flex flex-col gap-4'>
                      <h2 
                          className='w-full text-mediumFont font-poppins font-bold md:text-left uppercase  md:max-w-md '>
                            {HeroContent.heading}
                      </h2>
                      <p 
                           className=' text-extraSmall font-poppins font-thin  text-balance md:text-left md:max-w-xl  capitalize leading-6 tracking-8 '
                       >
                            {HeroContent.subHeading}
                      </p>
                      <Button
                             className='capitalize  tracking-wider font-poppins text-extraSmall text-white px-8 py-2'
                      >
                        {HeroContent.callToAction}

                      </Button>
                    </div>
            </div>
    </section>
  )
}

export default Hero