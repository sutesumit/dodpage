'use client'
import React, { useState } from 'react'
import PartSectionTemplate from './PartSectTemplate'
import PartAContent from './PartAContent'
import PartBContent from './PartBContent'

const Page = () => {
    const [showInstructions, setShowInstructions] = useState(true)

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }

  return (
    <div className='page w-full h-full py-2'>
      <div className='flex flex-row gap-2 h-full w-full'>
        <PartSectionTemplate handleInstructions={handleInstructions} showInstructions={showInstructions} title="Part A">
          <PartAContent />
        </PartSectionTemplate>
        <PartSectionTemplate handleInstructions={handleInstructions} showInstructions={!showInstructions} title="Part B">
          <PartBContent />
        </PartSectionTemplate>
      </div>
    </div>
  )
}

export default Page
