import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import { AtSign, Brackets, Droplet, Heart, House, Instagram, Share, Share2 } from 'lucide-react';

const TopCard = ({ id, title, debrooms, bathrooms, size, price, images, desc }) => {

    return (
        <div className='flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden'>
            <div className="w-[300px] h-[300px]">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    loop
                    className='w-full object-cover'
                >
                    {images.map(item => (
                        <SwiperSlide><img src={item} alt="" className='w-[310px] h-[310px] object-cover object-center' /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="p-5">
                <Link to={`/top/room/${id}`} className='font-bold text-2xl'>{title}</Link>
                <div className="font-bold">{price}</div>
                <div className="text-[14px] text-gray-500 my-3">{desc}</div>
                <div className="flex flex-col gap-2 my-3 cursor-pointer pb-3">

                    <div className="flex gap-x-1 group">
                        <div className="size-10 border p-2 border-gray-300 rounded-md hover:border-main transition-all duration-300">
                            <Share2 color='grey' />
                        </div>
                        <div className="flex gap-x-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                            <div className="size-10 border p-2 border-gray-300 rounded-md hover:border-main transition-all duration-300 bg-white">
                                <AtSign color='grey' />
                            </div>
                            <div className="size-10 border p-2 border-gray-300 rounded-md hover:border-main transition-all duration-30 bg-white">
                                <Instagram color='grey' />
                            </div>
                        </div>
                    </div>

                    <div className="size-10 border p-2 border-gray-300 rounded-md hover:border-main transition-all duration-300">
                        <Heart color='grey' />
                    </div>
                </div>
                <div className="flex items-center gap-x-2 my-3 text-gray-500">
                    <div className="flex items-center gap-x-2">
                        <House size={16} />
                        <div className="">{debrooms} Beds</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Droplet size={16} />
                        <div className="">{bathrooms} Baths</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Brackets size={16} />
                        <div className="">{size}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCard