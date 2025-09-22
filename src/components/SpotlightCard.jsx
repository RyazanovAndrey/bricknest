import React from 'react'
import { Link } from 'react-router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Brackets, Droplet, House } from 'lucide-react';

const SpotlightCard = ({ id, title, debrooms, bathrooms, size, images, price, avatar }) => {
    return (
        <div className='rounded-2xl overflow-hidden shadow-md bg-white'>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
                loop
            >
                {images.map(item => (
                    <SwiperSlide><img src={item} alt="" /></SwiperSlide>
                ))}
            </Swiper>
            <div className="p-5">
                <Link to={`/spot/room/${id}`} className='font-bold'>{title}</Link>
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
                <div className="flex items-center justify-between border-t-1 border-line pt-4">
                    <div className="text-xl font-bold ">{price}</div>
                    <img src={avatar} width={30} height={30} alt="" className='rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default SpotlightCard