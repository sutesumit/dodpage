import React from 'react'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

const ExpansionToggle = ({handleInstructions, showInstructions, className}: {handleInstructions: () => void, showInstructions: boolean, className?: string}) => {
  return (
    <div 
        className={`w-6 h-6 cursor-pointer flex justify-center items-center absolute bg-[var(--primary-blue)] text-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] rounded-full hover:bg-[var(--primary-white)] hover:text-[var(--primary-blue)] transition-colors duration-[500ms] ${className}`}
        onClick={handleInstructions}
    >
        {showInstructions ? <ChevronsRight size={15} /> : <ChevronsLeft size={15} />}
    </div>
  )
}

export default ExpansionToggle
