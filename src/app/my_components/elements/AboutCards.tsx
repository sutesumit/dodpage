'use client'
import React, { useEffect, useRef, useMemo } from 'react'
import { annotate } from 'rough-notation'

type AnnotationType = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';

interface AnnotationConfig {
  ref: React.RefObject<HTMLElement | null>;
  parent: React.RefObject<HTMLElement | null>;
  type: AnnotationType;
  color: string;
  multiline: boolean;
  padding: number;
  animationDuration: number;
  brackets?: string[];
}


const AboutCards = () => {

    const ARCVisionRef = useRef<HTMLElement>(null)
    const DodApproachRef = useRef<HTMLElement>(null)
    const DodObjectiveRef = useRef<HTMLElement>(null)
    const DodAppFuncRef = useRef<HTMLElement>(null)
    const DataPortalRef = useRef<HTMLElement>(null)
    const CharterRef = useRef<HTMLElement>(null)

    const ARCAboutRef = useRef<HTMLDivElement>(null)
    const DodAboutRef = useRef<HTMLDivElement>(null)
    const DodAppRef = useRef<HTMLDivElement>(null)


    const annotationConfigs = useMemo<AnnotationConfig[]>(() => [
        { ref: ARCVisionRef, parent: ARCAboutRef, type: 'highlight', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
        { ref: DodApproachRef, parent: DodAboutRef, type: 'box', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
        { ref: DodObjectiveRef, parent: DodAboutRef, type: 'underline', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
        { ref: DodAppFuncRef, parent: DodAppRef, type: 'underline', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
        { ref: DataPortalRef, parent: DodAppRef, type: 'circle', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
        { ref: CharterRef, parent: DodAppRef, type: 'highlight', color: '#87aae6', multiline: true, padding: 1, animationDuration: 500 },
    ], []);

    

    useEffect(() => {

        const cleanupFunctions: (() => void)[] = []

        annotationConfigs.forEach((config) => {
            const current = config.ref.current
            if (!current) return
            const annotation  = annotate(current, {
                type: config.type,
                color: config.color,
                multiline: config.multiline,
                padding: config.padding,
                animationDuration: config.animationDuration
            })

            const mouseEnterHandler = () => annotation.show()
            const mouseLeaveHandler = () => annotation.hide()

            const parent = config.parent.current
            if (!parent) return

            parent.addEventListener('mouseenter', mouseEnterHandler)
            parent.addEventListener('mouseleave', mouseLeaveHandler)

            cleanupFunctions.push(() => {
                parent.removeEventListener('mouseenter', mouseEnterHandler)
                parent.removeEventListener('mouseleave', mouseLeaveHandler)
                annotation.remove()
            })

        })

        return () => {
            cleanupFunctions.forEach(cleanup => cleanup())
        }

        }, [annotationConfigs]);

  return (
    <div id="aboutus" className="about-section w-full min-h-[calc(100vh-5rem)] flex flex-col px-5 justify-center bg-[var(--primary-white)] text-[var(--primary-blue)]">
        <div className="about-title text-center text-xs p-2 uppercase">
            <a className='bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-3 rounded-md' href={`/#aboutus`}>About Us</a>
        </div>
        
        <div className="about-cards mx-auto my-4 grid grid-cols-2 max-w-[100ch] text-xs gap-4">
            <div
                className="about col-span-2 md:col-span-1 arc-about"
                ref={ARCAboutRef}
            >
                <h5>Ambedkar Reading Circle</h5>
                <p>The Ambedkar Reading Circle (ARC) Bangalore, founded in April 2023, is an anti-caste collective. ARC organizes reading circles, workshops, talks, and film screenings in Bengaluru with <span ref={ARCVisionRef}>the vision of making anti-caste worldviews more accessible and mainstream in public spaces and public consciousness.</span> Regular reading circles are often held in Cubbon Park. ARC has actively collaborated with organizations such as the Alternative Law Forum, Hasiru Dala, the Museum of Art and Photography, the Bangalore International Center, and the Foundation of Art and Health India.</p>
            </div>
            <div 
                className="about col-span-2 md:col-span-1 dod-about"
                ref={DodAboutRef}
            >
                <h5>Dramas of Discrimination Workshop</h5>
                <p>Dramas of Discrimination is an interactive, art-based workshop that utilizes <span ref={DodApproachRef}>a combined approach of systems thinking and Theatre of the Oppressed</span> to foster more just and inclusive work environments through interactive and participatory methods. The workshop aims to cultivate and advocate for proactive engagement in addressing caste-based discrimination in Indian workplaces and places of higher education, creating a platform for rehearsing change. The design of Dramas of Discrimination was informed by the desire to <span ref={DodObjectiveRef}>simplify the understanding of systemic interventions and foster values of fraternity, inclusivity, and belonging</span> through carefully designed workshop exercises.</p>
            </div>
            <div 
                className="about grid-flow-col col-span-2 dodapp-about"
                ref={DodAppRef}
            >
                <h5>Dramas of Discrimination Web App</h5>
                <p>With the goal of creating an open-source web application for communities and student groups to independently access and facilitate Dramas of Discrimination workshops, the Ambedkar Reading Circle is currently converting the existing Dramas of Discrimination facilitation manual into an interactive web application. While <span ref={DodAppFuncRef}>the web application&apos;s core function is to serve as an online facilitation guide for the in-person workshop</span>, it will also function as a repository for workshop exercise materials and <span ref={DataPortalRef}>a data portal.</span> Each workshop instance can be submitted as a case study, including <span ref={CharterRef}>a charter of demands from the participating communities, which will inform a general manifesto of inclusion</span> driven by constitutional values.</p>
            </div>
        </div>
    </div>
    
  )
}

export default AboutCards
