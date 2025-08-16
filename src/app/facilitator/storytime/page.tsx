'use client'
import React, { useState } from 'react'
import StorySheet from './StorySheet'
import StoryInstruction from './StoryInstruction'

const Page = () => {
    const [showInstructions, setShowInstructions] = useState(true)

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }

  return (
    <div className='page w-full h-full py-2'>
      <div className='flex h-full w-full flex-row gap-2'>
        <StoryInstruction handleInstructions={handleInstructions} showInstructions={!showInstructions} />
        <StorySheet handleInstructions={handleInstructions} showInstructions={showInstructions} />
      </div>
    </div>
  )
}

export default Page