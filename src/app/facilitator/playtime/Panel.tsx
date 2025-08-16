'use client'
import React, { useState } from 'react'
import { Play, Plus } from 'lucide-react'

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
  return (
    <div className='p-0 text-[var(--primary-blue)] min-w-[50%] min-h-[50%] flex flex-col items-center justify-center'>
      <div className='tabs w-full flex flex-row'>
        {tabs.map((tab, index) => (
            <div 
                key={index} 
                className={`tab text-sm py-2 bg-[var(--primary-white)] rounded-t-md flex items-center justify-center border-[0.25px] border-[var(--primary-blue)] cursor-pointer flex-1 hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms] ${tab.selected ? 'selected bg-blue-950 text-[var(--primary-white)]' : ''}`} 
                onClick={() => {setTabs(tabs.map((tab, i) => i === index ? {...tab, selected: true} : {...tab, selected: false}))}}
            >
                {tab.title}
            </div>
        ))}
      </div>
      <div className='description flex flex-col gap-1 text-sm max-w-[80ch] p-5 bg-[var(--primary-white)] border-t-0 rounded-b-md flex-1 border-[0.25px] border-[var(--primary-blue)] w-full h-full items-center justify-center'>
        <div 
          className='w-[30ch] h-[3ch] cursor-pointer border-[0.25px] border-[var(--primary-blue)] flex flex-row px-4 gap-2 items-center justify-between hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms]'
        >
          <div className='self-center'>Start Skit </div>
          <Play className='self-center' strokeWidth={2} size={17} />
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
