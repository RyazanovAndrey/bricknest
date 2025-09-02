import { ArrowRight, MoveRight, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import servicesList from '@/db.json'

const HomePage = () => {

  const [tabHomeActive, setTabHomeeActive] = useState('RENT')
  const tabsHome = ['RENT', 'BUY', 'FORECOLSURE']

  const [showDrop, setShowDrop] = useState(false)

  const tabsHomeList = {
    'RENT': ['Studio', 'Apartaments', 'Houses', 'Luxury Homes', 'Office Spaces'],
    'BUY': ['Status', 'Property', 'Active', 'Sold'],
    'FORECOLSURE': ['Categories', 'Apartaments', 'Houses', 'Sold']
  }

  const [onBtn, setOnBtn] = useState(tabsHomeList[tabHomeActive][0])

  useEffect(() => {
    setOnBtn(tabsHomeList[tabHomeActive][0])
  }, [tabHomeActive])


  return (
    <>
      {/* Section Home */}
      <section className='relative bg-[url(/image/Hero.jpg)] object-cover min-h-[600px] grid place-items-center'>
        <div className="absolute bg-black/60 w-full h-full min-h-[600px] z-20"></div>
        <div className="relative w-[1000px] text-center space-y-4 z-40">
          <h1 className='text-5xl font-bold text-white'>Find Your Dream <span className='text-main'>Home</span></h1>
          <p className='text-white'>Explore top properties in Poland with trusted real estate services</p>
          <div className="bg-black/60 rounded-md p-3 text-white">
            <div className="flex gap-x-10">
              {tabsHome.map(item => (
                <button onClick={() => setTabHomeeActive(item)} className={`cursor-pointer relative ${tabHomeActive == item ? 'after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-white' : ''}`}>{item}</button>
              ))}
            </div>
            <div className="relative flex mt-5">
              <button onClick={() => setShowDrop(!showDrop)} className='py-3 text-text cursor-pointer bg-gray-500 w-1/5 rounded-l-sm'>
                {onBtn}
              </button>
              <input type="text" className='pl-3 bg-white text-text outline-0 w-3/5' placeholder='Enter an adress, state, city, area or zip code' />
              <button className='bg-main text-white cursor-pointer flex gap-x-2 items-center justify-center w-1/5 rounded-r-sm'><Search />Search Listings</button>
              {showDrop && (
                <>
                  <div className="absolute top-[105%] bg-white w-60 text-text text-left rounded-sm overflow-hidden">
                    {tabsHomeList[tabHomeActive].map(item => {
                      return <p onClick={() => { setOnBtn(item); setShowDrop(false) }} className='p-3 cursor-pointer hover:bg-gray-200'>{item}</p>
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      <section>
        <div className="container mx-auto px-3 py-20">
          <Title title={'Our Services'} desc={'Bricknest offers you the best real estate website'} />
          <div className="grid grid-cols-4 gap-x-5 mt-5">

            <div className="relative top-0 border border-line rounded-sm p-5 flex flex-col items-center gap-3 cursor-pointer transition-all hover:-top-1">
              <div className="size-20 bg-[#D6E3ED] rounded-sm flex items-center justify-center">
                <img src="image/service-icon1.svg" width={50} alt="" />
              </div>
              <div className="text-xl font-bold">Sell your home</div>
              <p className='text-[#B2B3B2] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsum.</p>
              <a href="#" className='flex items-center gap-x-2 text-[#B2B3B2] hover:text-main'>Learn more... <ArrowRight className='' size={16} /></a>
            </div>

            <div className="relative top-0 border border-line rounded-sm p-5 flex flex-col items-center gap-3 cursor-pointer transition-all hover:-top-1">
              <div className="size-20 bg-[#D6E3ED] rounded-sm flex items-center justify-center">
                <img src="image/service-icon2.svg" width={50} alt="" />
              </div>
              <div className="text-xl font-bold">Home loans</div>
              <p className='text-[#D7E4F0] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsum.</p>
              <a href="#" className='flex items-center gap-x-2 text-[#B2B3B2] hover:text-main'>Learn more... <ArrowRight className='' size={16} /></a>
            </div>

            <div className="relative top-0 border border-line rounded-sm p-5 flex flex-col items-center gap-3 cursor-pointer transition-all hover:-top-1">
              <div className="size-20 bg-[#E3D8F0] rounded-sm flex items-center justify-center">
                <img src="image/service-icon3.svg" width={50} alt="" />
              </div>
              <div className="text-xl font-bold">Home inspection</div>
              <p className='text-[#B2B3B2] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsum.</p>
              <a href="#" className='flex items-center gap-x-2 text-[#B2B3B2] hover:text-main'>Learn more... <ArrowRight className='' size={16} /></a>
            </div>

            <div className="relative top-0 border border-line rounded-sm p-5 flex flex-col items-center gap-3 cursor-pointer transition-all hover:-top-1">
              <div className="size-20 bg-[#EAD4C5] rounded-sm flex items-center justify-center">
                <img src="image/service-icon4.svg" width={50} alt="" />
              </div>
              <div className="text-xl font-bold">Legal services</div>
              <p className='text-[#B2B3B2] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsum.</p>
              <a href="#" className='flex items-center gap-x-2 text-[#B2B3B2] hover:text-main'>Learn more... <ArrowRight className='' size={16} /></a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage