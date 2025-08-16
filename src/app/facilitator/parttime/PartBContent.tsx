import React from 'react'
import PartBDivision from './PartBDivision'
import PartBSheet from './PartBSheet'
import PartBInstruction from './PartBInstruction'

const PartBContent = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center h-full w-full pr-10'>
      <div className='flex gap-2 w-full h-full'>
          <PartBDivision />
          <PartBSheet />
      </div>
      <PartBInstruction />
    </div>
  )
}

export default PartBContent
