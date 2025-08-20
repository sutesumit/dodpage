import React, { useEffect, useState } from "react";
import ExpansionToggle from "../fac_components/ExpansionToggle";

const PartBTeamDivision = ({ players, showInstructions, handleInstructions }: { 
    players: number, 
    showInstructions: boolean, 
    handleInstructions: () => void 
}) => {
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

    return (
        <div className={`window ${showInstructions ? 'w-full' : 'w-10'} relative`}>
            {showInstructions && (
                <div className="h-full w-full flex items-center justify-center">
                    <div className="relative h-64 w-64">
                        {/* Your player circles rendering logic here */}
                        {Array.from({ length: players }, (_, i) => {
                            const angle = (i / players) * 2 * Math.PI;
                            const radius = 100;
                            const x = Math.round(radius * Math.cos(angle) * 1000) / 1000;
                            const y = Math.round(radius * Math.sin(angle) * 1000) / 1000;

                            return (
                                <div
                                    key={i}
                                    className="absolute flex items-center justify-center 
                                              h-8 w-8 rounded-full text-[var(--primary-white)] 
                                              border-[0.25px] border-[var(--primary-blue)] 
                                              transition-colors duration-[2000ms] ease-in-out"
                                    style={{
                                        backgroundColor: "var(--primary-white)",
                                        color: "var(--primary-blue)",
                                        top: `calc(50% + ${y}px - 1rem)`,
                                        left: `calc(50% + ${x}px - 1rem)`,
                                    }}
                                >
                                    <div 
                                        className='h-8 w-8 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out'
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <ExpansionToggle 
                className='absolute top-2 right-2'
                handleInstructions={handleInstructions} 
                showInstructions={showInstructions}
            />
        </div>
    );
};

export default PartBTeamDivision;
