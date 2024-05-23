import React from 'react'

const Brand = ({brand}) => {
  return (
    <div className='group'>
        <img src="/frontend/images/brand.png" className='mx-auto max-w-[82px]  grayscale group-hover:grayscale-0 transition-all duration-500' alt={brand?.title} />
    </div>
  )
}

export default Brand