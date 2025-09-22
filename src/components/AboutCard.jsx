import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

const AboutCard = ({ image, name, job, about }) => {
  return (
    <div className='rounded-2xl overflow-hidden shadow-xl cursor-pointer'>
      <img src={image} alt="" />
      <div className="p-5 space-y-2">
        <div className="">
          <div className="font-bold text-xl">{name}</div>
          <div className="text-gray-500">{job}</div>
        </div>
        <div className="text-gray-500">{about.slice(0, 60)}...</div>
        <div className="flex justify-between mt-8">
          <div className="flex gap-x-4">
            <div className="flex gap-3 text-gray-500 hover:text-main transition-all"><Facebook /></div>
            <div className="flex gap-3 text-gray-500 hover:text-main transition-all"><Instagram /></div>
            <div className="flex gap-3 text-gray-500 hover:text-main transition-all"><Linkedin /></div>
            <div className="flex gap-3 text-gray-500 hover:text-main transition-all"><Twitter /></div>
          </div>
          <div className="flex gap-x-4">
            <div className="flex gap-x-3 cursor-pointe text-gray-500 hover:text-main transition-all"><Phone /></div>
            <div className="flex gap-x-3 cursor-pointe text-gray-500 hover:text-main transition-all"><Mail /></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutCard