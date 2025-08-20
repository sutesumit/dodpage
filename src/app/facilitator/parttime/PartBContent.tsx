import React, { useState } from 'react'
import PartBDivision from './PartBDivision'
import PartBSheet from './PartBSheet'
import PartBTeamDivision from './PartBTeamDivision'

type ActivePanel = 'groupDivision' | 'activitySheet' | 'activityInstruction'

const PartBContent = () => {
    const [activePanel, setActivePanel] = useState<ActivePanel>('groupDivision')

    const handlePanel = (panel: ActivePanel) => {
        setActivePanel(panel)
    }
  return (
    <div className='flex flex-col gap-2 items-center justify-center h-full w-full pr-10'>
      <div className='flex gap-2 w-full h-full'>
        <PartBDivision showInstructions={activePanel === 'activityInstruction'} handleInstructions={() => handlePanel('activityInstruction')} />
        <PartBSheet showInstructions={activePanel === 'activitySheet'} handleInstructions={() => handlePanel('activitySheet')}/>
        {/* <PartBInstruction showInstructions={activePanel === 'groupDivision'} handleInstructions={() => handlePanel('groupDivision')} /> */}
        <PartBTeamDivision players={14} showInstructions={activePanel === 'groupDivision'} handleInstructions={() => handlePanel('groupDivision')}/>
      </div>
    </div>
  )
}

export default PartBContent
