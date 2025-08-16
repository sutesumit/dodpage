import React, { useState } from "react";
import ExpansionToggle from "../fac_components/ExpansionToggle";

const ExampleQuote = () => {
    const [showInstructions, setShowInstructions] = useState(false)

    const handleInstructions = () => {
        setShowInstructions(!showInstructions)
    }

    return (
        <div 
            className={`page p-5 ${showInstructions ? 'h-30' : 'h-12'} relative rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)] transition-all duration-[500ms]`}
        >
            <div className="absolute w-6 h-6 bottom-2 right-2 flex items-center justify-center">
                <ExpansionToggle className="rotate-90" handleInstructions={handleInstructions} showInstructions={showInstructions} />
            </div>
            {showInstructions && (
                <>
                    <p className='font-body text-sm italic'>If you&apos;re not sure how to start:</p>
                    <p className='pl-10 p-2 font-title'>
                    “I&apos;m ____, I&apos;m from/grew up in ____, and here&apos;s one instance of 
                    <span className='text-highlighter'>caste privilege</span> I&apos;ve noticed: ____.”
                    </p>
                </>
            )}
        </div>
    )
}

export default ExampleQuote