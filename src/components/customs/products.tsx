import { services } from '@/constants';
import React from 'react';
import { Card, CardContent} from '../ui/card';
import Image from 'next/image';
import SubHeading from '../reusables/subheading';


interface prodprops {
 id: number,
 label: string,
 url :string, 
}


const Products = () => {
  return (
    <section 
    className='min-h-screen bg-white pt-10' 
    id="featuredProducts">
      <SubHeading
      className=''
      text='featured Products'
      />
      <article className='grid grid-cols-1 w-full p-4 relative md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto md:w-[90%]'>
        {services.map((item:prodprops) => {
          return (
          <Card className='p-0 bg-red-500 relative shadow-lg object-contain hover:scale-110 hover:ease-out hover:duration:500  overflow-hidden w-[90%] h-[40vh]' key={item.url}>
              <CardContent className='p-0'>
               
                <Image
                src={item.url}
                alt={item.label} 
                width={"300"}
                height={"300"}
                className='object-cover w-full md:h-[300px] absolute inset-0 '
                />

              </CardContent>
          </Card>)
        })}
      </article>
      
    </section>
  )
}

export default Products
