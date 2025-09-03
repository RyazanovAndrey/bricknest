import React from 'react'

const BtnCustom = ({ variant, children }) => {
    return variant == 'border' ? (
        <button className='custom-btn-border'>{children}</button>
    ) : <button className='bg-main'>{children}</button>
}

export default BtnCustom