import React from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'
import Image from 'next/image'

const PartBSheet = ({showInstructions, handleInstructions}: {showInstructions: boolean, handleInstructions: () => void}) => {
  return (
    <div className={`window ${showInstructions ? 'w-full' : 'w-10'} relative`}>
      {showInstructions && (
        <div className='h-full w-full flex items-center justify-center'>
            <Image 
                src='/DD_ARC_WS_Sheet1.jpg' 
                alt='Part B Sheet' 
                width={500} 
                height={500} 
                className='border-[0.25px] max-w-full max-h-full object-contain border-[var(--primary-blue)] rounded-md'
            />
        </div>
      )}
      <ExpansionToggle className='absolute top-2 right-2' handleInstructions={handleInstructions} showInstructions={showInstructions}/>
    </div>
  )
}

export default PartBSheet
