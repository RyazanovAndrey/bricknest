import React from 'react'

const BtnCustom = ({ variant, children, clickBtn }) => {
    return variant == 'border' ? (
        <button onClick={clickBtn} className='custom-btn-border'>{children}</button>
    ) : <button onClick={clickBtn} className='custom-btn-fill'>{children}</button>
}

export default BtnCustom