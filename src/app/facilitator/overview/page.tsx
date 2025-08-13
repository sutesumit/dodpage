'use client'
import React from 'react'
import ActivityOverview from './ActivityOverview'

const page = () => {
  return (
    <div className='page pt-12 flex flex-col justify-center items-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]'>
        <ActivityOverview />
    </div>  
  )
}

export default page
