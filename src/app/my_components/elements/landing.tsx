import React from 'react'
import ARCLogo from './ARCLogo'
import DodLogo from './DodLogo'

const Landing = () => {
  return (
    <div className="landing relative w-full h-[calc(100vh-5rem)] bg-[var(--primary-blue)]">
        <div className='flex justify-center md:justify-end w-auto h-full p-5'>
            <div className='m-auto'>
                <div className="font-title w-auto flex flex-col items-start justify-start">
                    <ARCLogo />
                    <div className="text-xs p-1 opacity-75">presents</div>
                    <div className="dod-logo-wrapper my-4 w-auto">
                        <DodLogo />
                    </div>
                    <p className="font-body text-xs opacity-70">A participatory workshop for dialogue, reflection, and action towards a more just and inclusive society.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
