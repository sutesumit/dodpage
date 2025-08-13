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
      className={`text-[var(--primary-white)] relative top-4 cursor-pointer rounded-md bg-slate-900 text-red-700 flex w-36 ${isHovered ? 'h-36' : 'h-10'} items-center justify-center transition-all duration-[500ms]`}
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
