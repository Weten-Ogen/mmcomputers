import { ImageGalleryContent } from '@/content/imagegallery'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <section 
        className='min-h-[220vh] mt-4' 
        id='gallery'
    >
        <div>
            <h2 
                className='text-center text-primaryFont font-poppins underline underline-offset-2 font-bold italic uppercase'
            >
                {ImageGalleryContent.title}
            </h2>
            <p 
                className='font-poppins text-extraSmall pt-4 lowercase  text-center '
                >
                {ImageGalleryContent.statement}
            </p>
        </div>
        <div className='flex flex-wrap  justify-center p-4 md:p-8'>
            {ImageGalleryContent.imagesUrl.map((item)=> {
                return <div 
                            className='rounded-lg border border-red-500 flex-grow'
                            key={item.imageUrl}
                >
                    <Image
                    className='max-w-md w-full bg-muted-foreground'
                    src={item.imageUrl}
                    alt={item.label}
                    width={200}
                    height={100}
                    />
                </div>
            })}
        </div>
    </section>
  )
}

export default Gallery