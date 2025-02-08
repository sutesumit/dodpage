'use client'

import React, { use, useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'

const Home = () => {

  const approachValues = useRef<HTMLSpanElement>(null)
  const visionARC = useRef<HTMLSpanElement>(null)
  const dodApproach = useRef<HTMLSpanElement>(null)
  const addressCaste = useRef<HTMLSpanElement>(null)
  const webApp = useRef<HTMLSpanElement>(null)
  const dataDemands = useRef<HTMLSpanElement>(null)
  const UXRole = useRef<HTMLSpanElement>(null)
  const designJustice = useRef<HTMLSpanElement>(null)
  const workJD = useRef<HTMLSpanElement>(null)
  const passionApply = useRef<HTMLSpanElement>(null)
  const emailID = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (approachValues.current && 
        visionARC.current && 
        dodApproach.current &&
        addressCaste.current &&
        webApp.current &&
        dataDemands.current &&
        UXRole.current &&
        designJustice.current &&
        workJD.current &&
        passionApply.current &&
        emailID.current
      ) {
      const a1 = annotate(approachValues.current, { type: 'underline', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000  })
      const a2 = annotate(visionARC.current, { type: 'highlight', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000  })
      const a3 = annotate(dodApproach.current, { type: 'box', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000  })
      const a4 = annotate(addressCaste.current, { type: 'box', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      const a5 = annotate(webApp.current,  { type: 'highlight', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      const a6 = annotate(dataDemands.current, { type: 'underline', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      const a7 = annotate(UXRole.current, { type: 'highlight', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      const a8 = annotate(designJustice.current, { type: 'circle', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      const a9 = annotate(workJD.current, { type: 'bracket', brackets: ['left', 'right'], color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      const a10 = annotate(passionApply.current, { type: 'underline', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      const a11 = annotate(emailID.current, { type: 'circle', color: '#87aae6', multiline: true, padding: 1, animationDuration: 5000 })
      
      a1.show()
      a2.show()
      a3.show()
      a4.show()
      a5.show()
      a6.show()
      a7.show()
      a8.show()
      a9.show()
      a10.show()
      a11.show()

      return () => {
        a1.remove()
        a2.remove()
        a3.remove()
        a4.remove()
        a5.remove()
        a6.remove()
        a7.remove()
        a8.remove()
        a9.remove()
        a10.remove()
        a11.remove()
      }
    }
  }, [])
  
  return (
    <div className='page pt-12 flex justify-center w-full h-full rounded-md bg-[var(--primary-white)] border-[var(--primary-blue)] border-[0.25px] text-[var(--primary-blue)]'>
        <div className='page-container my-2 relative font-body text-sm text-center scroll-smooth overflow-x-hidden'>
          <div className='title-container'>
            <p className='text-xs p-1 opacity-50 italic'>Reserved for IIHS Urban Fellows:</p>
            <p className='bg-[var(--primary-blue)] text-[var(--primary-white)] py-1 px-3 rounded-md'>UI/UX Designer JD - Dramas of Discrimination Web App</p>
          </div>
          <div className="sub-container my-3 border-[1px] border-[var(--primary-blue)] border-dotted rounded-lg">
            <p className="sub-text-container">You don&apos;t need to have every skill listed in this description.  The ARC has always been a journey driven by necessity, passion, and community support. <span ref={approachValues}>We often found ourselves doing several things for the first time, approaching challenges with first-principles thinking, immense curiosity, and humility.</span> Our deep engagement with our context and needs has always empowered us to find solutions, even when lacking specific skills. If this dynamic and collaborative environment resonates with you, come get in touch!</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">About ARC and Dramas of Discrimination</h5>
            <p className="sub-text-container">The Ambedkar Reading Circle (ARC) Bangalore, founded in April 2023, is an anti-caste collective. ARC organizes reading circles, workshops, talks, and film screenings in Bengaluru <span ref={visionARC}>with the vision of making anti-caste worldviews more accessible and mainstream</span> in public spaces and public consciousness. Regular reading circles are often held in Cubbon Park. ARC has actively collaborated with organizations such as the Alternative Law Forum, Hasiru Dala, the Museum of Art and Photography, the Bangalore International Center, and the Foundation of Art and Health India.</p>
            <p className="sub-text-container">Dramas of Discrimination is an interactive, art-based workshop that utilizes a <span ref={dodApproach}>combined approach of systems thinking and Theatre of the Oppressed</span> to foster more just and inclusive work environments through interactive and participatory methods. The workshop aims to cultivate and advocate for <span ref={addressCaste}>proactive engagement in addressing caste-based discrimination</span> in Indian workplaces and places of higher education, creating a platform for rehearsing change. The design of Dramas of Discrimination was informed by the desire to simplify the understanding of systemic interventions and foster values of fraternity, inclusivity, and belonging through carefully designed workshop exercises.</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">Dramas of Discrimination Web Application</h5>
            <p className="sub-text-container">With the goal of creating an open-source web application for communities and student groups to independently access and facilitate Dramas of Discrimination workshops, the Ambedkar Reading Circle is currently converting the existing <span ref={webApp}>Dramas of Discrimination facilitation manual into an interactive web application.</span> While the web application&apos;s core function is to serve as an online facilitation guide for the in-person workshop, it will also function as a repository for workshop exercise materials and a data portal. <span ref={dataDemands}>Each workshop instance can be submitted as a case study, including a charter of demands from the participating communities,</span> which will inform a general manifesto of inclusion driven by constitutional values.</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">UI/UX Designer Role</h5>
            <p className="sub-text-container">We are seeking a UI/UX Designer to create participant-centered designs for the Dramas of Discrimination web application. <span ref={UXRole}>You will translate the existing facilitation manual and offline workshop activities into engaging and accessible online experiences,</span> developing workshop participant journeys, wireframes, and mockups. This role is ideal for a curious and self-directed individual who thrives in a collaborative environment and can effectively manage their own workflows. ARC&apos;s work on Dramas of Discrimination has been driven by individual contributors eager to experiment with new ideas, skills, and approaches. Visual design skills are a plus, but not required. If you are intrigued by and interested in experimenting with applying <span ref={designJustice}>Design Justice principles</span> and community-led practices, we need you.</p>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">Responsibilities:</h5>
              <span ref={workJD}>
                <ul className="list-disc pl-6">
                  <li>Create initial drafts of workshop participant journeys.</li>
                  <li>Design testing approaches and activities to gather feedback on journey drafts.</li>
                  <li>Analyze and implement feedback, iterating on the journey drafts.</li>
                  <li>Create wireframes for the application.</li>
                  <li>Design mockups for the application.</li>
                  <li>Collaborate with web developers to build a minimum viable application.</li>
                  <li>Conduct participant testing and iterate on the design.</li>
                </ul>
              </span>
          </div>
          <div className="sub-container">
            <h5 className="sub-title-container">To Apply:</h5>
            <p className="sub-text-container">We strongly encourage applications from individuals from Systematically Oppressed Communities & Regions (SOCR). We believe that diverse perspectives are essential to creating inclusive and equitable designs, and we are committed to building a team that reflects the communities we serve.  Your lived experience and unique insights are valuable and will be considered an asset to our team.  We understand that traditional pathways to design roles may not always be accessible, and considere a range of experiences and skill sets. <span ref={passionApply}>If you are passionate about design for social justice, we encourage you to apply, even if you don&apos;t meet every listed qualification.</span></p>
            <p className='sub-text-container'>Please write to <span ref={emailID} className='underline'>ambedkarreadingcircle.bangalore@gmail.com</span> with a cover letter (200-400 words) and subject line &quot;UI/UX Designer Application - ARC Dramas of Discrimination.&quot;</p>
          </div>
        </div>
    </div>
  )
}

export default Home
