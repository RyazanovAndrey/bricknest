import React from 'react'
import { useParams } from 'react-router'
import roomsList from '@/db.json'

const SingleRoom = () => {

    const { id } = useParams()
    const singleRoom = roomsList.top.find(item => item.id == id)

    console.log(singleRoom)

    return (
        <section className=''>
            <div className="container mx-auto px-3">

            </div>
        </section>
    )
}

export default SingleRoom