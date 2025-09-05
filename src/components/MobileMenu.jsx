import React from 'react'
import { Link } from 'react-router'

export const MobileMenu = ({ list, toogleMobile }) => {

    return (
        <div className='absolute top-[100%] left-0 bg-header z-50 w-full'>
            {list.map(({ href, title }) => (
                <Link to={href} onClick={toogleMobile} className='block p-5 text-2xl'>{title}</Link>
            ))}
        </div>
    )
}
