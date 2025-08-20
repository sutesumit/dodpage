import React from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'

const PartBDivision = ({showInstructions, handleInstructions}: {showInstructions: boolean, handleInstructions: () => void}) => {
    return (
    <div className={`window flex flex-col gap-2 relative ${showInstructions ? 'w-full' : 'w-10'}`}>
        {showInstructions && (
        <div className='flex flex-col gap-2 pr-10'>
            <div>Now that you are in your new groups, let’s move into the Actor Mapping Exercise. This activity will help prepare for the skits later in the workshop.</div>
            <div className='window flex flex-col gap-2'>
                <div className='font-title text-highlighter w-fit   '>Step 1: Choose a Case</div>
                <div className='italic'>As a group, pick one discrimination issue (from the examples already shared or a new one you agree upon) that you’d like to explore in more depth.</div>
            </div>
            <div className='window flex flex-col gap-2'>
                <div className='font-title text-highlighter w-fit'>Step 2: Actor Mapping Exercise</div>
                <div className='italic'>Using pen and paper (or the provided Activity Sheet), work together to complete these steps:</div>
                <ol className='list-decimal list-inside gap-2 grid grid-cols-2'>
                    <li className='flex flex-1 flex-col gap-2 window'>
                        <div>List all the important <div className='text-highlighter'>actors involved</div> in the discrimination issue.</div>
                        <div className='italic'>(Example: teacher, employer, family member, neighbor, institution, law, etc.)</div>
                    </li>
                    <li className='flex flex-1 flex-col gap-2 window'>
                        <div>Describe the <div className='font-title text-highlighter'>ideal responsibilities</div> of each actor.</div>
                        <div className='italic'>What should they ideally do to prevent or challenge discrimination?</div>
                    </li>
                    <li className='flex flex-1 flex-col gap-2 window'>
                        <div>Identify the challenges each actor faces in fulfilling those responsibilities.</div>
                        <div className='italic'><div className='text-highlighter'>Why might they fail</div>, hesitate, or resist doing the right thing?</div>
                    </li>
                    <li className='flex flex-1 flex-col gap-2 window'>
                        <div>Mark <div className='text-highlighter'>constitutional values violated</div>.</div>
                        <div className='italic'>Look at the list of constitutional values (e.g., equality, liberty, fraternity, justice). Tick any that you believe have been violated in the case your group is analyzing.</div>
                    </li>
                </ol>
            </div>
        </div>
        )}
        <ExpansionToggle 
            className='absolute top-2 right-2' 
            handleInstructions={handleInstructions} 
            showInstructions={showInstructions}
        />
    </div>
  )
}

export default PartBDivision
