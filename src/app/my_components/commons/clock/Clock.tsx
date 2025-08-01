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
      className='text-[var(--primary-white)] cursor-pointer'
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
