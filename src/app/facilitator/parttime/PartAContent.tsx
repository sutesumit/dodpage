import React, { useState } from 'react'
import RoundRobinForm from './RoundRobin/RoundRobinForm'
import PartAQuote from './PartAQuote'
import PartAInstructions from './PartAInstructions'

const PartAContent = () => {
    const [showInstructions, setShowInstructions] = useState(false)

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-full w-full pr-10'>
      <div className='flex gap-2 w-full h-full'>
          <div className='window flex-1 justify-center items-center'>
            <RoundRobinForm />
          </div>
          <PartAInstructions showInstructions={showInstructions} handleInstructions={handleInstructions} /> 
      </div>
      <PartAQuote showInstructions={showInstructions} handleInstructions={handleInstructions} />
    </div>
  )
}

export default PartAContent
