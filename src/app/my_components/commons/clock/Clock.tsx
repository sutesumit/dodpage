import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())
    const [ isHovered, setIsHovered ] = useState(false)
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-[var(--primary-white)] relative cursor-pointer rounded-md text-red-700 flex w-36 ${isHovered ? 'h-36 top-4 bg-slate-900 border-none' : 'h-10 top-0 bg-[var(--primary-white)]'} items-center justify-center transition-all duration-[500ms]`}
    >
      {
        !isHovered && <p>{time.toLocaleTimeString()}</p>
      }
      {isHovered && 
        <p>{time.toLocaleDateString()}</p>
      }
    </div>
  )
}

export default Clock
