import React from 'react'

const TimeLine = ({ num }: { num: number }) => {
  return (
    <div 
        className='max-w-[calc(100%-4rem)] m-4 rounded-md flex items-center justify-center gap-2'
        style={{
            // background: 'linear-gradient(to right, var(--primary-white), var(--primary-blue), var(--primary-white))'
        }}
    >
        {Array.from({ length: num }).map((_, index) => (
            <div 
                key={index} 
                className='w-36 rounded-md text-[var(--primary-white)] bg-[var(--primary-blue)]'
            >
                <p className='text-[0.75em] text-center'>
                    <span className='text-[0.75em]'>{`00:00`}</span>
                </p>
            </div>
        ))}

    </div>
  )
}

export default TimeLine
