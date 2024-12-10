"use client"
import React from 'react'
import Heading from '../reusables/heading'
import SubHeading from '../reusables/subheading'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  return (
    <section 
    className='min-h-screen text-black mt-12 p-8 md:flex-center-center ' 
    id="home">
      <article className='max-w-lg font-serif flex flex-col gap-8  mb-5'>
        <Heading 
        className='text-black font-bold '
        text='The Computing world with best services.'/>
        <SubHeading 

        text='See your devices get fixed like a magician with the wan.We do laptop and computer fixes, personal computer hardware upgrades, gaming pc build, parts of pc sales, and limited sales on other devices.'
        className=''
        />
        <div>
          <Button
          onClick={() => router.push('#contact')}
           className='hover:-translate-y-0.5 transition-opacity tracking-wider  text-lg px-8 py-4 '>
            contact us
          </Button>
        </div>
      </article>
      <div className='object-contain '>
        <Image
        src="https://auwsnqvctbi9oc7m.public.blob.vercel-storage.com/mmcomputers/IMG-20241204-WA0019-2cuJszJl8aWEkKGLC4chj21psXfDNu.jpg"
        alt="hero image"
        width="500"
        height="500"
        className='object-cover rounded-md shadow-primaryviolet shadow-lg'
        />
      </div>
    </section>
  )
}

export default Hero
