'use client';
import React from 'react'
import { Slab, TrophySpin }  from 'react-loading-indicators'

const Home = () => {
  return (
    <div className='page pt-12 flex flex-col justify-center items-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]'>
            <Slab color="#131857" size="medium" text="" textColor="" />
            <p className='text-center font-body text-xs max-w-[80ch] p-2 opacity-75'>The Dramas of Discrimination Web Facilitator is under construction, but not for long! We're working hard to make it a reality.</p>
    </div>
  )
}

export default Home
