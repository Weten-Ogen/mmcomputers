"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import CustomFormField, { formSchema } from './customFormField'
import {zodResolver} from '@hookform/resolvers/zod'
import { z } from 'zod' 
import { Form } from '../ui/form'

const ContactForm = () => {
  const authForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact:"",
      message: ""
    }
  })
  return (
    <section id="form">
      <Form {...authForm}>

          <form 
              className='flex flex-col gap-4 p-8'
              >
                <CustomFormField
                    control={authForm.control}
                    name="name"
                    label="Name"
                    placeholder='Enter your Name here.'

                />
                <CustomFormField
                    control={authForm.control}
                    name="contact"
                    label="Contact"
                    placeholder='Enter your Contact.'
                    
                />
                <CustomFormField
                    control={authForm.control}
                    name="message"
                    label="Message"
                    placeholder='Leave a message.'
                    
                />

          </form>       
      </Form>
    </section>
  )
}

export default ContactForm