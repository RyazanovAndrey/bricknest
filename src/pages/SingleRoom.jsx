import { useParams } from 'react-router';
import roomsList from '../db.json';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Hotel, Map } from 'lucide-react';

const SingleRoom = () => {

    const { cat, id } = useParams()
    const currentRoom = roomsList[cat]

    const singleRoom = currentRoom.find(item => item.id == id)

    const imageItem = singleRoom.images

    return (
        <section className='bg-[##F9F9FB]'>
            <div className="relative bg-[url(/image/section-banner-1.jpg)] min-h-[300px] grid place-items-center">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="text-center space-y-2 z-10 text-white">
                    <div className="text-5xl font-bold">Properies Detail</div>
                    <div className="">Get to know our talented team</div>
                </div>
            </div>
            <div className="container mx-auto py-5">
                <div className="grid grid-cols-[70%_30%] gap-x-5">
                    <div className="">
                        <div className="rounded-2xl overflow-hidden">
                            <Swiper
                                modules={[Pagination]}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                            >
                                {imageItem.map(item => (
                                    <SwiperSlide><img src={'../../' + item} className='w-full h-[350px] object-cover' alt="" /></SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="rounded-2xl shadow-md mt-5 p-5">
                            <p className='text-2xl font-bold flex items-center gap-x-2'><Map />Property adress</p>
                            <div className="mt-5">
                                <div className="">Adress:</div>
                                <div className="">City:</div>
                            </div>
                        </div>
                        <div className="rounded-2xl shadow-md mt-5 p-5">
                            <p className='text-2xl font-bold flex items-center gap-x-2'><Map />Description</p>
                            <p className='mt-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia quidem, magnam quae iste accusamus ratione error veniam sunt a!</p>
                        </div>
                    </div>
                    <div className="shadow-md p-5 rounded-2xl space-y-5">
                        <div className="flex gap-x-2">
                            <button className='bg-[#DFE9F8] text-[#89A2CD] py-3 px-6 rounded-full'>Rent</button>
                            <button className='bg-[#DAFFE5] text-[#76BA8D] py-3 px-6 rounded-full'>Townships</button>
                        </div>
                        <div className="text-2xl font-bold flex items-center gap-x-2"><Hotel />{singleRoom.title}</div>
                        <div className="text-3xl font-bold text-[#8449a7]">{singleRoom.price}</div>
                        <div className="flex gap-x-3">
                            <button className='border py-3 px-6 rounded-full border-gray-200'>Share</button>
                            <button className='border py-3 px-6 rounded-full border-gray-200'>Favorite</button>
                            <button className='border py-3 px-6 rounded-full border-gray-200'>Print</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleRoom