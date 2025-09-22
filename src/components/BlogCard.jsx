import React from 'react'

const BlogCard = ({ image, title, date, content }) => {
  return (
    <div className='rounded-2xl overflow-hidden shadow-md group cursor-pointer'>
      <div className="overflow-hidden">
        <img src={image} alt="" className='group-hover:scale-105 transition-all duration-300' />
      </div>
      <div className="p-5 space-y-3">
        <div className="font-bold">{title.slice(0, 80)}...</div>
        <div className="text-gray-500">{date}</div>
        <p className='text-gray-500'>{content.slice(0, 100)}...</p>
      </div>
    </div>
  )
}

export default BlogCard