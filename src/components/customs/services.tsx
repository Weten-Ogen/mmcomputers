
import React from 'react'
import { Settings } from 'lucide-react'
import SubHeading from '../reusables/subheading'
import Highlightedtext from '../reusables/higlightedtext'

const Services = () => {
  return (
    <section 
    id='services' 
     className='screen-view bg-primarygray text-black font-sans' >
      <article className='p-4 md:p-8'>
        <div className=' flex items-start flex-col'>
            <SubHeading
            className=''
            text='Laptop & Computer Repairs'
            />
          <div className='flex  p-4 max-w-lg '>
            <Settings size={50}/>
            <Highlightedtext 
            text="We fix laptops,computers and computer accessories.Trust us to do a great job on your broken device."
            className='font-serif'/>
          </div>
          
          
        </div>
      </article>
      
    </section>
  )
}

export default Services
