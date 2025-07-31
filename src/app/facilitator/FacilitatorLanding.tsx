import React, { useEffect, useState } from 'react'
import ARCLogo from '../my_components/elements/ARCLogo'
import { motion, AnimatePresence } from 'framer-motion'

const titleArray = [ "Discrimination", "Diversity", "Inclusivity", "Fraternity", "Belonging"]

const FacilitatorLanding = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titleArray.length)
        }, 3000)

        return () => {
            console.log("currentTitleIndex", currentTitleIndex)
            clearInterval(interval)
        }
    }, [])

  return (
    <div className={`landing relative w-full h-[calc(100vh-5rem)] border-[var(--primary-blue)] border-[0.25px] rounded-md bg-[var(--primary-white)]`}>
        <div className='flex justify-center md:justify-end w-auto h-full p-5'>
            <div className='m-auto'>
                <div className="font-title w-auto flex flex-col items-start justify-start">
                    <ARCLogo />
                    <div className={`text-xs p-1 opacity-75 text-[var(--primary-blue)]`}>presents</div>
                    <div className={`dod-logo-wrapper my-4 w-auto text-[var(--primary-blue)]`}>
                    <div className="text-[1.25em] leading-[1.2em] antialiased">
                        Dramas
                        <AnimatePresence mode='popLayout'>
                            <motion.span
                                className="font-of text-[2em] leading-[1rem]"
                                key={currentTitleIndex === 0 ? "of" : "for"}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                {currentTitleIndex === 0 ? "of" : "for"}
                            </motion.span>
                        </AnimatePresence>
                        <br></br>
                        <span className="h-[1em] flex items-center justify-start border-l-[var(--primary-blue)] border-[0.25px]">
                            <AnimatePresence>
                                <motion.div
                                    className={`h-[1em] absolute flex items-center`}
                                    key={currentTitleIndex}
                                    initial={{ y: "1em", scale: 0.9, opacity: 0 }}
                                    animate={{ y: 0, scale: 1, opacity: 1 }}
                                    exit={{ y: "-1em", scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    {titleArray[currentTitleIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </span>
                    </div>
                    </div>
                    <p className={`font-body text-xs opacity-70 text-[var(--primary-blue)]`}>A participatory workshop for dialogue, reflection, and action towards a more just and inclusive society.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FacilitatorLanding
