'use client'
import React from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'

const PartSectionTemplate = ({handleInstructions, showInstructions, children, title}: {handleInstructions: () => void, showInstructions: boolean, children: React.ReactNode, title: string}) => {
  return (
    <div 
        className={`h-full relative window text-sm items-center justify-center overflow-hidden ${showInstructions ? 'w-full' : 'w-10'}`}
    >
        <div className='w-full h-full'>
            {showInstructions && children}
        </div>
        <div 
            className='absolute pt-12 right-0 w-10 h-full bg-[var(--primary-blue)] flex items-start justify-center'
        >
            <div 
                className=''
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                <div className='font-title text-base text-[var(--primary-white)]'>
                    {title}
                </div>
                <ExpansionToggle 
                    className='absolute top-2 right-2 border-[var(--primary-white)] border-[0.25px]' 
                    handleInstructions={handleInstructions} 
                    showInstructions={showInstructions}
                />
            </div>
        </div>
    </div>
  )
}

export default PartSectionTemplate
