"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

interface qprops {
    id: number,
    question: string,
    answer: string
}
interface compprops {
    className: string,
    questions: qprops[]
    
}

const AccordionsReuse = (props:compprops) => {
  return (
    <div className={cn('',props.className)}>
        <Accordion type="single" collapsible className="w-full">
        {
            props.questions.map((item:qprops) => {
                return (
                        <AccordionItem key={item.id + item.question} value={`item-${item.id}`}>
                        <AccordionTrigger>
                            {item.question} 

                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer}

                        </AccordionContent>
                        </AccordionItem>
 
                )
            })} 
            </Accordion>
</div>
  )}

export default AccordionsReuse



  