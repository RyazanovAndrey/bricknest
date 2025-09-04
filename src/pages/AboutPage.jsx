import React from 'react'
import Title from '../components/Title'
import aboutList from '../db.json'
import AboutCard from '../components/AboutCard'
import { ChevronDown } from 'lucide-react'

const AboutPage = () => {

  return (
    <>
      <section className="relative bg-[url(/image/section-banner-1.jpg)] min-h-[300px] grid place-items-center">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="text-center space-y-2 z-10 text-white">
          <div className="text-5xl font-bold">About us</div>
          <div className="">Get to know our talented team</div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-3">
          <Title title={'Meet Our Team'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa placeat fugiat atque aliquam. Reiciendis exercitationem distinctio quibusdam. Fuga, blanditiis.'} />
          <div className="grid grid-cols-3 gap-x-5 mt-5">
            {aboutList.about.map(item => (
              <AboutCard {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className=''>
        <div className="container mx-auto px-3">
          <Title title='Frequently Asked Questions' desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa placeat fugiat atque aliquam. Reiciendis exercitationem distinctio quibusdam. Fuga, blanditiis.'} />
          <div className="my-10 space-y-5">
            <div className="p-5 shadow-[0_0_20px_rgba(0,0,0,0.10)] rounded-2xl cursor-pointer">
              <div className="font-bold flex justify-between">Why is it considered necessary to register Agreement for Sale?<ChevronDown /></div>
              <p className="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum quam saepe assumenda nemo neque laborum totam perspiciatis eveniet quibusdam?
              </p>
            </div>
            <div className="p-5 shadow-[0_0_20px_rgba(0,0,0,0.10)] rounded-2xl cursor-pointer">
              <div className="font-bold flex justify-between">Why is it considered necessary to register Agreement for Sale?<ChevronDown /></div>
              <p className="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum quam saepe assumenda nemo neque laborum totam perspiciatis eveniet quibusdam?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage