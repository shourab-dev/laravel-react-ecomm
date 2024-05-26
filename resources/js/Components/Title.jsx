import React from 'react'
import { Link } from '@inertiajs/react'
const Title = ({title, url, label}) => {
  return (
    <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <Link className='btn' href={url}>{label}</Link>
    </div>

  )
}

export default Title
