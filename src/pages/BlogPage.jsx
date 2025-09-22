import React from 'react'
import blogList from '../db.json'
import BlogCard from '../components/BlogCard'

const BlogPage = () => {

    console.log(blogList.blog)

    return (
        <>
            <section className="relative bg-[url(/image/section-banner-1.jpg)] min-h-[300px] grid place-items-center">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="text-center space-y-2 z-10 text-white">
                    <div className="text-5xl font-bold">Blog</div>
                    <div className="">Get to know our talented team</div>
                </div>
            </section>
            <section className='py-20'>
                <div className="container mx-auto px-3">
                    <div className="grid md:grid-cols-3 gap-5">
                        {blogList.blog.map(item => (
                            <BlogCard {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPage