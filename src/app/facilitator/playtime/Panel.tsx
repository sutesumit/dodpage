'use client'
import React, { useEffect, useState } from 'react'
import { Play, Plus, Pause } from 'lucide-react'

const Panel = () => {

    const [tabs, setTabs] = useState([
        {
            title: "Liberty",
            selected: true
        },
        {
            title: "Equality",
            selected: false
        },
        {
            title: "Fraternity",
            selected: false
        }
    ])
    const [seconds, setSeconds] = useState(0)
    const [isTimerRunning, setIsTimerRunning] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => {
        if (!isTimerRunning) return
        setSeconds((prev) => prev + 1)
      }, 1000)
      return () => clearTimeout(timer)
    }, [seconds, isTimerRunning])

    const formattedTime = (time: number) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0')
        const seconds = (time % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }

    const handleStartSkit = () => {
        setIsTimerRunning(!isTimerRunning)
    }

    const handleTabClick = (index: number) => {
        setTabs(tabs.map((tab, i) => i === index ? {...tab, selected: true} : {...tab, selected: false}))
        setIsTimerRunning(false)
        setSeconds(0)
    }
  return (
    <div className='p-0 text-[var(--primary-blue)] w-[50%] h-1/2 flex flex-col items-center justify-center'>
      <div className='tabs w-full flex flex-row'>
        {tabs.map((tab, index) => (
            <div 
                key={index} 
                className={`tab text-sm py-2 bg-[var(--primary-white)] rounded-t-md flex items-center justify-center border-[0.25px] border-[var(--primary-blue)] cursor-pointer flex-1 hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms] ${tab.selected ? 'selected bg-blue-950 text-[var(--primary-white)]' : ''}`} 
                onClick={() => handleTabClick(index)}
            >
                {tab.title}
            </div>
        ))}
      </div>
      <div className='description flex flex-col gap-1 text-sm p-5 bg-[var(--primary-white)] border-t-0 rounded-b-md flex-1 border-[0.25px] border-[var(--primary-blue)] w-full h-full items-center justify-center'>
        <div className='self-center font-mono text-[2em] p-[2px]'>{formattedTime(seconds)}</div>
        <div 
          className='w-[30ch] h-[3ch] cursor-pointer border-[0.25px] border-[var(--primary-blue)] flex flex-row px-4 gap-2 items-center justify-between hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms]'
          onClick={handleStartSkit}
        >
          <div className='self-center'>{isTimerRunning ? "Pause": "Start"} Skit </div>
          {isTimerRunning ? <Pause className='self-center' strokeWidth={2} size={17}/>: <Play className='self-center' strokeWidth={2} size={17}/>}
        </div>
        <div 
          className='w-[30ch] h-[3ch] cursor-pointer border-[0.25px] border-[var(--primary-blue)] flex flex-row px-4 gap-2 items-center justify-between hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms]'
        >
          <div className='self-center'>Add Intervention </div>
          <Plus className='self-center' strokeWidth={2} size={17} />
        </div>
      </div>
    </div>
  )
}

export default Panel
