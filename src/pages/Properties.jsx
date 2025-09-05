import React, { useEffect, useState } from 'react'
import listRooms from '../db.json'
import SpotlightCard from '../components/SpotlightCard'
import Title from '../components/Title'
import BtnCustom from '../components/BtnCustom'

const Properties = () => {

    const [page, setPage] = useState(1)

    const showMore = () => {
        setPage(page + 1)
    }

    return (
        <>
            <section className="relative bg-[url(/image/section-banner-1.jpg)] min-h-[300px] grid place-items-center">
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="text-center space-y-2 z-10 text-white">
                    <div className="text-5xl font-bold">Latest Properties</div>
                    <div className="">Get to know our talented team</div>
                </div>
            </section>
            <section className='my-20'>
                <div className="container mx-auto px-3">
                    <Title title={'Propertiest'} desc={'List your latest propertiest and order them as you wish'} />
                    <div className="grid md:grid-cols-3 gap-5 mt-5">
                        {listRooms.spot.slice(0, page * 3).map(item => (
                            <SpotlightCard {...item} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <BtnCustom clickBtn={showMore} variant={'border'}  >Show more propertiest</BtnCustom>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Properties