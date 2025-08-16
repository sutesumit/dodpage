import React, { useState } from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'

const PartAInstructions = () => {
    const [showInstructions, setShowInstructions] = useState(false)

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }
  return (
    <div className={`window relative flex items-center justify-center ${showInstructions ? 'w-full pr-10' : 'w-11'}`}>
      {showInstructions && 
        <div className='p-2 flex flex-col gap-2 justify-center text-sm'>
            <p>To begin, let’s work in pairs with the person sitting next to you.</p>
            <p>Together, identify two examples of discrimination:</p>
            <ul className='list-disc pl-5'>
                <li className='p-1'>An example where <span className='text-highlighter'>encouragement or rewards were downplayed</span>.</li>
                <li className='p-1'>An example where <span className='text-highlighter'>punishments or penalties were exaggerated</span>.</li>
            </ul>
            <p>These examples may come from personal experience, observation, or knowledge of caste and religious discrimination in everyday life.</p>
            <p>When ready, each pair will share their examples aloud with the whole group.</p>
        </div>
      }
      <ExpansionToggle className='absolute top-2 right-2' handleInstructions={handleInstructions} showInstructions={showInstructions}/>
    </div>
  )
}

export default PartAInstructions
