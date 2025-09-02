import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import { Brackets, Droplet, Heart, House, Share, Share2 } from 'lucide-react';

const TopCard = ({ id, title, debrooms, bathrooms, size, price, images, desc }) => {

    return (
        <div className='flex bg-white rounded-2xl overflow-hidden'>
            <div className="w-[300px] h-[300px]">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    className='w-full object-cover'
                >
                    {images.map(item => (
                        <SwiperSlide><img src={item} alt="" className='w-[310px] h-[310px] object-cover object-center' /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="p-5">
                <Link to={`/rooms/${id}`} className='font-bold text-2xl'>{title}</Link>
                <div className="font-bold">{price}</div>
                <div className="text-[14px] text-gray-500 my-3">{desc}</div>
                <div className="flex gap-x-2 my-3 cursor-pointer pb-14">
                    <div className="border p-2 border-gray-300 rounded-md hover:border-main transition-all duration-300">
                        <Share2 color='grey' />
                    </div>
                    <div className="border p-2 border-gray-300 rounded-md hover:border-main transition-all duration-300">
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