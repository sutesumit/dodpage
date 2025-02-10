'use client';
import React from 'react'

const Home = () => {
  return (
    <div className='page flex flex-col justify-center items-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]'>
      <div className="aspect-w-16 aspect-h-9 w-full h-full overflow-clip">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/_H9tByQyBv8?loop=1&playlist=_H9tByQyBv8&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default Home
