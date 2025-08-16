import React from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'

const StoryInstruction = ({handleInstructions, showInstructions}: {handleInstructions: () => void, showInstructions: boolean}) => {
  return (
    <div className={`window flex flex-col gap-2 text-sm relative ${showInstructions ? 'w-full' : 'w-10'}`}>
        {showInstructions && (
        <div className='flex flex-col gap-2 pr-10'>
            <div>Now that each group has mapped out the discrimination case, it’s time to turn it into a story. This will form the <span className='text-highlighter'>script</span> of the skits we’ll perform later.</div>
            <div className='window flex flex-col gap-2'>
                <div className='font-title text-highlighter w-fit'>Step 1: Choose Your Main Character</div>
                <div className='italic'>Place a member of the discriminated caste or religious minority community at the center of your story. This person becomes the <span className='text-highlighter'>main character</span>, around whom the scenario unfolds.</div>
            </div>
            <div className='window flex flex-col gap-2'>
                <div className='font-title text-highlighter w-fit'>Step 2: Build Interactions</div>
                <div className='italic'>Using the provided Activity Sheet, <span className="text-highlighter">create short dialogues and interactions</span> between: The main character, and The other actors you identified earlier (teachers, employers, family, neighbors, institutions, etc.). These interactions should bring out the discrimination, barriers, or challenges that the main character faces.</div>
            </div>
            <div className='window flex flex-col gap-2'>
                <div className='font-title text-highlighter w-fit'>Step 3: Focus Only on Challenges</div>
                <div className='italic'>Do not try to provide solutions in your skit. The purpose of this step is to clearly articulate the problems, without rushing into “fixing” them. Later, other participants (as spect-actors) will step in to suggest and enact solutions. This way, <span className="text-highlighter">we avoid jumping to solutions</span> before fully understanding the problem — and make space for deeper peer learning.</div>
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

export default StoryInstruction
