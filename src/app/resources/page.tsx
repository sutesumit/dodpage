'use client';
import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="page flex flex-col items-center justify-center bg-[var(--primary-blue)] w-full h-full rounded-md">
      
      <div className='object-contain flex h-[70vh] min-w-[214px] md:w-[70%] overflow-hidden p-2'>
        {// @ts-expect-error too many props
        <HTMLFlipBook
          width={70}
          height={100}
          size="stretch"
          style = {{width: '100%', height: '100%'}}
          usePortrait={true}
        >
          {Array.from({length: 25}, (_, index)  => (
            <div key={index} className="page">
              <Image 
                src={`/manual/ARC_DoD_Manual_Page-${index}.jpg`} 
                alt={`Facilitator Manual Page ${index+1}`} 
                layout='fill'
                className='border-[0.25px] border-[var(--primary-blue)] rounded-md'
              />
            </div> ))}
        </HTMLFlipBook>}
      </div> 
      <h5 className='text-xs text-center p-2 opacity-75 before:content-["-"] after:content-["-"]'>Leaf through the Dramas of Discrimination Workshop Facilitation Manual</h5> 
    </div>
  )
}

export default Home
