import { AtSign, Instagram, Mail, Phone, Send, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {

    const links = [
        'Apartaments',
        'Condos',
        'Houses',
        'Industrial',
        'Land'
    ]

    return (
        <footer className='bg-[#061D33] text-white py-10 mt-auto'>
            <div className="container mx-auto px-3">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="space-y-5">
                        <div className="font-semibold">Contact us</div>
                        <div className="">
                            <div className="text-gray-500 flex gap-x-2 items-center"><Phone size={16} />(453) 642-0980</div>
                            <div className="text-gray-500 flex gap-x-2 items-center"><Mail size={16} />test@gmail.com</div>
                        </div>
                        <div className="flex gap-5">
                            <div className="bg-[#0A243F] p-3 rounded-lg cursor-pointer hover:bg-main duration-300">
                                <Send />
                            </div>
                            <div className="bg-[#0A243F] p-3 rounded-lg cursor-pointer hover:bg-main duration-300">
                                <Instagram />
                            </div>
                            <div className="bg-[#0A243F] p-3 rounded-lg cursor-pointer hover:bg-main duration-300">
                                <AtSign />
                            </div>
                            <div className="bg-[#0A243F] p-3 rounded-lg cursor-pointer hover:bg-main duration-300">
                                <Youtube />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-5">List by category</div>
                        {links.map(item => {
                            return <a href="#" className='block text-gray-500 hover:text-white duration-300'>{item}</a>
                        })}
                    </div>
                    <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quasi molestias eum illum in deserunt ea eius itaque quam corrupti?</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer