'use client'
import React from 'react'
import RoundRobinForm from './RoundRobinForm'
import ExampleQuote from './ExampleQuote'
import Instructions from './Instructions'

const page = () => {

  return (
    <div className='flex flex-col py-2 gap-2 w-full h-full'>
      <div className='page flex flex-row gap-2 justify-center items-center w-full h-full'>
        <div className='flex gap-2 w-full h-full'>
          <div className='flex w-full h-full window text-sm items-center justify-center'>
            <RoundRobinForm />
          </div>
          <Instructions />
        </div>
      </div>
      <ExampleQuote />
    </div>
  )
}

export default page
