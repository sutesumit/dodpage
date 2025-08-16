import React, { useEffect, useState } from 'react'
import ExpansionToggle from '../fac_components/ExpansionToggle'

const PartBInstruction = () => {
    const [showInstructions, setShowInstructions] = useState(false)
    const constitutionValues = ['Liberty', 'Equality', 'Fraternity'] 
    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 3);
            setSelected((prev) => (prev + 1) % 15);
        }, 1000);
        return () => clearInterval(interval);
    }, [index]);

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }

  return (
    <div className={`window w-full pr-12 relative ${showInstructions ? 'h-40' : 'h-12'}`}>
        {showInstructions && (
            <div className={`w-full flex flex-row gap-2`}>
                <div className='window w-full flex flex-row gap-2'>
                    { Array.from({ length: 15 }, (_, i) => {
                        return (
                            <div 
                                key={i} 
                                className='window h-8 w-8 flex items-center justify-center rounded-full transition-all duration-[500ms] ease-in-out'
                                style={{
                                    backgroundColor: selected === i ? 'var(--primary-blue)' : 'lightgray',
                                    color: selected === i ? 'var(--primary-white)' : 'var(--primary-blue)',
                                    transform: selected === i ? 'scale(1)' : 'scale(0.8)',
                                    fontSize: selected === i ? '0.75rem' : '0rem'
                                }}
                            >
                               <div className='font-title lowercase bg-[var(--primary-blue)] text-[var(--primary-white)] rounded-md mb-14'>
                                    {constitutionValues[index]}
                               </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )}
        <ExpansionToggle className='absolute rotate-90 bottom-2 right-2' handleInstructions={handleInstructions} showInstructions={showInstructions}/>
    </div>
  )
}

export default PartBInstruction
