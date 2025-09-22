import { ArrowRight, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import listRooms from '../db.json';
import TopCard from '../components/TopCard';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SpotlightCard from '../components/SpotlightCard';
import BtnCustom from '../components/BtnCustom';
import BlogCard from '../components/BlogCard';

const HomePage = () => {

  const [tabHomeActive, setTabHomeeActive] = useState('RENT')
  const tabsHome = ['RENT', 'BUY', 'FORECOLSURE']

  const [showDrop, setShowDrop] = useState(false)
  const [pageLatest, setPageLatest] = useState(1)
  const [pageBlog, setPageBlog] = useState(1)

  const tabsHomeList = {
    'RENT': ['Studio', 'Apartaments', 'Houses', 'Luxury Homes', 'Office Spaces'],
    'BUY': ['Status', 'Property', 'Active', 'Sold'],
    'FORECOLSURE': ['Categories', 'Apartaments', 'Houses', 'Sold']
  }

  const [onBtn, setOnBtn] = useState(tabsHomeList[tabHomeActive][0])

  const showMore = () => {
    setPageLatest(pageLatest + 1)
  }

  const showMoreBlog = () => {
    setPageBlog(pageBlog + 1)
  }

  useEffect(() => {
    setOnBtn(tabsHomeList[tabHomeActive][0])
  }, [tabHomeActive])


  return (
    <>
      {/* Section Home */}
      <section className='relative bg-[url(/image/Hero.jpg)] object-cover min-h-[600px] grid place-items-center'>
        <div className="absolute bg-black/60 w-full h-full min-h-[600px] z-20"></div>
        <div className="relative w-96 md:w-[1000px] text-center space-y-4 z-40">
          <h1 className='text-5xl font-bold text-white'>Find Your Dream <span className='text-main'>Home</span></h1>
          <p className='text-white'>Explore top properties in India with trusted real estate services</p>
          <div className="bg-black/60 rounded-md p-3 text-white">
            <div className="flex gap-x-10">
              {tabsHome.map(item => (
                <button onClick={() => setTabHomeeActive(item)} className={`cursor-pointer relative ${tabHomeActive == item ? 'after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-white' : ''}`}>{item}</button>
              ))}
            </div>
            <div className="relative grid md:grid-cols-3 mt-5">
              <button onClick={() => setShowDrop(!showDrop)} className='py-3 text-text cursor-pointer bg-gray-200  rounded-l-sm flex items-center justify-center gap-x-2 h-11'>
                {onBtn}{showDrop ? <ChevronUp size={18} className='relative top-0.5' /> : <ChevronDown size={18} className='relative top-0.5' />}
              </button>
              <input type="text" className='pl-3 bg-white text-text outline-0 h-11' placeholder='Enter an adress, state, city, area or zip code' />
              <button className='bg-main text-white cursor-pointer flex gap-x-2 items-center justify-center rounded-r-sm h-11'><Search />Search Listings</button>
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
          <div className="grid md:grid-cols-4 gap-5 mt-5">

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
      {/* Section Spotlight */}
      <section className='py-20'>
        <div className="container mx-auto px-3">
          <Title title={'Spotlight Properties'} desc={'Add the listings you want to showcase as featured'} />
          <div className="mt-5">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              grabCursor={true}
              loop
              className='h-[500px]'
              breakpoints={{ 
                768: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
               }}
            >
              {listRooms.spot.map(item => (
                <SwiperSlide>
                  <SpotlightCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Section Top */}
      <section className='mt-[-23%] bg-section-violet min-h-[500px] pt-[23%] pb-20'>
        <div className="container mx-auto px-3">
          <Title title={'Top Properties'} desc={'Check the listing you want to showcase as featured '} />
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {listRooms.top.map(item => (
              <TopCard {...item} />
            ))}
          </div>
        </div>
      </section>
      {/* Feature Collections */}
      <section className='py-20'>
        <div className="container mx-auto px-3">
          <Title title={'Featured Collections'} desc={'Display how many properties are by category, city or area'} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {listRooms.collections.map(item => (
              <div className='flex gap-5 p-3 border border-gray-200 cursor-pointer rounded-lg hover:shadow-lg duration-300 '>
                <div className="size-20 overflow-hidden rounded-md">
                  <img src={item.image} className='w-full h-full' alt="" />
                </div>
                <div className="">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-gray-500">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Latest preperies */}
      <section className=''>
        <div className="container mx-auto px-3">
          <div className="flex justify-between items-center">
            <Title title={'Latest Properties'} desc={'List your latest properties and order them as you with'} />
            <BtnCustom clickBtn={showMore} variant={'border'}>View All Properties</BtnCustom>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-5 mb-20">
            {listRooms.latest.slice(0, pageLatest * 3).map(item => (
              <SpotlightCard {...item} />
            ))}
          </div>
        </div>
      </section>
      {/* Get in touch */}
      <section className='bg-[url(/image/page-section.jpg)] py-20 object-cover bg-center grid place-items-center'>
        <div className="container mx-auto px-3">
          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden">
            <div className="bg-[#111823] text-white">
              <div className="my-20 mx-10 space-y-3">
                <div className="text-2xl font-bold">Work with the best real estate platform in Mumbai to buy or sell properties</div>
                <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatibus architecto labore perferendis laboriosam inventore, ipsam at aliquid ad ab.</div>
                <button className='bg-black py-3 px-6 rounded-md cursor-pointer hover:bg-white hover:text-black transition-all'>Contact us today</button>
              </div>
            </div>
            <div className="bg-white grid place-items-center">
              <div className="my-10 md:my-0 mx-10 space-y-2">
                <div className="text-lg font-bold">Get in touch</div>
                <input type="text" placeholder='Your name' className='w-full border border-gray-200 pl-3 h-11 outline-0 rounded-md' />
                <input type="text" placeholder='Your email' className='w-full border border-gray-200 pl-3 h-11 outline-0 rounded-md' />
                <input type="text" placeholder='Your phone' className='w-full border border-gray-200 pl-3 h-11 outline-0 rounded-md' />
                <textarea className='border border-gray-200 w-full pl-3 outline-0 rounded-md' placeholder='Type your message...'></textarea>
                <BtnCustom >Send mail</BtnCustom>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore by type */}
      <section className='py-20'>
        <div className="container mx-auto px-3">
          <Title title={'Explore by type'} desc={'Display how many properties are by city, area or category'} />
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {listRooms.explore.map(item => (
              <div className='relative rounded-2xl overflow-hidden h-[300px] group cursor-pointer'>
                <img src={item.image} alt="" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all"></div>
                <div className="absolute bottom-5 left-0 text-white w-full text-center">
                  <div className="text-2xl">{item.title}</div>
                  <div className="">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* News */}
      <section className=''>
        <div className="container mx-auto px-3">
          <Title title={'News & Article'} desc={'Read about what is happening in India real estate market'} />
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {listRooms.blog.slice(0, pageBlog * 3).map(item => (
              <BlogCard {...item} />
            ))}
          </div>
          <div className="text-center w-full py-8">
              <BtnCustom clickBtn={showMoreBlog}>Load articles</BtnCustom>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage