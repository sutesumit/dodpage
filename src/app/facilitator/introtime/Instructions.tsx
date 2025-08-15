import React, { useState } from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'

const Instructions = () => {
    const [showInstructions, setShowInstructions] = useState(false)

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }
    
    return (
            <div className={`${showInstructions ? 'w-110' : 'w-10'} h-full relative text-sm window gap-2 transition-width duration-300`}>
                {showInstructions && 
                <div className='h-full w-full pr-6 flex flex-col gap-2 justify-center'>
                    <p>
                        Before we begin the main exercise, let’s start with a quick round of <span className='text-highlighter'>introductions in round-robin order</span> (one person after another, until everyone has spoken).
                    </p>
                    <p>
                        When it’s your turn, please share:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>
                            Your name: _ _ _ _
                        </li>
                        <li>
                            The city or area you come from: _ _ _ _
                        </li>
                        <li>
                            One example of caste privilege you know of or have personally witnessed (you may share without naming people or giving identifiable details): _ _ _ _ 
                        </li>
                    </ul>
                </div>}
            <ExpansionToggle handleInstructions={handleInstructions} showInstructions={showInstructions} className='absolute top-2 right-2' />
        </div>
    )
}

export default Instructions
