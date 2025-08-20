import React, { useState } from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'

const PartAQuote = () => {
    const [showInstructions, setShowInstructions] = useState(false)

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }

  return (
    <div 
        className={`window relative items-start justify-start flex w-full ${showInstructions ? 'h-40' : 'h-12'}`}
    >
        {showInstructions && 
            <div className='flex flex-row gap-2 items-center justify-center h-full'>
                <div className='window h-full'>
                    <p>Despite showing ability in (skill, exam, or work), the encouragement given was only <span className='text-highlighter'>(withheld recognition/backhanded compliment/silence)</span> compared to others.</p>
                </div>
                <div className='window h-full'>
                    <p>When a mistake was made (context: school / workplace / community), the consequence was <span className='text-highlighter'>(excessive punishment / harsh penalty)</span> compared to others who did the same..</p>
                </div>
            </div>
        }
        <ExpansionToggle 
            className='absolute rotate-90 bottom-2 right-2' 
            handleInstructions={handleInstructions} 
            showInstructions={showInstructions}
        />
    </div>
  )
}

export default PartAQuote
