import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const AccordionItem = ({ title, desc }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='p-5 shadow-[0_0_20px_rgba(0,0,0,0.10)] rounded-2xl cursor-pointer'>
            <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center text-xl font-bold">{title}{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
            <div className={`grid overflow-hidden transition-all ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className='overflow-hidden'>{desc}</p>
            </div>
        </div>
    )
}

export default AccordionItem