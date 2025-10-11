import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-2 font-[font2] pt-2'>
       <div className='border-3 h-24 flex items-center justify-center px-10 border-white rounded-full uppercase'>
        <Link className='text-[6.5vw] mt-6' to='/project'>Projects</Link>
      </div>
      <div className='border-3 h-24 flex items-center justify-center px-10 border-white rounded-full uppercase'>
        <Link className='text-[6.5vw] mt-6' to='/agency'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
