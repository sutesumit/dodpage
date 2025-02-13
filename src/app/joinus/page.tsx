'use client'

import React, { useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'
import AllOpeningsData, { Opening, SkillCategory, Description } from './allOpeningsData'

type AnnotationType = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';


interface AnnotationConfig {
  ref: React.RefObject<HTMLElement | null>;
  type: AnnotationType;
  color: string;
  multiline: boolean;
  padding: number;
  animationDuration: number;
  brackets?: string[];
}

const Home = () => {

  const approachValues = useRef<HTMLElement>(null)
  const designJustice = useRef<HTMLElement>(null)
  const workJD = useRef<HTMLElement>(null)
  const passionApply = useRef<HTMLElement>(null)
  const emailID = useRef<HTMLElement>(null)
  const keyPoint = useRef<HTMLElement>(null)

  useEffect(() => {

    const annotationConfigs: AnnotationConfig[] = [
      { ref: approachValues, type: 'underline', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
      { ref: designJustice, type: 'circle', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
      { ref: workJD, type: 'bracket', brackets: ['left', 'right'], color: '#87aae6', multiline: true, padding: 0, animationDuration: 500 },
      { ref: passionApply, type: 'underline', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
      { ref: emailID, type: 'highlight', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
      { ref: keyPoint, type: 'highlight', color: '#87aae6', multiline: false, padding: 1, animationDuration: 500 }
      
    ]

    const cleanupFunctions: (() => void)[] = []

    annotationConfigs.forEach((config) => {
      const currentElement = config.ref.current;

      if (!currentElement) return

      const a = annotate(currentElement, {
        type: config.type,
        color: config.color,
        multiline: config.multiline,
        padding: config.padding,
        animationDuration: config.animationDuration
      })

      const mouseEnterHandler = () => a.show()
      const mouseLeaveHandler = () => a.hide()

      currentElement.addEventListener('mouseenter', mouseEnterHandler)
      currentElement.addEventListener('mouseleave', mouseLeaveHandler)

      return { removeListener: () => {
        currentElement.removeEventListener('mouseenter', mouseEnterHandler)
        currentElement.removeEventListener('mouseleave', mouseLeaveHandler)
        a.remove()
      }}
  
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [])
  
  return (
    <div className='page pt-2 flex justify-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]'>
        <div className='page-container z-0 my-2 relative font-body text-sm text-center scroll-smooth overflow-x-hidden'>
          <div className='title-container'>
          <p className='border-[1px] mt-12 border-[var(--primary-blue)] my-2 py-2 px-3 rounded-md text-xs'>Come along and let&apos;s bring the Dramas of Discrimination web application to life.</p>
            <p className='text-xs p-2 opacity-50 italic'>Roles currently reserved for IIHS Urban Fellows:</p>
            <div className="all-roles flex flex-wrap justify-center items-center gap-2 text-xs">
              <p>Open Roles:</p>
              {AllOpeningsData.map((opening) => (
                <a key={opening.id} className='bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-3 rounded-md' href={`#${opening.title}`}>{opening.title}</a>
              ))}
            </div>
          </div>
          <div className="sub-container my-3 border-[1px] border-[var(--primary-blue)] border-dotted rounded-md">
            <p className="sub-text-container">You don&apos;t need to have every skill listed in this description.  The ARC has always been a journey driven by necessity, passion, and community support. <span ref={approachValues}>We often found ourselves doing several things for the first time, approaching challenges with first-principles thinking, immense curiosity, and humility.</span> Our deep engagement with our context and needs has always empowered us to find solutions, even when lacking specific skills. If this dynamic and collaborative environment resonates with you, come get in touch!</p>
          </div>
          <div className="all-roles flex flex-wrap justify-center items-center gap-2 text-xs">
            <p>Curious? Visit our home page to know more:</p>
              <a className='bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-3 rounded-md' href={`/#aboutus`}>About Us</a>
            </div>
          <div className="sub-container flex flex-col gap-2">
            {AllOpeningsData.map((opening: Opening, index) => (
              <div key={index} className="opening-card border-[1px] border-[var(--primary-blue)] border-dotted rounded-lg overflow-hidden">
                <a id={opening.title} href={`#${opening.title}`} className="block p-1 font-bold sub-title-container scroll-m-11 text-center text-xs border-b-[1px] border-[var(--primary-blue)] border-dotted uppercase tracking-wide">{opening.title}</a>
                <div className="sub-text-container flex flex-col gap-1 p-1">
                  <div className="responsibilities flex-1">
                    <h6 className="text-xs inline-block uppercase p-1">Responsibilities</h6>
                    {opening.responsibilities.map((desc : Description) => (
                      (Object.keys(desc).map(key => (
                        <li key={key} className='text-xs p-[2px] pl-4'><span className=''>{key}</span>: {desc[key]}</li>
                      )))
                    ))}
                  </div>
                  <div className="outcomes flex-1">
                    <h6 className="text-xs inline-block uppercase p-1 rounded-sm">Outcomes</h6>
                    {opening.desiredOutcomes.map((desc : Description) => (
                      (Object.keys(desc).map(key => (
                        <li key={key} className='text-xs p-[2px] pl-4'><span className=''>{key}</span>: {desc[key]}</li>
                      )))
                    ))}
                  </div>
                  <div className="skills flex-1">
                    <h6 className="text-xs inline-block uppercase p-1">Skills</h6>
                    
                    {opening.skills.map((skill : SkillCategory) => (
                      Object.entries(skill).map(([key, skillList]) => (
                        skillList?.map((desc: Description) => (
                          Object.entries(desc).map(([point, pointDesc]) => (
                            <li key={point} className='text-xs p-[2px] pl-4'>
                              <span className=''>{point}</span>: {pointDesc} 
                              <span className='opacity-50 italic'>
                                {key == "essentialSkills" ? " essential skill" : " beneficial skill"}
                              </span>
                            </li>
                          ))
                        ))
                      ))
                    ))}
                      
                  </div>             
                </div>         
              </div>
            ))}
          </div>
          
          <div className="sub-container">
            <h5 className="sub-title-container">To Apply:</h5>
            <p className="sub-text-container">We strongly encourage applications from individuals from Systematically Oppressed Communities & Regions (SOCR). We believe that diverse perspectives are essential to creating inclusive and equitable designs, and we are committed to building a team that reflects the communities we serve.  Your lived experience and unique insights are valuable and will be considered an asset to our team.  We understand that traditional pathways to design roles may not always be accessible, and considere a range of experiences and skill sets. <span ref={passionApply}>If you are passionate about design for social justice, we encourage you to apply, even if you don&apos;t meet every listed qualification.</span></p>
            <p className='sub-text-container'>Please write to <span ref={emailID} className='break-all underline font-mono'>ambedkarreadingcircle.bangalore@gmail.com</span> with a cover letter (200-400 words) and subject line &quot;Role Title - ARC Dramas of Discrimination.&quot;</p>
          </div>
        </div>
    </div>
  )
}

export default Home
