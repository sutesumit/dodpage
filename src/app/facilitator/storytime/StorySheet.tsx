import React from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'
import Image from 'next/image'

const StorySheet = ({handleInstructions, showInstructions}: {handleInstructions: () => void, showInstructions: boolean}) => {
  return (
    <div className={`window h-full flex items-center justify-center relative ${showInstructions ? 'w-full' : 'w-10'}`}>
      {showInstructions && <Image 
        src='/DD_ARC_WS_Sheet2.jpg' 
        alt='Story Sheet' 
        width={500} 
        height={500} 
        className='border-[0.25px] max-w-full max-h-full object-contain border-[var(--primary-blue)] rounded-md'
      />}
      <ExpansionToggle 
        className='absolute top-2 right-2' 
        handleInstructions={handleInstructions} 
        showInstructions={showInstructions}
      />
    </div>
  )
}

export default StorySheet
