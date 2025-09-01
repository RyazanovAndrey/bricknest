import { Search } from 'lucide-react'
import React, { useState } from 'react'

const HomePage = () => {

  const [tabHomeActive, setTabHomeeActive] = useState('RENT')
  const tabsHome = ['RENT', 'BUY', 'FORECOLSURE']

  const [showDrop, setShowDrop] = useState(false)

  const tabsHomeList = {
    'RENT': ['Studio', 'Apartaments', 'Houses', 'Luxury Homes', 'Office Spaces'],
    'BUY': ['Status', 'Property', 'Active', 'Sold'],
    'FORECOLSURE': ['Categories', 'apartaments', 'Houses', 'Sold']
  }

  return (
    <section className='relative bg-[url(/image/Hero.jpg)] object-cover min-h-[600px] grid place-items-center'>
      <div className="absolute bg-black/60 w-full h-full min-h-[600px] z-20"></div>
      <div className="relative w-[1000px] text-center space-y-4 z-50">
        <h1 className='text-5xl font-bold text-white'>Find Your Dream <span className='text-main'>Home</span></h1>
        <p className='text-white'>Explore top properties in Poland with trusted real estate services</p>
        <div className="bg-black/60 rounded-md p-3 text-white">
          <div className="flex gap-x-10">
            {tabsHome.map(item => (
              <button onClick={() => setTabHomeeActive(item)} className={`cursor-pointer relative ${tabHomeActive == item ? 'after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-white' : ''}`}>{item}</button>
            ))}
          </div>
          <div className="relative flex mt-5">
            <button onClick={() => setShowDrop(!showDrop)} className='py-3 text-text cursor-pointer bg-gray-500 w-1/5'>
              {tabsHomeList[tabHomeActive][0]}
            </button>
            <input type="text" className='pl-3 bg-white text-text outline-0 w-3/5' />
            <button className='bg-main text-white cursor-pointer flex gap-x-2 items-center justify-center w-1/5'><Search />Search Listings</button>
            {showDrop && (
              <>
                <div className="absolute top-[100%] bg-white w-50 text-text text-left">
                  {tabsHomeList[tabHomeActive].map(item => {
                    return <p onClick={() => setShowDrop(false)} className='p-3 cursor-pointer hover:bg-gray-200'>{item}</p>
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage