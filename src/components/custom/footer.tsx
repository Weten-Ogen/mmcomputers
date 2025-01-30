"use client"
import { FooterContent } from '@/content/footer'
import React from 'react'
import FooterLinks from './footerlinks'
import Image from 'next/image'
import Socials from './socials'

const Footer = () => {
  return (
    <section id="footer">
        <div className='md:flex  gap-4 md:items-start p-4 w-full md:justify-center'>
          <div className=''>
              <h2 className='font-poppins font-primaryFont  max-w-lg uppercase font-bold '>
                {FooterContent.title}
              </h2 >
              <h4 className='font-medium text-extraSmall py-2'> 
                {FooterContent.subTitle}
              </h4>
              <div>
                 <Image
                    className=''
                    width={500}
                    height={500}
                    src={FooterContent.imageUrl}
                    alt={FooterContent.imageUrl}
                    
                 />
              </div>
              <div className=''>
                <Socials/>
              </div>   
          </div>
          <div className='grid grid-cols-2 items-start lg:grid-cols-3 justify-center gap-4'>
            {FooterContent.footernav.map((item) => {
              return <FooterLinks
                  key={item.label}
                  {...item}
              />
            })}
          </div>
        </div>
    </section>
  )
}

export default Footer