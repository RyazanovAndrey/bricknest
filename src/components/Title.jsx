import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className=''>{desc}</p>
    </div>
  )
}

export default Title