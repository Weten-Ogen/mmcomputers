'use client'
import Link from 'next/link'
import React from 'react'

interface footerlinkprops {
  label: string,
  links: any[]
}

const FooterLinks = (props: footerlinkprops) => {
  return (
    <div id="footerlinks">
          <div className='flex flex-col items-center gap-4'>
            <h2 className='font-poppins text-primaryFont  capitalize font-bold'>
               {props.label}
            </h2>
            <div className='flex flex-col gap-4 items-center'>
              {
                props.links.map((item) => {
                  return <Link
                            key={item.label + item.reff}
                            className='font-poppins text-extraSmall' 
                            href={item.reff}
                  >
                          {item.label}
                    </Link>
                })
              }
            </div>
          </div>
    </div>
  )
}

export default FooterLinks