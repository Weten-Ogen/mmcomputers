"use client"
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import {z} from 'zod'
import { FormControl,FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export const formSchema = z.object({
   name: z.string(),
   contact: z.string(),
   message: z.string()
})

interface customfieldprops {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
  }

const CustomFormField = (props: customfieldprops) => {
  return  (<FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="font-bold text-primaryFont font-poppins">
            {props.label}
          </FormLabel>
          {props.name === "message" ? 
          <div>
            <FormControl>
                <Textarea
                  cols={20}
                  className=''
                  {...field}
                  placeholder={props.placeholder}
                />
            </FormControl>  
          </div>:
          <div className="flex w-full flex-col">
            <FormControl>
                <Input 
                  {...field}
                  placeholder={props.placeholder}
                  className="py-6 px-4 bg-white"
                />
            </FormControl>
          </div>
          }
            <FormMessage className="form-message text-red-500 mt-2 text-md" />
          </FormItem>)}/>)}

export default CustomFormField